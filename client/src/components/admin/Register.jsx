import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Register = () => {
  const { axios } = useAppContext();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  // Password validation
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
  const hasStartedTyping = password.length > 0;
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend password validation
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters and contain uppercase, lowercase, number, and special character",
      );
      return;
    }

    try {
      const { data } = await axios.post("/api/admin/register", {
        name,
        email,
        password,
      });

      if (data.success) {
        // Left bottom confetti
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

        // Right bottom confetti
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

        // Center confetti
        confetti({
          particleCount: 250,
          spread: 120,
          startVelocity: 45,
          origin: {
            x: 0.5,
            y: 0.6,
          },
        });

        // Left middle confetti
        confetti({
          particleCount: 100,
          angle: 60,
          spread: 80,
          origin: {
            x: 0,
            y: 0.7,
          },
        });

        // Right middle confetti
        confetti({
          particleCount: 100,
          angle: 120,
          spread: 80,
          origin: {
            x: 1,
            y: 0.7,
          },
        });

        setShowWelcome(true);

        setEmail("");
        setPassword("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <>
      <div className="w-full flex justify-center px-4 pt-2 pb-6 sm:px-6 sm:pt-6 ">
        <div className="w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full px-2 pt-2 pb-1 text-center">
              <h1 className="text-2xl sm:text-3xl font-bold">
                <span className="text-primary">Admin</span> Register
              </h1>

              <p className="font-light">Create your admin account</p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-2 w-full sm:max-w-md text-gray-600"
            >
              {/* Name */}
              <div className="flex flex-col">
                <label>Name</label>

                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full border-2 border-gray-200 rounded-xl p-3 bg-gray-50 outline-none transition-all duration-300 mb-6 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label>Email</label>

                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  required
                  placeholder="Enter your Email Id"
                  className="w-full border-2 border-gray-200 rounded-xl p-3 bg-gray-50 outline-none transition-all duration-300 mb-6 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col">
                <label>Password</label>

                <div className="relative w-full">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Create your password"
                    className="w-full border-2 border-gray-200 rounded-xl p-3 pr-12 bg-gray-50 outline-none transition-all duration-300 mb-2 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 mt-4 text-gray-500 hover:text-primary cursor-pointer"
                  >
                    {showPassword ? (
                      <IoEyeOffOutline size={20} />
                    ) : (
                      <IoEyeOutline size={20} />
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs mb-6">
                  <p
                    className={
                      hasMinLength ? "text-green-600" : "text-gray-400"
                    }
                  >
                    {hasMinLength ? "✓" : "○"} At least 8 characters
                  </p>

                  <p
                    className={
                      hasUppercase ? "text-green-600" : "text-gray-400"
                    }
                  >
                    {hasUppercase ? "✓" : "○"} One uppercase letter
                  </p>

                  <p
                    className={
                      hasLowercase ? "text-green-600" : "text-gray-400"
                    }
                  >
                    {hasLowercase ? "✓" : "○"} One lowercase letter
                  </p>

                  <p className={hasNumber ? "text-green-600" : "text-gray-400"}>
                    {hasNumber ? "✓" : "○"} One number
                  </p>

                  <p
                    className={hasSpecial ? "text-green-600" : "text-gray-400"}
                  >
                    {hasSpecial ? "✓" : "○"} One special character
                  </p>

                  <p
                    className={
                      !password.includes(" ")
                        ? "text-green-600"
                        : "text-gray-400"
                    }
                  >
                    {hasStartedTyping && !password.includes(" ") ? "✓" : "○"} No
                    spaces
                  </p>
                </div>
              </div>

              {/* Register button */}
              <button
                type="submit"
                className="w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all"
              >
                Register
              </button>

              {/* Login link */}
              <p className="text-center mt-5 text-sm">
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/admin")}
                  className="text-primary cursor-pointer font-medium"
                >
                  Login
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Welcome Modal */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-xl bg-white p-7 shadow-xl text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Welcome, {name}!
            </h2>

            <p className="mt-4 text-gray-600">Your account is ready.</p>

            <p className="mt-3 text-gray-600">
              One little thing before you go...
            </p>

            <p className="mt-5 text-gray-700 font-medium">
              Do you know the other meaning of "Mesmerizing"?
            </p>

            <p className="mt-4 text-xl font-semibold text-primary">It's you.</p>

            <button
              onClick={() => {
                setShowWelcome(false);
                setName("");
                navigate("/admin");
              }}
              className="mt-7 px-8 py-2.5 bg-primary text-white rounded-lg cursor-pointer hover:bg-primary/90"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
