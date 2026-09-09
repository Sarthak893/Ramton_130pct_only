import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import { useEffect, useState } from "react";
import aboutImage from "../assets/ramton-aboutus.png";
import Silk from "./Silk.jsx";

import about from "../assets/AboutUs.png";
import about2 from "../assets/AboutUs2.png";

function CountUp({ target, suffix = "", duration = 1200 }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  useEffect(() => {
    if (!visible) return;
    let start = null;
    let frame;
    const animate = (time) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(target * eased));
      if (progress < 1) frame = requestAnimationFrame(animate);
      else setCount(target);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [visible, target, duration]);

  return <span ref={setRef}>{count}{suffix}</span>;
}

function Arrow({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" className={`h-6 w-6 ${className}`}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function Icon({ children, className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      className={className}>{children}</svg>
  );
}

function SectionPill({ children }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] md:px-8 md:py-3.5 md:text-[13px]">
      {children}
    </span>
  );
}

function ThreeDObjects() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="ramton-3d-blob ramton-3d-blob-a" />
      <div className="ramton-3d-blob ramton-3d-blob-b" />
      <div className="ramton-3d-ring ramton-3d-ring-a" />
      <div className="ramton-3d-ring ramton-3d-ring-b" />
      <div className="ramton-3d-sphere ramton-3d-sphere-a" />
      <div className="ramton-3d-sphere ramton-3d-sphere-b" />
    </div>
  );
}

const reasons = [
  {
    title: "Expertise",
    desc: "Deep industry knowledge and skilled professionals delivering practical technology solutions.",
    icon: <><circle cx="9" cy="8" r="3.5" /><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6" /><path d="M16 6.5a3 3 0 010 6" /><path d="M22 20c0-2.8-2-5-5-5.8" /></>,
  },
  {
    title: "Reliability",
    desc: "Dependable infrastructure, software and support built around business continuity.",
    icon: <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />,
  },
  {
    title: "Customer Focus",
    desc: "Technology choices shaped around your business goals, people and everyday operations.",
    icon: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /></>,
  },
  {
    title: "Long-Term Support",
    desc: "Dedicated support beyond delivery to keep your technology secure and running smoothly.",
    icon: <><path d="M3 18v-6a9 9 0 0118 0v6" /><path d="M21 19a2 2 0 01-2 2h-1v-8h3v6z" /><path d="M3 19a2 2 0 002 2h1v-8H3v6z" /></>,
  },
];

const careerPhotos = [
  "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.43.09_2de733a6-qsazpwi1siyn98upjm281wcmss8kz72ei6f2xk04hk.jpg",
  "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.43.09_04e7989a-qsazpzbkd12i82qm35a3rdn0kxuomadlikdjddvxyw.jpg",
  "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.43.08_78fe0744-qsazpsqp16thyt065kfprxasf8r44enh5nt50g5p6g.jpg",
  "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.43.08_64a4a551-qsazppx6gopmzz49m17u2g0en350hbca59uokm9vp4.jpg",
  "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.44.08_1801e201-qsazqalmn1hy3ea89a5mlasjpkb36nmdk47d4pf7w8.jpg",
  "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.43.08_9afd1e01-qsazpn3nw6ls158d2hzycyq0uxiwu8134vw84se27s.jpg",
  "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.43.07_5089ff23-qsazp9xx8i3rilrh7cb6e21kjjbrugkuf2rfewxkmw.jpg",
];


const faqs = [
  ["What does Ramton Technologies do?", "Ramton provides end-to-end technology solutions across hardware, software, servers, networking, cloud, cybersecurity, surveillance, IoT and IT consulting."],
  ["Who does Ramton work with?", "We support businesses that need dependable technology infrastructure, secure systems, software and ongoing IT support."],
  ["Can Ramton manage existing IT infrastructure?", "Yes. Our services can support existing environments through maintenance, troubleshooting, upgrades, security and managed support."],
  ["How do I get started with Ramton?", "Tell us about your business and technology requirements. Our team can understand the environment and recommend a practical way forward."],
];

