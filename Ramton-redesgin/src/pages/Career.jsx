import { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal";
import Silk from "./Silk.jsx";

import work from "../assets/workplace.png"
/* =========================================================
   HELPERS
========================================================= */

const Arrow = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${className}`}
  >
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

const Icon = ({ children, className = "h-6 w-6" }) => (
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

const SectionLabel = ({ children }) => (
  <span
    className="
      inline-flex items-center justify-center rounded-full border border-slate-200
      bg-white px-7 py-3 text-[12px] font-semibold uppercase
      tracking-[0.18em] text-[#111318]
      shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)]
      md:px-8 md:py-3.5 md:text-[13px]
    "
  >
    {children}
  </span>
);

/* =========================================================
   WHY JOIN DATA
========================================================= */

const benefits = [
  {
    title: "Growth & Learning",
    desc: "Continuous learning, certifications and mentorship programs to advance your technical and professional skills.",
    icon: (
      <>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </>
    ),
  },
  {
    title: "Innovative Work",
    desc: "Work on cutting-edge projects — from enterprise infrastructure to cybersecurity and cloud solutions.",
    icon: (
      <>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7c.7.5 1 1.3 1 2.1V17h6v-2.2c0-.8.3-1.6 1-2.1A7 7 0 0 0 12 2z" />
      </>
    ),
  },
  {
    title: "Collaborative Culture",
    desc: "An inclusive environment where ideas are valued, collaboration is celebrated and every voice matters.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6" />
        <circle cx="17" cy="8" r="2.6" />
        <path d="M22 20c0-2.9-2.2-5-5-5.7" />
      </>
    ),
  },
  {
    title: "Career Development",
    desc: "Clear career paths, regular performance reviews and leadership programs that invest in your long-term growth.",
    icon: (
      <>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </>
    ),
  },
  {
    title: "Meaningful Impact",
    desc: "Deliver real solutions that help businesses across India operate smarter, more securely and efficiently.",
    icon: (
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
    ),
  },
  {
    title: "Professional Growth",
    desc: "Exposure to diverse industries and enterprise clients, building expertise that accelerates your career.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4l2.5 2.5" />
      </>
    ),
  },
];

/* =========================================================
   FORM CONSTANTS
========================================================= */

const CAREER_EMAIL = "careers@ramton.in";

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  position: "",
  experience: "",
  location: "",
  linkedin: "",
  portfolio: "",
  message: "",
};

/* =========================================================
   CAREER PAGE
========================================================= */

function Career3DObjects() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="career-3d-blob career-3d-blob-a" />
      <div className="career-3d-blob career-3d-blob-b" />
      <div className="career-3d-ring career-3d-ring-a" />
      <div className="career-3d-ring career-3d-ring-b" />
      <div className="career-3d-sphere career-3d-sphere-a" />
      <div className="career-3d-sphere career-3d-sphere-b" />
    </div>
  );
}


function BenefitCard({ benefit, number, className = "" }) {
  const { title, desc, icon } = benefit;

  return (
    <article
      className={`career-benefit-card group relative z-10 flex min-h-[220px] flex-col overflow-hidden rounded-[25px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,.18)] transition-all duration-500 hover:-translate-y-2 hover:border-[#f26522]/45 hover:shadow-[0_28px_60px_-30px_rgba(242,101,34,.20)] md:p-7 ${className}`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#f26522]/[0.07] opacity-0 blur-2xl transition-all duration-500 group-hover:scale-[1.8] group-hover:opacity-100" />
      <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#fff1e8] text-[#f26522] transition-all duration-500 group-hover:scale-105 group-hover:bg-[#f26522] group-hover:text-white">
        <Icon className="h-6 w-6">{icon}</Icon>
      </span>
      <div className="relative z-10 mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f26522]">
        {number} / Benefit
      </div>
      <h3 className="relative z-10 mt-2 text-[21px] font-medium leading-tight tracking-[-0.03em] text-[#111318] transition-colors duration-300 group-hover:text-[#f26522]">
        {title}
      </h3>
      <p className="relative z-10 mt-3 text-[14px] leading-6 text-slate-600">
        {desc}
      </p>
      <span className="absolute bottom-0 left-6 h-[2px] w-0 bg-[#f26522] transition-all duration-500 group-hover:w-[calc(100%-48px)]" />
    </article>
  );
}

