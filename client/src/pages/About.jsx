import { Link } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";
import PageFooter from "../components/PageFooter";

const About = () => {
  return (
    <div className="min-h-screen bg-[#f5f6fb] overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="bg-[#470909] text-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-10 py-10 sm:py-14 md:py-16">
          {/* Hero Content */}

          <div className="pt-2 sm:pt-4 pb-4 sm:pb-8">
            <div className="flex items-center gap-3">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#D6A85F] font-semibold">
                About Us
              </p>
            </div>

            <h1 className="mt-5 max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1]">
              A simple place for{" "}
              <span className="bg-linear-to-r from-[#C99A3D] via-[#F4D58D] to-[#C99A3D] bg-size-[200%_100%] bg-clip-text text-transparent animate-gradient">
                good ideas
              </span>{" "}
              to be discovered.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm sm:text-base leading-7 text-white/70">
              Quickblog is a modern blogging platform for people who enjoy
              discovering useful ideas, thoughtful articles, and different
              perspectives.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="bg-[#f5f6fb] px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Heading */}
            <div className="md:col-span-5">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                Our Story
              </p>

              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] leading-tight">
                Built for readers
                <span className="block text-primary">and writers.</span>
              </h2>
            </div>

            {/* Content */}
            <div className="md:col-span-7 text-justify">
              <p className="text-sm sm:text-base leading-7 text-[#4b5563]">
                Quickblog was created around one simple idea: discovering good
                content should feel easy, comfortable, and enjoyable.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-7 text-[#4b5563]">
                Readers can explore content across categories, while authorized
                admins can create, publish, and manage blogs from one place.
              </p>

              <Link
                to="/"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  bg-primary
                  text-white
                  text-sm
                  font-medium
                  px-5
                  py-2.5
                  rounded-lg
                  hover:bg-[#4338CA]
                  hover:-translate-y-0.5
                  transition-all
                  duration-200
                "
              >
                Read our blogs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BRAND STATEMENT ================= */}
      <section className="bg-white border-y border-[#e3e8ec] px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative border border-[#dddff0] bg-[#f8f8fc] px-6 sm:px-10 md:px-14 py-10 sm:py-14">
            {/* Decorative quote */}
            <span className="absolute top-3 left-5 sm:left-8 text-6xl sm:text-7xl font-serif text-primary/15 leading-none select-none">
              “
            </span>

            <div className="relative text-center max-w-2xl mx-auto">
              <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-tight text-[#111827]">
                Ideas deserve a place where they can be
                <span className="text-primary"> discovered, read,</span> and
                <span className="text-primary"> shared.</span>
              </p>

              <div className="w-10 h-1 bg-primary rounded-full mx-auto mt-6" />

              <p className="mt-5 text-xs sm:text-sm uppercase tracking-[0.18em] text-gray-400 font-medium">
                The idea behind Quickblog
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE FOCUS ON ================= */}
      <section className="bg-[#f5f6fb] px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            What we focus on
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] leading-tight">
            Three simple ideas.
          </h2>

          <div className="mt-8 sm:mt-10 space-y-8 sm:space-y-10">
            {/* 01 */}
            <div className="flex items-start gap-4 sm:gap-6">
              <span className="shrink-0 text-3xl sm:text-5xl font-bold text-primary/20 leading-none">
                01
              </span>

              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-[#111827]">
                  Discover
                </h3>

                <p className="mt-1.5 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-[#6b7280]">
                  Find articles across different categories and explore ideas
                  that match your interests.
                </p>
              </div>
            </div>

            {/* 02 */}
            <div className="flex items-start gap-4 sm:gap-6">
              <span className="shrink-0 text-3xl sm:text-5xl font-bold text-primary/20 leading-none">
                02
              </span>

              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-[#111827]">
                  Read
                </h3>

                <p className="mt-1.5 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-[#6b7280]">
                  Enjoy a clean and comfortable reading experience without
                  unnecessary distractions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-6">
              <span className="shrink-0 text-3xl sm:text-5xl font-bold text-primary/20 leading-none">
                03
              </span>

              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-[#111827]">
                  Share
                </h3>

                <p className="mt-1.5 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-[#6b7280]">
                  Give useful ideas a place to reach more people and start
                  meaningful conversations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM BRAND BAR ================= */}
      {/* ================= BOTTOM NAVIGATION ================= */}

      <section className="bg-[#f5f6fb] px-5 sm:px-8 md:px-10 py-8 sm:py-10">
        <div className="max-w-5xl mx-auto">
          <PageNavigation />
        </div>
      </section>

      {/* ================= SIMPLE PAGE FOOTER ================= */}

      <PageFooter />
    </div>
  );
};

export default About;
