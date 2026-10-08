import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Login = () => {
  const { axios, setToken, setAdmin } = useAppContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showWelcome, setShowWelcome] = useState(false);
  const [adminName, setAdminName] = useState("");
  const [loginToken, setLoginToken] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/admin/login", {
        email,
        password,
      });


      if (data.success) {
        confetti({
          particleCount: 100,
          angle: 60,
          spread: 70,
          origin: {
            x: 0,
            y: 1,
          },
          shapes: ["triangle"],
          scalar: 1,
          gravity: 0.8,
        });

        confetti({
          particleCount: 100,
          angle: 120,
          spread: 70,
          origin: {
            x: 1,
            y: 1,
          },
          shapes: ["triangle"],
          scalar: 1,
          gravity: 0.8,
        });

        confetti({
          particleCount: 250,
          spread: 120,
          startVelocity: 45,
          origin: {
            x: 0.5,
            y: 0.6,
          },
        });

        confetti({
          particleCount: 100,
          angle: 60,
          spread: 80,
          origin: {
            x: 0,
            y: 0.7,
          },
        });

        confetti({
          particleCount: 100,
          angle: 120,
          spread: 80,
          origin: {
            x: 1,
            y: 0.7,
          },
        });

        setAdminName(data.admin.name);
        setLoginToken(data.token);
        setShowWelcome(true);

        toast.success("Login Successful");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const handleContinue = () => {
    setToken(loginToken);

    localStorage.setItem("token", loginToken);

    const adminData = {
      name: adminName,
    };

    localStorage.setItem("admin", JSON.stringify(adminData));
    setAdmin(adminData);

    axios.defaults.headers.common["Authorization"] = `Bearer ${loginToken}`;

    setShowWelcome(false);

    navigate("/admin");
  };

  return (
    <>
      {/* Login Page */}
      <div className=" w-full flex items-center justify-center px-4 pt-6 pb-8 sm:px-6">
        <div className="w-full max-w-sm sm:max-w-md p-5 sm:p-7 md:p-8 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg bg-white">
          <div className="flex flex-col items-center justify-center">
            {/* Heading */}
            <div className="w-full text-center">
              <h1 className="text-2xl sm:text-3xl font-bold">
                <span className="text-primary">Admin</span> Login
              </h1>

              <p className="mt-2 text-sm sm:text-base font-light text-gray-600">
                Enter your credentials to access the admin panel.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-7 w-full text-gray-600">
              {/* Email */}
              <div className="flex flex-col">
                <label className="text-sm sm:text-base">Email</label>

                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  required
                  placeholder="Enter your Email Id"
                  className="w-full mt-1 border-2 border-gray-200 rounded-xl p-3 text-sm sm:text-base bg-gray-50 text-gray-800 placeholder-gray-400 outline-none transition-all duration-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 hover:border-gray-300"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col mt-5">
                <label className="text-sm sm:text-base">Password</label>

                <div className="relative w-full mt-1">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Enter your password"
                    className="w-full border-2 border-gray-200 rounded-xl p-3 pr-12 text-sm sm:text-base bg-gray-50 text-gray-800 placeholder-gray-400 outline-none transition-all duration-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 hover:border-gray-300"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-gray-500 hover:text-primary cursor-pointer"
                  >
                    {showPassword ? (
                      <IoEyeOffOutline size={20} />
                    ) : (
                      <IoEyeOutline size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Login */}
              <button
                type="submit"
                className="w-full mt-7 py-3 text-sm sm:text-base font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all"
              >
                Login
              </button>

              {/* Register */}
              <p className="text-center mt-5 text-xs sm:text-sm">
                Don't have an account?{" "}
                <span
                  onClick={() => navigate("/admin/register")}
                  className="text-primary cursor-pointer font-medium"
                >
                  Register
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Welcome Modal */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6">
          <div className="w-full max-w-sm sm:max-w-md rounded-xl bg-white p-5 sm:p-7 shadow-xl text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Welcome back, {adminName}!
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Just a reminder...
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-700 font-medium">
              "Mesmerizing" has many meanings,
            </p>

            <p className="mt-2 text-lg sm:text-xl font-semibold text-primary">
              but today, it means YOU.
            </p>

            <button
              onClick={handleContinue}
              className="mt-6 sm:mt-7 px-7 sm:px-8 py-2.5 bg-primary text-white rounded-lg cursor-pointer hover:bg-primary/90 text-sm sm:text-base"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
