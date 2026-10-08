import { useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { LuLogIn } from "react-icons/lu";

const Navbar = () => {
  const { token, admin } = useAppContext();

  const navigate = useNavigate();
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/admin" ||
    location.pathname === "/admin/login" ||
    location.pathname === "/admin/register";

  // Get only the first name
  const firstName = admin?.name?.trim().split(/\s+/)[0] || "";

  return (
    <nav className="w-full">
      
      <div className="flex items-center justify-between w-full px-3 py-4 sm:px-8 sm:py-5 md:px-12 xl:px-32">
        {/* Logo */}
        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          alt="Quickblog"
          className="w-24 sm:w-36 md:w-44 cursor-pointer shrink-0"
        />

        {/* Right side */}
        {!isAuthPage && (
          <div className="flex items-center gap-1.5 sm:gap-4 min-w-0">
            {/* Desktop greeting */}
            {token && admin && (
              <p className="hidden sm:block text-sm text-gray-600 whitespace-nowrap">
                Welcome,{" "}
                <span className="font-semibold text-primary">{firstName}</span>
              </p>
            )}

            {token && admin && location.pathname !== "/admin" && (
              <p className="sm:hidden text-[11px] font-semibold text-primary whitespace-nowrap">
                Hey, {firstName}
              </p>
            )}

            {/* Login / Dashboard */}
            <button
              type="button"
              onClick={() => navigate("/admin")}
              className="flex items-center justify-center gap-1 rounded-full bg-primary text-white cursor-pointer whitespace-nowrap shrink-0
              text-[11px] px-3 py-1.5
              sm:text-sm sm:px-6 sm:py-2
              md:px-8 md:py-2.5"
            >
              {token ? "Dashboard" : "Login"}

              <span className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5">
                <LuLogIn size={15} className="sm:hidden text-white" />
                <LuLogIn size={18} className="hidden sm:block text-white" />
              </span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
