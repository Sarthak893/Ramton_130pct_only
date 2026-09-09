import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/ramton-logo.png";

/* =========================================================
   SOLUTIONS
========================================================= */

const navItems = [
  {
    label: "Hardware",
    to: "/hardware",
    links: [
      { label: "Hardware Overview", to: "/hardware" },
      { label: "Desktop & Laptop", to: "/hardware/desktop-laptop" },
      { label: "Servers", to: "/hardware/servers" },
      { label: "Peripherals", to: "/hardware/peripherals" },
    ],
  },

  {
    label: "Software",
    to: "/software",
    links: [
      { label: "Software Overview", to: "/software" },
      { label: "Enterprise Software", to: "/software/enterprise" },
      { label: "Business Applications", to: "/software/business-applications" },
      { label: "Cloud Solutions", to: "/software/cloud" },
    ],
  },

  {
    label: "Security",
    to: "/security",
    links: [
      { label: "Security Overview", to: "/security" },
      { label: "Surveillance", to: "/security/surveillance" },
      { label: "Cybersecurity", to: "/security/cybersecurity" },
      { label: "Access Control", to: "/security/access-control" },
    ],
  },

  {
    label: "Networking",
    to: "/networking",
    links: [
      { label: "Networking Overview", to: "/networking" },
      { label: "Structured Cabling", to: "/networking/structured-cabling" },
      { label: "Wireless Networks", to: "/networking/wireless" },
      { label: "Network Security", to: "/networking/security" },
    ],
  },
];

/* =========================================================
   ICONS
========================================================= */

const Arrow = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
  >
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

const ChevronDown = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={`h-3.5 w-3.5 transition-transform duration-200 ${className}`}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-3.5 w-3.5"
  >
    <path d="M9 6l6 6-6 6" />
  </svg>
);

/* =========================================================
   MAIN NAV LINK STYLE
   DARK THEME
========================================================= */

