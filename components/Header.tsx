"use client";

import { useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" aria-label="Alphas Consulting Group, home" onClick={() => setOpen(false)}>
          <Logo />
        </a>
        <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="btn btn-primary btn-sm" href="#contact" onClick={() => setOpen(false)}>
            Book a free audit
          </a>
        </nav>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
