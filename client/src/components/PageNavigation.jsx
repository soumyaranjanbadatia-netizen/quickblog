import { useNavigate } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const PageNavigation = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const goToFooter = () => {
    navigate("/", {
      state: { scrollTo: "footer" },
    });
  };

  return (
    <div className="w-full flex items-center justify-between">
      {/* Home */}
      <button
        type="button"
        onClick={goHome}
        className="
          inline-flex items-center gap-2
          text-xs sm:text-sm
          font-medium
          text-white
          bg-primary
          px-4 sm:px-5
          py-2 sm:py-2.5
          rounded-lg
          hover:bg-primary/90
          hover:-translate-y-0.5
          transition-all duration-200
          cursor-pointer
          shadow-sm
        "
      >
        <IoHomeSharp size={18} />
        <span>Home</span>
      </button>

      {/* Footer */}
      <button
        type="button"
        onClick={goToFooter}
        className="
          inline-flex items-center gap-2
          text-xs sm:text-sm
          font-medium
          text-white
          bg-primary
          px-4 sm:px-5
          py-2 sm:py-2.5
          rounded-lg
          hover:bg-primary/90
          hover:-translate-y-0.5
          transition-all duration-200
          cursor-pointer
          shadow-sm
        "
      >
        <FaPhone size={16} />
        <span>Contact us</span>
      </button>
    </div>
  );
};

export default PageNavigation;
