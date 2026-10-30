import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { ContactForm } from "@/components/ContactForm";
import { HeroSquares } from "@/components/HeroSquares";
import { HubMockup, StudioMockup } from "@/components/WorkMockups";
import { nav, site } from "@/lib/site";

const pains = [
  {
    title: "Your subscriptions keep going up",
    body: "A CRM, a scheduling app, a project tool and a few add-ons. Each one went up in price this year, and none of them share data.",
  },
  {
    title: "There's a system nobody wants to touch",
    body: "Maybe it's an Access database, an old server in the back office, or software the vendor stopped supporting. It works, but only one person really knows how.",
  },
  {
    title: "Someone spends their week re-typing",
    body: "An order comes in by email, gets keyed into the CRM, then into QuickBooks, then into the spreadsheet for Monday's report.",
  },
];

const services = [
  {
    tag: "Advise",
    title: "Figure out what you need",
    body: "We spend time with your team, look at every tool you pay for, and write up what we'd keep, replace or connect. Sometimes the answer is that you're in good shape.",
    points: ["A written plan that's yours, whether or not we build it", "Costs for each option, side by side", "Off-the-shelf recommendations too"],
  },
  {
    tag: "Replace",
    title: "Get off the old system",
    body: "We move you from aging software, or a pile of overlapping subscriptions, onto one system your team will actually use. All of your data comes with you.",
    points: ["Data checked record by record before cutover", "No per-user fees as you hire", "You own the code and the data"],
  },
  {
    tag: "Build",
    title: "Custom tools and AI agents",
    body: "Customer portals, quoting tools, dispatch boards and dashboards, plus AI agents that pick up the repetitive work.",
    points: ["Works with QuickBooks, your CRM and the tools you keep", "Your team trained before we hand it over", "Support after launch if you want it"],
  },
];

// One example flow per target industry: what triggers it, what the agent does, what's left for a person.
const agents = [
  {
    industry: "Field services",
    title: "Job closed, invoice sent",
    when: "A tech marks the job done on their phone.",
    agent: "Builds the invoice from the job sheet, emails it to the customer and records it in QuickBooks.",
    team: "Reviews anything over a set amount.",
  },
  {
    industry: "Manufacturing",
    title: "Emailed PO to production order",
    when: "A customer emails a purchase order as a PDF.",
    agent: "Reads it, checks stock, creates the order and flags any line it can't match.",
    team: "Sorts out the flagged lines.",
  },
  {
    industry: "Service businesses",
    title: "Quote follow-up",
    when: "A quote has gone five days without a reply.",
    agent: "Writes a follow-up based on the client's history and sends it, or holds it for approval.",
    team: "Takes the call when the client replies.",
  },
  {
    industry: "Fitness studios",
    title: "Monday numbers",
    when: "Every Monday at 7am.",
    agent: "Pulls attendance, sales and campaign results from each location into one summary.",
    team: "Decides what to change this week.",
  },
];

const industries = [
  {
    name: "Manufacturing",
    pain: "Orders arrive by email, inventory lives in a spreadsheet, and the shop floor hears about changes last.",
    builds: "Order and inventory tracking, production scheduling, quoting.",
  },
  {
    name: "Field services",
    pain: "Jobs get booked over the phone, techs fill out paper sheets, and the invoice goes out a week later.",
    builds: "Dispatch, mobile job sheets, invoicing from the field.",
  },
  {
    name: "Service businesses",
    pain: "Client details are in the CRM, hours are in a timesheet app, and billing happens in QuickBooks.",
    builds: "Client portals, time and project tracking, quote to invoice.",
  },
  {
    name: "Fitness studios",
    pain: "The booking app runs classes, but staff tasks, marketing and reporting across locations live in spreadsheets.",
    builds: "Studio operations, campaign planning, multi-location reporting.",
  },
];

const work = [
  {
    name: "Studio operations hub",
    Mockup: StudioMockup,
    sector: "Fitness studio",
    detail: "Two locations",
    body: "A boutique studio was running two locations out of Asana. We built them one hub for projects, marketing and staff, and brought their Asana history across.",
    points: [
      "Projects and tasks by studio and team",
      "Campaign calendar with content approvals",
      "Staff can update their work from ChatGPT or Claude",
    ],
  },
  {
    name: "Alpha Hub",
    Mockup: HubMockup,
    sector: "Professional services",
    detail: "Our own business",
    body: "We built our own system to run ATP, from the first call to the paid invoice. It's the same approach we take with clients.",
    points: [
      "Lead tracking, with AI-drafted research before every call",
      "Quotes clients accept online, which turn into projects",
      "Invoices built from completed work, with automatic reminders",
    ],
  },
];

