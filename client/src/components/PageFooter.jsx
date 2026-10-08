const PageFooter = () => {
  return (
    <section className="bg-white border-t border-[#e5e7eb] px-8 sm:px-8 md:px-10 py-5">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Brand Name with Gradient */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#ff5a1f] to-primary tracking-[0.2em]">
          QUICKBLOG
        </h2>

        {/* Subtle Divider */}
        <div className="w-20 h-0.5 bg-gray-400 my-2 rounded-full" />

        {/* Tagline */}
        <p className="text-sm sm:text-base text-[#6b7280] font-medium tracking-wide max-w-md">
          Simple content. Meaningful ideas.
        </p>
        <p className="mt-4 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-gray-400">
          Read · Discover · Share
        </p>
      </div>
    </section>
  );
};

export default PageFooter;
