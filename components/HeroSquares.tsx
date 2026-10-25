"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Square = { x: number; y: number; size: number; o: number; on: boolean };
type Cell = { x: number; y: number; size: number };

const SLOTS = 6;
const FADE_MS = 3000; // matches the CSS transition
const rand = (min: number, max: number) => min + Math.random() * (max - min);

/*
 * Gold cells that slowly fade in and out at random spots on the hero grid.
 * Cells are measured from the same values the CSS grid uses (cell = headline font size,
 * grid centred horizontally, starting at the top of the section) and never sit behind text.
 */
export function HeroSquares() {
  const ref = useRef<HTMLDivElement>(null);
  const cells = useRef<Cell[]>([]);
  const [squares, setSquares] = useState<Square[]>([]);

  useEffect(() => {
    const root = ref.current;
    const section = root?.parentElement;
    if (!root || !section) return;

    const measure = () => {
      const h1 = section.querySelector("h1");
      if (!h1) return;
      const size = parseFloat(getComputedStyle(h1).fontSize);
      const w = section.clientWidth;
      const h = section.clientHeight;
      const box = section.getBoundingClientRect();
      const text = Array.from(section.querySelectorAll(".hero-inner > *")).map((el) => {
        const r = el.getBoundingClientRect();
        return { l: r.left - box.left - 8, r: r.right - box.left + 8, t: r.top - box.top - 8, b: r.bottom - box.top + 8 };
      });
      const originX = w / 2 - size / 2;
      const next: Cell[] = [];
      for (let k = Math.ceil(-originX / size); originX + (k + 1) * size <= w; k++) {
        for (let m = 0; (m + 1) * size <= h; m++) {
          const x = originX + k * size;
          const y = m * size;
          const overText = text.some((t) => x < t.r && x + size > t.l && y < t.b && y + size > t.t);
          // Stay where the grid's fade-out mask still lets the cell show.
          const dx = (x + size / 2 - w / 2) / (w * 0.6);
          const dy = (y + size / 2 - h * 0.4) / (h * 0.75);
          if (!overText && dx * dx + dy * dy < 0.6) next.push({ x, y, size });
        }
      }
      cells.current = next;
    };

    const pick = (taken: Square[]): Cell | undefined => {
      const free = cells.current.filter((c) => !taken.some((s) => s.on && s.x === c.x && s.y === c.y));
      return free[Math.floor(Math.random() * free.length)];
    };

    measure();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reduced motion: a fixed set of squares, no animation.
    if (reduced) {
      const fixed: Square[] = [];
      for (let i = 0; i < SLOTS; i++) {
        const c = pick(fixed);
        if (c) fixed.push({ ...c, o: rand(0.12, 0.22), on: true });
      }
      setSquares(fixed);
      return;
    }

    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => timers.push(window.setTimeout(fn, ms));
    setSquares(Array.from({ length: SLOTS }, () => ({ x: 0, y: 0, size: 0, o: 0, on: false })));

    const cycle = (i: number) => {
      setSquares((prev) => {
        const c = pick(prev);
        if (!c) return prev;
        const copy = [...prev];
        copy[i] = { ...c, o: rand(0.12, 0.24), on: true };
        return copy;
      });
      later(() => {
        setSquares((prev) => prev.map((s, j) => (j === i ? { ...s, on: false } : s)));
        later(() => cycle(i), FADE_MS + rand(500, 3000));
      }, FADE_MS + rand(2000, 5000));
    };
    for (let i = 0; i < SLOTS; i++) later(() => cycle(i), rand(0, 7000));

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        measure();
        // Old positions no longer match the grid; hide them until each slot's next cycle.
        setSquares((prev) => prev.map((s) => ({ ...s, on: false })));
      }, 150);
    };
    window.addEventListener("resize", onResize);

    return () => {
      timers.forEach(window.clearTimeout);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="hero-squares" aria-hidden ref={ref}>
      {squares.map((s, i) => (
        <span
          key={i}
          className={s.on ? "is-on" : undefined}
          style={{ left: s.x + 1, top: s.y + 1, width: s.size - 1, height: s.size - 1, "--o": s.o } as CSSProperties}
        />
      ))}
    </div>
  );
}
