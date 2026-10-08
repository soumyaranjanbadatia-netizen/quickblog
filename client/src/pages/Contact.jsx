import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { assets } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
import PageFooter from "../components/PageFooter.jsx";
import { IoHomeSharp } from "react-icons/io5";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-dvh bg-[#f5f6fb] overflow-x-hidden flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 md:px-10 py-5 sm:py-8">
          {/* Heading */}
          <div className="text-center">
            <div className="flex justify-center mb-2 sm:mb-3">
              <img
                src={assets.phone_icon}
                alt="Contact us"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
            </div>

            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Contact Us
            </p>

            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827]">
              How can we help?
            </h1>

            <p className="mt-2 sm:mt-3 max-w-xl mx-auto text-xs sm:text-sm leading-6 text-gray-500">
              Have a question about Quickblog? Send us a message and let us know
              what you would like to know.
            </p>
          </div>

          {/* Form */}
          <div className="mt-6 sm:mt-7 bg-white border border-[#e5e7eb] px-5 sm:px-7 py-5 sm:py-6 rounded-xl shadow-sm">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 mx-auto rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  ✓
                </div>

                <h2 className="mt-4 text-lg font-semibold text-[#111827]">
                  Question received!
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Your question has been recorded for now. Backend support will
                  be added later.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-sm font-medium text-primary hover:text-primary/80 cursor-pointer"
                >
                  Send another question
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#111827] mb-1.5"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="
                      w-full
                      px-4 py-2.5
                      text-sm
                      border border-gray-300
                      rounded-lg
                      outline-none
                      focus:border-primary
                      focus:ring-2
                      focus:ring-primary/10
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#111827] mb-1.5"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="
                      w-full
                      px-4 py-2.5
                      text-sm
                      border border-gray-300
                      rounded-lg
                      outline-none
                      focus:border-primary
                      focus:ring-2
                      focus:ring-primary/10
                    "
                  />
                </div>

                {/* Question */}
                <div>
                  <label
                    htmlFor="question"
                    className="block text-sm font-medium text-[#111827] mb-1.5"
                  >
                    Question
                  </label>

                  <textarea
                    id="question"
                    name="question"
                    rows={4}
                    placeholder="Write your question here..."
                    required
                    className="
                      w-full
                      px-4 py-2.5
                      text-sm
                      border border-gray-300
                      rounded-lg
                      outline-none
                      resize-none
                      focus:border-primary
                      focus:ring-2
                      focus:ring-primary/10
                    "
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="
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
                    hover:bg-primary/90
                    hover:-translate-y-0.5
                    transition-all
                    duration-200
                    cursor-pointer
                  "
                >
                  Send Question
                  <IoArrowForward size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Home Button */}
          <div className="mt-5 sm:mt-6">
            <button
              type="button"
              onClick={goHome}
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                text-xs
                sm:text-sm
                font-medium
                text-white
                bg-primary
                rounded-lg
                shadow-sm
                transition-all
                duration-200
                hover:bg-primary/90
                hover:-translate-y-0.5
                cursor-pointer
              "
            >
              <IoHomeSharp size={18} />
              <span>Home</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <PageFooter />
    </div>
  );
};

export default Contact;
