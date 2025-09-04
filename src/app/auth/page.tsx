"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [useOtpLogin, setUseOtpLogin] = useState(false);
  const router = useRouter();

  const handleRedirect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/slansterdashboard");
  };

  // Form variants for sliding animation
  const formVariants = {
    hidden: { x: 300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-900 to-blue-500 overflow-hidden p-4">
      {/* Animated Background Shapes */}
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
        {/* Top Toggle Buttons */}
        <div className="flex justify-center mb-6 space-x-4">
          <motion.button
            onClick={() => setIsLogin(true)}
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
            onClick={() => setIsLogin(false)}
            whileHover={{ scale: 1.05 }}
            className={`px-6 py-2 font-semibold rounded-xl transition ${
              !isLogin
                ? "bg-sky-900 text-white shadow-lg"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Sign Up
          </motion.button>
        </div>

        {/* Animated Form Switch */}
        <AnimatePresence >
          {isLogin ? (
            <motion.form
              key="login"
              onSubmit={handleRedirect}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              {!useOtpLogin && (
                <>
                  <motion.input
                    whileFocus={{ scale: 1.03 }}
                    type="text"
                    placeholder="User ID"
                    className="p-3 rounded-xl border border-gray-300 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                  <motion.input
                    whileFocus={{ scale: 1.03 }}
                    type="password"
                    placeholder="Password"
                    className="p-3 rounded-xl border border-gray-300 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                  <motion.button
                    type="button"
                    onClick={() => setUseOtpLogin(true)}
                    className="text-blue-600 font-semibold hover:underline text-left"
                  >
                    Login with Number & OTP
                  </motion.button>
                </>
              )}
              {useOtpLogin && (
                <>
                  <motion.input
                    whileFocus={{ scale: 1.03 }}
                    type="tel"
                    placeholder="Phone Number"
                    className="p-3 rounded-xl border border-gray-300 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                  <motion.input
                    whileFocus={{ scale: 1.03 }}
                    type="text"
                    placeholder="OTP"
                    className="p-3 rounded-xl border border-gray-300 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                  <motion.button
                    type="button"
                    onClick={() => setUseOtpLogin(false)}
                    className="text-blue-600 font-semibold hover:underline text-left"
                  >
                    Login with User ID & Password
                  </motion.button>
                </>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-sky-900 text-white p-3 rounded-xl font-semibold mt-2 hover:bg-blue-800 transition shadow-lg"
                type="submit"
              >
                Login
              </motion.button>
            </motion.form>
          ) : (
            <motion.form
              key="signup"
              onSubmit={handleRedirect}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <motion.input
                whileFocus={{ scale: 1.03 }}
                type="text"
                placeholder="Full Name"
                className="p-3 rounded-xl border border-gray-300 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <motion.input
                whileFocus={{ scale: 1.03 }}
                type="email"
                placeholder="Email"
                className="p-3 rounded-xl border border-gray-300 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <motion.input
                whileFocus={{ scale: 1.03 }}
                type="tel"
                placeholder="Phone Number"
                className="p-3 rounded-xl border border-gray-300 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <motion.input
                whileFocus={{ scale: 1.03 }}
                type="text"
                placeholder="OTP"
                className="p-3 rounded-xl border border-gray-300 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <motion.input
                whileFocus={{ scale: 1.03 }}
                type="text"
                placeholder="College Name"
                className="p-3 rounded-xl border border-gray-300 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-sky-900 text-white p-3 rounded-xl font-semibold mt-2 hover:bg-blue-800 transition shadow-lg"
                type="submit"
              >
                Sign Up
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AuthPage;