const team = [
  {
    name: "Brandon Saltzman",
    role: "Co-founder & CEO",
    photo: "/team/brandon-saltzman.jpg",
    bio: ["Brandon has helped 100+ small and mid-sized businesses in logistics, manufacturing, field service and e-commerce run more efficiently with custom software, starting at Method CRM before it went mainstream. There, Brandon built AI tooling that made internal teams measurably more efficient. Brandon has also worked with boutique fitness studios, from revenue operations to the systems they run on."],
  },
  {
    name: "Matthew Green",
    role: "Co-founder & CTO",
    photo: "/team/matthew-green.jpg",
    bio: [
      "Matthew is an AI engineer at General Motors and the founder of Chasqui, where he builds AI-powered products and intelligent agents. At Alpha Technology Partners, Matthew leads technology strategy and development, from system architecture and custom software to AI integrations and automation. He focuses on practical, scalable solutions that help businesses cut manual work and get more out of their technology.",
    ],
  },
];

const steps = [
  {
    n: "01",
    title: "Audit",
    time: "2 weeks",
    body: "We meet your team, see how work moves through the business, and list every tool and what it costs.",
    out: "A written report with what we'd change, and in what order.",
  },
  {
    n: "02",
    title: "Plan",
    time: "1 week",
    body: "We agree on exactly what the first version includes, screen by screen.",
    out: "A fixed price and a timeline.",
  },
  {
    n: "03",
    title: "Build",
    time: "6–12 weeks",
    body: "We release working pieces every two weeks so your team can try them and tell us what's off.",
    out: "A demo every two weeks and a test version to try.",
  },
  {
    n: "04",
    title: "Switch over",
    time: "1–2 weeks",
    body: "We move your data, run the old and new systems side by side for a short while, and train everyone.",
    out: "The code, the documentation and admin access.",
  },
];

const compare = [
  { row: "Cost as you grow", saas: "Goes up with every user and tier", custom: "Stays the same as you add people" },
  { row: "Fit with your process", saas: "You adjust how you work to suit it", custom: "Built around how you already work" },
  { row: "Your data", saas: "Stored in their system", custom: "Stored in your account" },
  { row: "Connecting tools", saas: "Zapier chains and copy-paste", custom: "One system, or direct connections" },
  { row: "Leaving", saas: "Contracts and export limits", custom: "You own the code, so nothing to cancel" },
];

const proof = [
  { value: "100%", label: "of the code and data is yours" },
  { value: "Fixed", label: "price, agreed before we build" },
  { value: "2 wks", label: "between working releases" },
  { value: "0", label: "per-seat licence fees" },
];

