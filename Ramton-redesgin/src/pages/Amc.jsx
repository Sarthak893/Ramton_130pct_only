import { Link } from "react-router-dom";

/* =========================================================
   CHECK ICON
   ========================================================= */

const Check = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className="h-5 w-5 shrink-0 text-[#f26522]"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const Arrow = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
  >
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

/* =========================================================
   SECTION LABEL
   ========================================================= */

function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex w-fit items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] sm:text-[12px] md:px-8 md:py-3.5 md:text-[13px]">
      {children}
    </div>
  );
}

/* =========================================================
   AMC PLANS
   ========================================================= */

const plans = [
  {
    name: "Basic AMC",
    tagline: "Reactive support for small setups",
    features: [
      "Break-fix support (call-based)",
      "Quarterly on-site preventive checks",
      "Remote troubleshooting",
      "8x5 helpdesk (business hours)",
      "Standard parts at discounted rates",
    ],
    highlighted: false,
  },
  {
    name: "Comprehensive AMC",
    tagline: "Our most popular plan for growing businesses",
    features: [
      "Everything in Basic AMC",
      "Monthly on-site preventive maintenance",
      "Priority response (within 4 hours)",
      "12x6 helpdesk coverage",
      "Free replacement of covered parts",
      "Network & server health monitoring",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise AMC",
    tagline: "Full-coverage SLA for critical infrastructure",
    features: [
      "Everything in Comprehensive AMC",
      "24x7 helpdesk & emergency support",
      "Dedicated account manager",
      "On-site engineer within 2 hours (critical issues)",
      "Custom SLA & uptime guarantees",
      "Quarterly infrastructure audit & reporting",
    ],
    highlighted: false,
  },
];

/* =========================================================
   WHY AMC
   ========================================================= */

const reasons = [
  {
    title: "Predictable Costs",
    desc: "Fixed annual pricing means no surprise repair bills — budget IT spend with confidence.",
  },
  {
    title: "Less Downtime",
    desc: "Scheduled preventive maintenance catches issues before they turn into outages.",
  },
  {
    title: "Faster Response",
    desc: "AMC clients get priority queueing over one-off service requests.",
  },
  {
    title: "Longer Asset Life",
    desc: "Regular servicing extends the working life of your hardware and reduces replacement frequency.",
  },
];

/* =========================================================
   AMC PAGE
   ========================================================= */

export default function Amc() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative overflow-hidden bg-[#15171d]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#15171d] via-[#1b1d24] to-[#252830]" />

          <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#f26522]/15 blur-[120px]" />

          <div className="absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-[#f26522]/10 blur-[110px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-[1500px] items-start px-5 pt-20 pb-16 sm:px-7 sm:pt-24 sm:pb-16 md:min-h-[680px] md:px-8 md:pt-20 md:pb-16 lg:min-h-[760px] lg:px-10 lg:pt-20 lg:pb-16">
          <div className="max-w-[850px]">

            <div className="mb-15 inline-flex items-center rounded-full border border-white/25 bg-white px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.17em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] sm:text-[11px]">
              Annual Maintenance Contracts
            </div>

            <h1 className="max-w-[850px] text-[38px] font-extrabold leading-[1.03] tracking-[-0.055em] text-white sm:text-[52px] md:text-[64px] lg:text-[76px] xl:text-[82px]">
              Keep your infrastructure running,
              <br />
              <span className="text-[#f26522]">not firefighting.</span>
            </h1>

            <p className="mt-5 max-w-[700px] text-[14px] font-normal leading-[1.75] text-white/80 sm:text-[15px] md:mt-7 md:text-[17px]">
              Ramton AMC plans cover hardware, software, security, and
              networking upkeep under one predictable annual fee — so your
              team can focus on the business, not on break-fix calls.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href="/#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#f26522] px-6 py-3.5 text-[13px] font-bold text-white shadow-[0_18px_35px_-18px_rgba(242,101,34,.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d95316] sm:px-7 sm:py-4 sm:text-[14px]"
              >
                Get an AMC Quote
                <Arrow />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#111318]"
              >
                Talk to Us
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY AMC
          ===================================================== */}

      <section className="bg-white px-5 py-16 md:px-10 md:py-20 lg:px-12">
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-10 text-center">

            <div className="flex w-full justify-center">
              <SectionLabel>Why AMC</SectionLabel>
            </div>

            <h2 className="mx-auto mt-5 max-w-[1100px] text-center text-[30px] font-normal leading-[1.02] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px]">
              Why businesses put{" "}
              <span className="text-[#f26522]">IT on AMC.</span>
            </h2>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="group relative overflow-hidden rounded-[25px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,.18)] transition-all duration-500 hover:-translate-y-2 hover:border-[#f26522]/40 hover:shadow-[0_28px_60px_-30px_rgba(242,101,34,.20)] md:p-7"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#f26522]/[0.07] opacity-0 blur-2xl transition-all duration-500 group-hover:scale-[1.8] group-hover:opacity-100" />

                <h3 className="relative z-10 text-xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-[#f26522]">
                  {reason.title}
                </h3>

                <p className="relative z-10 mt-3 text-sm leading-7 text-slate-600">
                  {reason.desc}
                </p>

                <span className="absolute bottom-0 left-6 h-[2px] w-0 bg-[#f26522] transition-all duration-500 group-hover:w-[calc(100%-48px)]" />
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          AMC PLANS
          ===================================================== */}

      <section className="bg-[#fff7f2] px-5 py-16 md:px-10 md:py-20 lg:px-12">
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-10 text-center">

            <div className="flex w-full justify-center">
              <SectionLabel>AMC Plans</SectionLabel>
            </div>

            <h2 className="mx-auto mt-5 max-w-[1100px] text-center text-[30px] font-normal leading-[1.02] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px]">
              Choose your{" "}
              <span className="text-[#f26522]">coverage level.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-[780px] text-lg leading-8 text-slate-600">
              Every plan can be scoped to hardware, software, security, or
              networking assets — or bundled across all four.
            </p>

          </div>

          {/* =================================================
              PLAN CARDS
              ================================================= */}

          <div className="grid gap-5 lg:grid-cols-3">

            {plans.map((plan) => (
              <article
                key={plan.name}
                className="group relative flex flex-col overflow-hidden rounded-[25px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_-30px_rgba(15,23,42,.18)] transition-all duration-500 hover:-translate-y-2 hover:border-[#f26522] hover:shadow-[0_28px_60px_-30px_rgba(242,101,34,.35)]"
              >

                {/* Most Popular badge remains visible,
                    but does NOT highlight the card itself */}

                {plan.highlighted && (
                  <span className="absolute right-5 top-5 rounded-full bg-[#f26522] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                    Most Popular
                  </span>
                )}

                <h3 className="pr-28 text-xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-[#f26522]">
                  {plan.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {plan.tagline}
                </p>

                <ul className="mt-7 space-y-3.5">

                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                    >
                      <Check />
                      <span>{feature}</span>
                    </li>
                  ))}

                </ul>

                {/* =================================================
                    REQUEST PLAN BUTTON
                    All buttons are neutral by default.
                    Orange only on hover.
                    ================================================= */}

                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3.5 text-[13px] font-bold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-[#f26522] hover:bg-[#f26522] hover:text-white hover:shadow-[0_18px_35px_-18px_rgba(242,101,34,.7)]"
                >
                  Request This Plan
                  <Arrow />
                </a>

                {/* Bottom hover accent */}

                <span className="absolute bottom-0 left-7 h-[2px] w-0 bg-[#f26522] transition-all duration-500 group-hover:w-[calc(100%-56px)]" />

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="bg-white px-5 pb-16 pt-6 md:px-10 md:pb-20 lg:px-12">
        <div className="mx-auto max-w-[1500px]">

          <div className="relative overflow-hidden rounded-[28px] border border-[#f4cdb7] bg-white px-7 py-9 md:px-10 md:py-11">

            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#f26522]/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-[900px] text-center">

              <div className="flex w-full justify-center">
                <SectionLabel>Need Help Choosing?</SectionLabel>
              </div>

              <h2 className="mx-auto mt-1 max-w-[850px] text-[30px] font-normal leading-[1.02] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px]">
                Not sure which{" "}
                <span className="text-[#f26522]">plan fits?</span>
              </h2>

              <p className="mx-auto mt-5 max-w-[650px] text-base leading-7 text-slate-600 md:text-lg">
                Tell us what's in your environment — hardware, software,
                security, or network — and we'll put together a custom AMC
                scope and quote.
              </p>

              <Link
                to="/contact"
                className="group mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-[#f26522] px-7 py-4 text-[14px] font-semibold text-white shadow-[0_18px_35px_-18px_rgba(242,101,34,.7)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#dc5718]"
              >
                Contact Ramton
                <Arrow />
              </Link>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}