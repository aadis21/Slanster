// components/RegistrationModal.tsx
"use client";

import React from "react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({
  isOpen,
  onClose,
}: RegistrationModalProps) {
  if (!isOpen) return null;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Submitted (demo only – no server connected).");
  };

  const label = "block text-gray-800 font-medium mb-2";
  const input =
    "w-full rounded-xl border border-gray-300 px-3 py-2.5 text-[15px] text-gray-900 placeholder:text-gray-400 " +
    "focus:outline-none focus:ring-2 focus:ring-[#024a71]";
  const hint = "text-xs text-gray-500 mt-1";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Modal content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-[#024a71] text-white px-6 py-4 rounded-t-2xl flex justify-between items-center">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">Registration</h1>
            <p className="text-white/85 text-sm">
              Fill your details to apply for our programs.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:opacity-80 text-lg font-bold"
          >
            ✕
          </button>
        </header>

        {/* Form section */}
        <section className="px-6 py-6 md:p-8">
          <form
            onSubmit={onSubmit}
            encType="multipart/form-data"
            className="space-y-6"
          >
            {/* Full Name */}
            <div>
              <label className={label}>
                Full Name <span className="text-red-600">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="First"
                  className={input}
                />
                <input
                  id="middleName"
                  name="middleName"
                  placeholder="Middle (optional)"
                  className={input}
                />
                <input
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Last"
                  className={input}
                />
              </div>
            </div>

            {/* Email & Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className={label}>
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className={input}
                />
              </div>
              <div>
                <label htmlFor="mobile" className={label}>
                  Mobile Number <span className="text-red-600">*</span>
                </label>
                <input
                  id="mobile"
                  type="tel"
                  name="mobile"
                  required
                  placeholder="+91 98765 43210"
                  className={input}
                />
                <p className={hint}>WhatsApp-enabled number preferred.</p>
              </div>
            </div>

            {/* Degree & Stream */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="degree" className={label}>
                  Degree <span className="text-red-600">*</span>
                </label>
                <select id="degree" name="degree" required className={input}>
                  <option value="">Select degree</option>
                  <option>B.Tech</option>
                  <option>B.Com</option>
                  <option>BBA</option>
                  <option>B.Sc</option>
                  <option>BA</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="stream" className={label}>
                  Stream / Specialization{" "}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  id="stream"
                  name="stream"
                  required
                  placeholder="e.g., Computer Science"
                  className={input}
                />
              </div>
            </div>

            {/* Year & College */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="year" className={label}>
                  Graduation Year <span className="text-red-600">*</span>
                </label>
                <select id="year" name="year" required className={input}>
                  <option value="">Select year</option>
                  {[2024, 2025, 2026, 2027, 2028, 2029, 2030].map((yr) => (
                    <option key={yr}>{yr}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="college" className={label}>
                  College / University Name{" "}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  id="college"
                  name="college"
                  required
                  placeholder="e.g., Gurugram University"
                  className={input}
                />
              </div>
            </div>

            {/* Location & CV */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="city" className={label}>
                  Location / City <span className="text-red-600">*</span>
                </label>
                <input
                  id="city"
                  name="city"
                  required
                  placeholder="e.g., Mohali"
                  className={input}
                />
              </div>
              <div>
                <label htmlFor="cv" className={label}>
                  Upload CV (Optional)
                </label>
                <input
                  id="cv"
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  className="block w-full text-[15px] text-gray-800 file:mr-3 file:rounded-lg file:border-0 file:bg-[#024a71] file:px-3 file:py-2 file:text-white file:text-sm file:font-medium hover:file:opacity-95"
                />
                <p className={hint}>PDF/DOC up to 5MB.</p>
              </div>
            </div>

            {/* Training Preference */}
            <div>
              <span className={label}>
                Training Preference <span className="text-red-600">*</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  {
                    id: "consulting",
                    label: "Tech Consulting",
                    value: "tech_consulting",
                  },
                  { id: "python", label: "Python", value: "python" },
                  { id: "both", label: "Both", value: "both" },
                  { id: "others", label: "Others", value: "others" },
                ].map((opt) => (
                  <label
                    key={opt.id}
                    htmlFor={opt.id}
                    className="flex items-center gap-2 rounded-xl border px-3 py-2 cursor-pointer hover:bg-gray-50"
                  >
                    <input
                      id={opt.id}
                      type="radio"
                      name="preference"
                      value={opt.value}
                      required
                      className="accent-[#024a71]"
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Comments */}
            <div>
              <label htmlFor="comments" className={label}>
                Comments / Queries (Optional)
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={4}
                placeholder="Share any questions…"
                className={input + " resize-y"}
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="reset"
                className="px-4 py-2 rounded-xl border text-gray-800 hover:bg-gray-50"
              >
                Clear
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#024a71] text-white font-medium shadow hover:opacity-95"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
