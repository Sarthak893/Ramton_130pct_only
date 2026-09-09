import { Link } from "react-router-dom";
import Silk from '../Silk.jsx';
import renameImage from "../../assets/rename.png";
import serverImage from "../../assets/server.jpeg";
import SolutionHero from "../../components/SolutionHero";
import {
  ArrowRight,
  Monitor,
  Server,
  Mouse,
  ShieldCheck,
  Wrench,
  Layers3,
  Headphones,
  CheckCircle2,
} from "lucide-react";

const hardwareCategories = [
  {
    title: "Desktop & Laptop",
    description:
      "Business desktops, laptops and workstations configured for reliable everyday productivity and demanding professional workloads.",
    path: "/hardware/desktop-laptop",
    icon: Monitor,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1600&q=85",
    tag: "Business Computing",
  },
  {
    title: "Servers",
    description:
      "Reliable server infrastructure for business applications, data, virtualization and other business-critical workloads.",
    path: "/hardware/servers",
    icon: Server,
    image: serverImage,
    tag: "Infrastructure",
  },
  {
    title: "Peripherals",
    description:
      "Monitors, keyboards, mice, accessories and other IT equipment to complete and support your workplace environment.",
    path: "/hardware/peripherals",
    icon: Mouse,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1600&q=85",
    tag: "IT Equipment",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Multi-Brand Expertise",
    description:
      "Solutions across leading hardware manufacturers and technology ecosystems.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Deployment, troubleshooting, maintenance, upgrades and lifecycle support.",
  },
  {
    icon: Layers3,
    title: "Flexible Solutions",
    description:
      "Hardware recommendations based on your users, applications and business requirements.",
  },
  {
    icon: Headphones,
    title: "End-to-End Service",
    description:
      "Support from hardware selection and deployment through ongoing technical assistance.",
  },
];

const servicePoints = [
  "Hardware assessment & consultation",
  "Multi-brand procurement support",
  "Deployment & configuration",
  "Preventive maintenance",
  "Upgrades & replacement",
  "Ongoing technical support",
];


/* =========================================================
   3D DECORATIVE OBJECTS — SAME VISUAL SYSTEM AS HOME
========================================================= */


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

function CTAButton({ children }) {
  return (
    <Link
      to="/contact"
      className="group inline-flex items-center gap-3 rounded-full bg-[#f05a16] px-6 py-3.5 text-[13px] font-bold text-white shadow-[0_14px_30px_-16px_rgba(240,90,22,.55)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d94c0d] sm:px-7 sm:py-4 sm:text-[14px]"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export default function Hardware() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-[Inter,Arial,sans-serif] text-[#111111]">

      {/* HOME 3D OBJECT / MOTION SYSTEM */}
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

        @media (prefers-reduced-motion: reduce) {
          .ramton-3d-blob,
          .ramton-3d-ring,
          .ramton-3d-sphere {
            animation: none !important;
          }
        }
      `}</style>
      <SolutionHero
        eyebrow="Hardware Solutions"
        title="Powering modern business."
        accent="Reliable hardware."
        description="Choose, deploy and support dependable business computers, servers and workplace technology designed around your operational needs."
        image={renameImage}
        imageAlt="Modern business hardware solutions"
      />

      {/* CATEGORIES */}
      <section
        id="hardware-categories"
        className="relative overflow-hidden bg-white py-8 sm:py-10 md:py-12"
      >
        <div className="pointer-events-none absolute left-[-100px] top-[180px] h-[260px] w-[260px] rounded-full bg-[#f05a16]/[0.045] blur-[90px]" />

        <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[950px] text-center">
            <SectionLabel>Our Hardware Range</SectionLabel>

            <h2 className="text-[34px] font-medium leading-[1.04] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[64px]">
              Hardware for every
              <br />
              <span className="text-[#df4f08]">business requirement.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">
              Explore reliable hardware solutions designed to support productive
              teams, critical infrastructure and modern workplaces.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {hardwareCategories.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  to={item.path}
                  className="solution-card-border group block w-full overflow-hidden rounded-[20px] bg-white hover:-translate-y-1 hover:shadow-[0_25px_60px_-30px_rgba(240,90,22,.3)]"
                >
                  <div className="grid min-h-[390px] md:min-h-[410px] md:grid-cols-[0.92fr_1.08fr]">
                    <div className={`relative min-h-[280px] overflow-hidden bg-[#f6f6f6] md:min-h-[410px] ${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                      <div className="absolute left-6 top-6 flex h-13 w-13 items-center justify-center rounded-2xl border border-white/70 bg-white/90 text-[#f05a16] shadow-[0_15px_35px_-20px_rgba(0,0,0,.35)] backdrop-blur-md">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="absolute bottom-6 left-6 rounded-full bg-white/95 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#171717] shadow-sm backdrop-blur-md">
                        {item.tag}
                      </div>
                    </div>

                    <div className={`flex flex-col justify-center p-7 sm:p-10 lg:p-14 xl:p-16 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f05a16]">
                        0{index + 1} / Hardware Range
                      </div>

                      <h3 className="max-w-[680px] text-[34px] font-medium leading-[1.05] tracking-[-0.045em] text-[#111111] sm:text-[44px] lg:text-[52px]">
                        {item.title}
                      </h3>

                      <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">
                        {item.description}
                      </p>

                      <div className="mt-8 inline-flex w-fit items-center gap-2 text-[13px] font-semibold text-[#df4f08]">
                        Explore solution
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden bg-white py-8 sm:py-10 md:py-12">
        <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[920px] text-center">
            <SectionLabel>Why Choose Ramton</SectionLabel>

            <h2 className="text-[34px] font-medium leading-[1.05] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[62px]">
              Reliable technology.
              <br />
              <span className="text-[#df4f08]">Practical business outcomes.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">
              We combine product knowledge, technical expertise and ongoing
              support to make hardware simpler to plan, deploy and maintain.
            </p>
          </div>

          <div className="relative mx-auto mt-14 max-w-[1360px] lg:grid lg:grid-cols-[1fr_430px_1fr] lg:items-center lg:gap-5">
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
                      {item.description}
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
                      {item.description}
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

      {/* HARDWARE LIFECYCLE */}
      <section className="bg-[#fafafa] py-10 sm:py-12 md:py-14">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <SectionLabel>Hardware Lifecycle</SectionLabel>

              <h2 className="max-w-[650px] text-[34px] font-medium leading-[1.05] tracking-[-0.055em] text-[#111111] sm:text-[48px] md:text-[60px]">
                From selection to
                <br />
                <span className="text-[#df4f08]">long-term support.</span>
              </h2>

              <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">
                Build a practical hardware strategy with Ramton. We can help
                assess requirements, deploy equipment, maintain systems and plan
                upgrades or replacement as your environment evolves.
              </p>

              <div className="mt-8">
                <CTAButton>Talk to Our Experts</CTAButton>
              </div>
            </div>

            <div className="grid gap-3">
              {servicePoints.map((item, index) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 rounded-[15px] border border-[#e1e1e1] bg-white px-5 py-4 transition-all duration-300 hover:border-[#f05a16]/40 hover:shadow-[0_12px_30px_-24px_rgba(240,90,22,.4)] sm:px-6"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff0e8] text-[11px] font-bold text-[#df4f08]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <CheckCircle2 className="hidden h-5 w-5 shrink-0 text-[#f05a16] sm:block" />
                  <span className="text-sm font-semibold text-[#444444] md:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
