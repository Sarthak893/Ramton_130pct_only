import { Link } from "react-router-dom";
import Silk from "../Silk.jsx";
import { ArrowRight, Cable, CheckCircle2, Layers3, Ruler, Wrench } from "lucide-react";
import SolutionHero from "../../components/SolutionHero";
import Partners from "../../components/SolutionTechnologyPartners";
import cablingApproach from "../../assets/networking-cable.png";

function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex w-fit items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] sm:text-[12px] md:px-8 md:py-3.5 md:text-[13px]">
      {children}
    </div>
  );
}

function SectionPill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#111318] md:px-8 md:py-3.5 md:text-[13px]">
      {children}
    </span>
  );
}

const items = [
  [
    Ruler,
    "Planned Layout",
    "Design cable routes, termination points and rack locations around your workspace and future requirements.",
    "https://images.pexels.com/photos/4508748/pexels-photo-4508748.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "Structured cabling patch panel with organized network cables",
  ],
  [
    Cable,
    "Structured Connectivity",
    "Create consistent connections between switches, servers, workstations, access points and other network devices.",
    "https://images.pexels.com/photos/4682187/pexels-photo-4682187.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "Close-up of network cables connected to a patch panel",
  ],
  [
    Layers3,
    "Scalable Infrastructure",
    "Leave room for additional users, devices and locations without rebuilding the entire physical network.",
    "https://images.pexels.com/photos/4716292/pexels-photo-4716292.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "Blue network cables connected to server infrastructure",
  ],
  [
    Wrench,
    "Simpler Maintenance",
    "Organized labeling, routing and documentation make troubleshooting and upgrades easier.",
    "https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "Network cables professionally routed through a server rack",
  ],
];

const checklist = [
  "Site and requirement assessment",
  "Cable pathway and layout planning",
  "Rack and patch-panel organization",
  "Testing and connectivity validation",
  "Labeling and documentation",
  "Future expansion planning"
];


export default function StructuredCabling() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-[Inter,Arial,sans-serif] text-[#111111]">
      
      <SolutionHero
        eyebrow="Structured Cabling"
        title="A stronger network starts with a"
        accent="better foundation."
        description="Build an organized physical network infrastructure designed for reliable connectivity, easier maintenance and future growth."
      />

      {/* CORE STRUCTURED CABLING SECTION */}
      <section className="bg-white px-5 py-16 md:px-10 md:py-20 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 text-center">
            <div className="flex w-full justify-center"><SectionLabel>Structured Cabling</SectionLabel></div>
            <h2 className="mx-auto mt-5 max-w-[1100px] text-center text-[30px] font-normal leading-[1.02] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px]">
              Infrastructure built for <span className="text-[#f26522]">reliable connectivity.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[780px] text-lg leading-8 text-slate-600">
              Build a clean, organized physical network foundation that supports dependable performance today and easier expansion tomorrow.
            </p>
          </div>

          <div className="ramton-solution-stack flex flex-col gap-6">
            {items.map(([Icon, title, text, image, alt], index) => (
              <article key={title} className="ramton-solution-card group relative w-full overflow-hidden rounded-[25px] border-2 border-white bg-white p-3 shadow-[0_18px_50px_-30px_rgba(15,23,42,.18)] transition-all duration-500 hover:-translate-y-1 hover:border-[#f26522] hover:shadow-[0_28px_60px_-30px_rgba(242,101,34,.24)] md:p-4 lg:min-h-[300px]">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#f26522]/[0.07] opacity-0 blur-2xl transition-all duration-500 group-hover:scale-[1.8] group-hover:opacity-100" />
                <div className="relative z-10 grid items-stretch gap-6 md:grid-cols-[38%_1fr] md:gap-8 lg:grid-cols-[40%_1fr]">
                  <div className="relative min-h-[220px] overflow-hidden rounded-[19px] bg-slate-100 md:min-h-[270px]">
                    <img
                      src={image}
                      alt={alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f26522] shadow-sm backdrop-blur-sm">0{index + 1}</div>
                  </div>
                  <div className="flex flex-col justify-center px-3 pb-6 pt-2 md:px-2 md:py-8 lg:pr-8">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1e8] text-[#f26522] transition-all duration-500 group-hover:scale-105 group-hover:bg-[#f26522] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#f26522]">Structured Cabling</div>
                    <h2 className="mt-2 text-2xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-[#f26522] md:text-3xl lg:text-[34px]">{title}</h2>
                    <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">{text} Ramton focuses on practical implementation, clean organization and dependable performance so the infrastructure remains easy to manage as your business grows.</p>
                  </div>
                </div>
                <span className="absolute bottom-0 left-7 h-[3px] w-0 bg-[#f26522] transition-all duration-500 group-hover:w-[calc(100%-56px)]" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="bg-[#fff7f2] px-5 py-16 md:px-10 md:py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] items-start gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div className="overflow-hidden rounded-[30px] bg-white p-3 shadow-[0_30px_70px_-35px_rgba(242,101,34,.28)]">
            <img src={cablingApproach} alt="Network rack and cabling" className="h-[420px] w-full rounded-[24px] object-cover" />
          </div>
          
          <div className="lg:pt-2">
            <div className="flex w-full justify-center"><SectionLabel>Our Approach</SectionLabel></div>
            <h2 className="mx-auto mt-5 max-w-[1100px] text-center text-[30px] font-normal leading-[1.02] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px]">
              From planning to a <span className="text-[#f26522]">clean, connected environment.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-8 text-slate-600">
              Ramton can help turn network requirements into a practical physical infrastructure plan, with attention to organization, reliability and future expansion.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {checklist.map(x => (
                <div key={x} className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_16px_40px_-30px_rgba(15,23,42,.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f26522]/40 hover:shadow-[0_24px_50px_-30px_rgba(242,101,34,.20)]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f26522]" />
                  <span className="text-sm font-semibold text-slate-700">{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY PARTNERS */}
      <Partners />
      {/* WHY CHOOSE US — SHARED HARDWARE-STYLE SECTION */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24">
        <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[920px] text-center">
            <SectionLabel>Why Choose Ramton</SectionLabel>
            <h2 className="text-[34px] font-medium leading-[1.05] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[62px]">
              Reliable technology.<br /><span className="text-[#df4f08]">Practical business outcomes.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">We combine infrastructure expertise, practical design and ongoing support to make connectivity reliable, secure and ready for growth.</p>
          </div>
          <div className="relative mx-auto mt-14 max-w-[1360px] lg:grid lg:grid-cols-[1fr_430px_1fr] lg:items-center lg:gap-5">
            <div className="grid gap-5">
              <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">01</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Reliable connectivity</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Keep teams, devices and business systems connected with dependable infrastructure.</p>
              </div><div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">02</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Scalable architecture</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Design a network that can expand with new users, locations and applications.</p>
              </div>
            </div>
            <div className="my-6 hidden overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:my-0 lg:block">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80" alt="Networking technology workspace" loading="lazy" decoding="async" className="h-[570px] w-full object-cover" />
            </div>
            <div className="grid gap-5">
              <div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">03</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Secure by design</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Build protection into the network without compromising everyday productivity.</p>
              </div><div className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] text-sm font-bold transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">04</div>
                <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">Lifecycle support</h3>
                <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">Get practical assistance from planning and deployment through maintenance and upgrades.</p>
              </div>
            </div>
            <div className="mt-5 overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:hidden">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" alt="Networking technology workspace" loading="lazy" decoding="async" className="h-[360px] w-full object-cover sm:h-[430px]" />
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
