
class Component extends DCLogic {
  state = { useCase: 0, drawings: 0, datasheets: 0, counted: false };

  get cases() {
    return [
      { num: "01", title: "Accelerate Digital Twin & Operator Simulation", product: "UNIGRAPH + AI360", agent: "Twin Data Agent",
        desc: "Feed digital twin and operator training simulator initiatives with structured, connected asset data from UniGraph instead of hand-built models.",
        metric: "30%+ faster implementation" },
      { num: "02", title: "Automated Data Sync & Resolution for EAM, CMMS", product: "AI360 AGENT", agent: "Asset Sync Agent",
        desc: "Keep EAM and CMMS systems continuously in sync with the engineering source of truth. Equipment, tags and hierarchies stay resolved and aligned automatically.",
        metric: "Zero manual reconciliation" },
      { num: "03", title: "Reduce errors in PTW / Control of Work", product: "PROCESS AI", agent: "Control of Work Agent",
        desc: "Ground permits to work and isolations in live, verified plant data. Line-ups, isolation points and equipment states come straight from the asset graph, so permits reflect the plant as it actually is.",
        metric: "Fewer permit errors, less rework" },
      { num: "04", title: "Automate Safety & Compliance Analysis", product: "PROCESS AI", agent: "HAZOP Prep Agent",
        desc: "Process AI reads your P&IDs and proposes nodes, deviations and safeguards, turning weeks of HAZOP, LOPA and compliance preparation into a guided, data-backed review.",
        metric: "50%+ faster HAZOP prep" },
      { num: "05", title: "Automate Operations & Maintenance Workflows", product: "PROCESS AI", agent: "Operations Agent",
        desc: "Automate turnaround and equipment-isolation planning, smart maintenance scheduling and corrosion-loop mapping. Process AI handles the document-heavy busywork.",
        metric: "Fewer manual workflows" },
      { num: "06", title: "Automated Management of Change", product: "CHANGEIQ APP", agent: "MoC Agent on AI360",
        desc: "Digital-first, AI-powered Management of Change. ChangeIQ auto-assembles MoC packages, risk reviews and approval routing directly from your live plant graph, so changes move safely and fast.",
        metric: "40%+ less MoC prep time" },
    ];
  }

    fmt(n) { return Math.round(n).toLocaleString("en-US"); }

  renderVals() {
    const i = this.state.useCase;
    const c = this.cases;
    const a = c[i] || c[0];
    const rowBase = "display:flex;align-items:center;gap:16px;padding:20px 22px;cursor:pointer;border-bottom:1px solid #262626;transition:background .15s;background:";
    const barBase = "width:3px;align-self:stretch;transition:background .15s;background:";
    const titleBase = "font-size:15.5px;font-weight:500;transition:color .15s;color:";
    const rows = {};
    c.forEach((u, idx) => {
      const on = idx === i;
      rows["r" + idx] = rowBase + (on ? "#202020" : "transparent");
      rows["b" + idx] = barBase + (on ? "var(--accent,#0f62fe)" : "transparent");
      rows["t" + idx] = titleBase + (on ? "#f4f4f4" : "#8d8d8d");
      rows["sel" + idx] = () => this.setState({ useCase: idx });
    });
    return {
      accentVar: this.props.accentColor || "#0f62fe",
      showBar: this.props.announcementBar !== false,
      ...rows,
      ucTitle: a.title, ucProduct: a.product, ucDesc: a.desc, ucAgent: a.agent, ucMetric: a.metric,
      drawings: this.fmt(this.state.drawings),
      datasheets: this.fmt(this.state.datasheets),
      metricsRef: (el) => { this._metrics = el; },
    };
  }

  componentDidMount() {
    if (this.props.countUp === false) {
      this.setState({ drawings: 83000, datasheets: 250000 });
      return;
    }
    const el = this._metrics;
    if (!el || typeof IntersectionObserver === "undefined") { this.animate(); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !this.state.counted) {
          this.setState({ counted: true });
          this.animate();
          io.disconnect();
        }
      });
    }, { threshold: 0.25 });
    io.observe(el);
    this._io = io;
  }

  componentWillUnmount() { if (this._io) this._io.disconnect(); }

  animate() {
    const dur = 1700, t0 = performance.now(), TD = 83000, TS = 250000;
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      this.setState({ drawings: TD * e, datasheets: TS * e });
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
}
