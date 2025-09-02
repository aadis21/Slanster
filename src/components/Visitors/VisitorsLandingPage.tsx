"use client";
import React from "react";

const VisitorsLandingPage = () => {
  return (
    <section className="min-h-[80vh] w-full bg-[#0E1523] text-white flex items-center">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-12 md:grid-cols-2">
        
        {/* Left: Head + Subhead */}
        <div>
          <h1 className="text-[34px] font-extrabold leading-tight tracking-tight sm:text-[38px]">
            Scale your growth,
            <br />
            <span className="text-white/95">the Slanster way.</span>
          </h1>

          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/75">
            A minimal, conversion-focused landing built for speed. Launch fast,
            capture qualified leads, and turn visitors into customers—without
            touching code.
          </p>

          <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
            <span className="inline-block rounded-full bg-emerald-500/15 px-3 py-1 font-medium text-emerald-300 ring-1 ring-emerald-400/30">
              Fast setup
            </span>
            <span className="inline-block rounded-full bg-emerald-500/15 px-3 py-1 font-medium text-emerald-300 ring-1 ring-emerald-400/30">
              Clean UI
            </span>
            <span className="inline-block rounded-full bg-emerald-500/15 px-3 py-1 font-medium text-emerald-300 ring-1 ring-emerald-400/30">
              Mobile-first
            </span>
          </div>

          {/* subtle dots */}
          <div className="pointer-events-none mt-10 hidden h-36 w-32 select-none md:block opacity-30">
            <svg viewBox="0 0 160 180" className="h-full w-full" aria-hidden="true">
              <defs>
                <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="1.5" fill="#22c55e" />
                </pattern>
              </defs>
              <rect width="160" height="180" fill="url(#dots)" />
            </svg>
          </div>
        </div>

        {/* Right: Registration Card (compact + scroll) */}
        <div className="mx-auto w-full max-w-md md:max-w-lg">
          <div className="rounded-2xl bg-[#F9FAFB] p-6 shadow-2xl ring-1 ring-black/10">
            <div className="mb-5">
              <h2 className="text-xl font-bold text-gray-900">Registration</h2>
              <p className="mt-1 text-[13px] text-gray-600">
                Fill the details below to get started. Our team will reach out shortly.
              </p>
            </div>

            {/* fixed height + scroll (size won't grow) */}
            <div className="max-h-[480px] overflow-y-auto custom-scroll pr-1">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4 text-[14px]">
                {/* Full Name */}
                <div>
                  <label className="block text-[12px] font-semibold text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="First, Middle, Last"
                    className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                {/* Grid fields (compact two-column on md+) */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-[12px] font-semibold text-gray-700">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-gray-700">Mobile Number</label>
                    <input
                      type="tel"
                      placeholder="+91-XXXXXXXXXX"
                      className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-gray-700">Degree</label>
                    <input
                      type="text"
                      placeholder="e.g., B.Tech"
                      className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-gray-700">Stream / Specialization</label>
                    <input
                      type="text"
                      placeholder="e.g., CSE"
                      className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-gray-700">Year / Graduation</label>
                    <input
                      type="text"
                      placeholder="e.g., 2025"
                      className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-gray-700">Location / City</label>
                    <input
                      type="text"
                      placeholder="City name"
                      className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-gray-700">College / University</label>
                  <input
                    type="text"
                    placeholder="Institution name"
                    className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-gray-700">Upload CV (Optional)</label>
                  <input
                    type="file"
                    className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm file:mr-4 file:rounded-md file:border-0 file:bg-emerald-500 file:px-3 file:py-2 file:text-white hover:file:bg-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-gray-700">Training Preferred</label>
                  <select className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2">
                    <option value="">Select</option>
                    <option value="tech">Tech Consulting</option>
                    <option value="python">Python</option>
                    <option value="both">Both</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-gray-700">Comments / Queries (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Your message"
                    className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-emerald-500 px-4 py-2.5 font-semibold text-white transition hover:bg-emerald-600 active:scale-[0.99]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* slim custom scrollbar (Slanster look) */}
      <style jsx>{`
        .custom-scroll::-webkit-scrollbar { width: 6px; }
        .custom-scroll::-webkit-scrollbar-track { background: #eaeaea; border-radius: 8px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #10b981; border-radius: 8px; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: #059669; }
      `}</style>
    </section>
  );
};

export default VisitorsLandingPage;
