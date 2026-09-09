import { Link } from "react-router-dom";
import Silk from "../Silk.jsx";
import {
  ArrowRight,
  Cloud,
  Database,
  Globe2,
  Headphones,
  Layers3,
  RefreshCw,
  ServerCog,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import Partners from "../../components/SolutionTechnologyPartners";
import SolutionHero from "../../components/SolutionHero";
import cloudHero from "../../assets/software-cloud.png";

function SectionPill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#111318] md:px-8 md:py-3.5 md:text-[13px]">
      {children}
    </span>
  );
}

const cloudAreas = [
  {
    number: "01",
    title: "Cloud Infrastructure",
    text: "Flexible infrastructure approaches for applications, workloads and changing capacity requirements.",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "02",
    title: "Cloud Data & Backup",
    text: "Support for data availability, backup planning and resilient access to critical information.",
    icon: Database,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "03",
    title: "Cloud Applications",
    text: "Move applications and services toward modern delivery models while considering the wider IT environment.",
    icon: Workflow,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "04",
    title: "Remote & Distributed Work",
    text: "Technology approaches that help teams access the systems and resources they need from different locations.",
    icon: Globe2,
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
  },
];

const benefits = [
  ["Scalable", "Adapt capacity and infrastructure as business requirements evolve.", Layers3],
  ["Secure", "Consider identity, access, data protection and the wider security environment.", ShieldCheck],
  ["Flexible", "Choose an approach that fits existing systems, workloads and future plans.", Zap],
  ["Supported", "Continue optimizing and maintaining the environment after deployment.", RefreshCw],
];

const considerations = [
  ["Scalability", "Technology that can adapt as business requirements change."],
  ["Accessibility", "Support for modern teams and distributed working environments."],
  ["Flexibility", "Cloud approaches that can fit different organizational requirements."],
  ["Integration", "Consideration for the wider IT environment and existing systems."],
];

function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex w-fit items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] sm:px-9 sm:text-[13px]">
      {children}
    </div>
  );
}


export default function CloudSolutions() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-[Inter,Arial,sans-serif] text-[#111111]">
      <SolutionHero
        eyebrow="Cloud Solutions"
        title="Cloud technology."
        accent="Built around your business."
        description="Modernize infrastructure, improve accessibility and scale with confidence through practical cloud strategies connecting applications, data and users."
      />

      {/* SOLUTIONS / CAPABILITIES */}
      <section className="bg-[#fff7f2] py-7 sm:py-9 md:py-12">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8">
          <div className="text-center">
            <div>
              <SectionLabel>Cloud Capabilities</SectionLabel>
              <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-5xl md:text-[56px]">
                A cloud approach designed around your <span className="text-[#f26522]">requirements.</span>
              </h2>
            </div>
            <p className="mx-auto mt-5 max-w-[820px] text-center text-[15px] leading-7 text-slate-700 sm:text-[16px] md:text-[17px]">
              Reliable cloud infrastructure, data availability, and remote work enablement tailored to your business.
            </p>
          </div>

          <div className="ramton-solution-stack mt-8">
            {cloudAreas.map(({ number, title, text, icon: Icon, image }, index) => (
              <article
                key={title}
                className="ramton-solution-card solution-card-border group mb-5 overflow-hidden rounded-[24px] bg-white shadow-[0_18px_50px_-30px_rgba(242,101,34,.25)]"
                style={{ top: `calc(92px + ${index * 8}px)` }}
              >
                <div className="grid min-h-[430px] overflow-hidden rounded-[22px] lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="flex flex-col justify-center bg-white p-7 sm:p-9 lg:p-12 lg:pr-14">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f26522]/[0.08] text-[#f26522] transition duration-500 group-hover:bg-[#f26522] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f26522]">
                      {number} / Cloud Capability
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
                      alt={title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover brightness-[0.56] contrast-[1.03] saturate-[0.9] transition duration-700 group-hover:scale-105 group-hover:brightness-[0.7]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#111111] backdrop-blur-md">
                      Ramton Cloud Solutions
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
              Reliable technology.<br /><span className="text-[#df4f08]">Practical business outcomes.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">We combine product knowledge, technical expertise and ongoing support to make software practical to plan, deploy, integrate and maintain.</p>
          </div>
          <div className="relative mx-auto mt-14 max-w-[1360px] lg:grid lg:grid-cols-[1fr_430px_1fr] lg:items-center lg:gap-5">
            <div className="grid gap-5">
              <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">01</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Requirement-led</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">We start with your business requirements instead of forcing every organization into the same software stack.</p>
              </div><div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">02</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Integrated</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Software is considered as part of the wider hardware, cloud, security and networking environment.</p>
              </div>
            </div>
            <div className="my-6 hidden overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:my-0 lg:block">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80" alt="Software technology workspace" loading="lazy" decoding="async" className="h-[570px] w-full object-cover" />
            </div>
            <div className="grid gap-5">
              <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">03</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Scalable</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Solutions can evolve with changing users, workloads, locations and business requirements.</p>
              </div><div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">04</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Supported</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Implementation and ongoing technical assistance help your team get sustained value from its software environment.</p>
              </div>
            </div>
            <div className="mt-5 overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:hidden">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" alt="Software technology workspace" loading="lazy" decoding="async" className="h-[360px] w-full object-cover sm:h-[430px]" />
            </div>
          </div>
        </div>
      </section>

      {/* CONSIDERATIONS */}
      <section className="bg-[#fff7f2] py-7 sm:py-9 md:py-12">
        <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 md:px-8">
          <div>
            <div className="flex w-full justify-center"><SectionLabel>Cloud Planning</SectionLabel></div>
            <h2 className="mx-auto mt-2 text-center text-[30px] font-medium leading-[1.05] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[60px]">
              Consider the <span className="text-[#f26522]">bigger IT picture.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[820px] text-center text-[15px] leading-7 text-slate-700 sm:text-[16px] md:text-[17px]">
              Cloud decisions affect applications, data, users, networks, security and support. A balanced approach helps avoid isolated technology choices.
            </p>

            <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
              {considerations.map(([title, text]) => (
                <div key={title} className="grid gap-2 py-4 md:grid-cols-[160px_1fr]">
                  <h3 className="font-extrabold text-slate-950">{title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-slate-200 shadow-[0_30px_80px_-45px_rgba(242,101,34,.55)]">
            <img
              src={cloudHero}
              alt="Cloud infrastructure"
              className="h-[360px] w-full object-cover brightness-[0.72] contrast-[1.03] saturate-[0.9] md:h-[470px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/25 bg-white/90 p-5 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f26522] text-white">
                  <ServerCog className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-950">Infrastructure + applications + support</p>
                  <p className="text-xs text-slate-600">One connected technology conversation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Partners />
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
