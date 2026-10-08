import { useEffect, useState } from "react";
import PageNavigation from "../components/PageNavigation";
import { faqData } from "../assets/assets";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import PageFooter from "../components/PageFooter";

const FAQ = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedCard ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCard]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedCard(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="min-h-screen bg-[#f5f8fa] overflow-x-hidden">
      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-6">
        {/* ================= HEADING ================= */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1f2937]">
           <span className="text-[#F05D2B]">Frequently</span> Asked Questions
          </h1>

          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-gray-500 leading-6">
            Find answers to common questions about discovering, reading, and
            managing blogs on Quickblog.
          </p>
        </div>

        {/* ================= FAQ CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="
                bg-white
                border border-[#e3e8ec]
                min-h-80
                px-6 py-8
                flex flex-col
                items-center
                text-center
              "
            >
              {/* Icon */}
              <div
                className="
                  h-16 w-16
                  flex items-center justify-center
                  mb-5
                  text-[#ff5a1f]
                  text-[42px]
                "
              >
                <faq.icon/>
              </div>

              {/* Title */}
              <h2 className="text-base sm:text-lg font-semibold text-[#111827]">
                {faq.title}
              </h2>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-sm leading-6 text-[#526579]">
                {faq.description}
              </p>

              {/* Learn button */}
              <button
                type="button"
                onClick={() => setSelectedCard(faq)}
                className="
                  mt-auto
                  pt-5
                  inline-flex
                  items-center
                  gap-2
                  text-xs sm:text-sm
                  font-medium
                  text-primary
                  transition-all
                  duration-200
                  hover:text-[#4338CA]
                  hover:gap-3
                  cursor-pointer
                "
              >
                {faq.buttonText}
                <FaArrowRight size={11} />
              </button>
            </div>
          ))}
        </div>

        {/* Home and footer */}

        <div className="mt-8 sm:mt-10 w-full">
          <PageNavigation />
        </div>
      </div>
      {/* bottom bar */}
      <PageFooter />

      {/* Modal   */}
      {selectedCard && (
        <div
          className="
            fixed inset-0 z-100
            flex items-center justify-center
            bg-black/50
            backdrop-blur-sm
            px-4 py-6
          "
          onClick={closeModal}
        >
          <div
            className="
              relative
              w-full
              max-w-lg
              max-h-[88vh]
              overflow-y-auto
              bg-white
              rounded-2xl
              shadow-2xl
            "
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 px-5 sm:px-7 pt-6 sm:pt-7 text-justify">
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="
                    shrink-0
                    w-11 h-11
                    rounded-full
                    flex items-center justify-center
                    bg-[#ff5a1f]/10
                    text-[#ff5a1f]
                    text-xl
                  "
                >
                  <selectedCard.icon/>
                </div>

                <div className="min-w-0">
                  <h2 className="text-lg sm:text-xl font-semibold text-[#111827]">
                    {selectedCard.title}
                  </h2>

                  <p className="mt-1 text-xs sm:text-sm text-gray-500">
                    Follow these simple steps.
                  </p>
                </div>
              </div>

              {/* Close */}
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close modal"
                className="
                  shrink-0
                  w-9 h-9
                  rounded-full
                  flex items-center justify-center
                  text-gray-500
                  bg-gray-100
                  hover:bg-gray-200
                  hover:text-gray-700
                  transition-colors
                  cursor-pointer
                "
              >
                <FaTimes size={15} />
              </button>
            </div>

            {/* Steps */}
            <div className="px-5 sm:px-7 py-6">
              <div className="space-y-4">
                {selectedCard.steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span
                      className="
                        shrink-0
                        w-8 h-8
                        rounded-full
                        flex items-center justify-center
                        bg-primary
                        text-white
                        text-xs
                        font-semibold
                      "
                    >
                      {index + 1}
                    </span>

                    <p className="pt-1 text-sm sm:text-base leading-6 text-[#526579]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 sm:px-7 pb-6 sm:pb-7">
              <button
                type="button"
                onClick={closeModal}
                className="
                  w-full
                  py-2.5
                  rounded-lg
                  bg-primary
                  text-white
                  text-sm
                  font-medium
                  hover:bg-[#4338CA]
                  transition-colors
                  cursor-pointer
                "
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQ;
