/*
 * Illustrative screens of past builds, drawn in HTML so they stay sharp and follow the theme.
 * Client details are anonymised: no business names, people or real figures.
 */

function Frame({ path, label, children }: { path: string; label: string; children: React.ReactNode }) {
  return (
    <div className="mk" role="img" aria-label={label}>
      <div className="mk-bar" aria-hidden>
        <span className="mk-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="mk-url">{path}</span>
      </div>
      <div className="mk-app" aria-hidden>
        {children}
      </div>
    </div>
  );
}

function Side({ title, items, active, children }: {
  title: string;
  items: string[];
  active: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mk-side">
      <div className="mk-brand">
        <span className="mk-logo" />
        {title}
      </div>
      <ul className="mk-nav">
        {items.map((i) => (
          <li key={i} className={i === active ? "is-active" : undefined}>
            {i}
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}

const week = [
  { day: "Mon", posts: [{ t: "Class launch reel", s: "approved" }] },
  { day: "Tue", posts: [{ t: "Member spotlight", s: "review" }] },
  { day: "Wed", posts: [] },
  { day: "Thu", posts: [{ t: "Spring offer email", s: "approved" }, { t: "Story: new times", s: "draft" }] },
  { day: "Fri", posts: [{ t: "Weekend schedule", s: "draft" }] },
];

const statusLabel: Record<string, string> = { approved: "Approved", review: "In review", draft: "Draft" };

export function StudioMockup() {
  return (
    <Frame
      path="studio-hub / campaigns / spring-membership"
      label="Mock-up of the studio operations hub: a campaign content calendar with approval statuses, and a chat where staff update work in plain language."
    >
      <Side title="Studio Hub" items={["Overview", "Projects", "Campaigns", "Team"]} active="Campaigns">
        <p className="mk-side-label">Studios</p>
        <ul className="mk-nav mk-nav-quiet">
          <li>
            Location A <span className="mk-count">12</span>
          </li>
          <li>
            Location B <span className="mk-count">8</span>
          </li>
        </ul>
      </Side>
      <div className="mk-main">
        <div className="mk-head">
          <div>
            <p className="mk-kicker">Campaign · Both studios</p>
            <p className="mk-title">Spring membership push</p>
          </div>
          <span className="mk-pill mk-pill-ok">On track</span>
        </div>
        <div className="mk-week">
          {week.map((d) => (
            <div className="mk-day" key={d.day}>
              <span className="mk-day-name">{d.day}</span>
              {d.posts.map((p) => (
                <span className={`mk-post mk-${p.s}`} key={p.t}>
                  {p.t}
                  <em>{statusLabel[p.s]}</em>
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="mk-chat">
          <p className="mk-msg mk-msg-user">Move the weekend schedule post to Thursday and send it for approval.</p>
          <p className="mk-msg mk-msg-ai">
            Done. Moved to Thursday and assigned to the studio manager for review.
            <span className="mk-chip">Task updated</span>
          </p>
        </div>
      </div>
    </Frame>
  );
}

type Deal = { who: string; meta: string; val: string; ai?: boolean };

const pipeline: { stage: string; cards: Deal[] }[] = [
  {
    stage: "New lead",
    cards: [{ who: "Fabricator", meta: "45 staff", val: "Audit" }, { who: "Landscaper", meta: "3 crews", val: "Audit" }],
  },
  { stage: "Call prep", cards: [{ who: "Dental group", meta: "4 clinics", val: "Brief ready", ai: true }] },
  { stage: "Quote sent", cards: [{ who: "HVAC firm", meta: "Viewed 2×", val: "$24,500" }] },
  { stage: "Won", cards: [{ who: "Print shop", meta: "Project created", val: "$18,000" }] },
];

const invoices = [
  { no: "INV-0142", what: "Sprint 3 delivered", amt: "$6,000", s: "Paid", ok: true },
  { no: "INV-0143", what: "Sprint 4 delivered", amt: "$6,000", s: "Reminder sent", ok: false },
];

export function HubMockup() {
  return (
    <Frame
      path="alpha-hub / pipeline"
      label="Mock-up of Alpha Hub: a sales pipeline from lead to won, an AI-drafted call brief, and invoices with automatic reminders."
    >
      <Side title="Alpha Hub" items={["Pipeline", "Quotes", "Projects", "Invoices"]} active="Pipeline" />
      <div className="mk-main">
        <div className="mk-head">
          <div>
            <p className="mk-kicker">Pipeline · This quarter</p>
            <p className="mk-title">6 open opportunities</p>
          </div>
          <span className="mk-pill">+ New lead</span>
        </div>
        <div className="mk-board">
          {pipeline.map((col) => (
            <div className="mk-col" key={col.stage}>
              <span className="mk-day-name">
                {col.stage} <span className="mk-count">{col.cards.length}</span>
              </span>
              {col.cards.map((c) => (
                <span className={`mk-card${c.ai ? " mk-card-ai" : ""}`} key={c.who}>
                  <b>{c.who}</b>
                  <span>{c.meta}</span>
                  <em>{c.val}</em>
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="mk-brief">
          <p className="mk-kicker">AI call brief · Dental group</p>
          <ul>
            <li>Booking, billing and recalls run in three separate tools</li>
            <li>Front desk re-keys patient details twice a day</li>
            <li>Ask: which clinic has the longest recall backlog?</li>
          </ul>
        </div>
        <div className="mk-table">
          {invoices.map((i) => (
            <div className="mk-row" key={i.no}>
              <span className="mk-mono">{i.no}</span>
              <span>{i.what}</span>
              <span className="mk-mono">{i.amt}</span>
              <span className={`mk-pill${i.ok ? " mk-pill-ok" : " mk-pill-warn"}`}>{i.s}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}
