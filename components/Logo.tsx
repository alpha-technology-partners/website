/* The "a." mark plus a live-text wordmark. The mark swaps to the reversed file in dark mode (see .logo rules in globals.css). */
export function Logo() {
  return (
    <span className="logo">
      <img className="logo-light" src="/brand/atp-mark.svg" alt="" width={40} height={40} />
      <img className="logo-dark" src="/brand/atp-mark-reversed.svg" alt="" aria-hidden width={40} height={40} />
      <span className="logo-text">
        <span className="logo-name">Alpha</span>
        <span className="logo-sub">Technology Partners</span>
      </span>
    </span>
  );
}
