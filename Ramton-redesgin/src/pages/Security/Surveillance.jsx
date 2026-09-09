import Silk from "../Silk.jsx";
import {
  ShieldCheck,
  Settings2,
  Headphones,
  CheckCircle2,
  Camera,
  Video,
  Eye,
  Radio,
} from "lucide-react";
import SolutionHero from "../../components/SolutionHero";
import Partners from "../../components/SolutionTechnologyPartners";

/* =========================================================
   SERVICES
   ========================================================= */

function SectionPill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#111318] md:px-8 md:py-3.5 md:text-[13px]">
      {children}
    </span>
  );
}

const solutions = [
  {
    number: "01",
    title: "CCTV Surveillance",
    text: "Indoor and outdoor camera systems for dependable visibility across offices, facilities and critical areas.",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1519871544760-ff4e659017b9?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "02",
    title: "Video Management",
    text: "Centralized recording and monitoring solutions that make it easier to review and manage security footage.",
    icon: Video,
    image: "https://images.unsplash.com/photo-1662242723207-13ad21d3816f?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "03",
    title: "Remote Monitoring",
    text: "Stay connected to your security environment with remote access to cameras and video feeds.",
    icon: Radio,
    image: "https://images.unsplash.com/photo-1676405034160-a389faf8331d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "04",
    title: "Access Control",
    text: "Secure entry systems that help manage and monitor access to offices, facilities and restricted areas.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1754494977436-a5c202306fe4?auto=format&fit=crop&w=1400&q=85",
  },
];

/* =========================================================
   BENEFITS
   ========================================================= */

const benefits = [
  [
    "24/7 Visibility",
    "Keep an eye on important areas throughout the day and night.",
    Eye,
  ],
  [
    "Scalable Coverage",
    "Add cameras and monitoring points as your premises evolve.",
    ShieldCheck,
  ],
  [
    "Professional Installation",
    "Plan camera placement and infrastructure around your environment.",
    Settings2,
  ],
  [
    "Ongoing Support",
    "Maintain your surveillance setup with technical assistance and lifecycle support.",
    Headphones,
  ],
];

/* =========================================================
   SURVEILLANCE POINTS
   ========================================================= */

const surveillancePoints = [
  "Indoor and outdoor camera systems",
  "Centralized recording and management",
  "Remote access to video feeds",
  "Professional placement and setup",
];

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
   TECHNOLOGY PARTNERS
   ========================================================= */


/* =========================================================
   SURVEILLANCE PAGE
   ========================================================= */

