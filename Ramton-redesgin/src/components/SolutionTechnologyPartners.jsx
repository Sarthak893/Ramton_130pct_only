import { PartnerLogo, partners } from "../data/partners";

function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex w-fit items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111318] shadow-[0_14px_35px_-24px_rgba(0,0,0,.18)] sm:text-[12px] md:px-8 md:py-3.5 md:text-[13px]">
      {children}
    </div>
  );
}

export default function SolutionTechnologyPartners() {
  return (
    <section className="bg-[#fff7f2] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1500px] px-6 md:px-8">
        <div className="mx-auto mb-10 max-w-[800px]">
          <div className="flex w-full justify-center">
            <SectionLabel>Our Technology Partners</SectionLabel>
          </div>

          <h2 className="mx-auto text-center text-[30px] font-normal leading-[1.02] tracking-[-0.055em] text-[#111318] sm:text-[44px] md:text-[56px]">
            Powered by Leading <span className="text-[#f26522]">Global Brands</span>
          </h2>
        </div>

        <div className="overflow-hidden py-5">
          <div
            className="marquee-track flex w-max items-center gap-12 sm:gap-16 md:gap-20"
            style={{ animationDuration: "55s" }}
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex shrink-0 items-center gap-3 whitespace-nowrap px-2 py-3"
              >
                <PartnerLogo
                  name={partner.name}
                  logo={partner.logo}
                  Logo={partner.Logo}
                  mark={partner.mark}
                />
                <span className="text-[14px] font-semibold tracking-[-0.01em] text-slate-900 sm:text-[15px]">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
