import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  Newspaper,
  Sparkles,
  MessageSquare,
  Users,
} from "lucide-react";
import useReveal from "../hooks/useReveal";

import newsEventsHero from "../assets/news-events-hero.png";
import smartphoneNews from "../assets/best-selling-smartphone.png";
import browserBugNews from "../assets/browser-bug.png";

/* =========================================================
   COUNT UP — same behaviour as the Home page
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

/* =========================================================
   SECTION PILL — same visual language as Home/About
========================================================= */
function SectionPill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] md:px-8 md:py-3.5 md:text-[13px]">
      {children}
    </span>
  );
}

/* =========================================================
   EVENTS
========================================================= */
const eventPhotos = [
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.43.09_2de733a6-qsazpwi1siyn98upjm281wcmss8kz72ei6f2xk04hk.jpg",
    title: "Microsoft Partner Meeting",
    category: "Partnership",
    year: "2024",
  },
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.43.09_04e7989a-qsazpzbkd12i82qm35a3rdn0kxuomadlikdjddvxyw.jpg",
    title: "Microsoft Technology Session",
    category: "Partnership",
    year: "2024",
  },
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.43.08_78fe0744-qsazpsqp16thyt065kfprxasf8r44enh5nt50g5p6g.jpg",
    title: "Cloud for Partners",
    category: "Technology",
    year: "2024",
  },
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.43.08_64a4a551-qsazppx6gopmzz49m17u2g0en350hbca59uokm9vp4.jpg",
    title: "Partner Technology Meet",
    category: "Partnership",
    year: "2024",
  },
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.44.08_1801e201-qsazqalmn1hy3ea89a5mlasjpkb36nmdk47d4pf7w8.jpg",
    title: "Team Collaboration",
    category: "Team",
    year: "2024",
  },
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.43.08_9afd1e01-qsazpn3nw6ls158d2hzycyq0uxiwu8134vw84se27s.jpg",
    title: "Technology Community",
    category: "Event",
    year: "2024",
  },
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.43.07_5089ff23-qsazp9xx8i3rilrh7cb6e21kjjbrugkuf2rfewxkmw.jpg",
    title: "Partner Connect",
    category: "Event",
    year: "2024",
  },
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-08-08-at-16.43.07_0842ec10-qsazp74enzzwjrvknt3aokr6rdpo7d9neosyz31r5k.jpg",
    title: "Ramton Partner Team",
    category: "Partnership",
    year: "2024",
  },
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-07-at-11.04.55-AM-1-1-prfdxerghrgcqu7fsyhcxdswzurnfxnmj7w7qzx48o.jpg",
    title: "Foundation Day Celebration",
    category: "Company",
    year: "2022",
  },
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-07-at-11.04.55-AM-2-1-prfdxgn4vfixe24phzam2dbu6midvbv37h76pjubw8.jpg",
    title: "Team Celebration",
    category: "Company",
    year: "2022",
  },
  {
    src: "https://www.ramton.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-07-at-11.04.56-AM-1-1-prfdxkehmro2ohz8w0x4ccdok5zuq4a0jzt4mnor7c.jpg",
    title: "Ramton Team Evening",
    category: "Team",
    year: "2022",
  },
];

/* =========================================================
   NEWS — the two supplied news items + one latest update
========================================================= */
const newsItems = [
  {
    date: "08 JUL 2021",
    comments: "1 Comment",
    category: "TECHNOLOGY",
    title: "Being The Best-selling Smartphone In This Year",
    description:
      "A technology-focused story highlighting the devices and digital experiences shaping the way people stay connected and productive.",
    image: smartphoneNews,
  },
  {
    date: "08 JUL 2021",
    comments: "No Comments",
    category: "SECURITY",
    title: "Patch Browser Bug To Prevent Tracking Of Online Activities",
    description:
      "A practical reminder to keep browsers patched and security protections current to reduce unwanted tracking and digital risk.",
    image: browserBugNews,
  },
  {
    date: "05 SEP 2026",
    comments: "Latest Update",
    category: "LATEST NEWS",
    title: "Ramton Continues Building Secure, Future-ready IT Solutions",
    description:
      "Discover how hardware, software, networking and security come together to help modern businesses build a reliable technology foundation.",
    image: newsEventsHero,
  },
];

function NewsCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-[25px] border border-slate-200 bg-white shadow-[0_18px_50px_-30px_rgba(15,23,42,.18)] transition-all duration-500 hover:-translate-y-2 hover:border-[#f26522]/45 hover:shadow-[0_30px_65px_-30px_rgba(242,101,34,.25)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-900 backdrop-blur-md">
          {item.category}
        </span>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-[#f26522]" />
            {item.date}
          </span>
          <span className="inline-flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-[#f26522]" />
            {item.comments}
          </span>
        </div>

        <h3 className="mt-6 text-2xl font-bold leading-[1.12] tracking-[-0.035em] text-slate-900 underline decoration-slate-900 decoration-1 underline-offset-4 transition-colors group-hover:text-[#f26522] group-hover:decoration-[#f26522]">
          {item.title}
        </h3>

        <p className="mt-5 text-[15px] leading-7 text-slate-600">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function NewsEvents() {
  const revealRef = useReveal([]);

  return (
    <main
      ref={revealRef}
      className="relative overflow-hidden bg-white font-[Inter,Arial,sans-serif] text-[#111318]"
    >
      {/* =====================================================
          HERO — same background treatment as Home/About
      ===================================================== */}
      <section className="relative min-h-[620px] overflow-hidden bg-[#15171d] sm:min-h-[680px] lg:min-h-[760px]">
        <div className="absolute inset-0">
          <img
            src={newsEventsHero}
            alt="Ramton News and Events"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
          <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#f26522]/15 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-[1500px] items-start px-5 pt-20 pb-16 sm:min-h-[680px] sm:px-7 sm:pt-24 sm:pb-16 md:px-8 md:pt-20 md:pb-16 lg:min-h-[760px] lg:px-10 lg:pt-20 lg:pb-16">
          <div className="w-full max-w-[820px]">
            <div className="reveal from-left mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.17em] text-[#f26522] sm:text-[11px] md:mb-6">
              <span className="h-px w-8 bg-[#f26522]" />
              News &amp; Events
            </div>

            <h1 className="reveal from-bottom max-w-[820px] text-[36px] font-extrabold leading-[1.03] tracking-[-0.055em] text-white sm:text-[48px] md:text-[64px] lg:text-[76px] xl:text-[82px]">
              Stories, Events &amp;
              <br />
              <span className="text-[#f26522]">Technology</span>
              <br />
              That Move Business.
            </h1>

            <p className="reveal from-bottom mt-5 max-w-[700px] text-[14px] font-normal leading-[1.7] text-white/80 sm:text-[15px] md:mt-7 md:text-[17px]">
              Discover the people, partnerships, events and technology
              insights behind Ramton — and see how we continue to help
              businesses move forward with confidence.
            </p>

            <div className="reveal from-bottom mt-7 flex w-full flex-col gap-3 sm:w-fit sm:flex-row sm:flex-wrap md:mt-8">
              <a
                href="#news"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#f26522] px-6 py-3.5 text-[13px] font-bold text-white shadow-[0_18px_35px_-18px_rgba(242,101,34,.8)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d95316] active:scale-95 sm:w-fit sm:px-7 sm:py-4 sm:text-[14px]"
              >
                Latest News
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#events"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-[13px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#111318] sm:w-fit sm:px-7 sm:py-4 sm:text-[14px]"
              >
                Explore Events
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <div className="reveal from-bottom mt-6 flex items-center gap-3 sm:mt-7">
              <div className="flex">
                {["N", "E", "+"].map((item, index) => (
                  <span
                    key={item}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-white text-[9px] font-bold text-[#f26522] shadow-[0_8px_18px_-12px_rgba(0,0,0,.4)] ${
                      index > 0 ? "-ml-2" : ""
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div>
                <p className="text-[14px] font-bold leading-none text-white">
                  Ramton Updates
                </p>
                <p className="mt-1 text-[12px] font-normal text-white/65">
                  news, events and technology insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COUNTING BAR — same CountUp behaviour as Home
      ===================================================== */}
      <section className="relative bg-[#f7f7f8] py-9 sm:py-12 md:py-16">

        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-8">

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              [20, "+", "Years of Experience"],
              [500, "+", "Customers Globally"],
              [1, "K+", "Cybersecurity Projects"],
              [100, "%", "Client Retention"],
            ].map(([target, suffix, label]) => (

              <div
                key={label}
                className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white px-5 py-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f26522]/50 hover:shadow-[0_20px_45px_-25px_rgba(242,101,34,.35)] sm:px-6 sm:py-8 md:px-8 md:py-9"
              >

                <div className="absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-[#f26522] transition-all duration-500 group-hover:w-24" />

                <div className="flex items-center gap-4 sm:gap-5">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff1e8] text-[#f26522] sm:h-12 sm:w-12">

                    <Users className="h-5 w-5" />

                  </div>

                  <div>

                    <div className="text-[30px] font-normal leading-none tracking-[-0.055em] text-[#f26522] sm:text-[36px] md:text-[48px]">
                      <CountUp target={target} suffix={suffix} />
                    </div>

                    <p className="mt-1.5 text-[12px] font-medium tracking-[-0.01em] text-slate-700 sm:text-[13px] md:text-[14px]">
                      {label}
                    </p>

                  </div>

                </div>
              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          EVENTS
      ===================================================== */}
      <section id="events" className="bg-white py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="reveal from-bottom mb-9 text-center sm:mb-10 lg:mb-12">
            <div className="flex justify-center">
              <SectionPill>Our Events</SectionPill>
            </div>

            <div className="mx-auto mt-6 max-w-4xl">
              <h2 className="text-[30px] font-normal leading-[1.02] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px]">
                Where technology <span className="text-[#f26522]">meets people.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-slate-600 sm:text-[15px] md:text-[16px]">
                From partner meets and technology sessions to team celebrations,
                these moments capture the culture and relationships behind Ramton.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {eventPhotos.map((event) => (
              <article
                key={`${event.title}-${event.year}`}
                className="reveal from-bottom group overflow-hidden rounded-[25px] border border-slate-200 bg-white shadow-[0_18px_50px_-30px_rgba(15,23,42,.18)] transition-all duration-500 hover:-translate-y-2 hover:border-[#f26522]/45 hover:shadow-[0_30px_65px_-30px_rgba(242,101,34,.25)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={event.src}
                    alt={event.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-900 backdrop-blur-md">
                    {event.category}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-semibold text-white">
                    <CalendarDays className="h-3.5 w-3.5 text-[#f26522]" />
                    {event.year}
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold leading-tight tracking-[-0.025em] text-slate-900 transition-colors group-hover:text-[#f26522] sm:text-xl">
                      {event.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    A look at Ramton people, partnerships and technology moments.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NEWS
      ===================================================== */}
      <section id="news" className="bg-[#fff7f2] py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="reveal from-bottom mb-9 text-center sm:mb-10 lg:mb-12">
            <div className="flex justify-center">
              <SectionPill>Latest News</SectionPill>
            </div>

            <div className="mx-auto mt-6 max-w-4xl">
              <h2 className="text-[30px] font-normal leading-[1.02] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px]">
                News &amp; <span className="text-[#f26522]">insights.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-slate-600 sm:text-[15px] md:text-[16px]">
                Technology stories, practical security updates and the latest
                Ramton developments — all in one place.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {newsItems.map((item) => (
              <div key={item.title} className="reveal from-bottom">
                <NewsCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
       <section className="bg-white px-3 pb-10 pt-4 sm:px-4 md:px-6 md:pb-12 md:pt-5">
        <div className="mx-auto w-full max-w-[1500px]">

          <div
            className="
              reveal from-scale
              relative flex flex-col gap-7 overflow-hidden
              rounded-[24px] border border-[#f26522]/30
              bg-white
              px-5 py-8 shadow-[0_0_65px_14px_rgba(242,101,34,.13)] sm:px-7 sm:py-9 md:rounded-[28px] md:px-10 md:py-11
              lg:flex-row lg:items-center lg:justify-between
            "
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#f26522]/10 blur-3xl" />

            <div className="relative z-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f26522]">
                Have an IT Challenge?
              </p>
              <h2
                className="
                  mt-2 max-w-[760px]
                  text-[30px] font-normal leading-[1.04] tracking-[-0.055em]
                  text-[#111318] sm:text-[40px] md:text-[52px] lg:text-[60px]
                "
              >
                Let's Find the Right{" "}
                <span className="text-[#f26522]">Technology Solution</span>{" "}
                for Your Business.
              </h2>
              <p className="mt-3 max-w-[580px] text-[15px] leading-7 text-slate-700">
                From infrastructure to cybersecurity, our team is ready to scope, plan and deliver.
              </p>
            </div>

            <div className="relative z-10 flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href="/contact#contact-form"
                className="
                  group inline-flex items-center justify-center gap-3
                  rounded-full bg-[#f26522]
                  px-7 py-4 text-[14px] font-semibold text-white
                  shadow-[0_18px_35px_-18px_rgba(242,101,34,.7)]
                  transition-all duration-300
                  hover:-translate-y-1 hover:bg-[#dc5718]
                "
              >
                Talk to an Expert
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="/contact"
                className="
                  group inline-flex items-center justify-center gap-3
                  rounded-full border border-slate-200 bg-white
                  px-7 py-4 text-[14px] font-semibold text-white
                  transition-all duration-300
                  hover:-translate-y-1 hover:border-[#f26522] hover:text-[#f26522]
                "
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
