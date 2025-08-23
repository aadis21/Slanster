"use client";
import React, { useState } from "react";
import { X } from "lucide-react"; // 👈 cross icon import

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    pin: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.contact ||
      !formData.address ||
      !formData.pin ||
      !formData.message
    ) {
      alert("Please fill all fields!");
      return;
    }
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-400/20 bg-opacity-50 z-50">
      <div className="relative bg-white rounded-2xl p-8 w-[90%] max-w-lg shadow-2xl transform transition-all animate-fadeIn">
        {/* ❌ Cross Button (Top Right) */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-red-500 transition transform hover:rotate-90"
        >
          <X size={24} />
        </button>

        {success ? (
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-green-600">
              ✅ Successfully Sent!
            </h2>
            <p className="text-gray-600 mt-2">We will contact you soon.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-6 text-[#0F395F]">
              Let&apos;s Connect
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0F395F]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0F395F]"
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0F395F]"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0F395F]"
              />
              <input
                type="text"
                name="pin"
                placeholder="Pin"
                value={formData.pin}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0F395F]"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0F395F]"
              />
              <div className="flex justify-center gap-4">
                <button
                  type="submit"
                  className="cursor-pointer hover:scale-105 bg-[#0F395F] text-white px-6 py-2 rounded-lg hover:bg-[#0c2f4d] transition"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="cursor-pointer hover:scale-105 bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition"
                >
                  Close
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
