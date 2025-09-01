"use client";

import { Inter } from "next/font/google";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const ContactPage = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (formData.phone.length < 8) newErrors.phone = "Enter a valid phone number";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully 🚀");
      setFormData({
        lastName: "",
        firstName: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div
      className={`min-h-screen bg-white py-10 md:px-6 px-0 md:py-16 flex items-center justify-center text-white ${inter.className}`}
    >
      <div className="w-[95%] md:w-[90%] max-w-8xl  mx-auto bg-[#1e3a5f] p-4 md:p-8 rounded-2xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LEFT FORM */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Get in <span className="text-blue-400">touch</span>
            </h2>
            <p className="text-gray-300 mb-8 text-sm md:text-base">
              Fill the form — our team will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded bg-[#2b4a75] placeholder-gray-400 text-white focus:outline-none"
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-sm">{errors.lastName}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded bg-[#2b4a75] placeholder-gray-400 text-white focus:outline-none"
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-sm">{errors.firstName}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded bg-[#2b4a75] placeholder-gray-400 text-white focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded bg-[#2b4a75] placeholder-gray-400 text-white focus:outline-none"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm">{errors.phone}</p>
                )}
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded bg-[#2b4a75] placeholder-gray-400 text-white focus:outline-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded font-medium flex items-center justify-center gap-2 cursor-pointer" 
              >
                Send it to the moon 🚀
              </button>
            </form>
          </div>

          {/* RIGHT PANEL (simplified) */}
          <aside className="order-first md:order-none">
            <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-blue-500/30 via-blue-300/20 to-cyan-300/20 border border-white/10 p-5 md:p-6">
              <h3 className="text-xl md:text-2xl font-semibold">
                Friendly support, fast responses
              </h3>
              <p className="text-white/80 text-sm mt-2 mb-6">
                We usually reply in{" "}
                <span className="font-semibold text-white">under 6 hours</span>.
              </p>

              {/* CONTACT INFO */}
              <div className="grid grid-cols-1 gap-4">
                {/* Support */}
                <div className="rounded-xl bg-white/10 border border-white/10 p-4">
                  <h4 className="text-base font-semibold text-blue-100">
                    Support
                  </h4>
                  <p className="text-white/80 text-xs mt-1">
                    Our friendly team is here to help.
                  </p>
                  <a
                    href="mailto:support@slanster.com"
                    className="text-blue-200 hover:underline text-sm mt-2 inline-block break-all"
                  >
                    support@slanster.com
                  </a>
                </div>

                {/* Phone */}
                <div className="rounded-xl bg-white/10 border border-white/10 p-4">
                  <h4 className="text-base font-semibold text-blue-100">
                    Phone
                  </h4>
                  <p className="text-white/80 text-xs mt-1">Mon–Fri, 8am–5pm</p>
                  <a
                    href="tel:+14353457655"
                    className="text-blue-200 hover:underline text-sm mt-2 inline-block"
                  >
                    +1 (435) 345-7655
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
