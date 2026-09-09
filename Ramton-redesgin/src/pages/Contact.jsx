import { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal";
import Silk from "./Silk.jsx";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Users,
  Shield,
  Zap,
  Clock,
} from "lucide-react";

/* =========================================================
   HELPERS
========================================================= */

const Arrow = ({ className = "", staticArrow = false }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    className={`h-5 w-5 ${!staticArrow ? "transition-transform duration-300 group-hover:translate-x-1" : ""} ${className}`}
  >
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

const SectionPill = ({ children }) => (
  <span className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] sm:text-[12px] md:px-8 md:py-3.5 md:text-[13px]">
    {children}
  </span>
);

function ThreeDObjects() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="contact-blob contact-blob-a" />
      <div className="contact-blob contact-blob-b" />
      <div className="contact-ring contact-ring-a" />
      <div className="contact-ring contact-ring-b" />
      <div className="contact-sphere contact-sphere-a" />
      <div className="contact-sphere contact-sphere-b" />
    </div>
  );
}

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  subject: "",
  message: "",
};

const CONTACT_EMAIL = "info@ramton.in";

const SERVICES = [
  "Hardware Solutions",
  "Software Solutions",
  "Cloud Solutions",
  "Cybersecurity",
  "Networking",
  "AMC / IT Support",
  "Surveillance & Security",
  "Other",
];

const WHY_RAMTON = [
  {
    title: "Experienced Technology Team",
    desc: "Over 20 years of combined expertise across IT infrastructure, cybersecurity, networking and cloud solutions.",
    icon: Users,
  },
  {
    title: "End-to-End IT Solutions",
    desc: "From hardware procurement to deployment, security and ongoing support — we handle every layer of your IT stack.",
    icon: Zap,
  },
  {
    title: "Enterprise-Ready Infrastructure",
    desc: "Our solutions are built to scale with your business, meeting enterprise-grade performance and compliance standards.",
    icon: Shield,
  },
  {
    title: "Responsive Support",
    desc: "Dedicated account managers and a responsive support team ensure you're never left waiting when it matters most.",
    icon: Clock,
  },
];

const LOCATIONS = [
  {
    city: "New Delhi",
    tag: "Head Office",
    address: (
      <>
        145 B/9, 1st &amp; 3rd Floor, Kishangarh,
        <br />
        Near United Free Church, Vasant Kunj,
        <br />
        New Delhi – 110070, India
      </>
    ),
    maps: "https://www.google.com/maps/search/?api=1&query=145+B%2F9+Kishangarh+Vasant+Kunj+New+Delhi+110070",
  },
  {
    city: "Mumbai",
    tag: "Branch Office",
    address: (
      <>
        Flat No-B-603, B. No-56,
        <br />
        Tilak Nagar Vardhan CHSL, B Wing,
        <br />
        Tilak Nagar Road, Chembur,
        <br />
        Mumbai – 400089, Maharashtra
      </>
    ),
    maps: "https://www.google.com/maps/search/?api=1&query=Tilak+Nagar+Vardhan+CHSL+Chembur+Mumbai+400089",
  },
  {
    city: "Noida",
    tag: "Branch Office",
    address: (
      <>
        A-41, Sector 4,
        <br />
        Noida, Uttar Pradesh – 201301
      </>
    ),
    maps: "https://www.google.com/maps/search/?api=1&query=A-41+Sector+4+Noida+Uttar+Pradesh+201301",
  },
];

