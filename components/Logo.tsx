/* Shows the reversed lockup in dark mode (see .logo rules in globals.css). */
export function Logo() {
  return (
    <span className="logo">
      <img className="logo-light" src="/brand/acg-lockup.svg" alt="Alphas Consulting Group" width={172} height={56} />
      <img className="logo-dark" src="/brand/acg-lockup-reversed.svg" alt="" aria-hidden width={172} height={56} />
    </span>
  );
}
