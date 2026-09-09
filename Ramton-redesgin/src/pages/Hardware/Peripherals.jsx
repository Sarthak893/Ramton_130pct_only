import { Link } from "react-router-dom";
import Silk from "../Silk.jsx";
import {
  ArrowRight,
  Monitor,
  Keyboard,
  Mouse,
  Headphones,
  Webcam,
  Printer,
  ShieldCheck,
  Wrench,
  Layers3,
  Zap,
  CheckCircle2,
} from "lucide-react";
import PartnerMarquee from "../../components/SolutionTechnologyPartners";
import SolutionHero from "../../components/SolutionHero";

const peripheralCategories = [
  {
    icon: Monitor,
    title: "Monitors & Displays",
    description:
      "Professional monitors and display solutions for productive, comfortable and modern workspaces.",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1400&q=85",
  },
  {
    icon: Keyboard,
    title: "Keyboards & Mice",
    description:
      "Reliable input devices for office productivity, professional applications and everyday business use.",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1400&q=85",
  },
  {
    icon: Headphones,
    title: "Audio & Headsets",
    description:
      "Headsets, speakers and audio accessories designed for communication, meetings and focused work.",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1400&q=85",
  },
  {
    icon: Webcam,
    title: "Webcams & Video",
    description:
      "Webcams and video accessories for remote work, video conferencing and collaboration.",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1400&q=85",
  },
  {
    icon: Printer,
    title: "Printing & Scanning",
    description:
      "Business printing and scanning equipment to support documentation and workplace workflows.",
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=1400&q=85",
  },
  {
    icon: Mouse,
    title: "IT Accessories",
    description:
      "Cables, adapters, docking solutions and essential accessories that complete your IT setup.",
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1400&q=85",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Reliable Equipment",
    text: "Business-grade peripherals selected around your users and working environment.",
  },
  {
    icon: Layers3,
    title: "Multi-Brand Choice",
    text: "Access to leading brands and a broad range of workplace accessories.",
  },
  {
    icon: Wrench,
    title: "Deployment Support",
    text: "Configuration and installation support to help your equipment work together smoothly.",
  },
  {
    icon: Zap,
    title: "Productivity Focused",
    text: "Ergonomic and practical equipment designed to improve everyday workplace efficiency.",
  },
];

const services = [
  "Workspace assessment",
  "Peripheral recommendations",
  "Procurement support",
  "Deployment & configuration",
  "Replacement & upgrades",
  "Technical assistance",
];



function SectionPill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] md:px-8 md:py-3.5 md:text-[13px]">
      {children}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex w-fit items-center justify-center rounded-full border border-[#e5e5e5] bg-white px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#171717] shadow-[0_5px_20px_rgba(0,0,0,.04)] sm:text-[12px] md:px-8 md:py-3.5 md:text-[13px]">
      {children}
    </div>
  );
}