function ExpandingButton({ href, children }) {
  return (
    <a
      href={href}
      className="
        group relative inline-flex h-[58px] w-[210px] items-center
        overflow-hidden rounded-full border border-slate-200 bg-white
        px-1.5 text-[#111318]
        shadow-[0_18px_45px_-24px_rgba(15,23,42,.22)]
        transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
        hover:-translate-y-1 hover:border-[#f26522]/40
        hover:shadow-[0_22px_50px_-24px_rgba(242,101,34,.25)]
      "
    >
      {/* Expanding orange pill */}
      <span
        className="
          absolute left-1.5 top-1/2 z-10 flex h-[52px] w-[52px]
          -translate-y-1/2 items-center justify-center rounded-full
          bg-[#f26522]
          transition-all duration-500
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:w-[calc(100%-12px)]
        "
      />

      {/* Locked arrow — never moves */}
      <span
        className="
          pointer-events-none absolute left-1.5 top-1/2 z-30
          flex h-[52px] w-[52px] -translate-y-1/2
          items-center justify-center text-white
        "
      >
        <Arrow staticArrow className="h-5 w-5 shrink-0 transform-none" />
      </span>

      {/* Text moves only in color, not position */}
      <span
        className="
          relative z-20 ml-[68px] whitespace-nowrap
          text-[14px] font-semibold text-[#111318]
          transition-colors duration-300
          group-hover:text-white
        "
      >
        {children}
      </span>
    </a>
  );
}

/* =========================================================
   CONTACT PAGE
========================================================= */

export default function Contact() {
  const revealRef = useReveal([]);
  const [form, setForm] = useState(EMPTY_FORM);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".contact-reveal, .contact-reveal-left, .contact-reveal-right"
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const next = {};

    if (!form.name.trim()) next.name = "Full name is required.";

    if (!form.email.trim()) {
      next.email = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }

    if (form.phone.trim() && !/^[\d\s+\-()]{7,15}$/.test(form.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }

    if (!form.service) next.service = "Please select a service or requirement.";
    if (!form.message.trim()) next.message = "Message is required.";

    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      const firstKey = Object.keys(validationErrors)[0];
      document
        .getElementById(`cf-${firstKey}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setSubmitting(true);

    const subject = encodeURIComponent(
      `Enquiry${form.subject ? ` — ${form.subject}` : ""} — ${form.name}`
    );

    const body = encodeURIComponent(
      [
        "Contact Enquiry from Ramton Website",
        "",
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "Not provided"}`,
        `Company: ${form.company || "Not provided"}`,
        `Service / Requirement: ${form.service}`,
        `Subject: ${form.subject || "Not provided"}`,
        "",
        "Message:",
        form.message,
      ].join("\n")
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const inputBase = (fieldName) =>
    `w-full rounded-[14px] border ${
      errors[fieldName]
        ? "border-red-400 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(248,113,113,.15)]"
        : "border-slate-200 focus:border-[#f26522] focus:shadow-[0_0_0_3px_rgba(242,101,34,.12)]"
    } bg-white px-4 py-3.5 text-[14px] text-slate-900 placeholder-slate-400 outline-none transition-all duration-300 hover:border-slate-300`;

  const labelBase = "mb-2 block text-[12px] font-semibold uppercase tracking-[0.08em] text-[#111318]";

  return (
    <main
      ref={revealRef}
      className="relative overflow-hidden bg-white font-[Inter,Arial,sans-serif] text-[#111318]"
    >
      <style>{`
        html { scroll-behavior: smooth; }

        @keyframes contact-hero-in {
          0% { opacity:0; transform:translateY(34px) scale(.97); filter:blur(8px); }
          100% { opacity:1; transform:translateY(0) scale(1); filter:blur(0); }
        }

        @keyframes contact-pill-in {
          0% { opacity:0; transform:translateY(18px) scale(.92); }
          100% { opacity:1; transform:translateY(0) scale(1); }
        }

        @keyframes contact-float {
          0%,100% { transform:translate3d(0,0,0) rotate(-7deg) scale(1); }
          50% { transform:translate3d(18px,-22px,0) rotate(7deg) scale(1.05); }
        }

        @keyframes contact-float-reverse {
          0%,100% { transform:translate3d(0,0,0) rotate(8deg) scale(1); }
          50% { transform:translate3d(-18px,18px,0) rotate(-7deg) scale(.96); }
        }

        @keyframes contact-ring {
          0% { transform:rotate(-24deg) translate3d(0,0,0); }
          50% { transform:rotate(-8deg) translate3d(-16px,18px,0); }
          100% { transform:rotate(-24deg) translate3d(0,0,0); }
        }

        @keyframes contact-spin {
          from { transform:rotate(0deg); }
          to { transform:rotate(360deg); }
        }

        @keyframes contact-shimmer {
          0% { transform:translateX(-120%); }
          100% { transform:translateX(120%); }
        }

        @keyframes contact-pulse {
          0%,100% { box-shadow:0 0 0 0 rgba(242,101,34,.16); }
          50% { box-shadow:0 0 0 12px rgba(242,101,34,0); }
        }

        .contact-hero-pill {
          animation:contact-pill-in .8s cubic-bezier(.22,1,.36,1) both;
        }

        .contact-hero-title {
          animation:contact-hero-in 1s .12s cubic-bezier(.22,1,.36,1) both;
        }

        .contact-hero-copy {
          animation:contact-hero-in 1s .24s cubic-bezier(.22,1,.36,1) both;
        }

        .contact-hero-cta {
          animation:contact-hero-in 1s .36s cubic-bezier(.22,1,.36,1) both;
        }

        .contact-blob,
        .contact-ring,
        .contact-sphere {
          position:absolute;
          pointer-events:none;
          transform-style:preserve-3d;
          will-change:transform;
        }

        .contact-blob {
          width:260px;
          height:260px;
          border-radius:42% 58% 55% 45% / 44% 42% 58% 56%;
          background:
            radial-gradient(circle at 30% 24%,rgba(255,255,255,.98),transparent 20%),
            radial-gradient(circle at 65% 30%,rgba(255,190,115,.92),transparent 28%),
            linear-gradient(145deg,#ffb36f 0%,#f26522 46%,#9c350d 100%);
          box-shadow:
            inset -25px -28px 55px rgba(91,25,4,.30),
            inset 18px 18px 30px rgba(255,255,255,.35),
            0 35px 80px -35px rgba(242,101,34,.65);
          opacity:.90;
          animation:contact-float 11s ease-in-out infinite;
        }

        .contact-blob-a { left:-105px; top:110px; }
        .contact-blob-b { right:-80px; bottom:-55px; width:190px; height:190px; animation-duration:13s; animation-delay:-4s; opacity:.68; }

        .contact-ring {
          width:220px;
          height:130px;
          border:28px solid rgba(242,101,34,.30);
          border-radius:50%;
          box-shadow:inset 8px 8px 15px rgba(255,255,255,.4),0 28px 55px -28px rgba(242,101,34,.35);
          transform:rotate(-24deg) perspective(500px) rotateX(18deg) rotateY(-18deg);
          animation:contact-ring 12s ease-in-out infinite;
        }

        .contact-ring-a { right:-70px; top:90px; }
        .contact-ring-b { left:9%; bottom:-95px; width:170px; height:100px; border-width:22px; opacity:.35; animation-delay:-6s; }

        .contact-sphere {
          width:64px;
          height:64px;
          border-radius:50%;
          background:radial-gradient(circle at 28% 22%,#fff 0 8%,#ffcfaa 15%,#f26522 48%,#8d2d09 100%);
          box-shadow:inset -12px -14px 22px rgba(74,20,3,.32),inset 8px 8px 15px rgba(255,255,255,.4),0 22px 40px -20px rgba(0,0,0,.3);
          animation:contact-float-reverse 8s ease-in-out infinite;
        }

        .contact-sphere-a { left:13%; top:34%; }
        .contact-sphere-b { right:16%; bottom:22%; width:44px; height:44px; animation-delay:-3s; }

        .contact-grid {
          background-image:
            linear-gradient(rgba(15,23,42,.055) 1px,transparent 1px),
            linear-gradient(90deg,rgba(15,23,42,.055) 1px,transparent 1px);
          background-size:96px 96px;
        }

        .contact-grid::after {
          content:"";
          position:absolute;
          inset:0;
          background:
            radial-gradient(circle at 50% 45%,rgba(242,101,34,.10),transparent 34%),
            radial-gradient(circle at 50% 100%,rgba(242,101,34,.05),transparent 30%);
          pointer-events:none;
        }

        .contact-card {
          position:relative;
          overflow:hidden;
          border:1px solid #e2e8f0;
          background:white;
          border-radius:25px;
          box-shadow:0 22px 60px -35px rgba(15,23,42,.22);
          transition:transform .5s cubic-bezier(.22,1,.36,1),box-shadow .5s,border-color .4s;
        }

        .contact-card:hover {
          transform:translateY(-7px);
          border-color:rgba(242,101,34,.42);
          box-shadow:0 30px 70px -32px rgba(242,101,34,.22);
        }

        .contact-card::before {
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(110deg,transparent 35%,rgba(242,101,34,.07) 50%,transparent 65%);
          transform:translateX(-120%);
          transition:transform .8s ease;
          pointer-events:none;
        }

        .contact-card:hover::before { transform:translateX(120%); }

        .contact-icon {
          transition:transform .45s cubic-bezier(.22,1,.36,1),background .35s,color .35s;
        }

        .contact-card:hover .contact-icon {
          transform:scale(1.1) rotate(3deg);
          background:#f26522;
          color:#111318;
        }

        .contact-reveal {
          opacity:0;
          transform:translateY(30px);
          transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1);
        }

        .contact-reveal.is-visible {
          opacity:1;
          transform:translateY(0);
        }

        .contact-reveal-left {
          opacity:0;
          transform:translateX(-35px);
          transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1);
        }

        .contact-reveal-left.is-visible {
          opacity:1;
          transform:translateX(0);
        }

        .contact-reveal-right {
          opacity:0;
          transform:translateX(35px);
          transition:opacity .85s cubic-bezier(.22,1,.36,1),transform .85s cubic-bezier(.22,1,.36,1);
        }

        .contact-reveal-right.is-visible {
          opacity:1;
          transform:translateX(0);
        }

        .contact-input:focus { transform:translateY(-1px); }

        .contact-send {
          animation:contact-pulse 2.8s ease-in-out infinite;
        }

        .contact-orbit-dot {
          animation:contact-spin 18s linear infinite;
        }

        @media (max-width:639px) {
          .contact-grid { background-size:62px 62px; }
          .contact-blob-a { left:-150px; top:95px; width:190px; height:190px; opacity:.48; }
          .contact-blob-b { right:-110px; bottom:-50px; width:150px; height:150px; }
          .contact-ring-a { right:-125px; top:95px; transform:rotate(-24deg) scale(.72); }
          .contact-ring-b { left:-55px; bottom:-75px; }
          .contact-sphere-a { left:6%; top:25%; width:42px; height:42px; }
          .contact-sphere-b { right:8%; bottom:17%; width:34px; height:34px; }
        }

        @media (prefers-reduced-motion:reduce) {
          *,*::before,*::after {
            animation-duration:.01ms !important;
            animation-iteration-count:1 !important;
            scroll-behavior:auto !important;
            transition-duration:.01ms !important;
          }
        }
      `}</style>

      {/* =====================================================
          HERO — SAME VISUAL LANGUAGE AS HOME
      ===================================================== */}
      <section className="contact-grid relative isolate flex min-h-[545px] items-center overflow-hidden bg-white px-4 py-8 sm:min-h-[565px] sm:px-6 md:min-h-[590px] lg:min-h-[610px]">
        <ThreeDObjects />

        <div className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-col items-center text-center">
          <div className="contact-hero-pill mb-4">
            <SectionPill>Contact Ramton</SectionPill>
          </div>

          <h1 className="contact-hero-title max-w-[980px] text-[44px] font-normal leading-[.96] tracking-[-0.065em] text-[#111318] sm:text-[62px] md:text-[82px] lg:text-[96px]">
            Let&apos;s Build
            <br />
            <span className="text-[#f26522]">What&apos;s Next.</span>
          </h1>

          <p className="contact-hero-copy mt-5 max-w-[760px] text-[15px] leading-7 text-slate-600 sm:text-[17px] md:text-[18px]">
            Have a technology challenge, infrastructure requirement, security
            concern, or a new project in mind? Our team is ready to help.
          </p>

          <div className="contact-hero-cta mt-6 flex flex-wrap items-center justify-center gap-3">
            <ExpandingButton href="#contact-form" >
              Talk to an Expert
            </ExpandingButton>
            <ExpandingButton href="#contact-form" >
              Get a Free Quote
            </ExpandingButton>
          </div>

          <div className="mt-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 sm:text-[11px]">
            <span className="h-px w-8 bg-[#f26522]/50 sm:w-10" />
            Connect · Discuss · Build
            <span className="h-px w-8 bg-[#f26522]/50 sm:w-10" />
          </div>
        </div>
      </section>

      {/* =====================================================
          FORM + CONTACT DETAILS
      ===================================================== */}
      <section id="contact-form" className="relative bg-[#fafafa] px-4 py-6 sm:px-6 sm:py-7 md:py-9 lg:py-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="contact-reveal mx-auto mb-6 max-w-[760px] text-center">
            <div className="mb-5">
              <SectionPill>Get in Touch</SectionPill>
            </div>
            <h2 className="text-[30px] font-normal leading-[1.02] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px]">
              Tell Us How We Can <span className="text-[#f26522]">Help.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[650px] text-[15px] leading-7 text-slate-600 sm:text-[16px]">
              Share a few details about your requirement and our team will get
              back to you within one business day.
            </p>
          </div>

          <div className="grid items-start gap-5 lg:grid-cols-[.78fr_1.22fr] lg:gap-6">
            {/* LEFT INFO */}
            <div className="contact-reveal-left">
              <div className="contact-card p-6 sm:p-7 md:p-8">
                <div className="relative z-10">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#f26522]">
                    Start a conversation
                  </p>

                  <h3 className="mt-3 text-[27px] font-normal leading-tight tracking-[-0.045em] text-[#111318] sm:text-[32px]">
                    We&apos;re here to help.
                  </h3>

                  <p className="mt-3 max-w-[500px] text-[14px] leading-7 text-slate-600">
                    Tell us what you&apos;re building, improving or solving.
                    We&apos;ll connect you with the right team.
                  </p>

                  <div className="mt-7 space-y-3">
                    <a
                      href="tel:+911141403366"
                      className="group flex items-center gap-4 rounded-[18px] border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#f26522]/40 hover:shadow-[0_18px_35px_-25px_rgba(242,101,34,.35)]"
                    >
                      <span className="contact-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#fff1e8] text-[#f26522]">
                        <Phone className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Call us
                        </span>
                        <span className="mt-1 block text-[14px] font-semibold text-[#111318]">
                          +91 11 41403366
                        </span>
                      </span>
                    </a>

                    <a
                      href="tel:+918368292114"
                      className="group flex items-center gap-4 rounded-[18px] border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#f26522]/40 hover:shadow-[0_18px_35px_-25px_rgba(242,101,34,.35)]"
                    >
                      <span className="contact-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#fff1e8] text-[#f26522]">
                        <Phone className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Mobile
                        </span>
                        <span className="mt-1 block text-[14px] font-semibold text-[#111318]">
                          +91 83682 92114
                        </span>
                      </span>
                    </a>

                    <a
                      href="mailto:info@ramton.in"
                      className="group flex items-center gap-4 rounded-[18px] border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#f26522]/40 hover:shadow-[0_18px_35px_-25px_rgba(242,101,34,.35)]"
                    >
                      <span className="contact-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#fff1e8] text-[#f26522]">
                        <Mail className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Email us
                        </span>
                        <span className="mt-1 block text-[14px] font-semibold text-[#111318]">
                          info@ramton.in
                        </span>
                      </span>
                    </a>
                  </div>

                  <div className="mt-6 rounded-[18px] border border-[#f4d3c0] bg-[#fff8f3] p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#f26522]">
                      Support Hours
                    </p>
                    <p className="mt-2 text-[14px] leading-6 text-slate-700">
                      Monday – Saturday
                      <br />
                      9:00 AM – 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="contact-reveal-right">
              <div className="contact-card p-5 sm:p-7 md:p-8">
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#f26522]/10 blur-3xl" />

                {submitted ? (
                  <div className="relative z-10 flex min-h-[500px] flex-col items-center justify-center px-4 py-10 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff1e8] text-green-500">
                      <CheckCircle2 className="h-9 w-9" />
                    </div>
                    <h3 className="mt-6 text-[25px] font-normal tracking-[-0.04em] text-[#111318]">
                      Your email app is opening.
                    </h3>
                    <p className="mt-3 max-w-[480px] text-[14px] leading-7 text-slate-600">
                      Your enquiry has been pre-filled in your email client.
                      Please review the details, attach any relevant files and
                      click send to reach our team.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm(EMPTY_FORM);
                      }}
                      className="group mt-7 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 text-[13px] font-semibold text-[#111318] transition-all duration-300 hover:-translate-y-1 hover:border-[#f26522] hover:text-[#f26522]"
                    >
                      Send Another Message
                      <Arrow />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="relative z-10">
                    <div className="mb-6">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#f26522]">
                        Your Requirement
                      </p>
                      <h3 className="mt-2 text-[25px] font-normal tracking-[-0.04em] text-[#111318] sm:text-[30px]">
                        Let&apos;s talk about your project.
                      </h3>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div id="cf-name">
                        <label htmlFor="cf-f-name" className={labelBase}>
                          Full Name <span className="text-[#f26522]">*</span>
                        </label>
                        <input
                          id="cf-f-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder="Rahul Sharma"
                          value={form.name}
                          onChange={handleChange}
                          className={inputBase("name")}
                        />
                        {errors.name && <p className="mt-1.5 text-[11px] text-red-500">{errors.name}</p>}
                      </div>

                      <div id="cf-email">
                        <label htmlFor="cf-f-email" className={labelBase}>
                          Work Email <span className="text-[#f26522]">*</span>
                        </label>
                        <input
                          id="cf-f-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="rahul@company.com"
                          value={form.email}
                          onChange={handleChange}
                          className={inputBase("email")}
                        />
                        {errors.email && <p className="mt-1.5 text-[11px] text-red-500">{errors.email}</p>}
                      </div>

                      <div id="cf-phone">
                        <label htmlFor="cf-f-phone" className={labelBase}>
                          Phone Number
                        </label>
                        <input
                          id="cf-f-phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={handleChange}
                          className={inputBase("phone")}
                        />
                        {errors.phone && <p className="mt-1.5 text-[11px] text-red-500">{errors.phone}</p>}
                      </div>

                      <div>
                        <label htmlFor="cf-f-company" className={labelBase}>
                          Company Name
                        </label>
                        <input
                          id="cf-f-company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          placeholder="Your Company"
                          value={form.company}
                          onChange={handleChange}
                          className={inputBase("company")}
                        />
                      </div>

                      <div id="cf-service">
                        <label htmlFor="cf-f-service" className={labelBase}>
                          Service / Requirement <span className="text-[#f26522]">*</span>
                        </label>
                        <select
                          id="cf-f-service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={`${inputBase("service")} cursor-pointer appearance-none`}
                        >
                          <option value="">Select a service…</option>
                          {SERVICES.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                        {errors.service && <p className="mt-1.5 text-[11px] text-red-500">{errors.service}</p>}
                      </div>

                      <div>
                        <label htmlFor="cf-f-subject" className={labelBase}>
                          Subject
                        </label>
                        <input
                          id="cf-f-subject"
                          name="subject"
                          type="text"
                          placeholder="Brief subject of your enquiry"
                          value={form.subject}
                          onChange={handleChange}
                          className={inputBase("subject")}
                        />
                      </div>
                    </div>

                    <div className="mt-4" id="cf-message">
                      <label htmlFor="cf-f-message" className={labelBase}>
                        Message <span className="text-[#f26522]">*</span>
                      </label>
                      <textarea
                        id="cf-f-message"
                        name="message"
                        rows={5}
                        placeholder="Describe your project, requirements or questions in detail…"
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputBase("message")} resize-none`}
                      />
                      {errors.message && <p className="mt-1.5 text-[11px] text-red-500">{errors.message}</p>}
                    </div>

                    <div className="mt-5 flex items-start gap-3 rounded-[15px] border border-slate-200 bg-[#fff8f3] px-4 py-3.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f26522] text-[10px] font-bold text-white">
                        !
                      </span>
                      <p className="text-[12px] leading-6 text-slate-600">
                        Clicking <strong className="text-[#111318]">Send Message</strong> opens your
                        email client with the enquiry pre-filled for{" "}
                        <a href="mailto:info@ramton.in" className="font-semibold text-[#f26522] hover:underline">
                          info@ramton.in
                        </a>
                        .
                      </p>
                    </div>

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="contact-send group inline-flex items-center justify-center gap-3 rounded-full bg-[#f26522] px-7 py-4 text-[14px] font-semibold text-white shadow-[0_18px_40px_-18px_rgba(242,101,34,.72)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#df5819] hover:shadow-[0_24px_45px_-18px_rgba(242,101,34,.72)] active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {submitting ? "Opening email…" : "Send Message"}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                          <path d="M22 2L11 13" />
                          <path d="M22 2L15 22l-4-9-9-4 20-7z" />
                        </svg>
                      </button>

                      <span className="text-[11px] leading-5 text-slate-400">
                        Fields marked <span className="text-[#f26522]">*</span> are required.
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY RAMTON
      ===================================================== */}
      <section className="relative overflow-hidden bg-white px-4 py-6 sm:px-6 sm:py-7 md:py-9 lg:py-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f26522]/25 to-transparent" />

        <div className="relative mx-auto max-w-[1280px]">
          <div className="contact-reveal mx-auto mb-6 max-w-[760px] text-center">
            <div className="mb-5">
              <SectionPill>Why Choose Us</SectionPill>
            </div>
            <h2 className="text-[30px] font-normal leading-[1.02] tracking-[-0.055em] sm:text-[44px] md:text-[56px]">
              Why Talk to <span className="text-[#f26522]">Ramton?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[650px] text-[15px] leading-7 text-slate-600 sm:text-[16px]">
              We&apos;re more than a technology vendor — we&apos;re a long-term partner invested in your success.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_RAMTON.map(({ title, desc, icon: IconComp }, index) => (
              <article
                key={title}
                className="contact-card contact-reveal p-6"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <span className="contact-icon relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1e8] text-[#f26522]">
                  <IconComp className="h-6 w-6" />
                </span>

                <h3 className="relative z-10 mt-5 text-[16px] font-semibold tracking-[-0.025em] text-[#111318] transition-colors duration-300 group-hover:text-[#f26522]">
                  {title}
                </h3>

                <p className="relative z-10 mt-3 text-[13px] leading-6 text-slate-600">
                  {desc}
                </p>

                <div className="relative z-10 mt-5 h-[2px] w-10 bg-[#f26522] transition-all duration-500 hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATIONS
      ===================================================== */}
      <section className="relative bg-[#fafafa] px-4 py-6 sm:px-6 sm:py-7 md:py-9">
        <div className="mx-auto max-w-[1280px]">
          <div className="contact-reveal mx-auto mb-6 max-w-[760px] text-center">
            <div className="mb-5">
              <SectionPill>Our Locations</SectionPill>
            </div>
            <h2 className="text-[30px] font-normal leading-[1.02] tracking-[-0.055em] sm:text-[44px] md:text-[56px]">
              Find Us Where <span className="text-[#f26522]">You Need Us.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[650px] text-[15px] leading-7 text-slate-600 sm:text-[16px]">
              With offices in New Delhi, Mumbai and Noida, we&apos;re positioned to serve clients across India.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((location, index) => (
              <article
                key={location.city}
                className={`contact-card contact-reveal ${
                  index === 0 ? "lg:-translate-y-2" : ""
                } p-6 sm:p-7`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="contact-icon flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1e8] text-[#f26522]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    {location.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-[25px] font-normal tracking-[-0.035em] text-[#111318]">
                  {location.city}
                </h3>

                <address className="mt-3 min-h-[105px] not-italic text-[13px] leading-6 text-slate-600">
                  {location.address}
                </address>

                <a
                  href={location.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-[12px] font-semibold text-[#111318] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f26522] hover:text-[#f26522]"
                >
                  <MapPin className="h-3.5 w-3.5 text-[#f26522]" />
                  Get Directions
                  <Arrow className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA — SAME SILK CTA AS HOME
      ===================================================== */}
      <section
        id="contact-cta"
        className="relative overflow-hidden bg-[#f26522] px-4 pb-5 pt-1 sm:px-6 sm:pb-7 md:pb-9 md:pt-2"
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
          <div className="contact-reveal relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#ff781a]/95 via-[#f26522]/95 to-[#a9410d]/95 px-5 py-10 text-center text-white shadow-[0_30px_80px_-45px_rgba(242,101,34,.55)] sm:rounded-[28px] sm:px-10 sm:py-14 md:px-16 md:py-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,.9) 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />

            <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full border border-white/15 ramton-float" />
            <div className="pointer-events-none absolute -right-20 bottom-[-100px] h-72 w-72 rounded-full border border-black/10 ramton-float-reverse" />

            <div className="relative z-10 mx-auto max-w-[760px]">
              <SectionPill>CTA</SectionPill>

              <h2 className="mt-5 text-[32px] font-normal leading-[1.04] tracking-[-0.055em] sm:mt-6 sm:text-[46px] md:text-[62px]">
                Ready to Build a Smarter IT Infrastructure?
              </h2>

              <p className="mx-auto mt-4 max-w-[90vw] text-[14px] leading-[1.75] text-white/90 sm:mt-5 sm:max-w-[650px] sm:text-[15px] md:text-[17px]">
                Let&apos;s discuss how Ramton can help your business achieve more
                with the right technology.
              </p>

              <a
                href="#contact-form"
                aria-label="Let&apos;s Talk"
                className="contact-hero-cta group relative mt-7 inline-flex h-[58px] w-[185px] items-center overflow-hidden rounded-full bg-white px-1.5 text-[#111318] shadow-[0_18px_40px_-28px_rgba(15,23,42,.28)] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-0.5"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-1.5 top-1/2 z-10 h-[52px] w-[52px] -translate-y-1/2 rounded-full bg-[#f26522] transition-[width,border-radius] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-[calc(100%-12px)] group-hover:rounded-full"
                />

                <span className="pointer-events-none absolute left-1.5 top-1/2 z-30 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center text-white">
                  <Arrow staticArrow className="h-5 w-5 shrink-0 transform-none" />
                </span>

                <span className="relative z-20 ml-[70px] whitespace-nowrap text-[13px] font-semibold text-[#111318] transition-colors duration-300 group-hover:text-white">
                  Let&apos;s Talk
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
