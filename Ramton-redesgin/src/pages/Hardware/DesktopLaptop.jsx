import { Link } from "react-router-dom";
import Silk from "../Silk.jsx";
import Partners from "../../components/SolutionTechnologyPartners";
import SolutionHero from "../../components/SolutionHero";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Monitor,
  ShieldCheck,
  Wrench,
  Layers3,
  Zap,
  Building2,
  Headphones,
} from "lucide-react";

const desktopTypes = [
  {
    icon: Building2,
    title: "Business Desktops",
    description:
      "Reliable desktop systems designed for offices, teams and everyday business workloads.",
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: Cpu,
    title: "Performance Workstations",
    description:
      "High-performance computing for engineering, design, development and demanding professional applications.",
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: Monitor,
    title: "All-in-One Systems",
    description:
      "Clean, space-efficient systems for reception, administration and modern workplaces.",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=85",
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

const supportItems = [
  "Hardware assessment",
  "Desktop deployment",
  "Preventive maintenance",
  "Hardware upgrades",
  "Troubleshooting",
  "Lifecycle replacement",
];

const brands = ["Dell", "HP", "Lenovo", "Acer", "Apple"];

function StackingDesktopTypes() {
  return (
    <div className="grid gap-6">
      {desktopTypes.map((item, index) => {
        const Icon = item.icon;

        return (
          <article key={item.title} className="w-full">
            <div className="desktop-stack-card-surface solution-card-border">
              <div className="grid min-h-[460px] lg:grid-cols-[0.92fr_1.08fr]">
                <div className="relative min-h-[260px] overflow-hidden bg-[#f4f4f4] lg:min-h-[460px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 hover:scale-[1.035]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  <div className="absolute left-6 top-6 flex h-13 w-13 items-center justify-center rounded-2xl border border-white/70 bg-white/90 text-[#f05a16] shadow-[0_15px_35px_-20px_rgba(0,0,0,.35)] backdrop-blur-md">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="absolute bottom-6 left-6 rounded-full bg-white/95 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#171717] shadow-sm backdrop-blur-md">
                    {index === 0
                      ? "Business Computing"
                      : index === 1
                        ? "Performance Infrastructure"
                        : "Workplace Technology"}
                  </div>
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14 xl:p-16">
                  <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f05a16]">
                    0{index + 1} / Desktop & Laptop
                  </div>

                  <h3 className="max-w-[680px] text-[34px] font-medium leading-[1.05] tracking-[-0.045em] text-[#111111] sm:text-[44px] lg:text-[52px]">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-[#666666] sm:text-[17px]">
                    {item.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {[
                      index === 0
                        ? "Reliable everyday productivity"
                        : index === 1
                          ? "Engineering & creative workloads"
                          : "Space-efficient workplace setup",
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


function SectionPill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] md:px-8 md:py-3.5 md:text-[13px]">
      {children}
    </span>
  );
}

function CTAButton({ children, dark = false }) {
  return (
    <Link
      to="/contact"
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition duration-300 ${
        dark
          ? "border border-[#e2e2e2] bg-[#fafafa] text-[#111111] hover:border-[#f26522]/60 hover:bg-[#f26522]/[0.07] hover:text-[#f26522]"
          : "bg-[#f26522] text-[#111111] shadow-[0_18px_40px_-18px_rgba(242,101,34,.8)] hover:-translate-y-0.5 hover:bg-[#d95316]"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export default function DesktopLaptop() {
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


        .desktop-stack-list {
          position: relative;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .desktop-stack-card-surface {
          width: 100%;
          overflow: hidden;
          border: 1px solid #e3e3e3;
          border-radius: 28px;
          background: #fff;
          box-shadow:
            0 30px 90px -45px rgba(15, 23, 42, .28),
            0 2px 0 rgba(255,255,255,.9) inset;
          transition:
            transform .45s ease,
            box-shadow .45s ease,
            border-color .45s ease;
        }

        .desktop-stack-card-surface:hover {
          transform: translateY(-4px);
          border-color: rgba(242, 101, 34, .4);
          box-shadow:
            0 34px 100px -48px rgba(15, 23, 42, .34),
            0 2px 0 rgba(255,255,255,.9) inset;
        }

        @media (max-width: 639px) {
          .desktop-stack-card {
            border-radius: 22px;
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
          .ramton-3d-sphere,
          .ramton-float,
          .ramton-float-reverse,
          .ramton-float-reverse {
            animation: none !important;
          }
        }
      `}</style>

      <SolutionHero
        eyebrow="Desktop & Laptop"
        title="Reliable computing."
        accent="Built for business."
        description="Equip your teams with dependable desktops, laptops and workstations supported across deployment, maintenance, upgrades and the complete hardware lifecycle."
      />

      {/* INTRO */}
      <section className="bg-[#fafafa] py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-12">
          <div className="mx-auto max-w-[900px] text-center">
            <div className="mb-5 inline-flex w-fit items-center justify-center rounded-full border border-[#e5e5e5] bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#171717] shadow-[0_5px_20px_rgba(0,0,0,.04)] sm:px-7 sm:py-3.5 sm:text-[12px]">
              Desktop & Laptop Infrastructure
            </div>
            <h2 className="mx-auto max-w-[780px] text-3xl font-normal leading-[1.1] tracking-[-0.035em] md:text-[46px]">
              Computing that keeps your <span className="text-[#f26522]">business moving.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] text-sm leading-7 text-[#666666] md:text-base">
              Ramton provides IT hardware solutions for businesses that need dependable
              systems, professional support and a practical approach to managing technology
              over its entire lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* DESKTOP TYPES */}
      <section className="relative bg-[#fafafa] pb-0">
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-12">
          <StackingDesktopTypes />
        </div>
      </section>

      {/* WHY CHOOSE US — same structure/content as Hardware.jsx */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24">
        <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[920px] text-center">
            <div className="mb-5 inline-flex w-fit items-center justify-center rounded-full border border-[#e5e5e5] bg-white px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#171717] shadow-[0_5px_20px_rgba(0,0,0,.04)] sm:text-[12px] md:px-8 md:py-3.5 md:text-[13px]">
              Why Choose Ramton
            </div>

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

            <div className="my-6 hidden overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-[#f7f7f7] shadow-[0_25px_70px_-40px_rgba(0,0,0,.3)] lg:my-0 lg:block">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
                alt="Modern technology workspace"
                loading="lazy"
                decoding="async"
                className="h-[570px] w-full object-cover"
              />
            </div>

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

      {/* HaaS */}
      <section className="bg-[#fafafa] py-6 md:py-8">
        <div className="w-full px-5 md:px-10 lg:px-12">
          <div className="relative w-full overflow-hidden bg-white">
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#f26522]/10 to-transparent" />
            <div className="relative grid items-center gap-8 px-0 py-5 md:gap-10 md:py-7 lg:grid-cols-[1.1fr_0.9fr] lg:py-8">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f26522]/20 bg-[#f26522]/[0.07] px-4 py-2 text-[10px] font-normal uppercase tracking-[0.12em] text-[#f26522]">
                  <Layers3 className="h-3.5 w-3.5" /> Hardware as a Service
                </div>
                <h2 className="max-w-[650px] text-3xl font-normal leading-[1.1] tracking-[-0.035em] md:text-[44px]">
                  A smarter way to manage <span className="text-[#f26522]">desktop & laptop hardware.</span>
                </h2>
                <p className="mt-5 max-w-[620px] text-sm leading-7 text-[#666666] md:text-base">
                  Ramton's Hardware as a Service approach gives businesses a more flexible
                  way to manage desktop & laptop infrastructure, support requirements and hardware refresh cycles.
                </p>
                <div className="mt-7"><CTAButton>Talk to Our Experts</CTAButton></div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {["Flexible hardware strategy", "Deployment and configuration", "Ongoing maintenance", "Refresh and upgrade support"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-[#e5e5e5] bg-[#fafafa] px-4 py-4">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#f26522]" />
                    <span className="text-sm font-semibold text-[#333333]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIFECYCLE SUPPORT — fixed spacing + reliable image */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            <div className="relative min-w-0 overflow-hidden rounded-[28px] border border-[#e2e2e2] bg-white">
              <img
                src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=1500&q=90"
                alt="Desktop computer and IT workspace"
                className="h-[380px] w-full object-cover brightness-[0.62] transition duration-700 hover:scale-[1.02] md:h-[500px]"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src =
                    "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1500&q=90";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-[#e2e2e2] bg-white/85 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f26522]/[0.07] text-[#f26522]">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#111111]">Lifecycle Support</p>
                    <p className="mt-1 text-xs text-[#666666]">Maintain • Upgrade • Extend</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <div className="mb-3 text-[11px] font-normal uppercase tracking-[0.12em] text-[#f26522]">Lifecycle Support</div>
              <h2 className="max-w-[650px] text-3xl font-normal leading-[1.08] tracking-[-0.035em] md:text-[44px]">
                Keep your desktops <span className="text-[#f26522]">productive longer.</span>
              </h2>
              <p className="mt-5 max-w-[650px] text-sm leading-7 text-[#666666] md:text-base">
                Hardware shouldn't become a bottleneck for your employees. Ramton can support
                your desktop & laptop environment with maintenance, troubleshooting, upgrades and planned replacement.
              </p>

              <div className="mt-7 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {supportItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-semibold text-[#444444]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#f26522]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9"><CTAButton dark>Discuss Your Requirements</CTAButton></div>
            </div>
          </div>
        </div>
      </section>

      <Partners />



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