const faqs = [
  {
    q: "Who do you work with?",
    a: "Mostly small and mid-sized businesses in Canada and the US. We've done the most work in manufacturing, field services, service businesses and fitness studios, but the problem matters more to us than the industry.",
  },
  {
    q: "Will you tell us if we don't need custom software?",
    a: "Yes. Plenty of audits end with us recommending a better setup of tools you already have. You'll know before you spend anything on a build.",
  },
  {
    q: "Isn't custom software more expensive than SaaS?",
    a: "It costs more upfront. Over three to five years it often costs less, because you're not paying per user or for features nobody uses. We'll run the numbers for your business during the audit.",
  },
  {
    q: "What happens to our existing data?",
    a: "All of it comes with you. We do test runs first, check the totals with you, and keep your old system running until you're comfortable switching.",
  },
  {
    q: "Do we need developers on staff?",
    a: "No. We host and maintain everything and show your team how to manage the day-to-day settings. If you hire developers later, the code is documented and uses common tools.",
  },
  {
    q: "What if we only need one small tool?",
    a: "That's a good place to start. A lot of our work begins with one tool and grows once it's earned its keep.",
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
          <HeroSquares />
          <div className="container hero-inner">
            <h1 className="display">
              <span className="nowrap">Software that fits<Dot /></span>
              <span className="hero-accent">
                <span className="nowrap">Built for you<Dot /></span> <span className="nowrap">Owned by you<Dot /></span>
              </span>
            </h1>
            <p className="lede">
              We help small and mid-sized businesses across North America understand their options, then build the
              tools that fit how they actually work.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#contact">
                Book a free workflow audit
              </a>
              <a className="text-link" href="#work">
                See what we&rsquo;ve built <span aria-hidden>&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="label">The problem</p>
              <h2 className="h2">Where we usually come in</h2>
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
              <h2 className="h2">Advice first, then the build</h2>
              <p className="lede-s">
                Every project starts with a conversation about how your business runs today. From there, it&rsquo;s
                usually some mix of these three.
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

        {/* Agentic workflows */}
        <section className="section" id="agents">
          <div className="container">
            <div className="section-head">
              <p className="label">AI agents</p>
              <h2 className="h2">Grow the business without growing the admin team</h2>
              <p className="lede-s">
                A lot of what fills your team&rsquo;s day follows the same steps every time. An AI agent can take
                those steps for them, so your people spend their time on customers and sales instead of paperwork.
                Here&rsquo;s what that looks like in practice.
              </p>
            </div>
            <div className="grid-2">
              {agents.map((a) => (
                <article className="card card-service" key={a.title}>
                  <span className="tag">{a.industry}</span>
                  <h3 className="h3">{a.title}</h3>
                  <dl className="flow">
                    <div>
                      <dt className="label">When</dt>
                      <dd>{a.when}</dd>
                    </div>
                    <div>
                      <dt className="label">The agent</dt>
                      <dd>{a.agent}</dd>
                    </div>
                    <div>
                      <dt className="label">Your team</dt>
                      <dd>{a.team}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
            <p className="muted more-note">
              We run agents like these in our own business: ours draft the research on every lead before a sales
              call and send late-invoice reminders automatically. You decide what an agent can do by itself, and anything involving money
              or a customer can wait for someone on your team to approve it.
            </p>
          </div>
        </section>

        {/* Industries */}
        <section className="section section-surface" id="industries">
          <div className="container">
            <div className="section-head">
              <p className="label">Industries</p>
              <h2 className="h2">Who we work with</h2>
              <p className="lede-s">
                Small and mid-sized businesses across Canada and the US. These are the four industries where
                we&rsquo;ve done the most work.
              </p>
            </div>
            <div className="grid-4">
              {industries.map((i) => (
                <article className="card" key={i.name}>
                  <h3 className="h3">{i.name}</h3>
                  <p className="muted">{i.pain}</p>
                  <p className="industry-builds">
                    <span className="label">What we build</span>
                    {i.builds}
                  </p>
                </article>
              ))}
            </div>
            <p className="muted more-note">
              In a different industry? If your team spends hours working around its software, it&rsquo;s worth a
              call.
            </p>
          </div>
        </section>

        {/* Our work */}
        <section className="section" id="work">
          <div className="container">
            <div className="section-head">
              <p className="label">Our work</p>
              <h2 className="h2">In use every day</h2>
              <p className="lede-s">
                One system we built for a client, and one we run our own company on.
              </p>
            </div>
            <div className="work-list">
              {work.map(({ Mockup, ...w }) => (
                <article className="work-item" key={w.name}>
                  <Mockup />
                  <div className="work-copy">
                    <div className="build-meta">
                      <span className="tag">{w.sector}</span>
                      <span className="tag tag-quiet">{w.detail}</span>
                    </div>
                    <h3 className="h3">{w.name}</h3>
                    <p className="muted">{w.body}</p>
                    <ul className="ticks">
                      {w.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <p className="muted more-note small">Screens are illustrative. Client names and figures are changed.</p>
          </div>
        </section>

        {/* About */}
        <section className="section section-surface" id="about">
          <div className="container">
            <div className="section-head">
              <p className="label">About us</p>
              <h2 className="h2">You work with the people who build it</h2>
              <p className="lede-s">
                No account managers or hand-offs. The founders run your audit, plan your build and stay with you
                after launch.
              </p>
            </div>
            <div className="grid-2">
              {team.map((t) => (
                <article className="card team-card" key={t.name}>
                  {t.photo ? (
                    <img className="team-photo" src={t.photo} alt={t.name} />
                  ) : (
                    <div className="team-photo team-photo-empty" aria-hidden>
                      {t.name.split(" ").map((w) => w[0]).join("")}
                    </div>
                  )}
                  <div className="team-body">
                    <h3 className="h3">{t.name}</h3>
                    <p className="label">{t.role}</p>
                    {t.bio.map((para) => (
                      <p className="muted" key={para.slice(0, 24)}>
                        {para}
                      </p>
                    ))}
                  </div>
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
              <h2 className="h2">How a project runs</h2>
              <p className="lede-s">
                Most first projects take <span className="data-inline">2–4 months</span> from the first meeting to
                launch. You&rsquo;ll be using parts of it within the first few weeks.
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
              <h2 className="h2">Off-the-shelf or custom?</h2>
              <p className="lede-s">
                Off-the-shelf software is the right call for a lot of businesses, especially early on. It gets
                harder to justify once you&rsquo;re paying for dozens of seats and still working around it.
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
              <h2 className="h2 on-dark">Book a free 30-minute call</h2>
              <p className="on-dark-muted">
                Tell us what tools you&rsquo;re paying for and where your team loses time. We&rsquo;ll tell you what
                we&rsquo;d do about it, even if that&rsquo;s nothing.
              </p>
              <ul className="cta-list">
                <li>No pitch deck</li>
                <li>No commitment</li>
                <li>Advice you can use whether or not you hire us</li>
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
            <a href={`mailto:${site.supportEmail}`}>Tech support: {site.supportEmail}</a>
          </nav>
        </div>
        <div className="container footer-legal small muted">
          © {new Date().getFullYear()} {site.name}
        </div>
      </footer>
    </>
  );
}
