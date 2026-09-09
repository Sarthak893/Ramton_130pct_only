import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import { partners, PartnerLogo } from "../data/partners";
import { useEffect, useState } from "react";


import Silk from './Silk.jsx';


import heroOffice from "../assets/ramton-office-hero.png";

/* =========================================================
   HELPERS
========================================================= */

function CountUp({ target, suffix = "", duration = 1200 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [refElement, setRefElement] = useState(null);

  useEffect(() => {
    if (!refElement || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(refElement);

    return () => observer.disconnect();
  }, [refElement, hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.floor(target * eased);

      setCount((previous) =>
        previous === nextValue ? previous : nextValue
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, target, duration]);

  return (
    <span ref={setRefElement}>
      {count}
      {suffix}
    </span>
  );
}

function Arrow({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={`h-6 w-5=6 ${className}`}
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function Icon({ children, className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

function SectionPill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] md:px-8 md:py-3.5 md:text-[13px] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)]">
      {children}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] md:px-8 md:py-3.5 md:text-[13px] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)]">
      {children}
    </div>
  );
}

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    title: "Hardware",
    desc: "Laptops, desktops, servers and professional peripherals from leading brands, selected to deliver dependable performance for your everyday business operations.",
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=700&auto=format&fit=crop&q=70",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 20h8M12 18v2" />
      </>
    ),
  },
  {
    title: "Software",
    desc: "Enterprise software and business applications that simplify workflows, improve productivity and give your teams the digital tools they need to work smarter.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&auto=format&fit=crop&q=70",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 9l3 3-3 3M12 15h5" />
      </>
    ),
  },
  {
    title: "Security",
    desc: "Advanced cybersecurity solutions designed to protect your infrastructure, data and business operations from evolving digital threats.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&auto=format&fit=crop&q=70",
    icon: (
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
    ),
  },
  {
    title: "Networking",
    desc: "Reliable networking infrastructure that keeps your people, systems and locations connected with secure, stable and seamless communication.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&auto=format&fit=crop&q=70",
    icon: (
      <>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="12" r="2.5" />
        <path d="M8 6h4a4 4 0 014 4" />
        <path d="M8 18h4a4 4 0 004-4" />
      </>
    ),
  },
  {
    title: "AMC",
    desc: "Ongoing maintenance and support services that keep your technology reliable, secure and running smoothly while minimizing unnecessary downtime.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&auto=format&fit=crop&q=70",
    icon: (
      <>
        <path d="M3 18v-6a9 9 0 0118 0v6" />
        <path d="M21 19a2 2 0 01-2 2h-1v-8h3v6z" />
        <path d="M3 19a2 2 0 002 2h1v-8H3v6z" />
      </>
    ),
  },
];

/* =========================================================
   WHY CHOOSE
========================================================= */

const reasons = [
  {
    title: "Expertise",
    desc: "Deep industry knowledge and skilled professionals.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6" />
        <path d="M16 6.5a3 3 0 010 6" />
        <path d="M22 20c0-2.8-2-5-5-5.8" />
      </>
    ),
  },
  {
    title: "Reliability",
    desc: "Solutions you can depend on.",
    icon: (
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
    ),
  },
  {
    title: "Customer Focus",
    desc: "Tailored solutions for your business.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
  },
  {
    title: "Support",
    desc: "Dedicated support beyond delivery.",
    icon: (
      <>
        <path d="M3 18v-6a9 9 0 0118 0v6" />
        <path d="M21 19a2 2 0 01-2 2h-1v-8h3v6z" />
        <path d="M3 19a2 2 0 002 2h1v-8H3v6z" />
      </>
    ),
  },
];


/* =========================================================
   3D DECORATIVE OBJECTS
========================================================= */
function ThreeDObjects({ dark = false }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className={`ramton-3d-blob ramton-3d-blob-a ${dark ? "ramton-3d-dark" : ""}`} />
      <div className={`ramton-3d-blob ramton-3d-blob-b ${dark ? "ramton-3d-dark" : ""}`} />
      <div className={`ramton-3d-ring ramton-3d-ring-a ${dark ? "ramton-3d-dark" : ""}`} />
      <div className={`ramton-3d-ring ramton-3d-ring-b ${dark ? "ramton-3d-dark" : ""}`} />
      <div className={`ramton-3d-sphere ramton-3d-sphere-a ${dark ? "ramton-3d-dark" : ""}`} />
      <div className={`ramton-3d-sphere ramton-3d-sphere-b ${dark ? "ramton-3d-dark" : ""}`} />
    </div>
  );
}


