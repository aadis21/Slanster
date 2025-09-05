"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import BASE_URL from "../../../api";
import ProtectedRoute from "../../../ProtectedRoute";

interface LoginFormData {
  email?: string;
  password?: string;
  phone?: string;
  otp?: string;
}

interface SignupFormData {
  username?: string;
  email?: string;
  mobileNumber?: string;
  college?: string;
  degree?: string;
}

interface ResetPasswordData {
  email?: string;
  otp?: string;
  newPassword?: string;
}

interface ApiResponse {
  token?: string;
  accessToken?: string;
  access_token?: string;
  data?: {
    token?: string;
  };
  message?: string;
  success?: boolean;
  error?: boolean;
  status?: string;
}

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [useOtpLogin, setUseOtpLogin] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpTimer, setOtpTimer] = useState(30);
  const [loginData, setLoginData] = useState<LoginFormData>({});
  const [signupData, setSignupData] = useState<SignupFormData>({});
  const [resetPasswordData, setResetPasswordData] = useState<ResetPasswordData>(
    {}
  );
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Check authentication status on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      router.push("/slansterdashboard");
    }
  }, [router]);

  // OTP Timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (otpSent && otpTimer > 0) {
      timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [otpSent, otpTimer]);

  // Focus OTP input
  useEffect(() => {
    if (otpSent) {
      const otpInput =
        document.querySelector<HTMLInputElement>('input[name="otp"]');
      otpInput?.focus();
    }
  }, [otpSent]);

  // Input handlers
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleResetPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setResetPasswordData({
      ...resetPasswordData,
      [e.target.name]: e.target.value,
    });
  };

  // Extract token from different possible response formats
  const extractToken = (data: ApiResponse): string | null => {
    if (data.token) return data.token;
    if (data.accessToken) return data.accessToken;
    if (data.access_token) return data.access_token;
    if (data.data?.token) return data.data.token;
    return null;
  };

  // Generic API call
  const callApi = async (url: string, body: object, requiresAuth = false) => {
    setIsLoading(true);
    const toastId = toast.loading("Processing...");

    try {
      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };

      // Add authorization header if required
      if (requiresAuth) {
        const token = localStorage.getItem("token");
        if (token) {
          headers.Authorization = `Bearer ${token}`;
        }
      }

      const res = await fetch(`${BASE_URL}${url}`, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      const data: ApiResponse = await res.json();

      if (
        !res.ok ||
        data.error ||
        data.success === false ||
        data.status === "failed"
      ) {
        toast.error(data.message || "Something went wrong!", { id: toastId });
        setIsLoading(false);
        return null;
      }

      toast.success(data.message || "Success!", { id: toastId });
      setIsLoading(false);
      return data;
    } catch (err) {
      toast.error("Network error!", { id: toastId });
      setIsLoading(false);
      return null;
    }
  };

  // LOGIN
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoading) return;

    if (useOtpLogin) {
      if (!otpSent) {
        if (!loginData.phone) {
          toast.error("Please enter your phone number!");
          return;
        }

        const res = await callApi("/sendLoginOtp", {
          phone: loginData.phone,
        });

        if (res) {
          setOtpSent(true);
          setOtpTimer(30);
        }
      } else {
        if (!loginData.otp) {
          toast.error("Please enter the OTP!");
          return;
        }

        const res = await callApi("/verifyLoginOtp", {
          phone: loginData.phone,
          otp: loginData.otp,
        });

        if (res) {
          const token = extractToken(res);
          if (token) {
            localStorage.setItem("token", token);
            setIsAuthenticated(true);
            toast.success("Login successful!");
            router.push("/slansterdashboard");
          } else {
            toast.error(
              "Login successful but no token received. Please contact support."
            );
            console.error("Token not found in response:", res);
          }
        }
      }
    } else {
      if (!loginData.email || !loginData.password) {
        toast.error("Please enter both email and password!");
        return;
      }

      const res = await callApi("/loginUserWithEmailPassword", {
        email: loginData.email,
        password: loginData.password,
      });

      if (res) {
        const token = extractToken(res);
        if (token) {
          localStorage.setItem("token", token);
          setIsAuthenticated(true);
          router.push("/slansterdashboard");
        } else {
          toast.error(
            "Login successful but no token received. Please try OTP login."
          );
          console.error("Token not found in response:", res);
        }
      }
    }
  };

  // RESEND OTP for login
  const resendOtp = async () => {
    if (!loginData.phone) {
      toast.error("Please enter your phone number first!");
      return;
    }

    const res = await callApi("/sendLoginOtp", {
      phone: loginData.phone,
    });

    if (res) {
      setOtpTimer(30);
      toast.success("OTP sent successfully!");
    }
  };

  // SEND FORGOT PASSWORD OTP
  const sendForgotPasswordOtp = async () => {
    if (!resetPasswordData.email) {
      toast.error("Please enter your email address!");
      return;
    }

    const res = await callApi("/sendForgotPasswordOtp", {
      email: resetPasswordData.email,
    });

    if (res) {
      setOtpSent(true);
      setOtpTimer(30);
      toast.success("OTP sent to your email!");
    }
  };

  // VERIFY FORGOT PASSWORD OTP
  const verifyForgotPasswordOtp = async () => {
    if (!resetPasswordData.otp) {
      toast.error("Please enter the OTP!");
      return;
    }

    const res = await callApi("/verifyForgotPasswordOtp", {
      email: resetPasswordData.email,
      otp: resetPasswordData.otp,
    });

    if (res) {
      toast.success("OTP verified successfully!");
      // Move to password reset step
      setOtpSent(false);
    }
  };

  // RESET PASSWORD
  const resetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!resetPasswordData.newPassword) {
      toast.error("Please enter a new password!");
      return;
    }

    const token = localStorage.getItem("token");
    const res = await callApi(
      "/resetPassword",
      {
        newPassword: resetPasswordData.newPassword,
      },
      true
    );

    if (res) {
      toast.success("Password reset successfully!");
      setShowForgotPassword(false);
      setResetPasswordData({});

      // If user was logged in, keep them logged in, otherwise redirect to login
      if (!token) {
        setIsLogin(true);
      } else {
        router.push("/slansterdashboard");
      }
    }
  };

  // SIGNUP
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoading) return;

    if (
      !signupData.username ||
      !signupData.email ||
      !signupData.mobileNumber ||
      !signupData.college ||
      !signupData.degree
    ) {
      toast.error("Please fill all fields!");
      return;
    }

    const res = await callApi("/registerUser", {
      username: signupData.username,
      email: signupData.email,
      mobileNumber: signupData.mobileNumber,
      college: signupData.college,
      degree: signupData.degree,
    });

    if (res) {
      const token = extractToken(res);
      if (token) {
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
        router.push("/slansterdashboard");
      } else {
        toast.error(
          "Registration successful but no token received. Please try logging in."
        );
        console.error("Token not found in response:", res);
      }
    }
  };

  const formVariants = {
    hidden: { x: 300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
  };

  // If already authenticated, don't render the auth form
  if (isAuthenticated) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-900 to-blue-500">
          <div className="bg-white p-8 rounded-3xl shadow-2xl text-center">
            <h2 className="text-2xl font-bold text-sky-900 mb-4">
              Redirecting to Dashboard...
            </h2>
            <p className="text-gray-600">
              Please wait while we take you to your dashboard.
            </p>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-900 to-blue-500 overflow-hidden p-4">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Animated Background */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-80 h-80 bg-blue-400 rounded-full opacity-20 top-[-60px] left-[-60px]"
      />
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-96 h-96 bg-sky-600 rounded-full opacity-20 bottom-[-100px] right-[-100px]"
      />

      {/* Auth Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white shadow-2xl rounded-3xl max-w-md w-full p-8 overflow-hidden"
      >
        {/* Back button for forgot password flow */}
        {showForgotPassword && (
          <button
            onClick={() => {
              setShowForgotPassword(false);
              setOtpSent(false);
              setResetPasswordData({});
            }}
            className="mb-4 flex items-center text-blue-600 font-semibold hover:underline"
            disabled={isLoading}
          >
            ← Back to Login
          </button>
        )}

        {/* Toggle - Only show when not in forgot password flow */}
        {!showForgotPassword && (
          <div className="flex justify-center mb-6 space-x-4">
            <motion.button
              onClick={() => {
                setIsLogin(true);
                setOtpSent(false);
                setUseOtpLogin(false);
              }}
              whileHover={{ scale: 1.05 }}
              className={`px-6 py-2 font-semibold rounded-xl transition ${
                isLogin
                  ? "bg-sky-900 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Login
            </motion.button>
            <motion.button
              onClick={() => {
                setIsLogin(false);
                setOtpSent(false);
                setUseOtpLogin(false);
              }}
              whileHover={{ scale: 1.05 }}
              className={`px-6 py-2 font-semibold rounded-xl transition ${
                !isLogin
                  ? "bg-sky-900 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Register
            </motion.button>
          </div>
        )}

        {/* Forms */}
        <AnimatePresence>
          {showForgotPassword ? (
            // FORGOT PASSWORD FLOW
            <motion.div
              key="forgot-password"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <h2 className="text-2xl font-bold text-sky-900 text-center mb-4">
                Reset Password
              </h2>

              {!otpSent ? (
                // EMAIL INPUT FOR OTP
                <>
                  <motion.input
                    name="email"
                    whileFocus={{ scale: 1.03 }}
                    type="email"
                    placeholder="Enter your email"
                    onChange={handleResetPasswordChange}
                    className="p-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                    disabled={isLoading}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={sendForgotPasswordOtp}
                    className="bg-sky-900 text-white p-3 rounded-xl font-semibold mt-2 hover:bg-blue-800 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                    type="button"
                  >
                    {isLoading ? "Sending..." : "Send OTP"}
                  </motion.button>
                </>
              ) : !resetPasswordData.otp ? (
                // OTP VERIFICATION
                <>
                  <p className="text-sm text-gray-600">
                    We&apos;ve sent an OTP to your email
                  </p>
                  <motion.input
                    name="otp"
                    whileFocus={{ scale: 1.03 }}
                    type="text"
                    placeholder="Enter OTP"
                    onChange={handleResetPasswordChange}
                    className="p-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                    disabled={isLoading}
                  />
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>
                      {otpTimer > 0
                        ? `Resend OTP in ${otpTimer}s`
                        : "Didn't receive OTP?"}
                    </span>
                    {otpTimer === 0 && (
                      <button
                        type="button"
                        onClick={sendForgotPasswordOtp}
                        className="text-blue-600 font-semibold hover:underline"
                        disabled={isLoading}
                      >
                        Resend OTP
                      </button>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={verifyForgotPasswordOtp}
                    className="bg-sky-900 text-white p-3 rounded-xl font-semibold mt-2 hover:bg-blue-800 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                    type="button"
                  >
                    {isLoading ? "Verifying..." : "Verify OTP"}
                  </motion.button>
                </>
              ) : (
                // PASSWORD RESET
                <form onSubmit={resetPassword} className="flex flex-col gap-4">
                  <motion.input
                    name="newPassword"
                    whileFocus={{ scale: 1.03 }}
                    type="password"
                    placeholder="Enter new password"
                    onChange={handleResetPasswordChange}
                    className="p-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                    disabled={isLoading}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-sky-900 text-white p-3 rounded-xl font-semibold mt-2 hover:bg-blue-800 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "Resetting..." : "Reset Password"}
                  </motion.button>
                </form>
              )}
            </motion.div>
          ) : isLogin ? (
            // LOGIN FORM
            <motion.form
              key="login"
              onSubmit={handleLogin}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              {!useOtpLogin ? (
                <>
                  <motion.input
                    name="email"
                    whileFocus={{ scale: 1.03 }}
                    type="email"
                    placeholder="Email"
                    onChange={handleLoginChange}
                    className="p-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                    disabled={isLoading}
                  />
                  <motion.input
                    name="password"
                    whileFocus={{ scale: 1.03 }}
                    type="password"
                    placeholder="Password"
                    onChange={handleLoginChange}
                    className="p-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                    disabled={isLoading}
                  />
                  <motion.button
                    type="button"
                    onClick={() => setUseOtpLogin(true)}
                    className="text-blue-600 font-semibold hover:underline text-left"
                    disabled={isLoading}
                  >
                    Login with Number & OTP
                  </motion.button>

                  {/* Forgot Password Link */}
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-blue-600 font-semibold hover:underline text-left mt-2"
                    disabled={isLoading}
                  >
                    Forgot Password?
                  </button>
                </>
              ) : (
                <>
                  <motion.input
                    name="phone"
                    whileFocus={{ scale: 1.03 }}
                    type="tel"
                    placeholder="Phone Number"
                    onChange={handleLoginChange}
                    className="p-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                    disabled={isLoading || otpSent}
                  />
                  {otpSent && (
                    <>
                      <motion.input
                        name="otp"
                        whileFocus={{ scale: 1.03 }}
                        type="text"
                        placeholder="Enter OTP"
                        onChange={handleLoginChange}
                        className="p-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        required
                        disabled={isLoading}
                      />
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>
                          {otpTimer > 0
                            ? `Resend OTP in ${otpTimer}s`
                            : "Didn't receive OTP?"}
                        </span>
                        {otpTimer === 0 && (
                          <button
                            type="button"
                            onClick={resendOtp}
                            className="text-blue-600 font-semibold hover:underline"
                            disabled={isLoading}
                          >
                            Resend OTP
                          </button>
                        )}
                      </div>
                    </>
                  )}
                  <motion.button
                    type="button"
                    onClick={() => {
                      setUseOtpLogin(false);
                      setOtpSent(false);
                    }}
                    className="text-blue-600 font-semibold hover:underline text-left"
                    disabled={isLoading}
                  >
                    Login with Email & Password
                  </motion.button>
                </>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-sky-900 text-white p-3 rounded-xl font-semibold mt-2 hover:bg-blue-800 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Login"}
              </motion.button>
            </motion.form>
          ) : (
            // REGISTRATION FORM
            <motion.form
              key="signup"
              onSubmit={handleSignup}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <motion.input
                name="username"
                whileFocus={{ scale: 1.03 }}
                type="text"
                placeholder="Full Name"
                onChange={handleSignupChange}
                className="p-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
                disabled={isLoading}
              />
              <motion.input
                name="email"
                whileFocus={{ scale: 1.03 }}
                type="email"
                placeholder="Email"
                onChange={handleSignupChange}
                className="p-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
                disabled={isLoading}
              />
              <motion.input
                name="mobileNumber"
                whileFocus={{ scale: 1.03 }}
                type="tel"
                placeholder="Phone Number"
                onChange={handleSignupChange}
                className="p-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
                disabled={isLoading}
              />
              <motion.input
                name="college"
                whileFocus={{ scale: 1.03 }}
                type="text"
                placeholder="College Name"
                onChange={handleSignupChange}
                className="p-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
                disabled={isLoading}
              />
              <motion.input
                name="degree"
                whileFocus={{ scale: 1.03 }}
                type="text"
                placeholder="Degree"
                onChange={handleSignupChange}
                className="p-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
                disabled={isLoading}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-sky-900 text-white p-3 rounded-xl font-semibold mt-2 hover:bg-blue-800 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Register"}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
    </ProtectedRoute>
  );
};

export default AuthPage;
