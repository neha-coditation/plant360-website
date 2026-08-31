import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Close,
  CheckmarkFilled,
  UserFollow,
  Locked,
  TaskView,
  Security,
  Renew,
  ToolKit,
  DataBase,
  Rule,
  Model,
  type CarbonIconType,
} from "@carbon/icons-react";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { SectionHeading, RelatedLinks } from "@/components/page/blocks";
import { Faq } from "@/components/page/Faq";
import { CtaButton } from "@/components/ui/CtaButton";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import styles from "./operational-efficiency.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Operational Efficiency | Plant360.AI",
  description:
    "Permit-to-work, Management of Change, HAZOP, and turnaround planning are still assembled by hand from scattered drawings. Plant360 unifies the full stack, from digitized drawings to a live asset graph to AI agents, to automate that document-heavy work end to end.",
  path: "/solutions/operational-efficiency",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Solutions", path: "/solutions" },
  { name: "Operational Efficiency", path: "/solutions/operational-efficiency" },
];

const stackRows: { kind: string; name: string; note: string; accent?: boolean }[] = [
  { kind: "01 · Digitize", name: "Convert", note: "CAD, DWG, and PDF drawings & datasheets" },
  { kind: "02 · Foundation", name: "UniGraph", note: "Live asset graph and system of record" },
  { kind: "03 · Build", name: "AI360", note: "Compose agents on your graph in days" },
  { kind: "04 · Apply", name: "AI agents & apps", note: "ChangeIQ, permits, HAZOP prep, asset lookup", accent: true },
];

const heroStats = [
  { num: "50%+", label: "Operational efficiency, end to end" },
  { num: "40%+", label: "Less Management of Change prep time" },
  { num: "80%", label: "Less time hunting for documents" },
  { num: "Days", label: "To deploy a new workflow agent" },
];

const problems = [
  {
    n: "01",
    text: "Control of work, permit-to-work, turnaround, and isolation planning all gather the same scattered information by hand, again and again.",
  },
  {
    n: "02",
    text: "Master drawings drift out of date the moment the plant changes, so every workflow starts from a source no one fully trusts.",
  },
  {
    n: "03",
    text: "Reviews and approvals move through email and spreadsheets, adding weeks of chase time to every change.",
  },
  {
    n: "04",
    text: "As experienced staff retire, the workflows they hold in their heads become both a cost and a safety risk.",
  },
];

const approachSteps = [
  {
    n: "01",
    kind: "Digitize",
    title: "Convert",
    text: "CAD, DWG, and even scanned PDF drawings and datasheets become structured, audit-ready data.",
  },
  {
    n: "02",
    kind: "Structure",
    title: "UniGraph",
    text: "Every tag, asset, and document is connected into one living, queryable asset graph, kept in sync.",
  },
  {
    n: "03",
    kind: "Build",
    title: "AI360",
    text: "A drag-and-drop platform to build and deploy industrial agents on your graph in days, not months.",
  },
  {
    n: "04",
    kind: "Apply",
    title: "Agents & apps",
    text: "ChangeIQ plus agents for permits, HAZOP, and asset lookups, live on the plant.",
    dark: true,
  },
];

