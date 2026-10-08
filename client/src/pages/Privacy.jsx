import { policiesData } from "../assets/assets.js";
import PageFooter from "../components/PageFooter";
import PageNavigation from "../components/PageNavigation";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#f5f6fb]  overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="sticky top-0 z-0  overflow-hidden bg-linear-to-br from-[#2e0057] via-[#5b21b6] to-[#7c2d92] text-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-10 pt-12 sm:pt-16 md:pt-20 pb-24 sm:pb-28 md:pb-32 text-center">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-white/70 font-semibold">
            Quickblog
          </p>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Privacy Policy
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-7 text-white/75">
            Your privacy matters to us. Learn how Quickblog collects, uses, and
            protects information when you use our platform.
          </p>

          <p className="mt-5 text-xs sm:text-sm text-white/60">
            Last updated: October 2026
          </p>
        </div>
      </section>

      {/* ================= POLICY CONTENT ================= */}
      <section className="relative px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 text-justify ">
        <div className="relative z-10 -mt-12 sm:-mt-16 max-w-4xl mx-auto">
          <div className="bg-white border border-[#e5e7eb] shadow-sm px-5 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12">
            {/* Intro */}
            <div className="pb-8 border-b border-[#e5e7eb]">
              <p className="text-sm sm:text-base leading-7 text-[#4b5563]">
                Quickblog is a blogging platform that allows visitors to
                discover and read articles, while authorized administrators can
                create, publish, and manage blog content.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-7 text-[#4b5563]">
                This Privacy Policy explains the types of information that may
                be collected through Quickblog and how that information may be
                used.
              </p>
            </div>

            {policiesData.map((policy, index) => {
              const isLastItem = index === policiesData.length - 1;

              return (
                <section
                  key={policy.id}
                  className={`py-8 ${!isLastItem ? "border-b border-[#e5e7eb]" : ""}`}
                >
                  <div className="flex gap-4">
                    <span className="shrink-0 text-sm font-semibold text-[#5b21b6]">
                      {policy.id}
                    </span>

                    <div>
                      <h2 className="text-lg sm:text-xl font-semibold text-[#111827]">
                        {policy.title}
                      </h2>

                      {policy.paragraphs.map((paragraph, pIndex) => (
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

          {/* ================= NAVIGATION ================= */}
          <div className="mt-8">
            <PageNavigation />
          </div>
        </div>
      </section>

      {/* ================= BRAND BAR ================= */}
      <PageFooter />
    </div>
  );
};

export default Privacy;
