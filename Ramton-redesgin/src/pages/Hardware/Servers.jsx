import { Link } from "react-router-dom";
import Silk from "../Silk.jsx";
import serverImage from "../../assets/server.jpeg";
import PartnerMarquee from "../../components/SolutionTechnologyPartners";
import SolutionHero from "../../components/SolutionHero";
import {
  ArrowRight,
  Server as ServerIcon,
  Database,
  ShieldCheck,
  Wrench,
  Clock3,
  Layers3,
  Headphones,
  RefreshCw,
  Activity,
  HardDrive,
  Network,
  CheckCircle2,
  Settings2,
} from "lucide-react";

const serverSolutions = [
  {
    icon: ServerIcon,
    title: "Rack & Tower Servers",
    text: "Reliable server platforms for business applications, infrastructure and day-to-day workloads.",
    image: serverImage,
    tag: "Business Infrastructure",
  },
  {
    icon: Database,
    title: "Storage & Data Infrastructure",
    text: "Hardware support for data storage, backup environments and business-critical information.",
    image:
      "https://images.unsplash.com/photo-1560732488-6b0df240254a?auto=format&fit=crop&w=1400&q=90",
    tag: "Data Infrastructure",
  },
  {
    icon: Network,
    title: "Infrastructure Servers",
    text: "Server infrastructure designed to support networking, applications, virtualization and connected environments.",
    image:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=1400&q=90",
    tag: "Connected Systems",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Multi-Brand Expertise",
    description:
      "Support across major server manufacturers and mixed-vendor infrastructure.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    description:
      "Preventive and corrective maintenance to keep critical systems performing reliably.",
  },
  {
    icon: Clock3,
    title: "Remote Server Management",
    description:
      "Remote management support that helps teams respond quickly to infrastructure issues.",
  },
  {
    icon: RefreshCw,
    title: "Post-Warranty Support",
    description:
      "Extend the useful life of server assets with replacement parts and technical support.",
  },
];

const supportItems = [
  "Server health assessment",
  "Preventive maintenance",
  "Corrective maintenance",
  "Hardware diagnostics",
  "Spare parts & replacement",
  "Remote server management",
  "Windows server support",
  "Linux server support",
];

const serverBrands = ["Dell", "HP", "Acer", "Apple", "Lenovo"];

function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex w-fit items-center justify-center rounded-full border border-[#e5e5e5] bg-white px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#171717] shadow-[0_5px_20px_rgba(0,0,0,.04)] sm:text-[12px] md:px-8 md:py-3.5 md:text-[13px]">
      {children}
    </div>
  );
}

function SectionPill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] md:px-8 md:py-3.5 md:text-[13px]">
      {children}
    </span>
  );
}

