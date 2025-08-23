"use client";

import React, { useState } from "react";
import { Phone, Mail, Headphones } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    street: "",
    city: "",
    postcode: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Contact name is required";
    if (!formData.street.trim()) newErrors.street = "Street is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.postcode.trim()) newErrors.postcode = "Postcode is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length < 8) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully 🚀");
      setFormData({
        name: "",
        street: "",
        city: "",
        postcode: "",
        phone: "",
        email: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className={`w-full min-h-screen bg-white ${inter.className}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 relative">
        {/* LEFT SIDE FORM */}
        <div className="p-6 sm:p-8 lg:p-12">
          <h2
            className={`${inter.className} text-start font-normal text-gray-900 
              text-[16px] sm:text-[24px] md:text-[32px] lg:text-[46px] xl:text-[46px] 2xl:text-[52px] mb-4`}
          >
            Get in <span className="text-blue-600">touch</span>
          </h2>
          <p className="text-gray-600 mb-10 max-w-md text-sm sm:text-base text-center md:text-left">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div>
              <input
                type="text"
                placeholder="Contact name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border-b border-gray-400 focus:border-blue-500 focus:ring-0 py-2 placeholder-gray-500 text-black outline-none text-sm sm:text-base"
              />

              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Street"
                value={formData.street}
                onChange={(e) =>
                  setFormData({ ...formData, street: e.target.value })
                }
                className="w-full border-b border-gray-400 focus:border-blue-500 focus:ring-0 py-2 placeholder-gray-500 text-black outline-none text-sm sm:text-base"
              />
              {errors.street && (
                <p className="text-red-500 text-sm">{errors.street}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="w-full border-b border-gray-400 focus:border-blue-500 focus:ring-0 py-2 placeholder-gray-500 text-black outline-none text-sm sm:text-base"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Postcode"
                  value={formData.postcode}
                  onChange={(e) =>
                    setFormData({ ...formData, postcode: e.target.value })
                  }
                  className="w-full border-b border-gray-400 focus:border-blue-500 focus:ring-0 py-2 placeholder-gray-500 text-black outline-none text-sm sm:text-base"
                />
                {errors.postcode && (
                  <p className="text-red-500 text-sm">{errors.postcode}</p>
                )}
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Contact Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full border-b border-gray-400 focus:border-blue-500 focus:ring-0 py-2 placeholder-gray-500 text-black outline-none text-sm sm:text-base"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border-b border-gray-400 focus:border-blue-500 focus:ring-0 py-2 placeholder-gray-500 text-black outline-none text-sm sm:text-base"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Let’s talk about your idea"
                rows={3}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full border-b border-gray-400 focus:border-blue-500 focus:ring-0 py-2 placeholder-gray-500 text-black outline-none text-sm sm:text-base"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-medium text-sm sm:text-base"
            >
              SUBMIT
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-10 text-gray-800 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-black" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>111 111 111</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-black" />
              <div>
                <p className="font-semibold">E-MAIL</p>
                <p className="text-pink-500">support@slanster.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Headphones size={18} className="text-black" />
              <div>
                <p className="font-semibold">HELPDESK</p>
                <a href="https://helpdesk.com" className="text-blue-500">
                  https://helpdesk.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE MAP */}
        <div className="relative md:bg-blue-500  flex items-center justify-center md:px-0 px-4 md:pr-10 pr-0">
          {/* Blue Block Background */}
          <div className="absolute w-full h-full -z-10"></div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.558407265768!2d14.42076!3d50.08804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94eab7c3d9f1%3A0x7b9c9c3cddc3f1f9!2sPrague!5e0!3m2!1sen!2scz!4v1672123456789"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="relative z-10 w-[90%] sm:w-[95%] md:w-[90%] lg:w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[600px] xl:h-[750px] my-8  shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