function ExpandingButton({ to, children, className = "" }) {
  return (
    <Link
      to={to}
      className={`group relative inline-flex h-[65px] w-[250px] items-center overflow-hidden rounded-full bg-orange-500 px-1.5 text-[#111318] shadow-[0_18px_40px_-28px_rgba(15,23,42,.28)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5 ${className}`}
    >
      <span className="absolute left-1.5 top-1/2 z-10 h-[52px] w-[52px] -translate-y-1/2 rounded-full bg-white transition-[width,border-radius] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-[calc(100%-12px)]" />
      <span className="pointer-events-none absolute left-1.5 top-1/2 z-30 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center text-black-600">
        <Arrow className="h-5 w-5 shrink-0 transform-none" />
      </span>
      <span className="relative z-20 ml-[58px] whitespace-nowrap text-[18px] font-semibold text-white transition-colors duration-300 group-hover:text-black z-60">
        {children}
      </span>
    </Link>
  );
}

export default function About() {
  const revealRef = useReveal([]);
  const [openFaq, setOpenFaq] = useState(0);

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

  return (
    <main ref={revealRef} className="ramton-page-motion relative overflow-hidden bg-white font-[Inter,Arial,sans-serif] text-[#111318]">
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
        @keyframes ramton-career-slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .ramton-career-track {
          width: max-content;
          gap: 17px;
          margin-left: -128px;
          animation: ramton-career-slide 42s linear infinite;
          will-change: transform;
        }

        .ramton-career-track:hover {
          animation-play-state: paused;
        }

        /* Desktop gallery proportions intentionally mirror the reference:
           short / short / tall / medium / extra-wide / short / tall ... */
        .career-gallery-card.gallery-a {
          width: 190px;
          height: 305px;
        }

        .career-gallery-card.gallery-b {
          width: 175px;
          height: 172px;
        }

        .career-gallery-card.gallery-c {
          width: 190px;
          height: 264px;
        }

        .career-gallery-card.gallery-d {
          width: 158px;
          height: 218px;
        }

        .career-gallery-card.gallery-e {
          width: 480px;
          height: 305px;
        }

        @media (max-width: 1023px) {
          .ramton-career-track {
            margin-left: -75px;
            gap: 12px;
            animation-duration: 36s;
          }

          .career-gallery-card.gallery-a {
            width: 145px;
            height: 235px;
          }

          .career-gallery-card.gallery-b {
            width: 140px;
            height: 135px;
          }

          .career-gallery-card.gallery-c {
            width: 150px;
            height: 205px;
          }

          .career-gallery-card.gallery-d {
            width: 125px;
            height: 170px;
          }

          .career-gallery-card.gallery-e {
            width: 330px;
            height: 235px;
          }
        }

        @media (max-width: 639px) {
          .ramton-career-track {
            margin-left: -55px;
            gap: 9px;
            animation-duration: 30s;
          }

          .career-gallery-card.gallery-a {
            width: 115px;
            height: 220px;
          }

          .career-gallery-card.gallery-b {
            width: 105px;
            height: 125px;
          }

          .career-gallery-card.gallery-c {
            width: 120px;
            height: 185px;
          }

          .career-gallery-card.gallery-d {
            width: 92px;
            height: 155px;
          }

          .career-gallery-card.gallery-e {
            width: 250px;
            height: 220px;
          }
        }
        .about-story-image { animation: about-image-float 7s ease-in-out infinite; }
        @keyframes about-image-float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ramton-career-track, .about-story-image { animation: none !important; }
        }
      `}</style>

      {/* HERO — same visual language as Home */}
      <section data-ramton-motion="scale" className="relative overflow-hidden bg-white">
        <ThreeDObjects />
        <div
          className="hero-grid pointer-events-none absolute inset-0 opacity-[0.72]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,.065) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.065) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-[22%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#f26522]/[0.06] blur-[110px]" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1500px] flex-col items-center justify-center px-5 pb-16 pt-24 text-center sm:min-h-[590px] sm:px-7 sm:pb-20 sm:pt-28 md:min-h-[625px] md:px-8 md:pb-24 md:pt-32 lg:min-h-[660px] lg:-translate-y-10 lg:px-10">
          <div className="mb-6"><SectionPill>About Ramton</SectionPill></div>

          <h1 className="ramton-load-reveal ramton-load-2 max-w-[1250px] text-[42px] font-normal leading-[1.02] tracking-[-0.065em] text-[#2a1409] sm:text-[58px] md:text-[74px] lg:text-[88px] xl:text-[94px]">
            Technology That Moves
            <br />
            <span className="text-[#c44e0d]">Business Forward.</span>
          </h1>

          <p className="ramton-load-reveal ramton-load-3 mx-auto mt-6 max-w-[92vw] text-[14px] font-normal leading-[1.7] text-slate-700 sm:mt-7 sm:max-w-[790px] sm:text-[17px] md:max-w-[930px] md:text-[19px]">
            Ramton Technologies delivers reliable, secure and future-ready
            technology solutions that help businesses operate smarter,
            stay connected and grow with confidence.
          </p>

          <div className="mt-7">
            <ExpandingButton to="/contact">Let's Build Together</ExpandingButton>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section data-ramton-motion className="relative overflow-hidden bg-[#fafafa] px-4 py-3 sm:px-6 sm:py-5 md:py-6">
        <ThreeDObjects />
        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="mx-auto max-w-[950px] text-center">
            <div className="mb-4"><SectionPill>Our Story</SectionPill></div>
            <h2 className="text-[32px] font-normal leading-[1.04] tracking-[-0.06em] sm:text-[44px] md:text-[56px] lg:text-[64px]">
              Built on Trust.
              <br />
              <span className="text-[#c44e0d]">Driven by Technology.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[820px] text-[15px] leading-[1.8] text-slate-600 md:text-[17px]">
              Since 2017, Ramton has been helping businesses solve technology
              challenges with practical solutions across infrastructure,
              software, security and IT services.
            </p>
          </div>

          <div data-ramton-motion="scale" className="ramton-stagger mt-6 grid items-center gap-5 lg:grid-cols-[.9fr_1.1fr] lg:gap-10">
            <div className="text-center lg:text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f26522]">Who We Are</p>
              <h3 className="mt-4 text-[30px] font-normal leading-[1.06] tracking-[-0.05em] sm:text-[40px] md:text-[48px]">
                Dedicated to building technology that works.
              </h3>
              <p className="mt-5 text-[15px] leading-[1.8] text-slate-600 md:text-[17px]">
                We bring together hardware, software, networking, cloud,
                cybersecurity, surveillance, IoT and consulting to create
                dependable technology environments around the real needs of
                every business.
              </p>
              <p className="mt-4 text-[15px] leading-[1.8] text-slate-600 md:text-[17px]">
                Our approach is simple: understand the requirement, build the
                right solution and stay involved after delivery.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-2 shadow-[0_30px_80px_-50px_rgba(15,23,42,.30)]">
              <div className="relative overflow-hidden rounded-[22px]">
                <img src={about2} alt="Ramton Technologies team" className="about-story-image h-[300px] w-full object-cover sm:h-[390px] md:h-[470px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-full border border-white/60 bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#111318] shadow-lg">
                  Ramton Technologies
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS — same Home card language, no 3D */}
      <section data-ramton-motion className="relative overflow-hidden bg-white px-4 py-3 sm:px-6 sm:py-5 md:py-6">
        <div className="pointer-events-none absolute left-[-120px] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#f26522]/[0.045] blur-[90px]" />
        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [20, "+", "Years of Experience"],
              [500, "+", "Customers Served"],
              [1000, "+", "Cybersecurity Projects"],
              [100, "%", "Client Retention"],
            ].map(([target, suffix, label]) => (
              <div key={label} className="group rounded-[25px] border border-slate-200 bg-white px-5 py-7 text-center shadow-[0_18px_50px_-30px_rgba(15,23,42,.18)] transition-all duration-500 hover:-translate-y-1 hover:border-[#f26522]/40 hover:shadow-[0_24px_55px_-35px_rgba(242,101,34,.20)] md:py-10">
                <div className="text-[46px] font-normal leading-none tracking-[-0.06em] text-[#111318] transition-colors duration-300 group-hover:text-[#f26522] sm:text-[62px]">
                  <CountUp target={target} suffix={suffix} />
                </div>
                <p className="mt-4 text-[14px] font-medium text-slate-700 sm:text-[15px]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE — Invarsys-style split layout, Ramton theme */}
      <section data-ramton-motion className="relative overflow-hidden bg-white px-4 py-5 sm:px-6 sm:py-6 md:py-7 lg:py-8">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="reveal from-bottom mx-auto mb-5 max-w-[850px] text-center sm:mb-6 lg:mb-7">
            <div className="mb-5 flex justify-center">
              <SectionPill>Why Choose Us</SectionPill>
            </div>
            <h2 className="text-[32px] font-normal leading-[1.03] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px] lg:text-[60px]">
              Why Businesses Choose
              <br />
              <span className="text-[#f26522]">Ramton.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[700px] text-[14px] leading-7 text-slate-600 sm:text-[15px] md:text-[16px]">
              Practical expertise, dependable delivery and support that keeps
              your technology working for your business.
            </p>
          </div>

          <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_1.08fr_1fr] lg:gap-4 xl:gap-5">
            {/* Left cards */}
            <div className="flex flex-col gap-4">
              {reasons.slice(0, 2).map((reason) => (
                <div
                  key={reason.title}
                  className="group relative flex min-h-[205px] flex-1 flex-col overflow-hidden rounded-[10px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_-30px_rgba(15,23,42,.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#f26522]/45 hover:shadow-[0_28px_60px_-30px_rgba(242,101,34,.20)] sm:min-h-[220px] sm:p-6"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#f26522]/[0.07] opacity-0 blur-2xl transition-all duration-500 group-hover:scale-[1.8] group-hover:opacity-100" />
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-[7px] border border-[#f26522]/20 bg-[#fff1e8] text-[#f26522] transition-all duration-500 group-hover:bg-[#f26522] group-hover:text-white">
                    <Icon className="h-5 w-5">{reason.icon}</Icon>
                  </span>
                  <h3 className="relative z-10 mt-7 text-[20px] font-medium leading-tight tracking-[-0.025em] text-[#111318] transition-colors duration-300 group-hover:text-[#f26522] sm:text-[21px]">
                    {reason.title}
                  </h3>
                  <p className="relative z-10 mt-3 max-w-[330px] text-[13px] leading-6 text-slate-600 sm:text-[14px] sm:leading-6">
                    {reason.desc}
                  </p>
                  <span className="absolute bottom-0 left-5 h-[2px] w-0 bg-[#f26522] transition-all duration-500 group-hover:w-[calc(100%-40px)]" />
                </div>
              ))}
            </div>

            {/* Center image — sourced from the News & Events image URLs */}
            <div className="reveal from-scale relative min-h-[350px] overflow-hidden rounded-[2px] border border-slate-200 bg-slate-100 shadow-[0_25px_70px_-40px_rgba(15,23,42,.28)] lg:min-h-0">
              <img
                src={about}
                loading="lazy"
                className="object-cover h-full w-full object-center transition-transform duration-700 hover:scale-[1.025]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </div>

            {/* Right cards */}
            <div className="flex flex-col gap-4">
              {reasons.slice(2, 4).map((reason) => (
                <div
                  key={reason.title}
                  className="group relative flex min-h-[205px] flex-1 flex-col overflow-hidden rounded-[10px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_-30px_rgba(15,23,42,.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#f26522]/45 hover:shadow-[0_28px_60px_-30px_rgba(242,101,34,.20)] sm:min-h-[220px] sm:p-6"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#f26522]/[0.07] opacity-0 blur-2xl transition-all duration-500 group-hover:scale-[1.8] group-hover:opacity-100" />
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-[7px] border border-[#f26522]/20 bg-[#fff1e8] text-[#f26522] transition-all duration-500 group-hover:bg-[#f26522] group-hover:text-white">
                    <Icon className="h-5 w-5">{reason.icon}</Icon>
                  </span>
                  <h3 className="relative z-10 mt-7 text-[20px] font-medium leading-tight tracking-[-0.025em] text-[#111318] transition-colors duration-300 group-hover:text-[#f26522] sm:text-[21px]">
                    {reason.title}
                  </h3>
                  <p className="relative z-10 mt-3 max-w-[330px] text-[13px] leading-6 text-slate-600 sm:text-[14px] sm:leading-6">
                    {reason.desc}
                  </p>
                  <span className="absolute bottom-0 left-5 h-[2px] w-0 bg-[#f26522] transition-all duration-500 group-hover:w-[calc(100%-40px)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS — Invarsys-style editorial gallery + openings */}
      <section data-ramton-motion className="relative overflow-hidden bg-white px-0 py-5 sm:py-6 md:py-7">
        <div className="relative z-10">
          <div className="mx-auto max-w-[980px] px-5 text-center sm:px-7 md:px-8">
            <div className="mb-5 flex justify-center">
              <SectionPill>Careers</SectionPill>
            </div>

            <h2 className="text-[34px] font-normal leading-[1.02] tracking-[-0.065em] text-[#111318] sm:text-[48px] md:text-[64px] lg:text-[72px]">
              Great technology starts with
              <br />
              <span className="text-[#f26522]">great people.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-[1.75] text-slate-600 sm:text-[16px] md:text-[17px]">
              Join Ramton and help build reliable, secure and future-ready
              technology solutions for businesses.
            </p>
          </div>

          {/* Invarsys-style editorial moving gallery */}
          <div className="mt-7 w-full overflow-hidden sm:mt-8">
            <div className="ramton-career-track flex w-max items-end gap-[17px] pl-[-110px]">
              {[
                [careerPhotos[0], "gallery-a"],
                [careerPhotos[1], "gallery-b"],
                [careerPhotos[2], "gallery-c"],
                [careerPhotos[3], "gallery-d"],
                [careerPhotos[4], "gallery-e"],
                [careerPhotos[5], "gallery-b"],
                [careerPhotos[6], "gallery-c"],
                [careerPhotos[3], "gallery-d"],
                [careerPhotos[0], "gallery-a"],
                [careerPhotos[1], "gallery-b"],
                [careerPhotos[2], "gallery-c"],
                [careerPhotos[4], "gallery-e"],
              ].map(([image, size], index) => (
                <div
                  key={`${image}-${index}`}
                  className={`career-gallery-card ${size} group relative shrink-0 overflow-hidden rounded-[15px] bg-slate-100`}
                >
                  <img
                    src={image}
                    alt="Ramton team and workplace"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section data-ramton-motion className="relative overflow-hidden bg-white px-4 py-3 sm:px-6 sm:py-5 md:py-6">
        <div className="pointer-events-none absolute right-[-140px] top-[20%] h-80 w-80 rounded-full bg-[#f26522]/[0.045] blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-[1000px]">
          <div className="mx-auto mb-4 max-w-[800px] text-center sm:mb-6">
            <div className="mb-4"><SectionPill>FAQ</SectionPill></div>
            <h2 className="text-[32px] font-normal leading-[1.04] tracking-[-0.06em] sm:text-[44px] md:text-[56px]">
              Questions, Answered.
            </h2>
            <p className="mx-auto mt-5 max-w-[680px] text-[15px] leading-[1.8] text-slate-600 md:text-[17px]">
              A few things businesses commonly want to know about working with Ramton.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map(([question, answer], index) => {
              const open = openFaq === index;
              return (
                <div key={question} className={`overflow-hidden rounded-[22px] border bg-white transition-all duration-500 ${open ? "border-[#f26522]/40 shadow-[0_20px_50px_-35px_rgba(242,101,34,.25)]" : "border-slate-200 shadow-[0_12px_35px_-28px_rgba(15,23,42,.18)]"}`}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                    aria-expanded={open}
                  >
                    <span className={`text-[16px] font-medium transition-colors duration-300 sm:text-[18px] ${open ? "text-[#f26522]" : "text-[#111318]"}`}>
                      {question}
                    </span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff1e8] text-[#f26522] transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
                      <span className="text-[22px] leading-none">+</span>
                    </span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-500 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="min-h-0 overflow-hidden">
                      <p className="px-5 pb-6 text-[14px] leading-[1.8] text-slate-600 sm:px-7 sm:pb-7 sm:text-[15px]">{answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA — same Home CTA treatment */}
      <section data-ramton-motion className="relative overflow-hidden bg-[#f26522] px-4 pb-8 pt-3 sm:px-6 sm:pb-10 md:pb-16 md:pt-6">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Silk speed={3.1} scale={0.8} color="#ea6507" noiseIntensity={0} rotation={0} />
        </div>

        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#ff781a]/95 via-[#f26522]/95 to-[#a9410d]/95 px-5 py-10 text-center text-white shadow-[0_30px_80px_-45px_rgba(242,101,34,.55)] sm:rounded-[28px] sm:px-10 sm:py-14 md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 opacity-[0.14]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.9) 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
            <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full border border-white/15 ramton-float" />
            <div className="pointer-events-none absolute -right-20 bottom-[-100px] h-72 w-72 rounded-full border border-black/10 ramton-float-reverse" />

            <div className="relative z-10 mx-auto max-w-[760px]">
              <SectionPill>Let's Talk</SectionPill>
              <h2 className="mt-5 text-[32px] font-normal leading-[1.04] tracking-[-0.055em] sm:mt-6 sm:text-[44px] md:text-[62px]">
                Ready to Move Your Business Forward?
              </h2>
              <p className="mx-auto mt-4 max-w-[650px] text-[14px] leading-[1.75] text-white/90 sm:mt-5 sm:text-[15px] md:text-[17px]">
                Let's discuss the right technology strategy for your business
                and build something that works for the long term.
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
