import { Link } from "react-router-dom";

import {
  FaUser,
  FaQuestionCircle,
  FaEnvelope,
  FaShieldAlt,
  FaFileAlt,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { IoArrowUp } from "react-icons/io5";
import { assets, footer_data } from "../assets/assets.js";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  // React Icons for Quick Links and Need Help
  const iconMap = {
    about: <FaUser size={18} />,
    faq: <FaQuestionCircle size={18} />,
    mission: <BiTargetLock size={25} />,
    contact: <FaEnvelope size={16} />,
    privacy: <FaShieldAlt size={16} />,
    terms: <FaFileAlt size={16} />,
  };

  // Common style for ALL footer icons
  const iconStyle =
    "w-10 h-10 shrink-0 rounded-full bg-white flex items-center justify-center text-primary shadow-[0_3px_8px_rgba(0,0,0,0.18)] transition-all duration-200 text-[42px] text-[#ff5a1f]";
  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3"
    >
      {/* ================= MAIN FOOTER ================= */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        {/* ================= LOGO + DESCRIPTION ================= */}
        <div className="w-full md:max-w-md mb4">
          <img src={assets.logo} alt="Quickblog" className="w-32 sm:w-44" />

          <p className="mt-3 text-sm leading-6 text-gray-900 text-justify">
            Quickblog is a modern space where
            <span className="font-semibold text-primary">
              {" "}
              ideas, stories, and perspectives{" "}
            </span>{" "}
            come together. Explore blogs across different categories, discover
            new topics, learn from different viewpoints, and share your own
            thoughts with others. We believe good content should be easy to
            discover, enjoyable to read, and simple to share, which is why
            Quickblog is designed around a
            <span className="font-semibold text-primary">
              {" "}
              clean, focused, and welcoming{" "}
            </span>{" "}
            experience.
          </p>
        </div>

        {/* ================= FOOTER COLUMNS ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 w-full md:w-[55%]">
          {footer_data.map((section, index) => (
            <div key={index}>
              {/* Section Title */}
              <h3 className="font-semibold text-base text-gray-900 mb-4">
                {section.title}
              </h3>

              {/* FOLLOW US */}

              {section.title === "Follow Us" ? (
                <div className="flex flex-col gap-3">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex items-center gap-3 text-sm hover:-translate-y-1 hover:text-primary transition-all duration-200 ease-out "
                  >
                    <span className={iconStyle}>
                      <RiInstagramFill size={20} />
                    </span>

                    <span>Instagram</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex items-center gap-3 text-sm hover:-translate-y-1 hover:text-primary transition-all duration-200 ease-out "
                  >
                    <span className={iconStyle}>
                      <FaLinkedinIn size={17} />
                    </span>

                    <span>LinkedIn</span>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex items-center gap-3 text-sm hover:-translate-y-1 hover:text-primary transition-all duration-200 ease-out "
                  >
                    <span className={iconStyle}>
                      <FaGithub size={17} />
                    </span>

                    <span>GitHub</span>
                  </a>
                </div>
              ) : (
                /* ================================================= */
                /* QUICK LINKS + NEED HELP */

                <ul className="space-y-3">
                  {section.links.map((link, i) => {
                    const isExternal =
                      link.href.startsWith("http") ||
                      link.href.startsWith("mailto:");

                    // Common icon for Quick Links and Need Help
                    const icon = (
                      <span className={iconStyle}>{iconMap[link.icon]}</span>
                    );

                    return (
                      <li key={i}>
                        {isExternal ? (
                          <a
                            href={link.href}
                            className="flex items-center gap-3 text-sm hover:-translate-y-1 hover:text-primary transition-all duration-200 ease-out "
                          >
                            {icon}

                            <span>{link.label}</span>
                          </a>
                        ) : (
                          <Link
                            to={link.href}
                            className="flex items-center gap-3 text-sm hover:-translate-y-1 hover:text-primary transition-all duration-200 ease-out "
                          >
                            {icon}

                            <span>{link.label}</span>
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}

      <div className="relative py-4">
        <p className="text-center text-sm md:text-base text-gray-500">
          © {new Date().getFullYear()} Quickblog. All rights reserved.
        </p>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="absolute right-0 bottom-3 w-9 h-9 flex items-center justify-center rounded-full bg-primary text-white hover:scale-105 transition-all cursor-pointer"
        >
          <IoArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