export default function Career() {
  const revealRef = useReveal([]);
  const [form, setForm] = useState(EMPTY_FORM);

  useEffect(() => {
    const items = document.querySelectorAll("[data-career-reveal]");
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("career-is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  const [errors, setErrors] = useState({});
  const [emailOpened, setEmailOpened] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Full name is required.";
    if (!form.email.trim()) {
      next.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.position.trim()) next.position = "Position is required.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      const firstKey = Object.keys(validationErrors)[0];
      document
        .getElementById(`field-${firstKey}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const subject = `Career Application - ${form.position} - ${form.name}`;
    const body = [
      "Career Application",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Position: ${form.position}`,
      `Experience: ${form.experience || "Not provided"}`,
      `Location: ${form.location || "Not provided"}`,
      `LinkedIn: ${form.linkedin || "Not provided"}`,
      `Portfolio: ${form.portfolio || "Not provided"}`,
      "",
      "Message / Cover Letter:",
      form.message || "Not provided",
    ].join("\n");

    const mailto =
      `mailto:${CAREER_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setEmailOpened(true);
  };

  const inputBase = (fieldName) =>
    `w-full rounded-[14px] border ${
      errors[fieldName]
        ? "border-red-400 bg-red-50 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(248,113,113,.15)]"
        : "border-slate-200 focus:border-[#f26522] focus:shadow-[0_0_0_3px_rgba(242,101,34,.12)]"
    } bg-white px-4 py-3.5 text-[14px] text-slate-900 placeholder-slate-600 outline-none transition-all duration-200`;

  const labelBase =
    "block mb-1.5 text-[13px] font-medium text-slate-700";

  return (
    <main
      ref={revealRef}
      className="career-page-load relative overflow-hidden bg-white font-['Inter',Arial,sans-serif] text-slate-900"
    >


      <style>{`
        /* =====================================================
           INVARsys-INSPIRED LOAD + SCROLL MOTION
           Existing UI remains intact; this only adds motion.
        ===================================================== */
        @keyframes ramton-page-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ramton-grid-in {
          from {
            opacity: 0;
            transform: scale(1.025);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes ramton-text-reveal {
          from {
            opacity: 0;
            transform: translate3d(0, 42px, 0);
            filter: blur(7px);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            filter: blur(0);
          }
        }

        @keyframes ramton-line-reveal {
          from {
            opacity: 0;
            transform: scaleX(.15);
          }
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        .career-page-load {
          animation: ramton-page-in .8s cubic-bezier(.22,1,.36,1) both;
        }

        .career-hero-grid {
          animation: ramton-grid-in 1.4s cubic-bezier(.22,1,.36,1) both;
          transform-origin: center;
        }

        .career-load-reveal {
          opacity: 0;
          animation: ramton-text-reveal 1s cubic-bezier(.22,1,.36,1) both;
        }

        .career-load-1 { animation-delay: .08s; }
        .career-load-2 { animation-delay: .20s; }
        .career-load-3 { animation-delay: .34s; }
        .career-load-4 { animation-delay: .50s; }
        .career-load-5 { animation-delay: .68s; }

        [data-career-reveal] {
          opacity: 0;
          transform: translate3d(0, 48px, 0);
          transition:
            opacity .9s cubic-bezier(.22,1,.36,1),
            transform .9s cubic-bezier(.22,1,.36,1);
          will-change: opacity, transform;
        }

        [data-career-reveal].career-is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        [data-career-reveal="left"] {
          transform: translate3d(-55px, 25px, 0);
        }

        [data-career-reveal="right"] {
          transform: translate3d(55px, 25px, 0);
        }

        [data-career-reveal="scale"] {
          transform: translate3d(0, 24px, 0) scale(.94);
        }

        [data-career-reveal="scale"].career-is-visible {
          transform: translate3d(0, 0, 0) scale(1);
        }

        .career-stagger > * {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity .75s cubic-bezier(.22,1,.36,1),
            transform .75s cubic-bezier(.22,1,.36,1);
        }

        .career-stagger.career-is-visible > * {
          opacity: 1;
          transform: translateY(0);
        }

        .career-stagger.career-is-visible > *:nth-child(1) { transition-delay: .04s; }
        .career-stagger.career-is-visible > *:nth-child(2) { transition-delay: .12s; }
        .career-stagger.career-is-visible > *:nth-child(3) { transition-delay: .20s; }
        .career-stagger.career-is-visible > *:nth-child(4) { transition-delay: .28s; }
        .career-stagger.career-is-visible > *:nth-child(5) { transition-delay: .36s; }
        .career-stagger.career-is-visible > *:nth-child(6) { transition-delay: .44s; }

        .career-image-reveal {
          overflow: hidden;
        }

        .career-image-reveal img {
          transform: scale(1.08);
          transition: transform 1.2s cubic-bezier(.22,1,.36,1);
        }

        .career-image-reveal.career-is-visible img {
          transform: scale(1);
        }

        .career-section-rule {
          transform-origin: center;
          animation: ramton-line-reveal 1s cubic-bezier(.22,1,.36,1) .25s both;
        }

        .career-cta-magnetic {
          transition:
            transform .45s cubic-bezier(.22,1,.36,1),
            box-shadow .45s ease;
        }

        .career-cta-magnetic:hover {
          transform: translateY(-3px) scale(1.025);
          box-shadow: 0 22px 50px -28px rgba(242,101,34,.45);
        }

        @media (prefers-reduced-motion: reduce) {
          .career-page-load,
          .career-hero-grid,
          .career-load-reveal,
          .career-section-rule {
            animation: none !important;
          }

          [data-career-reveal],
          .career-stagger > * {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

          .career-image-reveal img {
            transform: none !important;
            transition: none !important;
          }
        }



        /* =====================================================
           POLISHED PAGE MOTION
        ===================================================== */
        @keyframes career-reveal-up {
          from { opacity: 0; transform: translate3d(0, 28px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @keyframes career-reveal-scale {
          from { opacity: 0; transform: translate3d(0, 18px, 0) scale(.965); }
          to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
        }

        @keyframes career-image-float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -7px, 0); }
        }

        @keyframes career-star-pulse {
          0%, 100% { transform: scale(.8) rotate(0deg); opacity: .45; }
          50% { transform: scale(1.18) rotate(45deg); opacity: 1; }
        }

        .career-reveal {
          opacity: 0;
          animation: career-reveal-up .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .career-reveal-scale {
          opacity: 0;
          animation: career-reveal-scale .9s cubic-bezier(.22,1,.36,1) forwards;
        }

        .career-image-motion {
          animation: career-image-float 6s ease-in-out infinite;
        }

        .career-star-motion {
          transform-origin: center;
          animation: career-star-pulse 2.8s ease-in-out infinite;
        }

        .career-section-line {
          transform-origin: left center;
          animation: career-line-grow 1.1s cubic-bezier(.22,1,.36,1) both;
        }

        @keyframes career-line-grow {
          from { transform: scaleX(0); opacity: 0; }
          to { transform: scaleX(1); opacity: 1; }
        }

        .career-benefit-card {
          animation: career-reveal-up .8s cubic-bezier(.22,1,.36,1) both;
        }

        .career-benefit-card:nth-child(1) { animation-delay: .05s; }
        .career-benefit-card:nth-child(2) { animation-delay: .15s; }
        .career-benefit-card:nth-child(4) { animation-delay: .25s; }
        .career-benefit-card:nth-child(5) { animation-delay: .35s; }

        .career-form-field {
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .career-form-field:focus-within {
          transform: translateY(-2px);
        }

        .career-submit-glow {
          position: relative;
          isolation: isolate;
        }

        .career-submit-glow::after {
          content: "";
          position: absolute;
          inset: -4px;
          z-index: -1;
          border-radius: 999px;
          background: #f26522;
          opacity: 0;
          filter: blur(14px);
          transition: opacity .35s ease;
        }

        .career-submit-glow:hover::after {
          opacity: .32;
        }

        @media (prefers-reduced-motion: reduce) {
          .career-reveal,
          .career-reveal-scale,
          .career-image-motion,
          .career-star-motion,
          .career-section-line,
          .career-benefit-card {
            animation: none !important;
            opacity: 1 !important;
          }
        }
        @keyframes career-blob-float { 0%,100% { transform:translate3d(0,0,0) rotate(-10deg) scale(1); } 50% { transform:translate3d(22px,-24px,0) rotate(8deg) scale(1.05); } }
        @keyframes career-ring-float { 0%,100% { transform:rotate(-24deg) translate3d(0,0,0); } 50% { transform:rotate(-8deg) translate3d(-16px,20px,0); } }
        @keyframes career-sphere-float { 0%,100% { transform:translate3d(0,0,0); } 50% { transform:translate3d(12px,-18px,0); } }
        .career-3d-blob,.career-3d-ring,.career-3d-sphere { position:absolute; pointer-events:none; }
        .career-3d-blob { width:250px;height:250px;border-radius:42% 58% 55% 45% / 44% 42% 58% 56%;background:radial-gradient(circle at 30% 25%,rgba(255,255,255,.98),transparent 20%),radial-gradient(circle at 65% 30%,rgba(255,190,115,.92),transparent 28%),linear-gradient(145deg,#ffb36f 0%,#f26522 45%,#9c350d 100%);box-shadow:inset -25px -28px 55px rgba(91,25,4,.32),inset 18px 18px 30px rgba(255,255,255,.35),0 35px 80px -35px rgba(242,101,34,.65);opacity:.72;animation:career-blob-float 11s ease-in-out infinite;}
        .career-3d-blob-a{left:-95px;top:120px}.career-3d-blob-b{right:-65px;bottom:40px;width:180px;height:180px;animation-delay:-4s;animation-duration:13s;opacity:.58}
        .career-3d-ring{width:210px;height:125px;border:28px solid rgba(242,101,34,.65);border-radius:50%;box-shadow:inset 8px 8px 15px rgba(255,255,255,.42),inset -12px -12px 25px rgba(100,27,5,.25),0 28px 55px -28px rgba(242,101,34,.5);transform:rotate(-24deg) perspective(500px) rotateX(18deg) rotateY(-18deg);opacity:.55;animation:career-ring-float 12s ease-in-out infinite;}
        .career-3d-ring-a{right:-60px;top:95px}.career-3d-ring-b{left:8%;bottom:-85px;width:165px;height:100px;border-width:22px;opacity:.35;animation-delay:-6s}
        .career-3d-sphere{width:62px;height:62px;border-radius:50%;background:radial-gradient(circle at 28% 22%,#fff 0 8%,#ffcfaa 15%,#f26522 48%,#8d2d09 100%);box-shadow:inset -12px -14px 22px rgba(74,20,3,.32),inset 8px 8px 15px rgba(255,255,255,.4),0 22px 40px -20px rgba(0,0,0,.3);animation:career-sphere-float 8s ease-in-out infinite;}
        .career-3d-sphere-a{left:13%;top:31%}.career-3d-sphere-b{right:16%;bottom:18%;width:42px;height:42px;animation-delay:-3s}
        @media(max-width:639px){.career-3d-blob-a{left:-145px;top:80px;width:185px;height:185px}.career-3d-blob-b{right:-110px;bottom:25px;width:145px;height:145px}.career-3d-ring-a{right:-110px;top:95px;transform:rotate(-24deg) perspective(500px) rotateX(18deg) rotateY(-18deg) scale(.7)}.career-3d-ring-b{left:-45px}.career-3d-sphere-a{left:8%;top:22%;width:40px;height:40px}.career-3d-sphere-b{right:8%;bottom:14%;width:34px;height:34px}}
      `}</style>

      {/* CAREER HERO — same visual language as Home */}
      <section data-career-reveal className="career-hero-grid relative overflow-hidden bg-white">
        <Career3DObjects />
        <div className="pointer-events-none absolute inset-0 opacity-[0.72]" style={{backgroundImage:"linear-gradient(to right, rgba(15,23,42,.065) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.065) 1px, transparent 1px)",backgroundSize:"88px 88px"}} />
        <div className="pointer-events-none absolute left-1/2 top-[20%] h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-[#f26522]/[0.055] blur-[120px]" />

        <div className="relative z-10 mx-auto flex min-h-[410px] max-w-[1500px] flex-col items-center justify-center px-5 pb-8 pt-8 text-center sm:min-h-[430px] sm:px-7 sm:pb-9 sm:pt-10 md:min-h-[460px] md:px-8 md:pb-10 md:pt-11 lg:min-h-[485px] lg:px-10">
          <div className="career-reveal mb-5">
            <SectionLabel>Careers at Ramton</SectionLabel>
          </div>
          <h1 className="career-reveal max-w-[1200px] text-[42px] font-normal leading-[1.02] tracking-[-0.065em] text-[#111318] sm:text-[58px] md:text-[76px] lg:text-[88px] xl:text-[94px]">
            Build your career.
            <br />
            <span className="text-[#f26522]">Shape the future.</span>
          </h1>
          <p className="career-reveal mx-auto mt-4 max-w-[780px] text-[14px] leading-[1.7] text-slate-700 sm:mt-7 sm:text-[17px] md:text-[19px]">
            Join a team that builds reliable, secure and future-ready technology solutions while giving talented people room to learn, grow and make an impact.
          </p>
           <a
              href="#apply"
              aria-label="Explore Career"
              className="career-reveal group mt-4 relative inline-flex h-[60px] w-[225px] items-center overflow-hidden rounded-full bg-orange-500 text-[#111318] shadow-[0_18px_40px_-28px_rgba(15,23,42,.28)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5"
            >
              <span
                className="absolute left-1.5 top-1/2 z-10 flex h-[52px] w-[52px] -translate-y-1/2 shrink-0 items-center justify-center rounded-full bg-white text-white transition-[width,border-radius] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-[calc(100%-12px)] group-hover:rounded-full"
              >
                <span className="pointer-events-none absolute left-0 top-0 flex h-[52px] w-[52px] shrink-0 items-center justify-center">
                  <Arrow className="h-5 w-5 shrink-0 transform-none" />
                </span>
              </span>

              <span className="relative z-60 ml-[63px] whitespace-nowrap text-white text-[18px] font-bold transition-colors duration-300 group-hover:text-black">
                Explore career
              </span>
            </a>
          <div className="mt-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400"><span className="h-px w-8 bg-[#f26522]/60" />Think · Build · Grow<span className="h-px w-8 bg-[#f26522]/60" /></div>
        </div>
      </section>

      {/* =====================================================
          WHY JOIN — centered Invarsys-style composition
      ===================================================== */}
      <section id="why-join" className="career-section-reveal relative overflow-hidden bg-white px-4 py-5 sm:px-6 sm:py-7 md:py-8">
        <div className="mx-auto w-full max-w-[1380px]">
          <div data-career-reveal="scale" className="mx-auto max-w-[900px] text-center">
            <div className="mb-3 flex justify-center">
              <SectionLabel>Why Join Ramton</SectionLabel>
            </div>
            <h2 className="text-[34px] font-normal leading-[1.02] tracking-[-0.065em] text-[#111318] sm:text-[48px] md:text-[62px] lg:text-[68px]">
              A workplace
              <br />
              that helps you <span className="text-[#f26522]">grow.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-[700px] text-[14px] leading-7 text-slate-600 sm:text-[15px] md:text-[16px]">
              Be part of a team that values ideas, encourages learning
              <br className="hidden sm:block" />
              and creates real impact.
            </p>
          </div>

          <div className="relative mx-auto mt-5 max-w-[1260px] lg:mt-6">
            {/* thin Invarsys-style connector lines + orange stars */}
            <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
              <div className="absolute left-[25.7%] top-[23%] h-px w-[9.5%] bg-slate-200" />
              <div className="absolute left-[35.15%] top-[23%] h-[112px] w-px bg-slate-200" />
              <span className="career-star-motion absolute left-[34.72%] top-[calc(23%+106px)] text-[23px] leading-none text-[#f26522]">✦</span>

              <div className="absolute right-[25.7%] top-[23%] h-px w-[9.5%] bg-slate-200" />
              <div className="absolute right-[35.15%] top-[23%] h-[112px] w-px bg-slate-200" />
              <span className="career-star-motion absolute right-[34.25%] top-[calc(23%+106px)] text-[23px] leading-none text-[#f26522]">✦</span>

              <div className="absolute left-[25.7%] bottom-[23%] h-px w-[9.5%] bg-slate-200" />
              <div className="absolute left-[35.15%] bottom-[23%] h-[112px] w-px bg-slate-200" />
              <span className="career-star-motion absolute left-[34.72%] bottom-[calc(23%+106px)] text-[23px] leading-none text-[#f26522]">✦</span>

              <div className="absolute right-[25.7%] bottom-[23%] h-px w-[9.5%] bg-slate-200" />
              <div className="absolute right-[35.15%] bottom-[23%] h-[112px] w-px bg-slate-200" />
              <span className="career-star-motion absolute right-[34.25%] bottom-[calc(23%+106px)] text-[23px] leading-none text-[#f26522]">✦</span>
            </div>

            <div data-career-reveal="scale" className="career-stagger grid items-center gap-5 lg:grid-cols-[1fr_1.9fr_1fr] lg:grid-rows-[1fr_auto_1fr] lg:gap-x-14 lg:gap-y-4">

              <BenefitCard
                benefit={benefits[0]}
                number="01"
                className="lg:col-start-1 lg:row-start-1 lg:self-start"
              />

              <BenefitCard
                benefit={benefits[1]}
                number="02"
                className="lg:col-start-3 lg:row-start-1 lg:self-start"
              />

              {/* This is the ONLY middle element: centered horizontally + vertically */}
              <div className="reveal from-scale career-image-motion relative z-10 order-first mx-auto w-full overflow-hidden rounded-[25px] border border-slate-200 bg-slate-100 shadow-[0_25px_70px_-40px_rgba(15,23,42,.28)] lg:col-start-2 lg:row-start-1 lg:row-span-3 lg:order-none lg:h-[300px] lg:self-center">
                <img
                  src={work}
                  alt="Ramton workplace"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
                  <span className="inline-flex rounded-full border border-white/60 bg-white/95 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#111318] shadow-lg">
                    Learn · Build · Grow
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/55 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    Life at Ramton
                    <Arrow className="h-3.5 w-3.5 transform-none" />
                  </span>
                </div>
              </div>

              <BenefitCard
                benefit={benefits[3]}
                number="04"
                className="lg:col-start-1 lg:row-start-3 lg:self-end"
              />

              <BenefitCard
                benefit={benefits[2]}
                number="03"
                className="lg:col-start-3 lg:row-start-3 lg:self-end"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          APPLICATION FORM
      ===================================================== */}
      <section id="apply" className="relative overflow-hidden bg-[#fafafa] px-4 py-2 sm:px-6 sm:py-3 md:py-4">
        <div className="mx-auto max-w-[1320px]">

          <div data-career-reveal="scale" className="mx-auto mb-4 max-w-[800px] text-center">
            <div className="mb-3">
              <SectionLabel>Apply Now</SectionLabel>
            </div>
            <h2
              className="
                text-[28px]  leading-[1] tracking-[-0.055em]
                text-slate-900
                sm:text-[46px] md:text-[62px] lg:text-[72px]
              "
            >
              Start Your Journey
              <br />
              With{" "}
              <span className="text-[#f26522]">Ramton.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[600px] text-[16px] leading-7 text-slate-700">
              Fill in your details and click{" "}
              <strong className="text-slate-900">Send Email</strong>. Your
              default email app will open with a pre-filled application —
              attach your resume and hit send.
            </p>
          </div>

          <div className="reveal from-scale career-reveal-scale mx-auto w-full max-w-[980px]">
            <div
              className="
                relative overflow-hidden rounded-[25px]
                border border-slate-200
                bg-white
                p-6 shadow-[0_22px_60px_-32px_rgba(15,23,42,.18)]
                md:p-9 lg:p-11
              "
            >
              {/* BG glow orb */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#f26522]/10 blur-3xl" />

              <form onSubmit={handleSubmit} noValidate className="relative z-10">

                {/* ─ Row 1: Name + Email ─ */}
                <div className="career-form-field grid gap-5 sm:grid-cols-2">
                  <div id="field-name">
                    <label htmlFor="f-name" className={labelBase}>
                      Full Name{" "}
                      <span className="text-[#f26522]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="f-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Rahul Sharma"
                      value={form.name}
                      onChange={handleChange}
                      className={inputBase("name")}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-[12px] text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div id="field-email">
                    <label htmlFor="f-email" className={labelBase}>
                      Email Address{" "}
                      <span className="text-[#f26522]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="f-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="rahul@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputBase("email")}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-[12px] text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* ─ Row 2: Phone + Position ─ */}
                <div className="career-form-field mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="f-phone" className={labelBase}>
                      Phone Number
                    </label>
                    <input
                      id="f-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputBase("phone")}
                    />
                  </div>

                  <div id="field-position">
                    <label htmlFor="f-position" className={labelBase}>
                      Position Applying For{" "}
                      <span className="text-[#f26522]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="f-position"
                      name="position"
                      type="text"
                      placeholder="e.g. Software Developer"
                      value={form.position}
                      onChange={handleChange}
                      className={inputBase("position")}
                    />
                    {errors.position && (
                      <p className="mt-1.5 text-[12px] text-red-500">{errors.position}</p>
                    )}
                  </div>
                </div>

                {/* ─ Row 3: Experience + Location ─ */}
                <div className="career-form-field mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="f-experience" className={labelBase}>
                      Years of Experience
                    </label>
                    <input
                      id="f-experience"
                      name="experience"
                      type="text"
                      placeholder="e.g. 3 Years"
                      value={form.experience}
                      onChange={handleChange}
                      className={inputBase("experience")}
                    />
                  </div>

                  <div>
                    <label htmlFor="f-location" className={labelBase}>
                      Current Location
                    </label>
                    <input
                      id="f-location"
                      name="location"
                      type="text"
                      autoComplete="address-level2"
                      placeholder="e.g. Noida, India"
                      value={form.location}
                      onChange={handleChange}
                      className={inputBase("location")}
                    />
                  </div>
                </div>

                {/* ─ Row 4: LinkedIn + Portfolio ─ */}
                <div className="career-form-field mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="f-linkedin" className={labelBase}>
                      LinkedIn Profile
                    </label>
                    <input
                      id="f-linkedin"
                      name="linkedin"
                      type="url"
                      placeholder="https://linkedin.com/in/yourname"
                      value={form.linkedin}
                      onChange={handleChange}
                      className={inputBase("linkedin")}
                    />
                  </div>

                  <div>
                    <label htmlFor="f-portfolio" className={labelBase}>
                      Portfolio / Website
                    </label>
                    <input
                      id="f-portfolio"
                      name="portfolio"
                      type="url"
                      placeholder="https://yourportfolio.com"
                      value={form.portfolio}
                      onChange={handleChange}
                      className={inputBase("portfolio")}
                    />
                  </div>
                </div>

                {/* ─ Message ─ */}
                <div className="mt-5">
                  <label htmlFor="f-message" className={labelBase}>
                    Message / Cover Letter
                  </label>
                  <textarea
                    id="f-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about yourself, your experience and why you'd like to join Ramton..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputBase("message")} resize-none`}
                  />
                </div>

                {/* ─ Resume note ─ */}
                <div
                  className="
                    mt-6 flex items-start gap-3
                    rounded-[14px] border border-slate-200
                    bg-white px-5 py-4
                  "
                >
                  <span
                    className="
                      mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center
                      rounded-full bg-[#f26522] text-slate-900
                      text-[10px] font-bold
                    "
                  >
                    !
                  </span>
                  <p className="text-[13px] leading-6 text-[#5c6374]">
                    <strong className="text-slate-900">Resume / CV:</strong>{" "}
                    Please attach your resume to the email before sending.
                    After clicking Send Email, your email client will open
                    with the application pre-filled — simply attach your
                    CV and click send.
                  </p>
                </div>

                {/* ─ Required fields note ─ */}
                <p className="mt-4 text-[12px] text-[#9aa3af]">
                  Fields marked <span className="text-[#f26522]">*</span> are required.
                </p>

                {/* ─ Submit button ─ */}
                <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="
                      career-submit-glow group inline-flex items-center justify-center gap-3
                      rounded-full bg-[#f26522]
                      px-8 py-4 text-[15px] font-semibold text-slate-900
                      shadow-[0_18px_35px_-18px_rgba(242,101,34,.7)]
                      transition-all duration-300
                      hover:-translate-y-1 hover:bg-[#dc5718]
                      hover:shadow-[0_22px_42px_-18px_rgba(242,101,34,.75)]
                      active:scale-95
                    "
                  >
                    Send Email
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path d="M22 2L11 13" />
                      <path d="M22 2L15 22l-4-9-9-4 20-7z" />
                    </svg>
                  </button>

                  <p className="text-[13px] text-[#8a95a5]">
                    Opens your default email app with the application pre-filled.
                  </p>
                </div>

                {/* ─ Post-send confirmation ─ */}
                {emailOpened && (
                  <div
                    className="
                      mt-6 flex items-start gap-3
                      rounded-[14px] border border-[#bbf0cc]
                      bg-[#f2fff5] px-5 py-4
                    "
                  >
                    <span
                      className="
                        mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center
                        rounded-full bg-green-500 text-slate-900 text-[10px] font-bold
                      "
                    >
                      ✓
                    </span>
                    <p className="text-[13px] leading-6 text-[#2d6a41]">
                      <strong>Your email app is opening.</strong> Please
                      review the application, attach your resume and click
                      send to submit your application to Ramton.
                    </p>
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA — same orange/Silk treatment as Home */}
      <section data-career-reveal className="relative overflow-hidden bg-[#f26522] px-4 pb-4 pt-1 sm:px-6 sm:pb-6 md:pb-8 md:pt-2">
        <div className="absolute inset-0 z-0 overflow-hidden"><Silk speed={3.1} scale={0.8} color="#ea6507" noiseIntensity={0} rotation={0} /></div>
        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#ff781a]/95 via-[#f26522]/95 to-[#a9410d]/95 px-5 py-10 text-center text-white shadow-[0_30px_80px_-45px_rgba(242,101,34,.55)] sm:rounded-[28px] sm:px-10 sm:py-14 md:px-16 md:py-18">
            <div className="pointer-events-none absolute inset-0 opacity-[0.14]" style={{backgroundImage:"radial-gradient(rgba(255,255,255,.9) 1px, transparent 1px)",backgroundSize:"12px 12px"}} />
            <div className="relative z-10 mx-auto max-w-[760px]">
              <SectionLabel>Career</SectionLabel>
              <h2 className="mt-5 text-[32px] font-normal leading-[1.04] tracking-[-0.055em] sm:text-[44px] md:text-[62px]">Ready to Grow With Ramton?</h2>
              <p className="mx-auto mt-4 max-w-[650px] text-[14px] leading-[1.75] text-white/90 sm:text-[15px] md:text-[17px]">Have questions about careers, internships or opportunities? Reach out to our HR team.</p>
              <a href={`mailto:${CAREER_EMAIL}`} className="group relative mt-7 inline-flex h-[58px] w-[185px] items-center overflow-hidden rounded-full bg-white px-1.5 text-[#111318] shadow-[0_18px_40px_-28px_rgba(15,23,42,.28)] transition-all duration-500 hover:-translate-y-0.5">
                <span className="absolute left-1.5 top-1/2 z-10 h-[52px] w-[52px] -translate-y-1/2 rounded-full bg-[#f26522] transition-[width] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-[calc(100%-12px)]" />
                <span className="pointer-events-none absolute left-1.5 top-1/2 z-30 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center text-white"><Arrow className="h-5 w-5 shrink-0 transform-none" /></span>
                <span className="relative z-20 ml-[65px] whitespace-nowrap text-[16px] font-semibold transition-colors duration-300 group-hover:text-white">Email HR</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}