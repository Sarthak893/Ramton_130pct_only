import { Link } from "react-router-dom";
import Silk from "../Silk.jsx";
import { ArrowRight, Wifi, Radio, Gauge, Smartphone, ShieldCheck, Map, Settings2, Headphones } from "lucide-react";
import SolutionHero from "../../components/SolutionHero";
import Partners from "../../components/SolutionTechnologyPartners";

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

const features = [
  { icon: Wifi, title: "Business Wi-Fi", text: "Reliable wireless access designed around users, devices and workplace requirements.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85" },
  { icon: Map, title: "Coverage Planning", text: "Plan access-point placement and coverage for offices, floors and larger environments.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85" },
  { icon: Gauge, title: "Consistent Performance", text: "Create a wireless environment focused on stable connectivity and everyday productivity.", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=85" },
  { icon: Smartphone, title: "Device Mobility", text: "Support laptops, mobiles, IoT devices and collaboration tools as teams move through the workplace.", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=85" },
  { icon: ShieldCheck, title: "Secure Access", text: "Combine wireless convenience with appropriate access controls and network protection.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=85" },
  { icon: Settings2, title: "Scalable Design", text: "Add users, areas and devices without losing sight of the wider network architecture.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85" }
];


export default function WirelessNetworks() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-[Inter,Arial,sans-serif] text-[#111111]">
      
      <SolutionHero
        eyebrow="Wireless Networks"
        title="Wireless connectivity that"
        accent="keeps business moving."
        description="Connect employees, devices and business applications with wireless infrastructure planned for reliable coverage, performance and growth."
      />

      {/* WIRELESS CAPABILITIES — FULL-WIDTH STACK */}
      <section className="bg-white px-5 py-16 md:px-8 md:py-20 lg:px-10">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="mx-auto mb-10 max-w-[900px] text-center">
            <div className="flex w-full justify-center"><SectionLabel>Wireless Capabilities</SectionLabel></div>
            <h2 className="mx-auto mt-5 max-w-[1100px] text-center text-[30px] font-normal leading-[1.02] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px]">
              Stay connected wherever <span className="text-[#f26522]">your business operates.</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              A good wireless network balances coverage, performance, security and flexibility. Ramton helps bring those pieces together into a practical workplace solution.
            </p>
          </div>
          <div className="flex w-full flex-col gap-6">
            {features.map(({ icon: Icon, title, text, image }, i) => (
              <article key={title} className="group relative flex w-full flex-col overflow-hidden rounded-[25px] border-2 border-white bg-white shadow-[0_18px_50px_-30px_rgba(15,23,42,.18)] transition-all duration-500 hover:-translate-y-1 hover:border-[#f26522] hover:shadow-[0_30px_65px_-30px_rgba(242,101,34,.28)] lg:min-h-[300px] lg:flex-row">
                <div className="relative h-[220px] w-full shrink-0 overflow-hidden lg:h-auto lg:w-[46%]">
                  <img src={image} alt={title} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/95 text-[#f26522] shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:bg-[#f26522] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="absolute bottom-5 left-5 rounded-full bg-black/55 px-4 py-2 text-xs font-bold tracking-[0.16em] text-white backdrop-blur-sm">0{i + 1}</span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center p-7 sm:p-9 lg:p-12">
                  <h3 className="text-[25px] font-extrabold tracking-[-0.025em] text-slate-950 transition-colors duration-300 group-hover:text-[#f26522] sm:text-[30px]">{title}</h3>
                  <p className="mt-4 max-w-2xl text-[15px] leading-8 text-slate-600 sm:text-base">{text}</p>
                  <span className="mt-7 h-[2px] w-16 bg-[#f26522] transition-all duration-500 group-hover:w-28" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORKPLACE SECTION */}
      <section className="bg-[#fff7f2] px-5 py-16 md:px-10 md:py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] items-start gap-12 lg:grid-cols-[1fr_.9fr]">
          <div className="overflow-hidden rounded-[30px] bg-white p-3 shadow-[0_30px_70px_-35px_rgba(242,101,34,.28)]">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=90" alt="Modern connected workplace" className="h-[420px] w-full rounded-[24px] object-cover" />
          </div>
          
          <div className="lg:pt-2">
            <div className="flex w-full justify-center"><SectionLabel>Designed Around Your Workplace</SectionLabel></div>
            <h2 className="mx-auto mt-5 max-w-[1100px] text-center text-[30px] font-normal leading-[1.02] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px]">
              Coverage is only <span className="text-[#f26522]">the beginning.</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We look at users, devices, physical spaces and business applications together so the wireless environment supports how your organization actually works.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Site assessment", "Coverage planning", "Access-point placement", "Performance checks", "Secure configuration", "Ongoing support"].map(x => (
                <div key={x} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-[0_16px_40px_-30px_rgba(15,23,42,.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f26522]/40 hover:shadow-[0_24px_50px_-30px_rgba(242,101,34,.20)]">
                  {x}
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