export default function Surveillance() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-[Inter,Arial,sans-serif] text-[#111111]">

      <SolutionHero
        eyebrow="Security / Surveillance"
        title="Smarter security for"
        accent="complete visibility."
        description="Protect people, property and business operations with surveillance systems designed around your premises and monitoring needs."
      />

      {/* =====================================================
          INTRO / VALUE
          ===================================================== */}

      <section className="relative overflow-hidden bg-white py-10 sm:py-12 md:py-14">
        <div className="pointer-events-none absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "linear-gradient(to right, rgba(15,23,42,.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.045) 1px, transparent 1px)", backgroundSize: "88px 88px" }} />
        <div className="pointer-events-none absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "linear-gradient(to right, rgba(15,23,42,.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.045) 1px, transparent 1px)", backgroundSize: "88px 88px" }} />

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10">

          <div className="mx-auto max-w-[1100px] text-center">

            <div className="flex w-full justify-center">
              <SectionLabel>Security That Works</SectionLabel>
            </div>

            <h2 className="mx-auto mt-5 text-center text-[30px] font-normal leading-[1.02] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px]">
              Keep your premises protected{" "}
              <span className="text-[#f26522]">
                and under control.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[800px] text-lg leading-8 text-slate-600">
              From small offices to large commercial facilities, Ramton
              provides surveillance systems that improve visibility, help
              deter unauthorized activity and support faster response.
              Combine cameras, recording, monitoring and remote access into
              a practical security environment built for your site.
            </p>

          </div>

          <div className="ramton-solution-stack mt-8">
            {solutions.map(({ number, title, text, icon: Icon, image }, index) => (
              <article
                key={title}
                className="ramton-solution-card group mb-5 overflow-hidden rounded-[24px] border-2 border-[#f26522] bg-white shadow-[0_18px_50px_-30px_rgba(242,101,34,.25)]"
                style={{ top: `calc(92px + ${index * 8}px)` }}
              >
                <div className="grid min-h-[430px] overflow-hidden rounded-[22px] lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="flex flex-col justify-center bg-white p-7 sm:p-9 lg:p-12 lg:pr-14">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f26522]/[0.08] text-[#f26522] transition duration-500 group-hover:bg-[#f26522] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f26522]">
                      {number} / Surveillance Service
                    </span>
                    <h3 className="max-w-[560px] text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-[#111111] sm:text-4xl lg:text-[48px]">
                      {title}
                    </h3>
                    <p className="mt-5 max-w-[520px] text-sm leading-7 text-[#666666] md:text-base">
                      {text}
                    </p>
                  </div>

                  <div className="relative min-h-[280px] overflow-hidden bg-[#111111] lg:min-h-0 lg:ml-2">
                    <img
                      src={image}
                      alt={`${title} surveillance solution`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover brightness-[0.7] contrast-[1.03] saturate-[0.95] transition duration-700 group-hover:scale-105 group-hover:brightness-[0.82]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#111111] backdrop-blur-md">
                      Ramton Surveillance Solutions
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US — SHARED HARDWARE-STYLE SECTION */}
      <section className="relative overflow-hidden bg-white py-8 sm:py-10 md:py-12">
        <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[920px] text-center">
            <SectionLabel>Why Choose Ramton</SectionLabel>
            <h2 className="text-[34px] font-medium leading-[1.05] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[62px]">
              Reliable technology.<br /><span className="text-[#df4e08]">Practical business outcomes.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">
              We combine product knowledge, technical expertise and ongoing support to make software practical to plan, deploy, integrate and maintain.
            </p>
          </div>

          <div className="relative mx-auto mt-14 max-w-[1360px] lg:grid lg:grid-cols-[1fr_430px_1fr] lg:items-center lg:gap-5">
            <div className="grid gap-5">
              <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">01</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Requirement-led</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">We start with your business requirements instead of forcing every organization into the same software stack.</p>
              </div>
              <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">02</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Integrated</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Software is considered as part of the wider hardware, cloud, security and networking environment.</p>
              </div>
            </div>

            <div className="my-6 hidden overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:my-0 lg:block">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
                alt="Software technology workspace"
                loading="lazy"
                decoding="async"
                className="h-[570px] w-full object-cover"
              />
            </div>

            <div className="grid gap-5">
              <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">03</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Scalable</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Solutions can evolve with changing users, workloads, locations and business requirements.</p>
              </div>
              <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">04</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Supported</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Implementation and ongoing technical assistance help your team get sustained value from its software environment.</p>
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                alt="Software technology workspace"
                loading="lazy"
                decoding="async"
                className="h-[360px] w-full object-cover sm:h-[430px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY PARTNERS
          ===================================================== */}

      <Partners />

      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className="bg-white pb-16 pt-6 md:pb-20">

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">

          <div className="relative flex flex-col gap-7 overflow-hidden rounded-[28px] border border-[#f4cdb7] bg-white px-7 py-9 md:px-10 md:py-11 lg:flex-row lg:items-center lg:justify-between">

            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#f26522]/10 blur-3xl" />

            <div className="relative z-10">

              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f26522]">
                Have an IT Challenge?
              </p>

              <h2 className="mt-2 max-w-[760px] text-[26px] font-medium leading-[1.1] tracking-[-0.05em] text-slate-900 sm:text-[38px] md:text-[48px]">
                Let's Find the Right{" "}
                <span className="text-[#f26522]">
                  Technology Solution
                </span>{" "}
                for Your Business.
              </h2>

              <p className="mt-3 max-w-[580px] text-[15px] leading-7 text-slate-700">
                From infrastructure to cybersecurity, our team is ready to
                scope, plan and deliver.
              </p>

            </div>

            <div className="relative z-10 flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">

              <a
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#f26522] px-6 py-3.5 text-[13px] font-bold text-white shadow-[0_18px_35px_-18px_rgba(242,101,34,.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d95316] sm:px-7 sm:py-4 sm:text-[14px]"
              >
                Talk to an Expert

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </a>

              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-4 text-[14px] font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-[#f26522] hover:text-[#f26522]"
              >
                Get a Free Quote

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