function ServerStack() {
  return (
    <div className="server-stack-list">
      {serverSolutions.map((item, index) => {
        const Icon = item.icon;

        return (
          <article
            key={item.title}
            className="server-stack-card solution-card-border"
            style={{
              top: `calc(var(--ramton-stack-top) + ${index * 8}px)`,
              zIndex: 20 + index,
            }}
          >
            <div className="server-stack-surface">
              <div className="grid min-h-[430px] lg:grid-cols-[0.92fr_1.08fr]">
                <div className="relative min-h-[280px] overflow-hidden bg-[#f4f4f4] lg:min-h-[430px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 hover:scale-[1.035]"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  <div className="absolute left-6 top-6 flex h-13 w-13 items-center justify-center rounded-2xl border border-white/70 bg-white/90 text-[#f05a16] shadow-[0_15px_35px_-20px_rgba(0,0,0,.35)] backdrop-blur-md">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="absolute bottom-6 left-6 rounded-full bg-white/95 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#171717] shadow-sm backdrop-blur-md">
                    {item.tag}
                  </div>
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
                  <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f05a16]">
                    0{index + 1} / Server Infrastructure
                  </div>

                  <h3 className="max-w-[680px] text-[34px] font-medium leading-[1.05] tracking-[-0.045em] text-[#111111] sm:text-[44px] lg:text-[52px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[620px] text-[15px] leading-6 text-[#666666] sm:text-[16px]">
                    {item.text}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {[
                      index === 0
                        ? "Reliable business workloads"
                        : index === 1
                          ? "Data protection & continuity"
                          : "Connected infrastructure",
                      "Professional deployment",
                      "Lifecycle support",
                    ].map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-[#fafafa] px-4 py-2.5 text-[11px] font-semibold text-[#444444]"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#f05a16]" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}


export default function Servers() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-[Inter,Arial,sans-serif] text-[#111111]">
      <style>{`
        :root {
          --ramton-stack-top: 96px;
        }

        @keyframes ramton-float {
          0%, 100% { transform: translate3d(0,0,0) rotate(-8deg) scale(1); }
          50% { transform: translate3d(18px,-24px,0) rotate(7deg) scale(1.04); }
        }

        @keyframes ramton-float-reverse {
          0%, 100% { transform: translate3d(0,0,0) rotate(10deg) scale(1); }
          50% { transform: translate3d(-20px,18px,0) rotate(-7deg) scale(.96); }
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

        .ramton-3d-blob-a { left: -90px; top: 110px; }

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

        .ramton-3d-ring-a { right: -55px; top: 95px; }

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

        .ramton-3d-sphere-a { left: 13%; top: 31%; }

        .ramton-3d-sphere-b {
          right: 16%;
          bottom: 18%;
          width: 42px;
          height: 42px;
          animation-delay: -3s;
        }

        .server-stack-list {
          position: relative;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .server-stack-card {
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

        .server-stack-card + .server-stack-card {
          margin-top: 24px !important;
        }

        .server-stack-surface {
          position: relative;
          overflow: hidden;
          background: #fff;
          transform: translateZ(0);
        }

        .server-stack-card::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: inherit;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.72);
        }

        .server-stack-card:hover {
          border-color: rgba(242,101,34,.4);
          box-shadow:
            0 34px 90px -46px rgba(15,23,42,.34),
            0 4px 18px rgba(242,101,34,.06);
        }

        .marquee-track {
          animation: server-marquee 30s linear infinite;
        }

        @keyframes server-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }

        @media (max-width: 1023px) {
          :root { --ramton-stack-top: 76px; }

          .server-stack-card {
            border-radius: 22px;
          }

          .server-stack-card + .server-stack-card {
            margin-top: 16px !important;
          }
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
            transform: rotate(-24deg) perspective(500px) rotateX(18deg) rotateY(-18deg) scale(.75);
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

        @media (prefers-reduced-motion: reduce) {
          .ramton-3d-blob,
          .ramton-3d-ring,
          .ramton-3d-sphere,
          .ramton-float,
          .ramton-float-reverse,
          .marquee-track {
            animation: none !important;
          }
        }
      `}</style>

      <SolutionHero
        eyebrow="Server Infrastructure"
        title="Reliable servers."
        accent="Expert support."
        description="Reduce infrastructure risk and extend the useful life of business-critical server assets with dependable server solutions, maintenance and support."
      />

      {/* INTRO */}
      <section className="bg-[#fafafa] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-12">
          <div className="mx-auto max-w-[900px] text-center">
            <SectionLabel>Server Solutions</SectionLabel>
            <h2 className="mx-auto max-w-[780px] text-3xl font-normal leading-[1.1] tracking-[-0.035em] md:text-[46px]">
              Infrastructure that keeps your{" "}
              <span className="text-[#f26522]">business running.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] text-sm leading-7 text-[#666666] md:text-base">
              Ramton provides server maintenance, repair, remote management and
              post-warranty support for dependable business-critical infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* SERVER TYPES — SAME ZERO-GAP STACKING UI */}
      <section id="server-solutions" className="relative bg-[#fafafa] pb-0">
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-12">
          <ServerStack />
        </div>
      </section>

      {/* WHY CHOOSE RAMTON — SAME DESKTOP/LAPTOP LAYOUT */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24">
        <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[920px] text-center">
            <SectionLabel>Why Choose Ramton</SectionLabel>
            <h2 className="text-[34px] font-medium leading-[1.05] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[62px]">
              Reliable infrastructure.
              <br />
              <span className="text-[#df4f08]">Practical business outcomes.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">
              We combine server expertise, technical support and lifecycle knowledge
              to make critical infrastructure simpler to plan, maintain and extend.
            </p>
          </div>

          <div className="relative mx-auto mt-14 max-w-[1360px] lg:grid lg:grid-cols-[1fr_430px_1fr] lg:items-center lg:gap-5">
            <div className="grid gap-5">
              {benefits.slice(0, 2).map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">{item.title}</h3>
                    <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="my-6 hidden overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:my-0 lg:block">
              <img
                src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=900&q=85"
                alt="Server infrastructure"
                loading="lazy"
                decoding="async"
                className="h-[570px] w-full object-cover"
              />
            </div>

            <div className="grid gap-5">
              {benefits.slice(2, 4).map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="group rounded-[18px] border border-[#e1e1e1] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f05a16]/40 hover:shadow-[0_20px_50px_-30px_rgba(240,90,22,.3)] sm:p-7">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#f05a16]/30 bg-[#fff5ef] text-[#f05a16] transition-all duration-300 group-hover:bg-[#f05a16] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-[22px] font-medium tracking-[-0.03em] text-[#111111]">{item.title}</h3>
                    <p className="mt-3 text-[14px] leading-7 text-[#6a6a6a]">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:hidden">
              <img
                src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1000&q=85"
                alt="Server infrastructure"
                loading="lazy"
                decoding="async"
                className="h-[360px] w-full object-cover sm:h-[430px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE MODEL — SAME LARGE BOX UI */}
      <section className="bg-[#fafafa] pt-10 pb-4 md:pt-14 md:pb-6">
        <div className="mx-auto w-full px-5 md:px-10 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="mb-4">
                  <div className="inline-flex w-fit items-center justify-center rounded-full border border-[#e5e5e5] bg-white px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#171717] shadow-[0_5px_20px_rgba(0,0,0,.04)] sm:text-[12px] md:px-8 md:py-3.5 md:text-[13px]">
                    End-to-End Server Support
                  </div>
                </div>

                <h2 className="max-w-[680px] text-3xl font-normal leading-[1.08] tracking-[-0.035em] md:text-[44px]">
                  A practical support model for{" "}
                  <span className="text-[#f26522]">business-critical servers.</span>
                </h2>

                <p className="mt-4 max-w-[650px] text-sm leading-6 text-[#666666] md:text-base">
                  From preventive and corrective maintenance to replacement parts and
                  remote management, Ramton can tailor server maintenance services to
                  client requirements.
                </p>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                  {supportItems.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#444444]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#f26522]" />
                      {item}
                    </div>
                  ))}
                </div>

              </div>

              <div className="grid w-full grid-cols-2 gap-4 self-center">
                {[
                  { icon: HardDrive, label: "Hardware Diagnostics" },
                  { icon: Database, label: "Spare Parts" },
                  { icon: Headphones, label: "Technical Support" },
                  { icon: ServerIcon, label: "Remote Management" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className={`w-full rounded-2xl border border-[#e2e2e2] bg-white/60 p-5 ${
                        item.label === "Technical Support" ? "" : ""
                      }`}
                    >
                      <Icon className="h-5 w-5 text-[#f26522]" />
                      <div className="mt-5 text-sm font-bold text-[#111111]">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
        </div>
      </section>

      <PartnerMarquee />

      {/* FINAL CTA — SAME HOMEPAGE UI */}
      <section id="contact" className="relative overflow-hidden bg-[#f26522] px-4 pb-10 pt-4 sm:px-6 md:pb-16 md:pt-6">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Silk speed={3.1} scale={0.8} color="#ea6507" noiseIntensity={0} rotation={0} />
        </div>

        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#ff781a]/95 via-[#f26522]/95 to-[#a9410d]/95 px-6 py-14 text-center text-white shadow-[0_30px_80px_-45px_rgba(242,101,34,.55)] sm:px-10 md:px-16 md:py-20">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,.9) 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />

            <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full border border-white/15 ramton-float" />
            <div className="pointer-events-none absolute -right-20 bottom-[-100px] h-72 w-72 rounded-full border border-black/10 ramton-float-reverse" />

            <div className="relative z-10 mx-auto max-w-[760px]">
              <SectionPill>CTA</SectionPill>

              <h2 className="mt-6 text-[37px] font-normal leading-[1.02] tracking-[-0.055em] sm:text-[50px] md:text-[62px]">
                Ready to Build a More Reliable Server Infrastructure?
              </h2>

              <p className="mx-auto mt-5 max-w-[650px] text-[15px] leading-[1.75] text-white/90 md:text-[17px]">
                Let's discuss how Ramton can help your business maintain,
                support and extend its critical server environment.
              </p>

              <Link
                to="/contact"
                aria-label="Let's Talk"
                className="group relative mt-7 inline-flex h-[52px] w-[155px] items-center overflow-hidden rounded-full bg-white text-slate-900 transition-all duration-500 ease-out hover:w-[165px]"
              >
                <span className="absolute left-0 top-0 z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#f26522] text-white transition-all duration-500 p-1.5 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-full">
                  <span className="absolute left-0 top-0 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#f26522]">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </span>
                <span className="relative z-10 ml-[64px] whitespace-nowrap text-[13px] font-semibold text-black transition-all duration-300 group-hover:text-white">
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