const mainLinkClass = ({ isActive }) =>
  `
    relative
    flex
    h-[86px]
    items-center
    whitespace-nowrap
    text-[15px]
    xl:text-[16px]
    font-medium
    tracking-[-0.015em]
    transition-colors
    duration-200

    after:absolute
    after:bottom-0
    after:left-1/2
    after:-translate-x-1/2
    after:h-[2px]
    after:rounded-full
    after:bg-[#f26522]
    after:transition-all
    after:duration-300

    ${
      isActive
        ? "text-[#f26522] after:w-full"
        : "text-slate-700 after:w-0 hover:text-[#f26522] hover:after:w-full"
    }
  `;

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(null);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileSolutionsOpen(false);
    setMobileCategoryOpen(null);
  };

  const toggleCategory = (label) => {
    setMobileCategoryOpen((current) =>
      current === label ? null : label
    );
  };

  return (
    <>
      {/* =====================================================
          DESKTOP + MOBILE HEADER
      ===================================================== */}

      <header
        className="
          sticky
          top-0
          z-50
          border-b
          border-slate-200
          bg-white/95
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[86px]
            w-full
            items-center
            px-5
            sm:px-7
            lg:px-10
            xl:px-12
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            onClick={closeMobileMenu}
            aria-label="Ramton Home"
            className="shrink-0 overflow-hidden rounded-2xl border border-[#ff7700] bg-[#ff7700] px-2 py-1.5 shadow-[0_10px_25px_-14px_rgba(255,119,0,.50)]"
          >
            <img
              src={logo}
              alt="Ramton - Future. Delivered"
              className="
                w-[128px]
                sm:w-[145px]
                lg:w-[150px]
                xl:w-[158px]
              "
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
            <ul className="flex items-center gap-7 xl:gap-9">

              {/* HOME */}

              <li>
                <NavLink
                  to="/"
                  end
                  className={mainLinkClass}
                >
                  Home
                </NavLink>
              </li>

              {/* ABOUT */}

              <li>
                <NavLink
                  to="/about"
                  className={mainLinkClass}
                >
                  About Us
                </NavLink>
              </li>

              {/* =================================================
                  OUR SOLUTIONS
              ================================================= */}

              <li className="group/solutions relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className="
                    relative
                    flex
                    h-[86px]
                    items-center
                    gap-1.5
                    whitespace-nowrap
                    text-[14px]
                    xl:text-[15px]
                    font-semibold
                    tracking-[-0.01em]
                    text-slate-700
                    transition-colors
                    duration-200
                    hover:text-[#f26522]

                    after:absolute
                    after:bottom-0
                    after:left-1/2
                    after:-translate-x-1/2
                    after:h-[2px]
                    after:w-0
                    after:rounded-full
                    after:bg-[#f26522]
                    after:transition-all
                    after:duration-300

                    hover:after:w-full
                  "
                >
                  Our Solutions

                  <ChevronDown className="group-hover/solutions:rotate-180" />
                </button>

                {/* =================================================
                    SOLUTIONS DROPDOWN
                ================================================= */}

                <div
                  className="
                    invisible
                    absolute
                    left-1/2
                    top-[79px]
                    w-[255px]
                    -translate-x-1/2
                    translate-y-2
                    rounded-[18px]
                    border
                    border-slate-200
                    bg-white
                    p-2.5
                    opacity-0
                    shadow-[0_25px_70px_-25px_rgba(242,101,34,.20)]
                    transition-all
                    duration-200
                    group-hover/solutions:visible
                    group-hover/solutions:translate-y-0
                    group-hover/solutions:opacity-100
                  "
                >
                  {/* Dropdown heading */}

                  <div className="mb-1 px-3 py-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
                      Our Solutions
                    </p>
                  </div>

                  {/* =================================================
                      HARDWARE / SOFTWARE / SECURITY / NETWORKING
                  ================================================= */}

                  {navItems.map((item) => (
                    <div
                      key={item.label}
                      className="group/category relative"
                    >
                      <Link
                        to={item.to}
                        className="
                          flex
                          min-h-[46px]
                          items-center
                          justify-between
                          rounded-[12px]
                          px-3.5
                          py-2.5
                          text-[13.5px]
                          font-semibold
                          text-slate-700
                          transition-all
                          duration-200
                          hover:bg-slate-100
                          hover:text-[#f26522]
                        "
                      >
                        <span>{item.label}</span>

                        <ChevronRight />
                      </Link>

                      {/* =================================================
                          SECOND LEVEL DROPDOWN
                      ================================================= */}

                      <div
                        className="
                          invisible
                          absolute
                          left-[calc(100%+9px)]
                          top-0
                          w-[245px]
                          translate-x-2
                          rounded-[18px]
                          border
                          border-slate-200
                          bg-white
                          p-2.5
                          opacity-0
                          shadow-[0_25px_70px_-25px_rgba(242,101,34,.20)]
                          transition-all
                          duration-200
                          group-hover/category:visible
                          group-hover/category:translate-x-0
                          group-hover/category:opacity-100
                        "
                      >
                        <div className="mb-1 px-3 py-2">
                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
                            {item.label}
                          </p>
                        </div>

                        {item.links.map((link) => (
                          <Link
                            key={link.to}
                            to={link.to}
                            className="
                              flex
                              min-h-[40px]
                              items-center
                              rounded-[11px]
                              px-3.5
                              py-2
                              text-[13px]
                              font-medium
                              text-slate-700
                              transition-all
                              duration-200
                              hover:bg-slate-100
                              hover:pl-4
                              hover:text-[#f26522]
                            "
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* =================================================
                      AMC
                  ================================================= */}

                  <div className="my-1.5 border-t border-slate-200" />

                  <Link
                    to="/amc"
                    className="
                      flex
                      min-h-[46px]
                      items-center
                      justify-between
                      rounded-[12px]
                      px-3.5
                      py-2.5
                      text-[13.5px]
                      font-semibold
                      text-slate-700
                      transition-all
                      duration-200
                      hover:bg-slate-100
                      hover:text-[#f26522]
                    "
                  >
                    <span>AMC</span>

                    <span
                      className="
                        rounded-full
                        border
                        border-[#f26522]/20
                        bg-[#f26522]/10
                        px-2
                        py-0.5
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.08em]
                        text-[#f26522]
                      "
                    >
                      Service
                    </span>
                  </Link>
                </div>
              </li>

              {/* CAREERS */}

              <li>
                <NavLink
                  to="/career"
                  className={mainLinkClass}
                >
                  Careers
                </NavLink>
              </li>

              {/* =================================================
                  NEWS & EVENTS
              ================================================= */}

              <li>
                <NavLink
                  to="/news-events"
                  className={mainLinkClass}
                >
                  News &amp; Events
                </NavLink>
              </li>

              {/* CONTACT */}

              <li>
                <NavLink
                  to="/contact"
                  className={mainLinkClass}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* =================================================
              LET'S TALK BUTTON
          ================================================= */}

          <Link
            to="/contact"
            aria-label="Let's Talk"
            className="
              group absolute right-5 hidden h-[46px] w-[145px] items-center
              overflow-hidden rounded-full  text-slate-900
              transition-all duration-500 ease-out
              sm:right-7 lg:right-10 lg:flex xl:right-12
            "
          >
            {/* The orange circle itself expands across the whole button */}
           <span
              className="
                absolute left-0 top-0 z-10 flex h-[46px] w-[46px] items-center
                justify-center rounded-full bg-[#f26522] text-white
                transition-all duration-500 p-1.5 ease-[cubic-bezier(.22,1,.36,1)]
                group-hover:w-full
              "
            >
            <span className="absolute left-0 top-0 h-[46px] w-[46px] rounded-full bg-[#f26522]">
              <span className="absolute inset-0 flex items-center justify-center text-white">
              <Arrow />
              </span>
            </span>
           </span>

            <span
              className="
                relative z-10 ml-[58px] whitespace-nowrap text-[15px]
                font-semibold text-slate-900 transition-colors duration-300
                group-hover:text-white 
              "
            >
              Let's Talk
            </span>
          </Link>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="
              group ml-auto flex h-11 w-11 flex-col items-center justify-center
              gap-[5px] rounded-xl border border-slate-200 bg-slate-100
              transition-all duration-300
              hover:border-[#f26522]/50 hover:bg-[#f26522]/10
              lg:hidden
            "
          >
            <span
              className={`h-[2px] w-5 rounded-full bg-slate-500 transition-all duration-300 ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-5 rounded-full bg-slate-500 transition-all duration-200 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-5 rounded-full bg-slate-500 transition-all duration-300 ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU OVERLAY
      ===================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[70]
          bg-slate-100
          backdrop-blur-[4px]
          transition-all
          duration-300
          ${
            mobileOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
        onClick={closeMobileMenu}
      >
        <aside
          className={`
            ml-auto
            flex
            h-full
            w-[min(88vw,390px)]
            flex-col
            overflow-y-auto
            border-l
            border-slate-200
            bg-white
            p-6
            shadow-[0_24px_60px_-30px_rgba(242,101,34,.30)]
            transition-transform
            duration-500
            ease-[cubic-bezier(.22,1,.36,1)]
            ${
              mobileOpen
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
          onClick={(event) => event.stopPropagation()}
        >
          {/* =================================================
              MOBILE HEADER
          ================================================= */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-slate-200
              pb-5
            "
          >
            <div className="overflow-hidden rounded-2xl border border-[#ff7700] bg-[#ff7700] px-2 py-1.5 shadow-[0_10px_25px_-14px_rgba(255,119,0,.50)]">
              <img
                src={logo}
                alt="Ramton"
                className="w-[140px] rounded-[10px]"
              />
            </div>

            <button
              type="button"
              onClick={closeMobileMenu}
              aria-label="Close navigation menu"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-[28px]
                leading-none
                text-slate-700
                transition-colors
                hover:bg-[#f26522]/10
                hover:text-[#f26522]
              "
            >
              ×
            </button>
          </div>

          {/* =================================================
              MOBILE LINKS
          ================================================= */}

          <ul className="mt-6 space-y-1">

            {/* HOME */}

            <li>
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="
                  flex
                  min-h-[48px]
                  items-center
                  rounded-xl
                  px-4
                  text-[15px]
                  font-semibold
                  text-slate-700
                  transition-colors
                  hover:bg-slate-100
                  hover:text-[#f26522]
                "
              >
                Home
              </Link>
            </li>

            {/* ABOUT */}

            <li>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="
                  flex
                  min-h-[48px]
                  items-center
                  rounded-xl
                  px-4
                  text-[15px]
                  font-semibold
                  text-slate-700
                  transition-colors
                  hover:bg-slate-100
                  hover:text-[#f26522]
                "
              >
                About Us
              </Link>
            </li>

            {/* =================================================
                OUR SOLUTIONS
            ================================================= */}

            <li>
              <button
                type="button"
                onClick={() =>
                  setMobileSolutionsOpen((value) => !value)
                }
                className="
                  flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  px-4
                  text-[15px]
                  font-semibold
                  text-slate-700
                  transition-colors
                  hover:bg-slate-100
                  hover:text-[#f26522]
                "
              >
                Our Solutions

                <ChevronDown
                  className={
                    mobileSolutionsOpen
                      ? "rotate-180"
                      : ""
                  }
                />
              </button>

              {/* =================================================
                  MOBILE SOLUTIONS
              ================================================= */}

              {mobileSolutionsOpen && (
                <ul className="mt-1 space-y-1 pl-2">

                  {navItems.map((item) => {
                    const isOpen =
                      mobileCategoryOpen === item.label;

                    return (
                      <li key={item.label}>

                        <div
                          className="
                            flex
                            items-center
                            rounded-xl
                            border
                            border-slate-200/[0.06]
                            bg-slate-100
                          "
                        >
                          {/* CATEGORY LINK */}

                          <Link
                            to={item.to}
                            onClick={closeMobileMenu}
                            className="
                              flex
                              min-h-[46px]
                              flex-1
                              items-center
                              px-4
                              text-[14px]
                              font-semibold
                              text-slate-700
                              transition-colors
                              hover:text-[#f26522]
                            "
                          >
                            {item.label}
                          </Link>

                          {/* CATEGORY TOGGLE */}

                          <button
                            type="button"
                            aria-label={`Toggle ${item.label}`}
                            onClick={() =>
                              toggleCategory(item.label)
                            }
                            className="
                              flex
                              h-[46px]
                              w-[48px]
                              items-center
                              justify-center
                              text-slate-700
                              hover:text-[#f26522]
                            "
                          >
                            <ChevronDown
                              className={
                                isOpen
                                  ? "rotate-180"
                                  : ""
                              }
                            />
                          </button>
                        </div>

                        {/* SUBMENU */}

                        {isOpen && (
                          <ul className="mt-1 space-y-0.5 pl-4">

                            {item.links.map((link) => (
                              <li key={link.to}>
                                <Link
                                  to={link.to}
                                  onClick={closeMobileMenu}
                                  className="
                                    flex
                                    min-h-[42px]
                                    items-center
                                    rounded-xl
                                    px-4
                                    text-[13.5px]
                                    font-medium
                                    text-slate-700
                                    transition-colors
                                    hover:bg-slate-100
                                    hover:text-[#f26522]
                                  "
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}

                          </ul>
                        )}
                      </li>
                    );
                  })}

                  {/* AMC */}

                  <li className="pt-1">
                    <Link
                      to="/amc"
                      onClick={closeMobileMenu}
                      className="
                        flex
                        min-h-[46px]
                        items-center
                        justify-between
                        rounded-xl
                        border
                        border-slate-200/[0.06]
                        bg-slate-100
                        px-4
                        text-[14px]
                        font-semibold
                        text-slate-700
                        transition-colors
                        hover:bg-slate-100
                        hover:text-[#f26522]
                      "
                    >
                      <span>AMC</span>

                      <span
                        className="
                          rounded-full
                          border
                          border-[#f26522]/20
                          bg-[#f26522]/10
                          px-2
                          py-0.5
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.08em]
                          text-[#f26522]
                        "
                      >
                        Service
                      </span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* CAREERS */}

            <li>
              <Link
                to="/career"
                onClick={closeMobileMenu}
                className="
                  flex
                  min-h-[48px]
                  items-center
                  rounded-xl
                  px-4
                  text-[15px]
                  font-semibold
                  text-slate-700
                  transition-colors
                  hover:bg-slate-100
                  hover:text-[#f26522]
                "
              >
                Careers
              </Link>
            </li>

            {/* NEWS & EVENTS */}

            <li>
              <Link
                to="/news-events"
                onClick={closeMobileMenu}
                className="
                  flex
                  min-h-[48px]
                  items-center
                  rounded-xl
                  px-4
                  text-[15px]
                  font-semibold
                  text-slate-700
                  transition-colors
                  hover:bg-slate-100
                  hover:text-[#f26522]
                "
              >
                News &amp; Events
              </Link>
            </li>

            {/* CONTACT */}

            <li>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="
                  flex
                  min-h-[48px]
                  items-center
                  rounded-xl
                  px-4
                  text-[15px]
                  font-semibold
                  text-slate-700
                  transition-colors
                  hover:bg-slate-100
                  hover:text-[#f26522]
                "
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* =================================================
              MOBILE CTA
          ================================================= */}

          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="
              group
              mt-7
              flex
              h-[50px]
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#f26522]
              text-[13px]
              font-bold
              tracking-[0.01em]
              text-white
              shadow-[0_14px_28px_-15px_rgba(242,101,34,.75)]
              transition-all
              duration-300
              hover:bg-[#dc5718]
            "
          >
            Let's Talk

            <Arrow />
          </Link>
        </aside>
      </div>
    </>
  );
}