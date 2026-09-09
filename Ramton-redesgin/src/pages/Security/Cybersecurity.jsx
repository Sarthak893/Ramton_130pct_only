import { Link } from "react-router-dom";
import Silk from "../Silk.jsx";
import { ArrowRight, ShieldCheck, Network, Database, Bug, Headphones, CheckCircle2 } from "lucide-react";
import SolutionHero from "../../components/SolutionHero";
import Partners from "../../components/SolutionTechnologyPartners";

function SectionPill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#111318] md:px-8 md:py-3.5 md:text-[13px]">
      {children}
    </span>
  );
}

const services = [
  {
    number: "01",
    title: "Threat Protection",
    text: "Help protect business systems, applications and information from evolving digital threats with practical controls designed around your environment.",
    icon: Bug,
  },
  {
    number: "02",
    title: "Network Security",
    text: "Strengthen connected environments and reduce exposure across your network with layered controls for users, devices, endpoints and critical connections.",
    icon: Network,
  },
  {
    number: "03",
    title: "Data Protection",
    text: "Protect important business information and critical digital resources with practical safeguards that help reduce unauthorized access, data loss and disruption.",
    icon: Database,
  },
  {
    number: "04",
    title: "Security Support",
    text: "Maintain your security environment with ongoing technical assistance, monitoring and lifecycle support so your protection can evolve with changing business needs.",
    icon: Headphones,
  },
];

const approach = [
  ["Assess", "Understand systems, users, connectivity and business risk before selecting controls."],
  ["Protect", "Layer practical security technologies around the areas that matter most."],
  ["Monitor", "Improve visibility into events, systems and potential security issues."],
  ["Maintain", "Keep security controls current with ongoing support and lifecycle planning."],
];

const cybersecurityPoints = [
  "Layered digital environment protection",
  "Reduced exposure across network endpoints",
  "Enhanced visibility into potential risks",
  "Ongoing technical assistance and support",
];

function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex w-fit items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] sm:text-[12px] md:px-8 md:py-3.5 md:text-[13px]">
      {children}
    </div>
  );
}


