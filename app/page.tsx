import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { ContactForm } from "@/components/ContactForm";
import { nav, site } from "@/lib/site";

const pains = [
  {
    title: "You're paying for SaaS you've outgrown",
    body: "Per-seat prices go up every renewal. You use a fraction of the features, and the one you actually need sits on the enterprise tier.",
  },
  {
    title: "Your core system is a liability",
    body: "An Access database, an on-prem server, or a vendor that stopped shipping updates. One person knows how it works, and everyone hopes they don't leave.",
  },
  {
    title: "Your team is the integration",
    body: "Client details get copied between the CRM, the billing tool and a spreadsheet by hand. Every copy is a chance to get it wrong.",
  },
];

const services = [
  {
    tag: "Modernize",
    title: "Move off legacy systems",
    body: "We rebuild aging desktop apps, databases and on-prem tools as secure web software, and move every record across without losing history.",
    points: ["Data migration with a verified record count", "Runs in the browser, on any device", "Hosted, backed up and monitored"],
  },
  {
    tag: "Replace",
    title: "Swap SaaS sprawl for software you own",
    body: "When a stack of subscriptions is doing one job badly, we replace it with one tool built for how you work, with no per-seat fees.",
    points: ["Cost that stays flat as you hire", "Your code, your data, your hosting account", "Keeps the SaaS that's genuinely worth paying for"],
  },
  {
    tag: "Build",
    title: "Custom tools and AI automation",
    body: "Client portals, internal dashboards, quoting tools and AI assistants that read your documents, draft the follow-up and fill in the form.",
    points: ["Connects to the systems you keep", "AI where it saves hours, not for show", "Your team trained before we hand over"],
  },
];

const steps = [
  {
    n: "01",
    title: "Audit",
    time: "2 weeks",
    body: "We sit with your team, map every tool and hand-off, and price out what each one costs you in fees and hours.",
    out: "A written report: what to replace, what to keep, what to fix first.",
  },
  {
    n: "02",
    title: "Plan",
    time: "1 week",
    body: "We scope the first build down to the screens and data, so you know exactly what you're getting.",
    out: "A fixed-price proposal with a timeline. No hourly surprises.",
  },
  {
    n: "03",
    title: "Build",
    time: "6–12 weeks",
    body: "We ship working software every two weeks. Your team uses it early, and we adjust while changes are cheap.",
    out: "A demo every sprint and a live staging site you can click through.",
  },
  {
    n: "04",
    title: "Switch over",
    time: "1–2 weeks",
    body: "We migrate your data, run old and new side by side, train your team, then turn the old system off.",
    out: "The code, docs and admin access. Optional support after launch.",
  },
];

const compare = [
  { row: "Cost as you grow", saas: "Rises with every seat and tier", custom: "Flat. Add people for free" },
  { row: "Fit with your process", saas: "You change how you work to fit it", custom: "Built around how you already work" },
  { row: "Your data", saas: "In their database, export if allowed", custom: "In your database, on your account" },
  { row: "Connecting tools", saas: "Zapier chains and manual copy-paste", custom: "One system, or direct integrations" },
  { row: "Leaving", saas: "Price hikes and lock-in", custom: "You own the code. Nothing to leave" },
];

const proof = [
  { value: "100%", label: "of the code and data is yours" },
  { value: "Fixed", label: "price, agreed before we build" },
  { value: "2 wks", label: "between working releases" },
  { value: "0", label: "per-seat licence fees" },
];

const faqs = [
  {
    q: "Isn't custom software more expensive than SaaS?",
    a: "Upfront, yes. Over three to five years it's often cheaper, because there are no per-seat fees and no paying for features you don't use. The audit puts real numbers on this for your business before you commit to anything, and sometimes the answer is to keep the SaaS.",
  },
  {
    q: "What happens to our existing data?",
    a: "We move all of it. We map every field from the old system, run test migrations, and check record counts and totals with you before the switch. Old and new run side by side until you're confident.",
  },
  {
    q: "Do we need developers on staff?",
    a: "No. We build, host and look after the software, and train your team to run the admin side. If you hire developers later, they get clean, documented code in a standard stack.",
  },
  {
    q: "How long does a project take?",
    a: "Most first builds go live in 2–4 months, including the audit. You see working software within the first few weeks, not at the end.",
  },
  {
    q: "Where does AI fit in?",
    a: "Where it saves real hours: reading inbound documents, drafting replies, summarising calls, filling in forms. We point it at specific, repetitive tasks and keep a person in the loop for anything that matters.",
  },
  {
    q: "What if we only need one small tool?",
    a: "That's a good place to start. Plenty of engagements begin with a single portal or automation, then grow once the first one pays for itself.",
  },
];

