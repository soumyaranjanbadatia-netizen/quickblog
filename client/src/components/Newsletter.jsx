import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowModal(true);
    setEmail("");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center space-y-2 my-32">
        <h1 className="md:text-4xl text-2xl font-semibold">
          Never Miss a Blog
        </h1>

        <p className="md:text-lg text-gray-500/70 pb-8">
          Subscribe to get the latest blogs, new tech, and exclusive news.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between max-w-2xl w-[calc(100%-2rem)] sm:w-full h-12 md:h-13"
        >
          <input
            type="email"
            placeholder="Enter your email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          />

          <button
            type="submit"
            className="md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* ================= SUBSCRIPTION MODAL ================= */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-7 sm:p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-all cursor-pointer"
            >
              <FaTimes size={13} />
            </button>

            {/* Success icon */}
            <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <FaCheck size={22} />
            </div>

            {/* Message */}
            <h2 className="mt-5 text-xl sm:text-2xl font-semibold text-gray-900">
              Subscription Successful!
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-500 leading-6">
              Thanks for subscribing to Quickblog. You'll receive our latest
              blogs, ideas, and updates.
            </p>

            {/* Close button */}
            <button
              type="button"
              onClick={closeModal}
              className="mt-6 px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all cursor-pointer"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Newsletter;