export default function Cybersecurity() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-[Inter,Arial,sans-serif] text-[#111111]">
      <SolutionHero
        eyebrow="Cybersecurity"
        title="Protect your digital world."
        accent="Stay ready for what’s next."
        description="Strengthen your digital environment with layered cybersecurity solutions designed to protect systems, networks, data and business operations."
      />

      {/* PROTECTION LAYERS */}
      <section className="relative overflow-hidden bg-[#fff7f2] pt-12 pb-0 sm:pt-14 md:pt-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.045) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 pb-16 md:px-10 md:pb-20">
          <div className="mx-auto max-w-[1100px] pt-0 text-center">
            <div className="flex w-full justify-center">
              <SectionLabel>Protection Layers</SectionLabel>
            </div>
            <h2 className="mx-auto mt-5 text-center text-[30px] font-normal leading-[1.02] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px]">
              Protect the parts of your <span className="text-[#f26522]">business that matter.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-8 text-slate-600 md:text-lg">
              Comprehensive safeguards designed to address modern security challenges across your entire IT stack.
            </p>
          </div>

          <div className="ramton-solution-stack mt-8">
            {services.map(({ number, title, text, icon: Icon }, index) => {
              const images = [
                "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=85",
                "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85",
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
              ];

              return (
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
                        {number} / Protection Layer
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
                        src={images[index]}
                        alt={`${title} cybersecurity solution`}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover brightness-[0.72] contrast-[1.03] saturate-[0.95] transition duration-700 group-hover:scale-105 group-hover:brightness-[0.86]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/60 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#111111] backdrop-blur-md">
                        Ramton Cybersecurity
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mx-auto max-w-[1100px] text-center">
            <div className="flex w-full justify-center">
              <SectionLabel>Our Approach</SectionLabel>
            </div>
            <h2 className="mx-auto mt-5 text-center text-[30px] font-normal leading-[1.02] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px]">
              Security is a lifecycle, <span className="text-[#f26522]">not a checkbox.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-8 text-slate-600 md:text-lg">
              Build security into the way your technology is planned, deployed and supported.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map(([title, text], i) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-[25px] border border-slate-200 bg-white p-6 text-center shadow-[0_18px_50px_-30px_rgba(15,23,42,.18)] transition-all duration-500 hover:-translate-y-2 hover:border-[#f26522]/40 hover:shadow-[0_28px_60px_-30px_rgba(242,101,34,.20)] md:p-7"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#f26522]/[0.07] opacity-0 blur-2xl transition-all duration-500 group-hover:scale-[1.8] group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="text-sm font-extrabold text-[#f26522]">0{i + 1}</div>
                  <h3 className="mt-4 text-lg font-extrabold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
                <span className="absolute bottom-0 left-6 h-[2px] w-0 bg-[#f26522] transition-all duration-500 group-hover:w-[calc(100%-48px)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Partners />
      {/* WHY CHOOSE US — SHARED HARDWARE-STYLE SECTION */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24">
        <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[920px] text-center">
            <SectionLabel>Why Choose Ramton</SectionLabel>
            <h2 className="text-[34px] font-medium leading-[1.05] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[62px]">
              Reliable technology.<br /><span className="text-[#df4f08]">Practical business outcomes.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">We combine security expertise, practical planning and ongoing support to make protection simpler to deploy, manage and evolve.</p>
          </div>
          <div className="relative mx-auto mt-14 max-w-[1360px] lg:grid lg:grid-cols-[1fr_430px_1fr] lg:items-center lg:gap-5">
            <div className="grid gap-5">
              <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">01</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Layered protection</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Security solutions are planned across people, premises, devices and digital environments.</p>
              </div><div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">02</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Clear visibility</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Give teams better awareness of activity, risks and incidents across critical environments.</p>
              </div>
            </div>
            <div className="my-6 hidden overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:my-0 lg:block">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80" alt="Security technology workspace" loading="lazy" decoding="async" className="h-[570px] w-full object-cover" />
            </div>
            <div className="grid gap-5">
              <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">03</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Scalable design</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Build security infrastructure that can expand as sites, users and requirements change.</p>
              </div><div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">04</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Expert support</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Get practical guidance from planning and deployment through ongoing technical assistance.</p>
              </div>
            </div>
            <div className="mt-5 overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:hidden">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" alt="Security technology workspace" loading="lazy" decoding="async" className="h-[360px] w-full object-cover sm:h-[430px]" />
            </div>
          </div>
        </div>
      </section>
      {/* FINAL CTA — SAME HARDWARE CTA */}
      <section id="contact" className="relative overflow-hidden bg-[#f26522] px-4 pb-10 pt-4 sm:px-6 md:pb-16 md:pt-6">
        <div className="absolute inset-0 z-0 overflow-hidden"><Silk speed={3.1} scale={0.8} color="#ea6507" noiseIntensity={0} rotation={0} /></div>
        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#ff781a]/95 via-[#f26522]/95 to-[#a9410d]/95 px-6 py-14 text-center text-white shadow-[0_30px_80px_-45px_rgba(242,101,34,.55)] sm:px-10 md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 opacity-[0.14]" style={{backgroundImage:"radial-gradient(rgba(255,255,255,.9) 1px, transparent 1px)",backgroundSize:"12px 12px"}} />
            <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full border border-white/15 ramton-float" />
            <div className="pointer-events-none absolute -right-20 bottom-[-100px] h-72 w-72 rounded-full border border-black/10 ramton-float-reverse" />
            <div className="relative z-10 mx-auto max-w-[760px]">
              <SectionPill>CTA</SectionPill>
              <h2 className="mt-6 text-[37px] font-normal leading-[1.02] tracking-[-0.055em] sm:text-[50px] md:text-[62px]">Ready to Build a Smarter IT Infrastructure?</h2>
              <p className="mx-auto mt-5 max-w-[650px] text-[15px] leading-[1.75] text-white/90 md:text-[17px]">Let's discuss how Ramton can help your business achieve more with the right technology.</p>
              <Link to="/contact" aria-label="Let's Talk" className="group relative mt-7 inline-flex h-[52px] w-[155px] items-center overflow-hidden rounded-full bg-white text-slate-900 transition-all duration-500 ease-out hover:w-[165px]">
                <span className="absolute left-0 top-0 z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#f26522] text-white transition-all duration-500 p-1.5 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-full">
                  <span className="absolute left-0 top-0 h-[52px] w-[52px] rounded-full bg-[#f26522]"><span className="absolute inset-0 flex items-center justify-center text-white"><ArrowRight className="h-5 w-5" /></span></span>
                </span>
                <span className="relative z-10 ml-[64px] whitespace-nowrap text-[13px] font-semibold text-black transition-all duration-300 group-hover:text-white">Let's Talk</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