// Gold square full stop, echoing the logo. Screen readers still get a period.
function Dot() {
  return (
    <span className="dot">
      <span className="sr-only">.</span>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        {/* Hero */}
        <section className="hero" id="top">
          <div className="hero-squares" aria-hidden>
              <span style={{ "--x": -13, "--y": 3, "--o": 0.22 } as React.CSSProperties} />
              <span style={{ "--x": -11, "--y": 8, "--o": 0.14 } as React.CSSProperties} />
              <span style={{ "--x": -14, "--y": 10, "--o": 0.1 } as React.CSSProperties} />
              <span style={{ "--x": 11, "--y": 2, "--o": 0.2 } as React.CSSProperties} />
              <span style={{ "--x": 13, "--y": 6, "--o": 0.12 } as React.CSSProperties} />
              <span style={{ "--x": 10, "--y": 10, "--o": 0.16 } as React.CSSProperties} />
              <span style={{ "--x": -9, "--y": 1, "--o": 0.1 } as React.CSSProperties} />
              <span style={{ "--x": 12, "--y": 12, "--o": 0.08 } as React.CSSProperties} />
          </div>
          <div className="container hero-inner">
            <h1 className="display">
              <span className="nowrap">Custom software<Dot /></span>
              <span className="hero-accent">
                <span className="nowrap">Built for you<Dot /></span> <span className="nowrap">Owned by you<Dot /></span>
              </span>
            </h1>
            <p className="lede">
              Replace legacy systems and the pile of SaaS subscriptions with one tool made for your team. Fixed
              price, and it&rsquo;s yours to keep.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#contact">
                Book a free workflow audit
              </a>
              <a className="text-link" href="#process">
                How it works <span aria-hidden>&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="label">The problem</p>
              <h2 className="h2">Most businesses don&rsquo;t have a software problem. They have five.</h2>
            </div>
            <div className="grid-3">
              {pains.map((p) => (
                <article className="card" key={p.title}>
                  <h3 className="h3">{p.title}</h3>
                  <p className="muted">{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section section-surface" id="services">
          <div className="container">
            <div className="section-head">
              <p className="label">What we do</p>
              <h2 className="h2">Three ways we fix it</h2>
              <p className="lede-s">
                Every engagement is one of these, or a mix. We start with what costs you the most.
              </p>
            </div>
            <div className="grid-3">
              {services.map((s) => (
                <article className="card card-service" key={s.title}>
                  <span className="tag">{s.tag}</span>
                  <h3 className="h3">{s.title}</h3>
                  <p className="muted">{s.body}</p>
                  <ul className="ticks">
                    {s.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section" id="process">
          <div className="container">
            <div className="section-head">
              <p className="label">How it works</p>
              <h2 className="h2">From audit to switch-over in four steps</h2>
              <p className="lede-s">
                Most first projects are live in <span className="data-inline">2–4 months</span>. You see working
                software within weeks, not at the end.
              </p>
            </div>
            <ol className="steps">
              {steps.map((s) => (
                <li className="step" key={s.n}>
                  <div className="step-top">
                    <span className="step-n data">{s.n}</span>
                    <span className="data muted">{s.time}</span>
                  </div>
                  <h3 className="h3">{s.title}</h3>
                  <p className="muted">{s.body}</p>
                  <p className="step-out">
                    <span className="label">You get</span>
                    {s.out}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Compare */}
        <section className="section section-surface" id="compare">
          <div className="container">
            <div className="section-head">
              <p className="label">SaaS vs custom</p>
              <h2 className="h2">Renting software made sense. Until it didn&rsquo;t.</h2>
              <p className="lede-s">
                Off-the-shelf tools are great for getting started. Past a certain size, you&rsquo;re paying more
                every year for something that fits you less.
              </p>
            </div>
            <div className="table-wrap">
              <table className="compare">
                <thead>
                  <tr>
                    <th scope="col"><span className="sr-only">Comparison</span></th>
                    <th scope="col">Off-the-shelf SaaS</th>
                    <th scope="col" className="col-us">Custom, built with ATP</th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((r) => (
                    <tr key={r.row}>
                      <th scope="row">{r.row}</th>
                      <td>{r.saas}</td>
                      <td className="col-us">{r.custom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <dl className="proof">
              {proof.map((p) => (
                <div key={p.label}>
                  <dt className="proof-value">{p.value}</dt>
                  <dd className="muted">{p.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container faq-grid">
            <div className="section-head">
              <p className="label">FAQ</p>
              <h2 className="h2">Questions we hear first</h2>
              <p className="lede-s">
                Something else on your mind? <a href={`mailto:${site.email}`}>Email us</a>.
              </p>
            </div>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p className="muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section className="cta-band" id="contact">
          <div className="container cta-grid">
            <div>
              <p className="label on-dark">Free workflow audit call</p>
              <h2 className="h2 on-dark">Find out what you could replace, and what it would save.</h2>
              <p className="on-dark-muted">
                A 30-minute call. Tell us which tools you pay for and where your team loses time. We&rsquo;ll tell
                you honestly whether custom software makes sense, and where we&rsquo;d start.
              </p>
              <ul className="cta-list">
                <li>No sales deck</li>
                <li>No obligation</li>
                <li>A straight answer, even if it&rsquo;s &ldquo;keep what you have&rdquo;</li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <Logo />
            <p className="muted small">{site.description}</p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </nav>
        </div>
        <div className="container footer-legal small muted">
          © {new Date().getFullYear()} {site.name}
        </div>
      </footer>
    </>
  );
}