/* =========================================================
   ANIMATED SOLUTION VISUALS
   Premium live UI scenes — the visual itself performs continuously.
========================================================= */
function AnimatedSolutionVisual({ type }) {
  const common = "absolute inset-0 overflow-hidden";

  if (type === "Hardware") return (
    <div className={`${common} solution-scene hardware-scene`}>
      <div className="scene-noise" />
      <div className="hardware-glow hardware-glow-a" />
      <div className="hardware-glow hardware-glow-b" />
      <div className="absolute left-[9%] top-[14%] h-[73%] w-[78%] rounded-[18px] border border-white/40 bg-white/95 shadow-[0_25px_60px_-25px_rgba(0,0,0,.45)] hardware-device">
        <div className="flex h-7 items-center justify-between border-b border-slate-200 px-3">
          <div className="flex gap-1.5"><i/><i/><i/></div>
          <span className="h-2 w-14 rounded-full bg-emerald-100"><b className="hardware-status-dot"/></span>
        </div>
        <div className="grid grid-cols-[1.08fr_.92fr] gap-3 p-4">
          <div>
            <div className="h-2.5 w-28 rounded-full bg-slate-200" />
            <div className="mt-4 space-y-2">
              <span className="block h-2 rounded-full bg-orange-100 hardware-line line-1" />
              <span className="block h-2 w-[82%] rounded-full bg-slate-100 hardware-line line-2" />
              <span className="block h-2 w-[68%] rounded-full bg-slate-100 hardware-line line-3" />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {["CPU","RAM","SSD"].map((x,i)=><div key={x} className="rounded-lg bg-slate-50 p-2 text-center"><span className="block text-[6px] font-bold text-slate-400">{x}</span><span className="mt-1 block text-[9px] font-bold text-[#f26522] hardware-value" style={{animationDelay:`${i*.3}s`}}>{[68,74,92][i]}%</span></div>)}
            </div>
          </div>
          <div className="relative rounded-xl bg-[#fff1e8] p-3">
            <div className="absolute left-3 top-3 h-2 w-12 rounded bg-[#f26522]" />
            <div className="absolute left-3 right-3 top-10 h-12 rounded-lg bg-white shadow-sm hardware-chart">
              <div className="absolute inset-x-2 bottom-2 flex h-8 items-end gap-1">{[35,52,42,70,58,82,66].map((h,i)=><span key={i} className="hardware-bar" style={{height:`${h}%`,animationDelay:`${i*.12}s`}} />)}</div>
            </div>
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between"><span className="text-[7px] font-semibold text-slate-400">Performance</span><span className="text-[9px] font-bold text-[#f26522]">98.4%</span></div>
          </div>
        </div>
      </div>
      <div className="scene-chip hardware-chip-top"><span className="chip-dot"/> Device Connected</div>
      <div className="scene-chip hardware-chip-bottom">Health <b>Excellent</b></div>
      <div className="hardware-orb orb-1"/><div className="hardware-orb orb-2"/>
    </div>
  );

  if (type === "Software") return (
    <div className={`${common} solution-scene software-scene`}>
      <div className="scene-noise" />
      <div className="software-grid" />
      <div className="absolute left-[8%] top-[12%] h-[75%] w-[84%] overflow-hidden rounded-[16px] border border-white/25 bg-[#12151b] shadow-[0_25px_60px_-25px_rgba(0,0,0,.55)] software-window">
        <div className="flex h-7 items-center justify-between border-b border-white/10 px-3">
          <div className="flex gap-1.5"><i/><i/><i/></div><span className="text-[6px] font-bold uppercase tracking-[.18em] text-emerald-300">Build Pipeline</span>
        </div>
        <div className="grid h-[calc(100%-28px)] grid-cols-[.29fr_1fr]">
          <div className="border-r border-white/10 p-3"><div className="h-2 w-10 rounded bg-[#f26522]"/><div className="mt-4 space-y-2">{[1,2,3,4,5].map(i=><span key={i} className={`block h-1.5 rounded bg-white/10 ${i===2?'w-full bg-white/20':'w-[70%]'}`} />)}</div><div className="mt-6 h-7 rounded-lg bg-white/5 p-2"><span className="block h-1.5 w-8 rounded bg-emerald-300/60"/></div></div>
          <div className="relative p-4 font-mono text-[7px] leading-4 text-slate-300">
            <div><span className="text-orange-400">const</span> app = <span className="text-white">ready</span>;</div><div><span className="text-orange-400">deploy</span>(app);</div><div className="text-slate-500">// production build</div><div className="mt-1"><span className="text-emerald-300">✓</span> tests passed</div><div><span className="text-emerald-300">✓</span> security checked</div>
            <div className="absolute bottom-5 left-4 right-4 h-1.5 overflow-hidden rounded-full bg-white/10"><span className="block h-full w-[72%] rounded-full bg-[#f26522] software-progress"/></div>
            <div className="absolute bottom-2 right-4 text-[6px] text-slate-500">72% deploying...</div>
          </div>
        </div>
      </div>
      <div className="scene-chip software-chip-top"><span className="chip-pulse"/> Build successful</div>
      <div className="scene-chip software-chip-bottom">Deployment <b>LIVE</b></div>
      <div className="software-cursor"/>
      <div className="software-float-card float-a">API <b>200</b></div><div className="software-float-card float-b">Cloud <b>99.9%</b></div>
    </div>
  );

  if (type === "Security") return (
    <div className={`${common} solution-scene security-scene`}>
      <div className="security-scan" />
      <div className="security-ring ring-1"/><div className="security-ring ring-2"/><div className="security-ring ring-3"/>
      <div className="security-beam" />
      <div className="security-core">
        <div className="security-shield"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg></div>
        <span>PROTECTED</span>
      </div>
      {[['threat','8%','left-[8%] top-[18%]'],['firewall','ACTIVE','right-[7%] top-[20%]'],['scan','CLEAR','left-[11%] bottom-[15%]'],['access','SAFE','right-[9%] bottom-[14%]']].map(([a,b,pos],i)=><div key={a} className={`scene-chip security-chip ${pos}`} style={{animationDelay:`${i*.45}s`}}><span className="chip-dot"/>{a} <b>{b}</b></div>)}
      {[0,1,2,3,4,5].map(i=><span key={i} className="threat-node" style={{'--i':i}} />)}
    </div>
  );

  if (type === "Networking") return (
    <div className={`${common} solution-scene networking-scene`}>
      <div className="network-grid" />
      <div className="network-pulse pulse-1"/><div className="network-pulse pulse-2"/>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path className="network-path" d="M17 29 L50 50 L83 29"/>
        <path className="network-path" d="M16 72 L50 50 L84 72"/>
        <path className="network-path" d="M17 29 L16 72"/>
        <path className="network-path" d="M83 29 L84 72"/>

        {/* Data packets travel on the exact same paths as the network lines. */}
        <circle r="0.95" className="network-packet-svg">
          <animateMotion dur="2.8s" repeatCount="indefinite" path="M17 29 L50 50 L83 29" rotate="auto"/>
        </circle>
        <circle r="0.95" className="network-packet-svg">
          <animateMotion dur="3.1s" begin="-.9s" repeatCount="indefinite" path="M84 72 L50 50 L16 72" rotate="auto"/>
        </circle>
        <circle r="0.8" className="network-packet-svg packet-soft">
          <animateMotion dur="2.6s" begin="-.35s" repeatCount="indefinite" path="M17 29 L16 72"/>
        </circle>
        <circle r="0.8" className="network-packet-svg packet-soft">
          <animateMotion dur="2.9s" begin="-1.45s" repeatCount="indefinite" path="M84 72 L83 29"/>
        </circle>
      </svg>
      {[['left-[10%] top-[19%]','A'],['right-[10%] top-[19%]','B'],['left-[10%] bottom-[15%]','C'],['right-[10%] bottom-[15%]','D']].map(([pos,label],i)=><div key={label} className={`network-node ${pos}`}><span>{label}</span><i className="node-signal"/></div>)}
      <div className="network-hub"><div className="hub-core"/><div className="hub-port-row">{Array.from({length:8}).map((_,i)=><span key={i} style={{animationDelay:`${i*.16}s`}} />)}</div><b>CORE SWITCH</b></div>
      <div className="scene-chip network-chip-top"><span className="chip-dot"/> 24 Devices Online</div>
      <div className="scene-chip network-chip-bottom">Latency <b>12ms</b></div>
    </div>
  );

  return (
    <div className={`${common} solution-scene amc-scene`}>
      <div className="scene-noise" />
      <div className="absolute left-[8%] top-[12%] h-[76%] w-[84%] rounded-[17px] border border-white/35 bg-white/95 p-4 shadow-[0_25px_60px_-25px_rgba(0,0,0,.45)] amc-dashboard">
        <div className="flex items-center justify-between"><div><div className="h-2.5 w-24 rounded bg-slate-200"/><div className="mt-1.5 h-1.5 w-14 rounded bg-slate-100"/></div><span className="rounded-full bg-emerald-50 px-2 py-1 text-[6px] font-bold text-emerald-500">ALL SYSTEMS OK</span></div>
        <div className="mt-4 grid grid-cols-3 gap-2">{[['Uptime','99.9%'],['Tickets','04'],['Health','98%']].map(([x,n],i)=><div key={x} className="rounded-xl bg-[#fff7f2] p-2"><span className="block text-[6px] font-semibold text-slate-400">{x}</span><b className="mt-1 block text-[11px] text-[#111318]" style={{animationDelay:`${i*.25}s`}}>{n}</b><span className="mt-1.5 block h-1 rounded-full bg-orange-100"><span className="block h-full rounded-full bg-[#f26522] amc-meter" style={{width:`${[90,62,82][i]}%`,animationDelay:`${i*.35}s`}}/></span></div>)}</div>
        <div className="mt-3 grid grid-cols-[1.45fr_.55fr] gap-2"><div className="relative h-20 overflow-hidden rounded-xl bg-slate-50 p-3"><div className="absolute inset-x-3 bottom-3 top-3 flex items-end gap-1">{[32,48,39,62,52,78,66,88,72].map((h,i)=><span key={i} className="amc-bar" style={{height:`${h}%`,animationDelay:`${i*.1}s`}}/>)}</div></div><div className="flex items-center justify-center rounded-xl bg-[#fff1e8]"><div className="amc-gauge"><span>24h</span></div></div></div>
      </div>
      <div className="scene-chip amc-chip-top"><span className="chip-pulse"/> Ticket resolved</div>
      <div className="scene-chip amc-chip-bottom">Response <b>Fast</b></div>
      <div className="amc-wrench">⌁</div>
    </div>
  );
}

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const revealRef = useReveal([]);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-ramton-motion]");
    if (!nodes.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ramton-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const solutionRoutes = {
    Hardware: "/hardware",
    Software: "/software",
    Security: "/security",
    Networking: "/networking",
    AMC: "/amc",
  };

  const orbitPartners = partners.filter((_, i) => i % 2 === 0);

  return (
    <main
      ref={revealRef}
      className="relative overflow-hidden  bg-white font-[Inter,Arial,sans-serif] text-[#111318]"
    >
      {/* =====================================================
          REFERENCE-STYLE MOTION
      ===================================================== */}
      <style>{`

        /* =====================================================
           PREMIUM PAGE MOTION — ADDED, EXISTING ANIMATIONS KEPT
        ===================================================== */
        @keyframes ramtonPageEnter {
          from { opacity: 0; transform: translate3d(0, 18px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes ramtonHeroReveal {
          from { opacity: 0; transform: translate3d(0, 52px, 0); filter: blur(8px); }
          to { opacity: 1; transform: translate3d(0, 0, 0); filter: blur(0); }
        }
        @keyframes ramtonSoftScale {
          from { opacity: 0; transform: translate3d(0, 28px, 0) scale(.965); }
          to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes ramtonImageIn {
          from { opacity: 0; transform: scale(1.08); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes ramtonGlowPulse {
          0%,100% { opacity: .35; transform: scale(1); }
          50% { opacity: .75; transform: scale(1.08); }
        }

        .ramton-page-motion {
          animation: ramtonPageEnter .8s cubic-bezier(.22,1,.36,1) both;
        }

        .ramton-load-reveal {
          opacity: 0;
          animation: ramtonHeroReveal .95s cubic-bezier(.22,1,.36,1) both;
        }
        .ramton-load-1 { animation-delay: .08s; }
        .ramton-load-2 { animation-delay: .20s; }
        .ramton-load-3 { animation-delay: .34s; }
        .ramton-load-4 { animation-delay: .50s; }
        .ramton-load-5 { animation-delay: .66s; }

        [data-ramton-motion] {
          opacity: 0;
          transform: translate3d(0, 42px, 0);
          transition:
            opacity .9s cubic-bezier(.22,1,.36,1),
            transform .9s cubic-bezier(.22,1,.36,1);
          will-change: opacity, transform;
        }
        [data-ramton-motion].ramton-visible {
          opacity: 1;
          transform: translate3d(0,0,0);
        }
        [data-ramton-motion="scale"] { transform: translate3d(0, 28px, 0) scale(.96); }
        [data-ramton-motion="scale"].ramton-visible { transform: translate3d(0,0,0) scale(1); }
        [data-ramton-motion="left"] { transform: translate3d(-45px, 22px, 0); }
        [data-ramton-motion="right"] { transform: translate3d(45px, 22px, 0); }

        .ramton-stagger > * {
          opacity: 0;
          transform: translate3d(0, 24px, 0);
          transition:
            opacity .72s cubic-bezier(.22,1,.36,1),
            transform .72s cubic-bezier(.22,1,.36,1);
        }
        .ramton-stagger.ramton-visible > * { opacity: 1; transform: translate3d(0,0,0); }
        .ramton-stagger.ramton-visible > *:nth-child(1) { transition-delay:.04s; }
        .ramton-stagger.ramton-visible > *:nth-child(2) { transition-delay:.11s; }
        .ramton-stagger.ramton-visible > *:nth-child(3) { transition-delay:.18s; }
        .ramton-stagger.ramton-visible > *:nth-child(4) { transition-delay:.25s; }
        .ramton-stagger.ramton-visible > *:nth-child(5) { transition-delay:.32s; }

        .ramton-motion-card {
          transition:
            transform .5s cubic-bezier(.22,1,.36,1),
            box-shadow .5s cubic-bezier(.22,1,.36,1),
            border-color .35s ease;
        }
        .ramton-motion-card:hover {
          transform: translateY(-7px);
        }

        .ramton-motion-image {
          overflow: hidden;
        }
        .ramton-motion-image img {
          transition: transform 1s cubic-bezier(.22,1,.36,1);
        }
        .ramton-motion-image:hover img {
          transform: scale(1.045);
        }

        .ramton-motion-glow {
          animation: ramtonGlowPulse 5s ease-in-out infinite;
        }

        .ramton-motion-button {
          transition:
            transform .4s cubic-bezier(.22,1,.36,1),
            box-shadow .4s ease;
        }
        .ramton-motion-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 22px 48px -28px rgba(242,101,34,.48);
        }

        @media (prefers-reduced-motion: reduce) {
          .ramton-page-motion,
          .ramton-load-reveal,
          .ramton-motion-glow { animation: none !important; }
          [data-ramton-motion],
          .ramton-stagger > * {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }


        @keyframes ramton-float {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(-8deg) scale(1); }
          50% { transform: translate3d(18px, -24px, 0) rotate(7deg) scale(1.04); }
        }

        @keyframes ramton-float-reverse {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(10deg) scale(1); }
          50% { transform: translate3d(-20px, 18px, 0) rotate(-7deg) scale(.96); }
        }

        @keyframes ramton-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes ramton-orbit-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes ramton-orbit-counter {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .ramton-float {
          animation: ramton-float 8s ease-in-out infinite;
        }

        .ramton-float-reverse {
          animation: ramton-float-reverse 10s ease-in-out infinite;
        }

        .ramton-orbit {
          animation: ramton-orbit 34s linear infinite;
        }

        .ramton-orbit-reverse {
          animation: ramton-orbit-reverse 42s linear infinite;
        }

        .ramton-orbit-counter {
          animation: ramton-orbit-counter 42s linear infinite;
        }


        .ramton-orbit-item {
          transform: translate(-50%, -50%) rotate(var(--orbit-angle)) translateY(calc(-1 * var(--orbit-radius)));
        }

        .ramton-orbit-counter {
          animation: ramton-orbit-counter 34s linear infinite reverse;
        }

        .ramton-3d-blob,
        .ramton-3d-ring,
        .ramton-3d-sphere {
          position: absolute;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .ramton-3d-blob {
          width: 250px;
          height: 250px;
          border-radius: 42% 58% 55% 45% / 44% 42% 58% 56%;
          background:
            radial-gradient(circle at 30% 25%, rgba(255,255,255,.98), transparent 20%),
            radial-gradient(circle at 65% 30%, rgba(255,190,115,.92), transparent 28%),
            linear-gradient(145deg, #ffb36f 0%, #f26522 45%, #9c350d 100%);
          box-shadow:
            inset -25px -28px 55px rgba(91,25,4,.32),
            inset 18px 18px 30px rgba(255,255,255,.35),
            0 35px 80px -35px rgba(242,101,34,.65);
          filter: saturate(1.08);
          opacity: .94;
          animation: ramton-blob-float 11s ease-in-out infinite;
        }

        .ramton-3d-blob-b {
          width: 180px;
          height: 180px;
          right: -55px;
          bottom: 55px;
          border-radius: 58% 42% 45% 55% / 50% 55% 45% 50%;
          animation-delay: -4s;
          animation-duration: 13s;
          opacity: .82;
        }

        .ramton-3d-blob-a {
          left: -90px;
          top: 110px;
        }

        .ramton-3d-ring {
          width: 210px;
          height: 125px;
          border: 28px solid rgba(242,101,34,.82);
          border-radius: 50%;
          box-shadow:
            inset 8px 8px 15px rgba(255,255,255,.42),
            inset -12px -12px 25px rgba(100,27,5,.32),
            0 28px 55px -28px rgba(242,101,34,.55);
          transform: rotate(-24deg) perspective(500px) rotateX(18deg) rotateY(-18deg);
          opacity: .78;
          animation: ramton-ring-float 12s ease-in-out infinite;
        }

        .ramton-3d-ring-a {
          right: -55px;
          top: 95px;
        }

        .ramton-3d-ring-b {
          left: 8%;
          bottom: -80px;
          width: 165px;
          height: 100px;
          border-width: 22px;
          opacity: .48;
          animation-delay: -6s;
        }

        .ramton-3d-sphere {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background: radial-gradient(circle at 28% 22%, #fff 0 8%, #ffcfaa 15%, #f26522 48%, #8d2d09 100%);
          box-shadow: inset -12px -14px 22px rgba(74,20,3,.32), inset 8px 8px 15px rgba(255,255,255,.4), 0 22px 40px -20px rgba(0,0,0,.3);
          animation: ramton-sphere-float 8s ease-in-out infinite;
        }

        .ramton-3d-sphere-a { left: 13%; top: 31%; }
        .ramton-3d-sphere-b { right: 16%; bottom: 18%; width: 42px; height: 42px; animation-delay: -3s; }

        .ramton-3d-dark { opacity: .68; }

        @keyframes ramton-blob-float {
          0%, 100% { transform: translate3d(0,0,0) rotate(-10deg) scale(1); }
          50% { transform: translate3d(25px,-28px,0) rotate(9deg) scale(1.06); }
        }

        @keyframes ramton-ring-float {
          0%, 100% { transform: rotate(-24deg) translate3d(0,0,0) scale(1); }
          50% { transform: rotate(-8deg) translate3d(-18px,22px,0) scale(1.05); }
        }

        @keyframes ramton-sphere-float {
          0%, 100% { transform: translate3d(0,0,0); }
          50% { transform: translate3d(14px,-20px,0); }
        }

        @media (max-width: 639px) {
          .ramton-orbit {
            --orbit-radius: 205px !important;
          }
          .ramton-orbit-item {
            width: 48px !important;
            height: 48px !important;
          }

          .ramton-3d-blob-a { left: -150px; top: 80px; width: 190px; height: 190px; opacity: .55; }
          .ramton-3d-blob-b { right: -110px; bottom: 30px; width: 150px; height: 150px; }
          .ramton-3d-ring-a { right: -105px; top: 100px; transform: rotate(-24deg) perspective(500px) rotateX(18deg) rotateY(-18deg) scale(.75); }
          .ramton-3d-ring-b { left: -45px; bottom: -70px; }
          .ramton-3d-sphere-a { left: 8%; top: 20%; width: 42px; height: 42px; }
        }


        .solution-scene { isolation:isolate; }
        .solution-scene i { display:block; width:6px; height:6px; border-radius:999px; background:#cbd5e1; }
        .scene-noise { position:absolute; inset:0; opacity:.10; background-image:radial-gradient(rgba(255,255,255,.9) 1px,transparent 1px); background-size:11px 11px; }
        .scene-chip { position:absolute; z-index:30; display:flex; align-items:center; gap:5px; border:1px solid rgba(255,255,255,.7); border-radius:999px; background:rgba(255,255,255,.96); padding:6px 10px; box-shadow:0 14px 28px -16px rgba(0,0,0,.55); font-size:7px; font-weight:700; color:#475569; white-space:nowrap; animation:chip-float 4.5s ease-in-out infinite; }
        .scene-chip b { color:#f26522; }
        .chip-dot,.chip-pulse { display:inline-block; width:5px; height:5px; border-radius:999px; background:#22c55e; box-shadow:0 0 0 0 rgba(34,197,94,.4); animation:chip-pulse 1.8s infinite; }
        .hardware-device { animation:device-breathe 5s ease-in-out infinite; }
        .hardware-glow { position:absolute; border-radius:999px; filter:blur(22px); background:rgba(255,255,255,.35); animation:glow-drift 7s ease-in-out infinite; }
        .hardware-glow-a { width:120px;height:120px;left:-25px;bottom:-40px; }
        .hardware-glow-b { width:100px;height:100px;right:-15px;top:-30px;animation-delay:-3s; }
        .hardware-chip-top { right:7%; top:10%; }
        .hardware-chip-bottom { left:7%; bottom:10%; animation-delay:-2s; }
        .hardware-status-dot { display:block;width:4px;height:4px;margin:1px 2px;border-radius:999px;background:#22c55e;animation:status-blink 1.4s infinite; }
        .hardware-line { transform-origin:left; animation:line-grow 2.8s ease-in-out infinite alternate; }
        .hardware-line.line-2{animation-delay:-.5s}.hardware-line.line-3{animation-delay:-1s}
        .hardware-value { animation:value-pulse 2.2s ease-in-out infinite; }
        .hardware-bar { flex:1; border-radius:3px 3px 0 0; background:#f26522; transform-origin:bottom; animation:bar-breathe 1.7s ease-in-out infinite alternate; }
        .hardware-orb { position:absolute;border-radius:999px;background:rgba(255,255,255,.9);box-shadow:0 0 22px rgba(255,255,255,.5);animation:orb-float 5s ease-in-out infinite; }
        .orb-1{width:8px;height:8px;right:20%;bottom:23%}.orb-2{width:5px;height:5px;left:25%;top:20%;animation-delay:-2s}

        .software-grid { position:absolute; inset:0; opacity:.12; background-image:linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px); background-size:30px 30px; transform:perspective(500px) rotateX(55deg) scale(1.7); transform-origin:center bottom; }
        .software-window { animation:window-lift 6s ease-in-out infinite; }
        .software-progress { transform-origin:left; animation:deploy-progress 3.4s ease-in-out infinite; }
        .software-chip-top { right:7%; top:10%; animation-delay:-.8s; }
        .software-chip-bottom { left:7%; bottom:10%; animation-delay:-2.2s; }
        .software-cursor { position:absolute; width:10px;height:14px; right:23%;bottom:26%; border-left:2px solid white; border-bottom:2px solid white; transform:rotate(-25deg); filter:drop-shadow(0 3px 5px rgba(0,0,0,.4)); animation:cursor-move 3.8s ease-in-out infinite; }
        .software-float-card { position:absolute; z-index:25; border:1px solid rgba(255,255,255,.55); border-radius:10px; background:rgba(255,255,255,.95); padding:5px 8px; font-size:6px;font-weight:700;color:#64748b;box-shadow:0 14px 28px -16px rgba(0,0,0,.55);animation:chip-float 4s ease-in-out infinite; }
        .software-float-card b {color:#f26522}.float-a{left:12%;top:24%}.float-b{right:11%;bottom:23%;animation-delay:-1.7s}

        .security-ring { position:absolute; left:50%;top:50%;border:1px solid rgba(255,255,255,.30);border-radius:50%;transform:translate(-50%,-50%); }
        .security-ring:after { content:"";position:absolute;inset:10%;border:1px dashed rgba(255,255,255,.20);border-radius:50%; }
        .ring-1{width:240px;height:240px;animation:security-rotate 16s linear infinite}.ring-2{width:180px;height:180px;animation:security-rotate-reverse 11s linear infinite}.ring-3{width:125px;height:125px;animation:security-breathe 4s ease-in-out infinite}
        .security-scan { position:absolute;left:50%;top:50%;width:220px;height:220px;transform:translate(-50%,-50%);border-radius:50%;background:conic-gradient(from 0deg,transparent 0deg,rgba(255,255,255,.28) 18deg,transparent 48deg);animation:security-scan 3.8s linear infinite; }
        .security-beam { position:absolute;left:50%;top:50%;width:190px;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.9),transparent);transform-origin:left;animation:security-beam 3s ease-in-out infinite; }
        .security-core { position:absolute;left:50%;top:50%;z-index:20;display:flex;flex-direction:column;align-items:center;justify-content:center;width:108px;height:108px;transform:translate(-50%,-50%);border:1px solid rgba(255,255,255,.6);border-radius:28px;background:rgba(255,255,255,.96);box-shadow:0 25px 55px -25px rgba(0,0,0,.55);animation:core-breathe 3.6s ease-in-out infinite; }
        .security-shield { display:flex;align-items:center;justify-content:center;width:48px;height:48px;color:#f26522; }.security-shield svg{width:42px;height:42px;animation:shield-check 3s ease-in-out infinite}
        .security-core span{font-size:6px;font-weight:800;letter-spacing:.18em;color:#16a34a}.security-chip{animation:chip-float 4s ease-in-out infinite}.security-chip b{margin-left:2px}.threat-node{position:absolute;left:calc(50% + cos(calc(var(--i) * 60deg)) * 118px);top:calc(50% + sin(calc(var(--i) * 60deg)) * 82px);width:7px;height:7px;border-radius:50%;background:white;box-shadow:0 0 15px rgba(255,255,255,.7);animation:threat-pulse 2.5s ease-in-out infinite;animation-delay:calc(var(--i) * -.35s)}

        .network-grid { position:absolute;inset:0;opacity:.10;background-image:linear-gradient(rgba(255,255,255,.9) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.9) 1px,transparent 1px);background-size:32px 32px; }
        .network-path { fill:none;stroke:rgba(255,255,255,.42);stroke-width:.45;stroke-dasharray:2 2;animation:path-flow 2.4s linear infinite; }.network-pulse{position:absolute;left:50%;top:50%;border:1px solid rgba(255,255,255,.18);border-radius:50%;transform:translate(-50%,-50%);animation:network-wave 3s ease-out infinite}.pulse-1{width:130px;height:130px}.pulse-2{width:210px;height:210px;animation-delay:-1.5s}
        .network-node{position:absolute;z-index:10;width:46px;height:46px;border:1px solid rgba(255,255,255,.6);border-radius:15px;background:rgba(255,255,255,.96);display:flex;align-items:center;justify-content:center;box-shadow:0 18px 38px -20px rgba(0,0,0,.5);animation:node-float 4s ease-in-out infinite}.network-node span{font-size:8px;font-weight:800;color:#f26522}.node-signal{position:absolute;right:4px;top:4px;width:5px;height:5px;background:#22c55e!important;animation:status-blink 1.5s infinite}.network-node:nth-of-type(2){animation-delay:-1s}.network-node:nth-of-type(3){animation-delay:-2s}.network-node:nth-of-type(4){animation-delay:-3s}
        .network-hub{position:absolute;left:50%;top:50%;z-index:20;width:112px;height:88px;transform:translate(-50%,-50%);border:1px solid rgba(255,255,255,.65);border-radius:22px;background:rgba(255,255,255,.97);box-shadow:0 25px 55px -25px rgba(0,0,0,.55);padding:12px;text-align:center;animation:hub-breathe 4s ease-in-out infinite}.hub-core{margin:0 auto;width:24px;height:24px;border-radius:8px;background:#fff1e8;border:1px solid #ffd7c0;position:relative}.hub-core:after{content:"";position:absolute;inset:6px;border-radius:50%;background:#f26522;box-shadow:0 0 12px rgba(242,101,34,.45);animation:status-blink 1.5s infinite}.hub-port-row{display:flex;justify-content:center;gap:3px;margin-top:9px}.hub-port-row span{width:7px;height:3px;border-radius:2px;background:#f26522;opacity:.35;animation:port-flash 1.4s infinite}.network-hub b{display:block;margin-top:6px;font-size:6px;letter-spacing:.14em;color:#64748b}.network-packet-svg{fill:#fff;filter:drop-shadow(0 0 3px rgba(255,255,255,.95));opacity:.98}.network-packet-svg.packet-soft{opacity:.9}.network-chip-top{right:7%;top:10%}.network-chip-bottom{left:7%;bottom:10%;animation-delay:-2s}

        .amc-dashboard{animation:dashboard-breathe 5.5s ease-in-out infinite}.amc-meter{transform-origin:left;animation:meter-pulse 2.8s ease-in-out infinite}.amc-bar{flex:1;border-radius:3px 3px 0 0;background:#f26522;transform-origin:bottom;animation:bar-breathe 1.8s ease-in-out infinite alternate}.amc-gauge{position:relative;width:54px;height:54px;border-radius:50%;background:conic-gradient(#f26522 0 315deg,#ffe3d2 315deg 360deg);display:flex;align-items:center;justify-content:center;animation:gauge-spin 5s ease-in-out infinite}.amc-gauge:after{content:"";position:absolute;inset:7px;border-radius:50%;background:#fff1e8}.amc-gauge span{position:relative;z-index:2;font-size:8px;font-weight:800;color:#f26522}.amc-chip-top{right:7%;top:10%}.amc-chip-bottom{left:7%;bottom:10%;animation-delay:-2s}.amc-wrench{position:absolute;right:17%;bottom:21%;z-index:25;display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:10px;background:white;color:#f26522;font-size:19px;box-shadow:0 14px 25px -16px rgba(0,0,0,.5);animation:wrench-float 3.2s ease-in-out infinite}

        @keyframes chip-float{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(6px,-7px,0)}}
        @keyframes chip-pulse{0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,.35)}50%{box-shadow:0 0 0 5px rgba(34,197,94,0)}}
        @keyframes status-blink{0%,100%{opacity:.45;transform:scale(.8)}50%{opacity:1;transform:scale(1.25)}}
        @keyframes device-breathe{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-4px) rotate(.35deg)}}
        @keyframes glow-drift{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(15px,-10px) scale(1.15)}}
        @keyframes line-grow{from{transform:scaleX(.45);opacity:.45}to{transform:scaleX(1);opacity:1}}
        @keyframes value-pulse{0%,100%{opacity:.7}50%{opacity:1;transform:translateY(-1px)}}
        @keyframes bar-breathe{from{transform:scaleY(.65);opacity:.5}to{transform:scaleY(1);opacity:1}}
        @keyframes orb-float{0%,100%{transform:translate(0,0);opacity:.4}50%{transform:translate(12px,-14px);opacity:1}}
        @keyframes window-lift{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
        @keyframes deploy-progress{0%{transform:scaleX(.2)}65%{transform:scaleX(.85)}100%{transform:scaleX(.55)}}
        @keyframes cursor-move{0%,100%{transform:translate(0,0) rotate(-25deg)}35%{transform:translate(-18px,-12px) rotate(-25deg)}70%{transform:translate(10px,-5px) rotate(-25deg)}}
        @keyframes security-rotate{to{transform:translate(-50%,-50%) rotate(360deg)}}
        @keyframes security-rotate-reverse{to{transform:translate(-50%,-50%) rotate(-360deg)}}
        @keyframes security-breathe{0%,100%{transform:translate(-50%,-50%) scale(.92);opacity:.55}50%{transform:translate(-50%,-50%) scale(1.08);opacity:1}}
        @keyframes security-scan{to{transform:translate(-50%,-50%) rotate(360deg)}}
        @keyframes security-beam{0%,100%{transform:rotate(-18deg) scaleX(.35);opacity:.2}50%{transform:rotate(22deg) scaleX(1);opacity:1}}
        @keyframes core-breathe{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.045)}}
        @keyframes shield-check{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
        @keyframes threat-pulse{0%,100%{opacity:.25;transform:scale(.7)}50%{opacity:1;transform:scale(1.4)}}
        @keyframes path-flow{to{stroke-dashoffset:-10}}
        @keyframes network-wave{0%{transform:translate(-50%,-50%) scale(.5);opacity:.8}100%{transform:translate(-50%,-50%) scale(1.25);opacity:0}}
        @keyframes node-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
        @keyframes hub-breathe{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.035)}}
        @keyframes port-flash{0%,100%{opacity:.25}50%{opacity:1;box-shadow:0 0 8px rgba(242,101,34,.55)}}
        @keyframes data-a{0%{transform:translate(0,0);opacity:0}12%{opacity:1}88%{opacity:1}100%{transform:translate(105px,62px);opacity:0}}
        @keyframes data-b{0%{transform:translate(0,0);opacity:0}12%{opacity:1}88%{opacity:1}100%{transform:translate(-105px,62px);opacity:0}}
        @keyframes data-c{0%{transform:translate(0,0);opacity:0}12%{opacity:1}88%{opacity:1}100%{transform:translate(105px,-62px);opacity:0}}
        @keyframes data-d{0%{transform:translate(0,0);opacity:0}12%{opacity:1}88%{opacity:1}100%{transform:translate(-105px,-62px);opacity:0}}
        @keyframes dashboard-breathe{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
        @keyframes meter-pulse{0%,100%{transform:scaleX(.65)}50%{transform:scaleX(1)}}
        @keyframes gauge-spin{0%,100%{transform:rotate(0deg)}50%{transform:rotate(8deg)}}
        @keyframes wrench-float{0%,100%{transform:translate(0,0) rotate(-8deg)}50%{transform:translate(-6px,-8px) rotate(12deg)}}
        @keyframes solution-card-shine{0%{transform:translateX(-220%) rotate(18deg);opacity:0}18%{opacity:1}55%{opacity:.35}100%{transform:translateX(700%) rotate(18deg);opacity:0}}
        .solution-card-shine{animation:solution-card-shine 7s ease-in-out infinite;}
        .group:hover .solution-card-shine{animation-duration:4.5s;}


        @media (max-width: 639px) {
          .ramton-orbit {
            --orbit-radius: 205px !important;
          }
          .ramton-orbit-item {
            width: 48px !important;
            height: 48px !important;
          }

          .ramton-3d-blob {
            transform: scale(.72);
          }
          .ramton-3d-ring {
            transform: rotate(-24deg) perspective(500px) rotateX(18deg) rotateY(-18deg) scale(.62);
          }
          .ramton-3d-sphere {
            transform: scale(.72);
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .ramton-3d-blob {
            transform: scale(.85);
          }
          .ramton-3d-ring {
            transform: rotate(-24deg) perspective(500px) rotateX(18deg) rotateY(-18deg) scale(.82);
          }
        }


        @media (max-width: 639px) {
          .ramton-3d-blob-a {
            left: -125px !important;
            top: 70px !important;
          }
          .ramton-3d-blob-b {
            right: -105px !important;
            bottom: 10px !important;
          }
          .ramton-3d-ring-a {
            right: -120px !important;
            top: 90px !important;
          }
          .ramton-3d-ring-b {
            left: -65px !important;
            bottom: -75px !important;
          }
          .ramton-3d-sphere-a {
            left: 7% !important;
            top: 22% !important;
          }
          .ramton-3d-sphere-b {
            right: 8% !important;
            bottom: 14% !important;
          }
        }


        /* =====================================================
           FULL-PAGE RESPONSIVE LAYOUT
           ===================================================== */

        /* Prevent accidental horizontal overflow from decorative scenes. */
        html, body {
          max-width: 100%;
          overflow-x: hidden;
        }

        @media (max-width: 639px) {
          /* Hero */
          .ramton-3d-blob-a { left: -125px !important; top: 75px !important; width: 175px !important; height: 175px !important; }
          .ramton-3d-blob-b { right: -105px !important; bottom: 5px !important; width: 140px !important; height: 140px !important; }
          .ramton-3d-ring-a { right: -120px !important; top: 90px !important; transform: rotate(-24deg) perspective(500px) rotateX(18deg) rotateY(-18deg) scale(.58) !important; }
          .ramton-3d-ring-b { left: -65px !important; bottom: -75px !important; transform: rotate(-24deg) perspective(500px) rotateX(18deg) rotateY(-18deg) scale(.62) !important; }
          .ramton-3d-sphere-a { left: 7% !important; top: 22% !important; width: 38px !important; height: 38px !important; }
          .ramton-3d-sphere-b { right: 8% !important; bottom: 13% !important; width: 34px !important; height: 34px !important; }

          /* Hero grid stays only in hero and becomes finer on small screens. */
          .hero-grid {
            background-size: 54px 54px !important;
          }

          /* Solution animated scenes: scale the internal composition instead of
             allowing fixed 220px/240px objects to overflow narrow cards. */
          .solution-scene {
            transform-origin: center;
          }
          .security-scan { width: 155px !important; height: 155px !important; }
          .security-ring.ring-1 { width: 175px !important; height: 175px !important; }
          .security-ring.ring-2 { width: 132px !important; height: 132px !important; }
          .security-ring.ring-3 { width: 92px !important; height: 92px !important; }
          .security-beam { width: 138px !important; }
          .security-core { width: 82px !important; height: 82px !important; border-radius: 21px !important; }
          .security-shield { width: 38px !important; height: 38px !important; }
          .security-shield svg { width: 32px !important; height: 32px !important; }

          .network-hub { width: 88px !important; height: 70px !important; padding: 9px !important; }
          .network-node { width: 38px !important; height: 38px !important; border-radius: 12px !important; }
          .pulse-1 { width: 105px !important; height: 105px !important; }
          .pulse-2 { width: 165px !important; height: 165px !important; }

          .hardware-device { transform: scale(.84); transform-origin: center; }
          .amc-dashboard { transform: scale(.84); transform-origin: center; }

          /* Partner orbit */
          .ramton-orbit {
            --orbit-radius: 132px !important;
          }
          .ramton-orbit-item {
            width: 44px !important;
            height: 44px !important;
          }

          /* Section widths / typography */
          section {
            max-width: 100%;
          }

          /* Trust bar */
          .trust-bar {
            width: calc(100% - 1.5rem) !important;
          }

          /* About inner grid cards */
          .about-inner-card {
            min-height: 0 !important;
          }

          /* CTA */
          .cta-talk {
            width: 150px !important;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .ramton-3d-blob-a { left: -115px !important; }
          .ramton-3d-blob-b { right: -85px !important; }
          .ramton-3d-ring-a { right: -85px !important; transform: rotate(-24deg) perspective(500px) rotateX(18deg) rotateY(-18deg) scale(.82) !important; }

          .security-scan { width: 190px !important; height: 190px !important; }
          .security-ring.ring-1 { width: 210px !important; height: 210px !important; }
          .security-ring.ring-2 { width: 160px !important; height: 160px !important; }
          .network-hub { transform: translate(-50%,-50%) scale(.92); }
          .network-node { transform: scale(.92); }

          .ramton-orbit {
            --orbit-radius: 205px !important;
          }
          .ramton-orbit-item {
            width: 54px !important;
            height: 54px !important;
          }
        }

        @media (max-width: 380px) {
          /* Extra-safe layout for 320–380px phones. */
          .ramton-orbit {
            --orbit-radius: 112px !important;
          }
          .ramton-orbit-item {
            width: 40px !important;
            height: 40px !important;
          }
          .ramton-orbit-counter {
            padding: 5px !important;
          }

          .security-chip,
          .network-chip-top,
          .network-chip-bottom,
          .hardware-chip-top,
          .hardware-chip-bottom,
          .software-chip-top,
          .software-chip-bottom,
          .amc-chip-top,
          .amc-chip-bottom {
            transform: scale(.78);
          }

          .scene-chip {
            padding: 5px 7px !important;
            font-size: 6px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .solution-scene *, .solution-scene { animation: none !important; }

          .ramton-float,
          .ramton-float-reverse,
          .ramton-orbit,
          .ramton-orbit-reverse,
          .ramton-orbit-counter {
            animation: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          HERO — INVARsys-INSPIRED LAYOUT
      ===================================================== */}
      <section data-ramton-motion="scale" className="relative overflow-hidden bg-white">
        <ThreeDObjects />
        {/* Fine grid background */}
        <div
          className="hero-grid pointer-events-none absolute inset-0 opacity-[0.72]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,.065) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.065) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
          }}
        />

        {/* Soft orange atmosphere */}
        <div className="pointer-events-none absolute left-1/2 top-[22%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#f26522]/[0.06] blur-[110px]" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1500px] flex-col items-center justify-center px-5 pb-16 pt-24 text-center sm:min-h-[590px] sm:px-7 sm:pb-20 sm:pt-28 md:min-h-[625px] md:px-8 md:pb-24 md:pt-32 lg:min-h-[660px] lg:-translate-y-16 lg:px-10">
          <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] sm:text-[11px]">
            Welcome to Ramton
          </div>

          <h1 className="ramton-load-reveal ramton-load-2 max-w-[1500px] text-[42px] font-normal leading-[1.02] tracking-[-0.065em] text-[#2a1409] sm:text-[58px] md:text-[74px] lg:text-[88px] xl:text-[94px]">
            Your Trusted IT Partner
            <br />
            for a{" "}
            <span className="text-[#c44e0d]">Smarter Tomorrow.</span>
          </h1>

          <p className="ramton-load-reveal ramton-load-3 mx-auto mt-6 max-w-[92vw] text-[14px] font-normal leading-[1.65] text-slate-700 sm:mt-7 sm:max-w-[760px] sm:text-[17px] md:max-w-[940px] md:text-[20px]">
            From IT infrastructure and hardware to cloud, security, software
            and managed services — Ramton delivers reliable, secure and
            future-ready technology solutions that power your business.
          </p>

          <div className="mt-8">
            <a
              href="#services"
              aria-label="Explore Solutions"
              className="group relative inline-flex h-[60px] w-[225px] items-center overflow-hidden rounded-full bg-orange-500 text-[#111318] shadow-[0_18px_40px_-28px_rgba(15,23,42,.28)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5"
            >
              <span
                className="absolute left-1.5 top-1/2 z-10 flex h-[52px] w-[52px] -translate-y-1/2 shrink-0 items-center justify-center rounded-full bg-white text-white transition-[width,border-radius] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-[calc(100%-12px)] group-hover:rounded-full"
              >
                <span className="pointer-events-none absolute left-0 top-0 flex h-[52px] w-[52px] shrink-0 items-center justify-center">
                  <Arrow className="h-5 w-5 shrink-0 transform-none" />
                </span>
              </span>

              <span className="relative z-60 ml-[63px] whitespace-nowrap text-white text-[18px] font-bold transition-colors duration-300 group-hover:text-black">
                Explore Solutions
              </span>
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4 sm:mt-10">
            <div className="flex">
              {["R", "+", "IT"].map((item, index) => (
                <span
                  key={item}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white text-[16px] font-bold text-[#f26522] shadow-[0_8px_18px_-12px_rgba(0,0,0,.4)] ${
                    index > 0 ? "-ml-2" : ""
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="text-left">
              <p className="text-[18px] font-bold leading-none text-[#111318] sm:text-[22px]">
                500+ Happy Clients
              </p>
              <p className="mt-1.5 text-[15px] text-slate-500 sm:text-[18px]">
                trust Ramton for their IT needs.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom trust bar */}
        <div className="trust-bar relative z-20 mx-auto mb-4 w-[calc(100%-1.5rem)] max-w-[1320px] sm:w-[calc(100%-4rem)]">
          <div className="grid overflow-hidden rounded-[24px] border border-slate-200 bg-white/95 shadow-[0_25px_60px_-35px_rgba(15,23,42,.30)] backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Reliable", "Solutions"],
              ["Expert", "Support"],
              ["End-to-End", "Services"],
              ["Future", "Ready"],
            ].map(([first, second], index) => (
              <div
                key={first}
                className={`flex items-center justify-center gap-3 px-5 py-5 text-center md:py-6 ${
                  index !== 3
                    ? "border-b border-slate-200 sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff1e8] text-[#f26522]">
                  <Icon className="h-4 w-4">
                    {index === 0 && (
                      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
                    )}
                    {index === 1 && (
                      <>
                        <path d="M3 18v-6a9 9 0 0118 0v6" />
                        <path d="M21 19a2 2 0 01-2 2h-1v-8h3v6z" />
                        <path d="M3 19a2 2 0 002 2h1v-8H3v6z" />
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <circle cx="6" cy="6" r="2.5" />
                        <circle cx="6" cy="18" r="2.5" />
                        <circle cx="18" cy="12" r="2.5" />
                        <path d="M8 6h4a4 4 0 014 4" />
                        <path d="M8 18h4a4 4 0 004-4" />
                      </>
                    )}
                    {index === 3 && (
                      <path d="M12 2l1.6 5.5L19 9l-5.4 1.5L12 16l-1.6-5.5L5 9l5.4-1.5z" />
                    )}
                  </Icon>
                </span>
                <span className="text-[12px] font-semibold leading-[1.2] text-[#111318] md:text-[13px]">
                  {first}
                  <br />
                  {second}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS — REFERENCE CARD STYLE
      ===================================================== */}
      <section data-ramton-motion className="relative overflow-hidden bg-white px-4 pb-8 pt-2 sm:px-6 md:pb-10 md:pt-4">
        <div className="mx-auto max-w-[1320px] relative z-10">
          <div className="mb-9 text-center md:mb-11">
            <SectionPill>Performance You Can Measure</SectionPill>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
  [20, "+", "Years of Experience"],
  [500, "+", "Customers Globally"],
  [1, "K+", "Cybersecurity Projects"],

].map(([target, suffix, label]) => (
              <div
                key={label}
                className="group rounded-[20px] border border-slate-200 bg-white px-5 py-7 text-center sm:px-6 sm:py-9 shadow-[0_16px_50px_-40px_rgba(15,23,42,.28)] transition-all duration-500 hover:-translate-y-1 hover:border-[#f26522]/40 hover:shadow-[0_24px_55px_-35px_rgba(242,101,34,.20)] md:py-10"
              >
                <div className="text-[46px] font-normal leading-none tracking-[-0.06em] text-[#111318] transition-colors duration-300 group-hover:text-[#f26522] sm:text-[62px]">
                  <CountUp target={target} suffix={suffix} />
                </div>
                <p className="mt-4 text-[14px] font-medium text-slate-700 sm:text-[15px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT — PRESERVE EXISTING CONTENT, IMPROVE BG
      ===================================================== */}
      <section data-ramton-motion className="relative overflow-hidden bg-[#fafafa] px-4 py-8 sm:px-6 sm:py-10 md:py-12">
        <ThreeDObjects />

        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="mx-auto mb-6 max-w-[850px] text-center sm:mb-7 md:mb-9">
            <div className="mb-4">
              <SectionPill>About Us</SectionPill>
            </div>

            <h2 className="text-[32px] font-normal leading-[1.04] tracking-[-0.06em] text-[#111318] sm:text-[44px] md:text-[56px] lg:text-[64px]">
              A Legacy of Trust.
              <br />
              A Commitment to Excellence.
            </h2>

            <p className="mx-auto mt-4 max-w-[92vw] text-[14px] leading-[1.75] text-slate-700 sm:mt-5 sm:max-w-[680px] sm:text-[16px] md:max-w-[760px] md:text-[18px]">
              Ramton Technologies provides comprehensive technology solutions
              across hardware, software, security, networking, cloud,
              surveillance, IoT and IT consulting.
            </p>

            <a
              href="/about"
              aria-label="Know more about us"
              className="group relative  mt-4 inline-flex h-[65px] w-[255px] items-center overflow-hidden rounded-full bg-orange-500 text-[#111318] shadow-[0_18px_40px_-28px_rgba(15,23,42,.28)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5"
            >
              <span
                className="absolute left-1.5 top-1/2 z-10 flex h-[52px] w-[52px] -translate-y-1/2 shrink-0 items-center justify-center rounded-full bg-white text-white transition-[width,border-radius] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-[calc(100%-12px)] group-hover:rounded-full"
              >
                <span className="pointer-events-none absolute left-0 top-0 flex h-[52px] w-[52px] shrink-0 items-center justify-center">
                  <Arrow className="h-6 w-6 shrink-0 transform-none" />
                </span>
              </span>

              <span className="relative z-60 ml-[63px] whitespace-nowrap text-white text-[18px] font-bold transition-colors duration-300 group-hover:text-black">
                Know more about us
              </span>
            </a>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-2 shadow-[0_30px_80px_-50px_rgba(15,23,42,.28)]">
            <div className="grid gap-2 md:grid-cols-3">
              {[
                {
                  title: "Turning Technology into Business Value",
                  desc: "Practical technology solutions designed around the way your business works.",
                },
                {
                  title: "Built for Modern Operations",
                  desc: "Reliable infrastructure, software and security that help teams work smarter.",
                },
                {
                  title: "Partnership That Lasts",
                  desc: "From planning to support, Ramton stays involved beyond delivery.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="about-inner-card group relative overflow-hidden rounded-[22px] bg-[#fff7f2] p-5 transition-all duration-500 hover:-translate-y-1 sm:p-6 md:p-7"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#f26522]/[0.08] blur-2xl transition-all duration-500 group-hover:scale-[1.7]" />
                  <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#f26522] shadow-sm">
                    <Icon className="h-6 w-6">
                      {index === 0 && (
                        <>
                          <path d="M4 18V8" />
                          <path d="M8 18V5" />
                          <path d="M12 18v-8" />
                          <path d="M16 18V3" />
                          <path d="M20 18H3" />
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <path d="M4 18h16" />
                          <path d="M6 15V9" />
                          <path d="M10 15V5" />
                          <path d="M14 15v-4" />
                          <path d="M18 15V7" />
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <circle cx="8" cy="8" r="3" />
                          <circle cx="16" cy="16" r="3" />
                          <path d="M10.5 10.5l5 3" />
                        </>
                      )}
                    </Icon>
                  </span>

                  <h3 className="relative z-10 mt-7 text-[21px] sm:mt-10 sm:text-[22px] font-normal leading-[1.08] tracking-[-0.04em] text-[#111318] sm:text-[25px]">
                    {item.title}
                  </h3>

                  <p className="relative z-10 mt-4 text-[14px] leading-[1.7] text-slate-600">
                    {item.desc}
                  </p>

                  <span className="absolute bottom-0 left-6 h-[2px] w-0 bg-[#f26522] transition-all duration-500 group-hover:w-[calc(100%-48px)]" />
                </div>
              ))}
            </div>

            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-[22px] p-7 text-black border  md:p-9">
                <div className="pointer-events-none absolute right-[-50px] top-[-70px] h-52 w-52 rounded-full border border-white/10 ramton-float" />
                <div className="pointer-events-none absolute right-[-10px] top-[-30px] h-32 w-32 rounded-full border border-[#f26522]/30 ramton-float-reverse" />
                <p className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f26522]">
                  Trusted Technology Partner
                </p>
                <h3 className="relative z-10 mt-5 max-w-[560px] text-[27px] font-normal leading-[1.05] tracking-[-0.045em] sm:text-[34px]">
                  Technology that scales with your business.
                </h3>
              </div>

              <div className="rounded-[22px] border bg-white p-7 md:p-9">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f26522]">
                  What We Deliver
                </p>
                <p className="mt-5 text-[16px] leading-[1.75] text-slate-700">
                  End-to-end technology support across infrastructure,
                  applications, security, networking and managed services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUTIONS — REFERENCE CARD LAYOUT
      ===================================================== */}
      <section
        id="services"
        className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 md:py-12"
      >
        <div className="pointer-events-none absolute left-[-110px] top-[28%] h-72 w-72 rounded-full bg-[#f26522]/[0.045] blur-[90px]" />
        <div className="pointer-events-none absolute right-[-120px] bottom-[8%] h-80 w-80 rounded-full bg-orange-100/60 blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="mx-auto mb-6 max-w-[900px] text-center sm:mb-7 md:mb-9">
            <div className="mb-4">
              <SectionPill>Our Solutions</SectionPill>
            </div>

            <h2 className="text-[32px] font-normal leading-[1.04] tracking-[-0.06em] text-[#111318] sm:text-[44px] md:text-[56px] lg:text-[64px]">
              End-to-End IT Solutions
              <br />
              for Every Business
            </h2>

            <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-[1.8] text-slate-600 md:text-[17px]">
              From infrastructure and software to cybersecurity, networking
              and ongoing support, we provide dependable technology solutions
              designed around the needs of modern businesses.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-6">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={solutionRoutes[service.title]}
                aria-label={`Explore ${service.title} solutions`}
                className={`group relative block overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-[0_20px_55px_-34px_rgba(15,23,42,.24)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-2 hover:border-[#f26522]/45 hover:shadow-[0_32px_75px_-35px_rgba(242,101,34,.28)] ${
                  index < 3 ? "md:col-span-2" : "md:col-span-3"
                }`}
              >
                <div className="relative h-[190px] overflow-hidden bg-[#f26522] sm:h-[215px] md:h-[225px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff7a1a] via-[#f26522] to-[#c84d0b]" />
                  <div className="absolute inset-0 opacity-[0.14]" style={{
                    backgroundImage: "radial-gradient(rgba(255,255,255,.9) 1px, transparent 1px)",
                    backgroundSize: "12px 12px",
                  }} />
                  <AnimatedSolutionVisual type={service.title} />
                  <div className="pointer-events-none absolute inset-[10px] z-20 rounded-[18px] border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,.28)]" />
                  <div className="pointer-events-none absolute -left-1/2 top-0 z-30 h-full w-1/3 rotate-[18deg] bg-white/[0.08] blur-xl solution-card-shine" />
                  <div className="absolute inset-0 z-40 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                <div className="relative flex min-h-[225px] flex-col bg-gradient-to-b from-white via-white to-[#fffdfb] p-5 sm:min-h-[240px] sm:p-6 md:min-h-[245px] md:p-7">
                  {/* Centered solution number capsule */}
                  <div className="flex justify-center">
                    <span className="inline-flex items-center justify-center rounded-full border border-[#f26522]/15 bg-[#fff1e8] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f26522] transition-all duration-300 group-hover:border-[#f26522]/30 group-hover:bg-[#f26522] group-hover:text-white">
                      {String(index + 1).padStart(2, "0")} / Solutions
                    </span>
                  </div>

                  <h3 className="mt-5 text-center text-[29px] font-normal leading-[1.04] tracking-[-0.045em] text-[#111318] transition-colors duration-300 group-hover:text-[#f26522] sm:text-[31px] md:text-[33px]">
                    {service.title}
                  </h3>

                  <p className="mt-3.5 text-[14px] leading-[1.7] text-slate-600 sm:text-[15px]">
                    {service.desc}
                  </p>

                  {/* Full-card CTA: the entire card is already clickable. */}
                    

                  <span className="absolute bottom-0 left-6 h-[2px] w-0 bg-[#f26522] transition-all duration-500 group-hover:w-[calc(100%-48px)]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNER ECOSYSTEM — MOVING ORBIT
      ===================================================== */}
      <section data-ramton-motion className="relative overflow-hidden bg-[#f26522] px-4 py-10 text-white sm:px-6 md:py-14">
        {/* Pure Silk background for the complete partner orbit section */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Silk
            speed={3.1}
            scale={0.8}
            color="#ea6507"
            noiseIntensity={0}
            rotation={0}
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[540px] max-w-[1320px] items-center justify-center sm:min-h-[620px] md:min-h-[700px]">
          {/* Large ecosystem orbit — only company logos */}
          <div className="relative h-[500px] w-[500px] max-w-full sm:h-[620px] sm:w-[620px] md:h-[720px] md:w-[720px]">
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 sm:h-[540px] sm:w-[540px] md:h-[640px] md:w-[640px] rounded-full border border-white/15 sm:h-[640px] sm:w-[640px]" />
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 sm:h-[400px] sm:w-[400px] md:h-[460px] md:w-[460px] rounded-full border border-white/10 sm:h-[460px] sm:w-[460px]" />

            <div className="absolute inset-0 ramton-orbit [--orbit-radius:275px] sm:[--orbit-radius:315px]">
              {orbitPartners.map((partner, i) => {
                const angle = (360 / orbitPartners.length) * i;

                return (
                  <div
                    key={`partner-${i}`}
                    className="ramton-orbit-item absolute left-1/2 top-1/2 h-[60px] w-[60px] sm:h-[68px] sm:w-[68px]"
                    style={{ "--orbit-angle": `${angle}deg` }}
                  >
                    <div className="ramton-orbit-counter flex h-full w-full items-center justify-center rounded-full bg-white p-2 shadow-[0_18px_35px_-18px_rgba(0,0,0,.35)]">
                      <div className="flex h-full w-full items-center justify-center">
                        <PartnerLogo
                          name={partner.name}
                          logo={partner.logo}
                          Logo={partner.Logo}
                          mark={partner.mark}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center content — same information, Invarsys-style presentation */}
            <div className="absolute left-1/2 top-1/2 z-20 flex w-[270px] sm:w-[340px] md:w-[390px] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center sm:w-[390px]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white sm:text-[11px]">
                Our Ecosystem
              </span>

              <h2 className="mt-5 text-[30px] font-normal leading-[1.06] sm:text-[42px] md:text-[50px] tracking-[-0.055em] text-white sm:text-[50px]">
                The technology
                <br />
                behind our work
              </h2>

              <p className="mt-6 max-w-[270px] text-[12px] sm:max-w-[330px] sm:text-[14px] md:max-w-[370px] md:text-[16px] leading-[1.7] text-white/90 sm:text-[16px]">
                We combine cloud, data, AI, and engineering tools to build
                products that scale with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE
      ===================================================== */}
      <section data-ramton-motion className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 md:py-12">
        <ThreeDObjects />

        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="mx-auto mb-6 max-w-[900px] text-center sm:mb-7 md:mb-9">
            <div className="mb-4">
              <SectionPill>Why Choose Ramton</SectionPill>
            </div>
            <h2 className="text-[32px] font-normal leading-[1.04] tracking-[-0.06em] text-[#111318] sm:text-[44px] md:text-[56px] lg:text-[64px]">
              Technology Built Around
              <br />
              Your Business.
            </h2>
            <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-[1.8] text-slate-600 md:text-[17px]">
              Practical expertise, dependable delivery and ongoing support
              that keeps your technology working for your business.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="ramton-motion-card group relative overflow-hidden rounded-[25px] border border-slate-200 bg-white p-5 sm:p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,.18)] transition-all duration-500 hover:-translate-y-2 hover:border-[#f26522]/40 hover:shadow-[0_28px_60px_-30px_rgba(242,101,34,.20)] md:p-7"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#f26522]/[0.07] opacity-0 blur-2xl transition-all duration-500 group-hover:scale-[1.8] group-hover:opacity-100" />

                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1e8] text-[#f26522] transition-all duration-500 group-hover:scale-105 group-hover:bg-[#f26522] group-hover:text-[#111318]">
                  <Icon className="h-5 w-5">{reason.icon}</Icon>
                </span>

                <h3 className="relative z-10 mt-8 text-[20px] font-medium tracking-[-0.025em] text-[#111318] transition-colors duration-300 group-hover:text-[#f26522]">
                  {reason.title}
                </h3>

                <p className="relative z-10 mt-3 text-[14px] leading-[1.7] text-slate-600">
                  {reason.desc}
                </p>

                <span className="absolute bottom-0 left-6 h-[2px] w-0 bg-[#f26522] transition-all duration-500 group-hover:w-[calc(100%-48px)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CTA — INVARsys-STYLE
      ===================================================== */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#f26522] px-4 pb-8 pt-3 sm:px-6 sm:pb-10 md:pb-16 md:pt-6"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Silk
            speed={3.1}
            scale={0.8}
            color="#ea6507"
            noiseIntensity={0}
            rotation={0}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#ff781a]/95 via-[#f26522]/95 to-[#a9410d]/95 px-5 py-10 sm:rounded-[28px] sm:px-8 sm:py-14 text-center text-white shadow-[0_30px_80px_-45px_rgba(242,101,34,.55)] sm:px-10 md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 opacity-[0.14]" style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,.9) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
            }} />

            <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full border border-white/15 ramton-float" />
            <div className="pointer-events-none absolute -right-20 bottom-[-100px] h-72 w-72 rounded-full border border-black/10 ramton-float-reverse" />

            <div className="relative z-10 mx-auto max-w-[760px]">
              <SectionPill>CTA</SectionPill>

              <h2 className="mt-5 text-[32px] font-normal leading-[1.04] sm:mt-6 sm:text-[44px] md:text-[62px] tracking-[-0.055em] sm:text-[50px] md:text-[62px]">
                Ready to Build a Smarter IT Infrastructure?
              </h2>

              <p className="mx-auto mt-4 max-w-[90vw] text-[14px] sm:mt-5 sm:max-w-[650px] sm:text-[15px] leading-[1.75] text-white/90 md:text-[17px]">
                Let's discuss how Ramton can help your business achieve more
                with the right technology.
              </p>

              <Link
                to="/contact"
                aria-label="Let's Talk"
                className="cta-talk group relative mt-7 inline-flex h-[58px] w-[185px] items-center overflow-hidden rounded-full bg-white px-1.5 text-[#111318] shadow-[0_18px_40px_-28px_rgba(15,23,42,.28)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5"
              >
                {/* Expanding orange background */}
                <span
                  aria-hidden="true"
                  className="absolute left-1.5 top-1/2 z-10 h-[52px] w-[52px] -translate-y-1/2 rounded-full bg-[#f26522] transition-[width,border-radius] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-[calc(100%-12px)] group-hover:rounded-full"
                />

                {/* Fixed arrow — does not move when the orange area expands */}
                <span className="pointer-events-none absolute left-1.5 top-1/2 z-30 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center text-white">
                  <Arrow className="h-5 w-5 shrink-0 transform-none" />
                </span>

                <span className="relative z-20 ml-[65px] whitespace-nowrap text-[18px] font-semibold text-[#111318] transition-colors duration-300 group-hover:text-white">
                  Let's Talk
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
