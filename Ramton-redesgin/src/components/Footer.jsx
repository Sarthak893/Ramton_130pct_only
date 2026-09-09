import { Link } from "react-router-dom";
import logo from "../assets/ramton-logo.png";

const groups = [
  {
    title: "Solutions",
    links: [
      { label: "IT Infrastructure", to: "/hardware" },
      { label: "Hardware Solutions", to: "/hardware" },
      { label: "Software Solutions", to: "/software" },
      { label: "Security Solutions", to: "/security" },
      { label: "Networking Solutions", to: "/networking" },
      { label: "AMC & Support", to: "/amc" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "/career" },
      { label: "Partners", to: "/about" },
      { label: "News & Events", to: "/news-events" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQs", placeholder: true },
      { label: "Privacy Policy", placeholder: true },
      { label: "Terms & Conditions", placeholder: true },
    ],
  },
];

const linkClass =
  "relative inline-block text-[13px] text-slate-700 transition-colors duration-200 hover:text-[#f26522] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[1.5px] after:w-0 after:rounded-full after:bg-[#f26522] after:transition-all after:duration-300 hover:after:w-full";

function FooterLink({ link }) {
  if (link.placeholder) {
    return (
      <span className="cursor-default text-[13px] text-slate-600">
        {link.label}
      </span>
    );
  }

  return (
    <Link to={link.to} className={linkClass}>
      {link.label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white text-slate-800">
      {/* Warm orange gradient divider */}
      <div
        aria-hidden="true"
        className="h-[2px] w-full bg-gradient-to-r from-[#c2410c] via-[#fed7c3] to-[#c2410c]"
      />
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-8">
        <div className="grid gap-10 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.35fr_repeat(3,1fr)_1.25fr] lg:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" aria-label="Ramton Home" className="inline-block">
              <img
                src={logo}
                alt="Ramton"
                className="w-[145px]"
              />
            </Link>

            <p className="mt-4 max-w-[280px] text-sm leading-7 text-slate-700">
              Delivering reliable, secure and future-ready technology solutions
              for modern businesses.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-2.5">
              <a
                href="https://www.linkedin.com/company/ramton-technologies-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-bold text-slate-700 transition-all duration-200 hover:border-[#f26522] hover:bg-[#f26522] hover:text-white"
              >
                in
              </a>

              <a
                href="https://www.facebook.com/ramton.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-bold text-slate-700 transition-all duration-200 hover:border-[#f26522] hover:bg-[#f26522] hover:text-white"
              >
                f
              </a>
            </div>
          </div>

          {/* Footer Groups */}
          {groups.map((group) => (
            <div key={group.title}>
              <h5 className="text-sm font-bold text-slate-900">
                {group.title}
              </h5>

              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h5 className="text-sm font-bold text-slate-900">Contact</h5>

            <ul className="mt-5 space-y-4 text-[13px] leading-5 text-slate-700">
              <li>
                <a
                  href="tel:+911145678900"
                  className="relative inline-block transition-colors hover:text-[#f26522]"
                >
                  <span aria-hidden="true">☎</span>
                  <span className="ml-2">+91 11 4567 8900</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@ramton.in"
                  className="relative inline-block transition-colors hover:text-[#f26522]"
                >
                  <span aria-hidden="true">✉</span>
                  <span className="ml-2">info@ramton.in</span>
                </a>
              </li>

              <li className="flex items-start">
                <span aria-hidden="true">⌖</span>
                <span className="ml-2">
                  A-41, Sector 4, Noida,
                  <br />
                  Uttar Pradesh - 201301
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-600">
          <p>© 2026 Ramton. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