const deepDives = [
  {
    n: "01",
    tag: "ChangeIQ · MoC Agent",
    heading: "Management of Change",
    today:
      "Engineers assemble each change package by hand, tracking down every affected drawing, tag, and datasheet, then chase risk reviews and approvals through email while the master drawing quietly drifts out of date.",
    does: [
      "Pulls every affected drawing, tag, and datasheet from the live graph and assembles the package automatically.",
      "Generates the new master revision from tablet field markup, with no manual CAD work.",
      "Routes risk reviews and approvals with full context and a rev-to-rev change log, then syncs to SmartPlant and Aveva.",
    ],
    outcome: "40%+ less Management of Change prep time",
    mock: {
      head: "Master drawing · rev-to-rev",
      tag: "P&ID-12-104",
      rows: [
        { label: "Added PSV-104A-2, set 285 psig", status: "Added" },
        { label: "Line 6\"-P-104 spec break moved", status: "Changed" },
        { label: "Removed legacy bypass loop", status: "Removed" },
      ],
      foot: "Audit trail complete · 7 events logged",
    },
  },
  {
    n: "02",
    tag: "Control of Work Agent",
    heading: "Permit-to-work and control of work",
    reversed: true,
    today:
      "Permits and isolations are built from paper line-ups and drawings that may not reflect the plant as it stands. A wrong isolation point means rework at best and a safety incident at worst.",
    does: [
      "Grounds every permit in live, verified plant data. Line-ups, isolation points, and equipment states come straight from the asset graph.",
      "Flags conflicting permits and open isolations on the same equipment before work is authorized.",
      "Prepares the permit pack so planners spend their time on the work, not on collecting documents.",
    ],
    outcome: "Fewer permit errors, less rework",
    mock: {
      head: "Permit-to-work check",
      tag: "PTW-8841",
      rows: [
        { label: "Isolation points verified against graph", status: "Confirmed" },
        { label: "Conflicting permit on Line 6\"-P-104", status: "Flagged" },
        { label: "Equipment state matches live data", status: "Confirmed" },
      ],
      foot: "Grounded in live asset data · 0 stale references",
    },
  },
  {
    n: "03",
    tag: "HAZOP Prep Agent",
    heading: "HAZOP, LOPA, and compliance prep",
    today:
      "A review cycle runs three to four months, and most of that is spent assembling and cross-checking P&IDs by hand rather than analyzing risk. The study is only as current as the drawings the team could find.",
    does: [
      "Reads your P&IDs and proposes nodes, deviations, and safeguards, grounded in the connected graph.",
      "Turns weeks of document preparation into a guided, data-backed review the team validates.",
      "Keeps every proposed node traceable back to the drawing and tag it came from.",
    ],
    outcome: "50%+ faster HAZOP prep",
    mock: {
      head: "Proposed HAZOP nodes",
      tag: "Draft for review",
      rows: [
        { label: "Node 1 · Feed line to reactor", status: "3 safeguards" },
        { label: "Node 2 · Reactor overpressure", status: "Review PSV" },
        { label: "Node 3 · Cooling water loss", status: "2 safeguards" },
      ],
      foot: "Generated from 4 connected P&IDs · 18 tags referenced",
    },
  },
  {
    n: "04",
    tag: "Asset Lookup Agent",
    heading: "Instant, grounded asset answers",
    reversed: true,
    today:
      "A single question about a valve, a line spec, or an equipment history can send an engineer through folders, drawings, and datasheets for the better part of a day.",
    does: [
      "Answers questions directly from the asset graph, with every fact cited to its source drawing and tag.",
      "Traces relationships across equipment, lines, and documents that no single file holds.",
      "Preserves institutional knowledge as a queryable resource, not a retiring engineer's memory.",
    ],
    outcome: "80% less time hunting for documents",
    mock: {
      head: "Ask the graph",
      tag: "Query",
      answer:
        "Line 6\"-P-104 is rated 285 psig at 120 °C, material A106 Gr. B. It is protected by PSV-104A-2, set at 285 psig.",
      cites: ["P&ID-12-104", "Line list rev C", "PSV datasheet"],
      foot: "Every answer is grounded and cited. Nothing invented.",
    },
  },
];

const moreAgents: { Icon: CarbonIconType; title: string; text: string; tag: string }[] = [
  {
    Icon: Renew,
    title: "Turnaround & isolation planning",
    text: "Plan turnarounds and equipment isolations from connected asset data instead of manual gathering.",
    tag: "Fewer manual workflows",
  },
  {
    Icon: ToolKit,
    title: "Maintenance & corrosion-loop mapping",
    text: "Smart maintenance scheduling and corrosion-loop mapping, with the document-heavy busywork handled for you.",
    tag: "Less busywork",
  },
  {
    Icon: DataBase,
    title: "EAM and CMMS data sync",
    text: "Keep EAM and CMMS in sync with the engineering source of truth. Equipment, tags, and hierarchies stay resolved automatically.",
    tag: "Zero manual reconciliation",
  },
  {
    Icon: Rule,
    title: "Master Tag Registry",
    text: "Maintain one authoritative tag registry across the plant, resolved and deduplicated from every source document.",
    tag: "One source of truth",
  },
  {
    Icon: Model,
    title: "Digital twin & simulator data",
    text: "Feed digital twin and operator-training initiatives with structured, connected asset data instead of hand-built models.",
    tag: "30%+ faster implementation",
  },
];

