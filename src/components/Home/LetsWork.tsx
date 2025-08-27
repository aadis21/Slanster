"use client";

import { Inter } from "next/font/google";
import Image from "next/image";
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
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (formData.phone.length < 8)
      newErrors.phone = "Enter a valid phone number";
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
      className={`min-h-screen bg-white flex items-center justify-center text-white ${inter.className}`}
    >
      {/* GRID */}
      <div className="w-[95%] md:w-[90%] max-w-7xl mx-auto flex flex-col md:flex-row bg-[#1e3a5f] p-6 rounded-2xl shadow-lg gap-8">
        {/* LEFT FORM */}
        <div className="w-full md:basis-2/5 flex flex-col justify-center px-2 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get in <span className="text-blue-400">touch</span>
          </h2>
          <p className="text-gray-300 mb-8 text-sm md:text-base">
            Fill up the form our team will get back to you within 24 Hours.
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
              className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded font-medium flex items-center justify-center gap-2"
            >
              Send it to the moon 🚀
            </button>
          </form>
        </div>

        {/* MIDDLE MAP */}
        <div className="w-full md:basis-2/5 flex justify-center items-center px-2 md:px-4">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.558407265768!2d14.42076!3d50.08804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94eab7c3d9f1%3A0x7b9c9c3cddc3f1f9!2sPrague!5e0!3m2!1sen!2scz!4v1672123456789"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full h-64 md:h-full rounded-lg shadow-lg"
          /> */}

          <Image
            src="/getintouch.webp"
            alt="No image Found"
            width={400}
            height={400}
            className="rounded-xl"
          />
        </div>

        {/* RIGHT INFO */}
        <div className="w-full md:basis-1/5 flex flex-col justify-start md:justify-center items-start space-y-8 px-2 md:px-6">
          {/* Support */}
          <div className="text-start border-b border-gray-600 pb-4 w-full">
            <h3 className="text-lg md:text-xl font-bold text-blue-400">
              Support
            </h3>
            <p className="text-gray-300 mt-1 text-sm md:text-base">
              Our friendly team is here to help.
            </p>
            <a
              href="mailto:support@slanster.com"
              className="text-blue-400 block mt-2 hover:underline text-sm md:text-base"
            >
              support@slanster.com
            </a>
          </div>

          {/* Sales */}
          <div className="text-start border-b border-gray-600 pb-4 w-full">
            <h3 className="text-lg md:text-xl font-bold text-blue-400">
              Sales
            </h3>
            <p className="text-gray-300 mt-1 text-sm md:text-base">
              Questions or queries? Get in touch!
            </p>
            <a
              href="mailto:sales@sans.com"
              className="text-blue-400 block mt-2 hover:underline text-sm md:text-base"
            >
              sales@sans.com
            </a>
          </div>

          {/* Phone */}
          <div className="text-start w-full">
            <h3 className="text-lg md:text-xl font-bold text-blue-400">
              Phone
            </h3>
            <p className="text-gray-300 mt-1 text-sm md:text-base">
              Mon-Fri from 8am to 5pm.
            </p>
            <a
              href="tel:+14353457655"
              className="text-blue-400 block mt-2 hover:underline text-sm md:text-base"
            >
              +1 (435) 345-7655
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