export default function Peripherals() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-[Inter,Arial,sans-serif] text-[#111111]">

      <style>{`
        @keyframes ramton-float {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(-8deg) scale(1); }
          50% { transform: translate3d(18px, -24px, 0) rotate(7deg) scale(1.04); }
        }

        @keyframes ramton-float-reverse {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(10deg) scale(1); }
          50% { transform: translate3d(-20px, 18px, 0) rotate(-7deg) scale(.96); }
        }

        .ramton-float {
          animation: ramton-float 8s ease-in-out infinite;
        }

        .ramton-float-reverse {
          animation: ramton-float-reverse 10s ease-in-out infinite;
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

        .ramton-3d-blob-a {
          left: -90px;
          top: 110px;
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
          background:
            radial-gradient(circle at 28% 22%, #fff 0 8%, #ffcfaa 15%, #f26522 48%, #8d2d09 100%);
          box-shadow:
            inset -12px -14px 22px rgba(74,20,3,.32),
            inset 8px 8px 15px rgba(255,255,255,.4),
            0 22px 40px -20px rgba(0,0,0,.3);
          animation: ramton-sphere-float 8s ease-in-out infinite;
        }

        .ramton-3d-sphere-a {
          left: 13%;
          top: 31%;
        }

        .ramton-3d-sphere-b {
          right: 16%;
          bottom: 18%;
          width: 42px;
          height: 42px;
          animation-delay: -3s;
        }

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
          .ramton-3d-blob-a {
            left: -150px;
            top: 80px;
            width: 190px;
            height: 190px;
            opacity: .55;
          }

          .ramton-3d-blob-b {
            right: -110px;
            bottom: 30px;
            width: 150px;
            height: 150px;
          }

          .ramton-3d-ring-a {
            right: -105px;
            top: 100px;
            transform:
              rotate(-24deg)
              perspective(500px)
              rotateX(18deg)
              rotateY(-18deg)
              scale(.75);
          }

          .ramton-3d-ring-b {
            left: -45px;
            bottom: -70px;
          }

          .ramton-3d-sphere-a {
            left: 8%;
            top: 20%;
            width: 42px;
            height: 42px;
          }
        }

        .peripheral-stack-list {
          position: relative;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .peripheral-stack-card {
          position: sticky;
          width: 100%;
          margin: 0 !important;
          padding: 0;
          border: 1px solid #e3e3e3;
          border-radius: 28px;
          overflow: hidden;
          background: #fff;
          box-shadow:
            0 28px 70px -42px rgba(15,23,42,.28),
            0 4px 16px rgba(15,23,42,.06);
          isolation: isolate;
        }

        .peripheral-stack-card + .peripheral-stack-card {
          margin-top: 24px !important;
        }

        @media (max-width: 639px) {
          .peripheral-stack-card {
            border-radius: 22px;
          }

          .peripheral-stack-card + .peripheral-stack-card {
            margin-top: 16px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ramton-3d-blob,
          .ramton-3d-ring,
          .ramton-3d-sphere,
          .ramton-float,
          .ramton-float-reverse {
            animation: none !important;
          }
        }
      `}</style>

      <SolutionHero
        eyebrow="Peripherals & Accessories"
        title="Complete your workplace."
        accent="Equip every team."
        description="Build productive workspaces with reliable monitors, input devices, audio, video, printing and essential IT accessories selected around your users."
      />

      {/* CATEGORIES */}
      <section id="peripheral-categories" className="bg-[#fafafa] pt-8 pb-0 md:pt-12 md:pb-0">
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-12">
          <div className="mb-7 text-center">
            <SectionLabel>Explore Peripherals</SectionLabel>

            <h2 className="mt-2 text-3xl font-normal tracking-[-0.045em] md:text-[52px]">
              Everything your workspace <span className="text-[#f26522]">needs.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-[650px] text-sm leading-6 text-[#666666] md:text-base">
              Explore practical workplace equipment for individual users,
              meeting rooms, shared spaces and business operations.
            </p>
          </div>

          <div className="peripheral-stack-list">
            {peripheralCategories.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="peripheral-stack-card solution-card-border group"
                  style={{ top: `calc(96px + ${index * 8}px)` }}
                >
                  <div className="grid min-h-[430px] overflow-hidden lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="relative flex flex-col justify-center bg-white p-7 sm:p-9 lg:p-12">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f26522]/[0.08] text-[#f26522] transition duration-500 group-hover:bg-[#f26522] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f26522]">
                        0{index + 1} / Workplace Peripherals
                      </span>

                      <h3 className="max-w-[560px] text-3xl font-normal leading-[1.05] tracking-[-0.04em] text-[#111111] sm:text-4xl lg:text-[48px]">
                        {item.title}
                      </h3>

                      <p className="mt-5 max-w-[520px] text-sm leading-7 text-[#666666] md:text-base">
                        {item.description}
                      </p>
                    </div>

                    <div className="relative min-h-[280px] overflow-hidden bg-[#111111] lg:min-h-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover brightness-[0.62] contrast-[1.03] saturate-[0.9] transition duration-700 group-hover:scale-105 group-hover:brightness-[0.74]"
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.opacity = "0";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/55 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#111111] backdrop-blur-md">
                        Ramton Workplace Solutions
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — SAME DESIGN AS DESKTOPLAPTOP */}
      <section className="relative overflow-hidden bg-white pt-6 pb-16 sm:pt-8 sm:pb-20 md:pt-10 md:pb-24">
        <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[920px] text-center">
            <SectionLabel>Why Choose Ramton</SectionLabel>

            <h2 className="text-[34px] font-medium leading-[1.05] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[62px]">
              Reliable peripherals.
              <br />
              <span className="text-[#df4f08]">Better workplace outcomes.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">
              We combine product knowledge, practical deployment expertise and
              ongoing support to make workplace technology easier to choose,
              install and maintain.
            </p>
          </div>

          <div className="relative mx-auto mt-8 max-w-[1360px] lg:grid lg:grid-cols-[1fr_430px_1fr] lg:items-center lg:gap-5">
            {/* Left benefits */}
            <div className="grid gap-5">
              {benefits.slice(0, 2).map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Center visual */}
            <div className="my-6 hidden overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:my-0 lg:block">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
                alt="Modern technology workspace"
                loading="lazy"
                decoding="async"
                className="h-[570px] w-full object-cover"
              />
            </div>

            {/* Right benefits */}
            <div className="grid gap-5">
              {benefits.slice(2, 4).map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Mobile center visual */}
            <div className="mt-5 overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                alt="Modern technology workspace"
                loading="lazy"
                decoding="async"
                className="h-[360px] w-full object-cover sm:h-[430px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <section className="bg-[#fafafa] py-10 md:py-14">
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SectionLabel>Peripheral Support</SectionLabel>

              <h2 className="max-w-[650px] text-3xl font-normal leading-[1.1] tracking-[-0.035em] md:text-[44px]">
                More than products.
                <span className="text-[#f26522]"> Practical support.</span>
              </h2>

              <p className="mt-5 max-w-[620px] text-sm leading-7 text-[#666666] md:text-base">
                From workspace assessment to deployment and replacement,
                Ramton can support your peripheral environment throughout
                its lifecycle.
              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[#e5e5e5] bg-[#fafafa] px-4 py-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#f26522]" />
                  <span className="text-sm font-semibold text-[#333333]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY PARTNERS */}
      <PartnerMarquee />

      {/* FINAL CTA — SAME CTA AS HOMEPAGE */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#f26522] px-4 pb-10 pt-4 sm:px-6 md:pb-16 md:pt-6"
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
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#ff781a]/95 via-[#f26522]/95 to-[#a9410d]/95 px-6 py-14 text-center text-white shadow-[0_30px_80px_-45px_rgba(242,101,34,.55)] sm:px-10 md:px-16 md:py-20">
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

              <h2 className="mt-6 text-[37px] font-normal leading-[1.02] tracking-[-0.055em] sm:text-[50px] md:text-[62px]">
                Ready to Build a Smarter IT Infrastructure?
              </h2>

              <p className="mx-auto mt-5 max-w-[650px] text-[15px] leading-[1.75] text-white/90 md:text-[17px]">
                Let&apos;s discuss how Ramton can help your business achieve more
                with the right technology.
              </p>

              <Link
                to="/contact"
                aria-label="Let's Talk"
                className="group relative mt-7 inline-flex h-[52px] w-[155px] items-center overflow-hidden rounded-full bg-white text-slate-900 transition-all duration-500 ease-out hover:w-[165px]"
              >
                <span
                  className="
                    absolute left-0 top-0 z-10 flex h-[52px] w-[52px] items-center
                    justify-center rounded-full bg-[#f26522] text-white
                    transition-all duration-500 p-1.5 ease-[cubic-bezier(.22,1,.36,1)]
                    group-hover:w-full
                  "
                >
                  <span className="absolute left-0 top-0 h-[52px] w-[52px] rounded-full bg-[#f26522]">
                    <span className="absolute inset-0 flex items-center justify-center text-white">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </span>
                </span>

                <span className="relative z-10 ml-[64px] whitespace-nowrap text-[13px] font-semibold text-black transition-all duration-300 group-hover:text-white">
                  Let&apos;s Talk
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