const trust: { Icon: CarbonIconType; title: string; text: string }[] = [
  {
    Icon: UserFollow,
    title: "Human in the loop",
    text: "Agents prepare and propose. Your engineers review and approve before anything is committed.",
  },
  {
    Icon: Locked,
    title: "Grounded and cited",
    text: "Outputs trace back to the source drawing, tag, and datasheet. No hallucinated plant data.",
  },
  {
    Icon: TaskView,
    title: "Complete audit trail",
    text: "Every change is logged end to end and rev to rev, giving auditors a defensible record.",
  },
  {
    Icon: Security,
    title: "Enterprise-grade & open",
    text: "ISO 27001 certified, vendor-neutral, and open by API. You own the data layer.",
  },
];

const outcomes = [
  { num: "50%+", label: "Operational efficiency gained end to end" },
  { num: "40%+", label: "Less Management of Change prep time" },
  { num: "80%", label: "Less time spent hunting for documents" },
  { num: "Days", label: "To deploy a new workflow agent" },
];

const relatedLinks = [
  { label: "AI360", href: "/platform/ai360", description: "Compose workflow agents in days, not months." },
  { label: "ChangeIQ", href: "/platform/changeiq", description: "Cut Management of Change prep by 40%+." },
  { label: "Use-cases", href: "/use-cases", description: "Six agents automating document-heavy work." },
];

const faqs = [
  {
    question: "How does AI improve plant operational efficiency?",
    answer:
      "By automating the document-heavy prep work, such as Management of Change, permit-to-work, and asset lookups, that consumes skilled engineers' time. Plant360 agents run on your asset graph, so they assemble packages and answer questions from verified data.",
  },
  {
    question: "Which workflows can Plant360 automate?",
    answer:
      "Document-heavy workflows across engineering, operations, and safety, including Management of Change, permit-to-work and control of work, turnaround and isolation planning, HAZOP and LOPA prep, EAM and CMMS sync, and asset data lookups.",
  },
  {
    question: "What does a document-heavy workflow cost us today?",
    answer:
      "A process engineer costs about $81 per hour, or more than $169K a year, and spends roughly 30% of the day finding and reconciling data, while a single HAZOP cycle runs three to four months. Automating that prep returns most of it.",
  },
  {
    question: "How much time can we save?",
    answer:
      "Plant360 targets 50%+ efficiency end to end, with ChangeIQ alone cutting Management of Change prep by more than 40% and engineers spending about 80% less time hunting for documents.",
  },
  {
    question: "Do automated workflows stay auditable?",
    answer:
      "Yes. Every agent output is routed for human review with a complete audit trail, so faster workflows remain fully defensible for safety and compliance.",
  },
];

