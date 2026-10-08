import { Outlet, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import Sidebar from "../../components/admin/Sidebar";
import { useAppContext } from "../../context/AppContext";
import { useState } from "react";
import { LuLogOut } from "react-icons/lu";

const Layout = () => {
  const { axios, setToken, admin, setAdmin } = useAppContext();
  const navigate = useNavigate();

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const logout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    if (axios?.defaults?.headers?.common) {
      delete axios.defaults.headers.common.Authorization;
    }

    setToken(null);
    setAdmin(null);
    setShowLogoutModal(false);

    navigate("/");
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="flex items-center justify-between py-2 h-17.5 px-4 sm:px-12 border-b border-gray-200">
        <img
          src={assets.gradientBackground}
          alt=""
          className="absolute -top-50 -z-1 opacity-50"
        />
        {/* Logo */}
        <img
          src={assets.logo}
          alt="logo"
          className="w-32 sm:w-40 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Right side */}
        <div className="flex items-center gap-5">
          {/* desktop welcome */}
          {admin && (
            <p className="hidden sm:block text-sm text-gray-600">
              Welcome,{" "}
              <span className="font-semibold text-primary">{admin.name}</span>
            </p>
          )}


          <button
            onClick={logout}
            className="flex items-center gap-2 text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer"
          >
            Logout
            <div className="flex items-center justify-center w-5 h-5">
              <LuLogOut size={18} className="text-white" />
            </div>
          </button>
        </div>
      </div>

      {/* Main area */}
      <div className="flex h-[calc(100vh-70px)]">
        <Sidebar />
        <Outlet />
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-gray-800">
              Confirm Logout
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Are you sure you want to logout from your account?
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={cancelLogout}
                className="px-5 py-2 text-sm rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={confirmLogout}
                className="px-5 py-2 text-sm rounded-md bg-primary text-white hover:opacity-90"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
