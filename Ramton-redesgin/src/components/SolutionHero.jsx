import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function SolutionHero({
  eyebrow,
  title,
  accent,
  description,
  image,
  imageAlt = "",
}) {
  const content = (
    <div className={image ? "w-full max-w-[880px]" : "w-full"}>
      <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] sm:text-[11px]">
        {eyebrow}
      </div>

      <h1
        className={
          image
            ? "max-w-[880px] text-[42px] font-normal leading-[1.03] tracking-[-0.065em] text-[#2a1409] sm:text-[56px] md:text-[66px] lg:text-[68px] xl:text-[74px]"
            : "mx-auto max-w-[1500px] text-[42px] font-normal leading-[1.02] tracking-[-0.065em] text-[#2a1409] sm:text-[58px] md:text-[74px] lg:text-[88px] xl:text-[94px]"
        }
      >
        {title}
        <br />
        <span className="text-[#f26522]">{accent}</span>
      </h1>

      <p
        className={
          image
            ? "mt-7 max-w-[760px] text-[15px] font-normal leading-[1.65] text-slate-700 sm:text-[17px] md:text-[18px]"
            : "mx-auto mt-7 max-w-[940px] text-[16px] font-normal leading-[1.65] text-slate-700 sm:text-[18px] md:text-[20px]"
        }
      >
        {description}
      </p>

      <div className="mt-7">
        <Link
          to="/contact"
          className="group inline-flex items-center gap-3 rounded-full bg-[#f26522] px-7 py-4 text-[14px] font-semibold text-white shadow-[0_18px_35px_-18px_rgba(242,101,34,.7)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#dc5718]"
        >
          Discuss Your Requirement
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="ramton-shared-3d-blob ramton-shared-3d-blob-a" />
        <div className="ramton-shared-3d-blob ramton-shared-3d-blob-b" />
        <div className="ramton-shared-3d-ring ramton-shared-3d-ring-a" />
        <div className="ramton-shared-3d-ring ramton-shared-3d-ring-b" />
        <div className="ramton-shared-3d-sphere ramton-shared-3d-sphere-a" />
        <div className="ramton-shared-3d-sphere ramton-shared-3d-sphere-b" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.72]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,.065) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.065) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-[22%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#f26522]/[0.06] blur-[110px]" />

      {image ? (
        <div className="relative z-10 mx-auto grid min-h-[500px] w-full max-w-[1500px] grid-cols-1 lg:min-h-[540px] lg:grid-cols-[1.06fr_0.94fr]">
          <div className="flex items-center justify-center px-5 py-7 text-center sm:px-8 md:px-10 lg:justify-start lg:px-10 lg:text-left xl:px-12">
            {content}
          </div>

          <div className="networking-globe-scene relative flex min-h-[260px] items-center justify-center px-5 pb-6 sm:min-h-[300px] sm:px-7 lg:min-h-[540px] lg:px-5 lg:pb-0">
            <div className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-[#f26522]/[0.1] blur-[64px] sm:h-[410px] sm:w-[410px]" />
            <div className="networking-globe-float relative z-10 w-full max-w-[520px]">
              <img
                src={image}
                alt={imageAlt}
                className="networking-globe-image h-auto w-full object-contain"
                loading="eager"
                decoding="async"
              />
              <div className="networking-globe-shadow" aria-hidden="true" />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-[1500px] flex-col items-center justify-center px-5 text-center sm:px-7 md:min-h-[520px] md:px-8 lg:min-h-[540px] lg:px-10">
          {content}
        </div>
      )}
    </section>
  );
}