export default function OperationalEfficiencyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero */}
      <Section tone="dark">
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          {breadcrumbs.map((c, i) => (
            <span key={c.path}>
              {i > 0 ? (
                <span className={styles.crumbSep} aria-hidden="true">
                  /
                </span>
              ) : null}
              {i < breadcrumbs.length - 1 ? (
                <Link href={c.path}>{c.name}</Link>
              ) : (
                <span aria-current="page">{c.name}</span>
              )}
            </span>
          ))}
        </nav>

        <div className={styles.hero}>
          <div data-reveal>
            <p className={styles.eyebrow}>Solutions · Operational efficiency</p>
            <h1 className={styles.title}>
              Your plant&rsquo;s lost capacity is <strong>trapped inside its documents.</strong>
            </h1>
            <p className={styles.lead}>
              Permit-to-work, Management of Change, HAZOP, turnaround planning: the workflows that run the plant are
              still assembled by hand from scattered drawings and datasheets. Plant360 unifies the full stack, from
              digitized drawings to a live asset graph to AI agents, to automate that document-heavy work end to
              end, returning more than 50% efficiency across engineering, operations, and safety.
            </p>
            <div className={styles.actions}>
              <CtaButton href="/contact" variant="primary">
                Book a demo
              </CtaButton>
              <Link href="#agents" className={styles.textLink}>
                See the agents
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className={styles.stack} data-reveal aria-hidden="true">
            <div className={styles.stackHead}>
              <span>The Plant360 platform, one connected stack</span>
              <span className={styles.stackStatus}>
                <span className={styles.dot} /> Live
              </span>
            </div>
            <div className={styles.stackBody}>
              {stackRows.map((r) => (
                <div
                  key={r.kind}
                  className={`${styles.stackRow} ${r.accent ? styles.stackRowAccent : ""}`}
                >
                  <div>
                    <p className={styles.stackKind}>{r.kind}</p>
                    <p className={styles.stackName}>{r.name}</p>
                  </div>
                  <span className={styles.stackNote}>{r.note}</span>
                </div>
              ))}
            </div>
            <div className={styles.stackFoot}>
              <span>Documents in.</span>
              <span className={styles.stackFootAccent}>
                50%+ efficiency out
                <ArrowRight size={14} aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>

        <div className={styles.heroStats} data-reveal data-reveal-stagger>
          {heroStats.map((s) => (
            <div key={s.label} className={styles.heroStat}>
              <p className={styles.heroStatNum}>{s.num}</p>
              <p className={styles.heroStatLabel}>{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The stakes */}
      <Section tone="light">
        <SectionHeading
          eyebrow="The stakes"
          title={
            <>
              Your most experienced engineers are spending their days on{" "}
              <strong>document logistics, not engineering.</strong>
            </>
          }
          lead="The plant runs on document-heavy workflows, and the same scattered information is gathered by hand for every permit, every change, and every study. The cost is measured in senior-engineer years, multi-month review cycles, and knowledge that walks out the door as experienced staff retire."
        />
        <div className={styles.stakesGrid}>
          <div data-reveal>
            <p className={styles.dayCaption}>Where a senior engineer&rsquo;s day goes</p>
            <div className={styles.dayBar}>
              <span className={styles.dayBarFill}>30%</span>
              <span className={styles.dayBarRest}>Engineering &amp; judgement work</span>
            </div>
            <div className={styles.dayLine}>
              <span className={styles.dayDot} />
              <span>
                Roughly 30% of every day goes to finding and reconciling data, at about $81 per hour, or more than
                $169K per engineer per year.
              </span>
            </div>
            <div className={styles.dayStatsRow}>
              <div>
                <div className={styles.dayStatNum}>3&ndash;4</div>
                <div className={styles.dayStatLabel}>
                  months for a single HAZOP review cycle, most of it spent assembling documents rather than
                  analyzing risk.
                </div>
              </div>
              <div>
                <div className={styles.dayStatNum}>$169K</div>
                <div className={styles.dayStatLabel}>
                  lost per engineer, per year, to manual data gathering that an agent can automate.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.probList} data-reveal data-reveal-stagger>
            {problems.map((p) => (
              <div key={p.n} className={styles.probRow}>
                <span className={styles.probNum}>{p.n}</span>
                <p className={styles.probText}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Root cause */}
      <Section tone="dark">
        <div className={styles.rootCause}>
          <div data-reveal>
            <p className={styles.eyebrow}>Why efficiency programs stall</p>
            <h2 className={styles.rootCauseHeading}>
              The bottleneck is not effort. It is that plant knowledge lives in{" "}
              <strong>documents, not data.</strong>
            </h2>
          </div>
          <div data-reveal>
            <p className={styles.rootCauseText}>
              Digitization tools leave you with drawings. Graph tools leave you with data no one maintains. AI
              pilots have nothing reliable to run on, so they stall before production. Efficiency does not come
              from another point tool. It comes from a single governed pipeline where documents become structured
              data, that data becomes a live asset graph, and agents act on the graph with full traceability.
            </p>
            <div className={styles.wrongList}>
              <span className={styles.wrongChip}>
                <Close size={16} aria-hidden="true" />
                Digitization only: still just drawings
              </span>
              <span className={styles.wrongChip}>
                <Close size={16} aria-hidden="true" />
                Graph only: quietly drifts stale
              </span>
              <span className={styles.wrongChip}>
                <Close size={16} aria-hidden="true" />
                AI pilot: stalls before production
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* The pipeline */}
      <Section tone="light">
        <SectionHeading
          eyebrow="From documents to agents"
          title={
            <>
              One governed pipeline turns your drawings into <strong>agents that do the work.</strong>
            </>
          }
          lead="Every agent on this page runs on the same four connected layers. Documents are digitized once, structured into a living graph, and made available to agents that automate the document-heavy prep, with a human approving every output."
        />
        <div className={styles.approachGrid} data-reveal data-reveal-stagger>
          {approachSteps.map((s) => (
            <div key={s.n} className={`${styles.approachCard} ${s.dark ? styles.approachCardDark : ""}`}>
              <div className={styles.approachTop}>
                <span className={styles.approachNum}>{s.n}</span>
                <span className={styles.approachKind}>{s.kind}</span>
              </div>
              <h3 className={`${styles.approachTitle} ${s.dark ? styles.approachTitleDark : ""}`}>{s.title}</h3>
              <p className={`${styles.approachText} ${s.dark ? styles.approachTextDark : ""}`}>{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Agents at work */}
      <Section tone="gray" id="agents">
        <SectionHeading
          eyebrow="The agents at work"
          title={
            <>
              Not a roadmap. <strong>Real plant work, running today.</strong>
            </>
          }
          lead="Each agent grounds its actions in verified plant data, proposes work for your engineers to approve, and reports a number you can hold it to. Here are the workflows that return the most time, in depth."
        />

        {deepDives.map((d) => (
          <div key={d.n} className={styles.deepDive}>
            <div className={`${styles.deepDiveRow} ${d.reversed ? styles.deepDiveReversed : ""}`}>
              <div className={styles.deepDiveText} data-reveal>
                <div className={styles.deepDiveMeta}>
                  <span className={styles.deepDiveNum}>{d.n}</span>
                  <span className={styles.deepDiveTag}>{d.tag}</span>
                </div>
                <h3 className={styles.deepDiveHeading}>{d.heading}</h3>
                <p className={styles.deepDiveLabel}>The workflow today</p>
                <p className={styles.deepDiveBody}>{d.today}</p>
                <p className={styles.deepDiveLabel}>What the agent does</p>
                <div className={styles.deepDiveList}>
                  {d.does.map((text) => (
                    <div key={text} className={styles.deepDiveItem}>
                      <span className={styles.deepDiveIcon}>
                        <CheckmarkFilled size={18} aria-hidden="true" />
                      </span>
                      <p className={styles.deepDiveItemText}>{text}</p>
                    </div>
                  ))}
                </div>
                <span className={styles.deepDiveOutcome}>
                  <CheckmarkFilled size={18} aria-hidden="true" />
                  {d.outcome}
                </span>
              </div>

              <div className={styles.deepDivePanel} data-reveal>
                <div className={styles.mockPanel} aria-hidden="true">
                  <div className={styles.mockHead}>
                    <span>{d.mock.head}</span>
                    <span className={styles.mockTag}>{d.mock.tag}</span>
                  </div>
                  <div className={styles.mockBody}>
                    {d.mock.rows
                      ? d.mock.rows.map((r) => (
                          <div key={r.label} className={styles.mockRow}>
                            <span className={styles.mockRowLabel}>{r.label}</span>
                            <span className={styles.mockRowStatus}>{r.status}</span>
                          </div>
                        ))
                      : null}
                    {d.mock.answer ? (
                      <div className={styles.mockAnswer}>
                        <p className={styles.mockAnswerText}>{d.mock.answer}</p>
                        <div className={styles.mockCiteRow}>
                          {d.mock.cites?.map((c) => (
                            <span key={c} className={styles.mockCite}>
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div className={styles.mockFoot}>{d.mock.foot}</div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* More agents grid */}
        <div className={styles.moreIntro}>
          <h3 className={styles.moreHeading}>More document-heavy workflows the platform automates</h3>
          <p className={styles.moreLead}>
            All built on the same graph, so agents built once are reused across sites and workflows, and efficiency
            compounds instead of being rebuilt each time.
          </p>
          <div className={styles.moreGrid} data-reveal data-reveal-stagger>
            {moreAgents.map(({ Icon, title, text, tag }) => (
              <div key={title} className={styles.moreCard}>
                <span className={styles.moreIcon}>
                  <Icon size={28} aria-hidden="true" />
                </span>
                <p className={styles.moreTitle}>{title}</p>
                <p className={styles.moreText}>{text}</p>
                <span className={styles.moreTag}>{tag}</span>
              </div>
            ))}
            <div className={`${styles.moreCard} ${styles.moreCardCta}`}>
              <p className={styles.moreTitle}>Your workflow here</p>
              <p className={styles.moreText}>
                Any document-heavy workflow on the graph can become an agent, shipping in days from a use-case
                template.
              </p>
              <Link href="/contact" className={styles.textLink}>
                Discuss your use-case
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Trust & governance */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Trust and governance"
          title={
            <>
              Every agent proposes. <strong>A person always approves.</strong>
            </>
          }
          lead="Efficiency never comes at the expense of governance. Each automated output is routed for human review with a complete audit trail, so faster workflows remain fully defensible for safety and compliance."
        />
        <div className={styles.trustGrid} data-reveal data-reveal-stagger>
          {trust.map(({ Icon, title, text }) => (
            <div key={title} className={styles.trustCard}>
              <span className={styles.trustIcon}>
                <Icon size={24} aria-hidden="true" />
              </span>
              <h3 className={styles.trustTitle}>{title}</h3>
              <p className={styles.trustText}>{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Outcomes */}
      <Section tone="dark">
        <SectionHeading
          eyebrow="Measurable results"
          title={
            <>
              Results you can hold an agent to, <strong>not promises.</strong>
            </>
          }
        />
        <div className={styles.outGrid} data-reveal data-reveal-stagger>
          {outcomes.map((o) => (
            <div key={o.label} className={styles.outStat}>
              <p className={styles.outNum}>{o.num}</p>
              <p className={styles.outLabel}>{o.label}</p>
            </div>
          ))}
        </div>
        <p className={styles.caseQuote} data-reveal>
          An operations team was losing senior-engineer hours to Management of Change paperwork and repetitive
          asset lookups. By deploying agents on its asset graph, the team let ChangeIQ auto-assemble change
          packages and a lookup agent answer asset questions instantly, freeing engineers for judgement work and
          measurably reducing the time each change and study took to prepare.
        </p>
      </Section>

      {/* FAQ */}
      <Section tone="gray">
        <Faq items={faqs} title="Operational efficiency FAQ" />
      </Section>

      {/* Related */}
      <Section tone="light">
        <RelatedLinks title="Related platform & use-cases" links={relatedLinks} />
      </Section>

      {/* Final CTA */}
      <Section tone="dark">
        <h2 className={styles.ctaTitle}>
          Ready to turn your plant&rsquo;s documents into <strong>AI agents?</strong>
        </h2>
        <p className={styles.ctaLead}>
          See the full stack on your own drawings. A 30-minute demo shows digitize to graph to agent, end to end.
        </p>
        <div className={styles.actions}>
          <CtaButton href="/contact" variant="primary">
            Book a demo
          </CtaButton>
          <Link href="/contact?team=engineering" className={styles.textLink}>
            Talk to engineering
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </Section>
    </>
  );
}
