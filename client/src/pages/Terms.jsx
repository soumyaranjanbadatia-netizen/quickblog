import { termsData } from "../assets/assets.js";
import PageFooter from "../components/PageFooter";
import PageNavigation from "../components/PageNavigation";

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#f5f6fb] overflow-x-hidden">
      {/* hero section   */}
      <section className="bg-linear-to-r from-[#2e0057] via-[#5b21b6] to-[#7c2d92] text-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 py-14 sm:py-18 md:py-24">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-white/70 font-semibold">
            Quickblog
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Terms &amp; Conditions
          </h1>

          <p className="mt-5 max-w-2xl text-sm sm:text-base leading-7 text-white/75">
            Please read these terms carefully before using Quickblog. By using
            the platform, you agree to follow the terms described below.
          </p>

          <p className="mt-5 text-xs sm:text-sm text-white/60">
            Last updated: October 2026
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="px-4 sm:px-6 md:px-8 pb-12 sm:pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Gradient line */}
          <div className="h-1 w-full bg-linear-to-r from-[#7c3aed] via-[#a855f7] to-[#ec4899]" />

          {/* White document */}
          <div className="bg-white border border-[#e5e7eb] shadow-sm px-5 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12 text-justify">
            {/* Introduction */}
            <div className="pb-8 border-b border-[#e5e7eb]">
              <p className="text-sm sm:text-base leading-7 text-[#4b5563]">
                These Terms &amp; Conditions govern your use of Quickblog, a
                blogging platform where visitors can discover and read articles
                and authorized administrators can create, publish, and manage
                blog content.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-7 text-[#4b5563]">
                By accessing or using Quickblog, you agree to follow these
                terms. If you do not agree with these terms, please do not use
                the platform.
              </p>
            </div>

            {/* Dynamic Terms Sections */}
            {termsData.map((item, index) => {
              const isLastItem = index === termsData.length - 1;

              return (
                <section
                  key={item.id}
                  className={`${!isLastItem ? "py-8 border-b border-[#e5e7eb]" : "pt-8"}`}
                >
                  <div className="flex gap-4 sm:gap-5">
                    <span className="shrink-0 text-sm font-semibold text-[#6d28d9]">
                      {item.id}
                    </span>

                    <div className="min-w-0">
                      <h2 className="text-lg sm:text-xl font-semibold text-[#111827]">
                        {item.title}
                      </h2>

                      {item.paragraphs.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="mt-3 text-sm sm:text-base leading-7 text-[#5f6368]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          {/* Home / Footer navigation */}
          <div className="mt-8">
            <PageNavigation />
          </div>
        </div>
      </section>

      {/* ================= BOTTOM BRAND BAR ================= */}
      <PageFooter />
    </div>
  );
};

export default Terms;
