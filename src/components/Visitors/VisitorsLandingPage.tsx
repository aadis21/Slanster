"use client";
import React from "react";

const VisitorsLandingPage = () => {
  return (
    <section className="min-h-screen w-full bg-[#0f1720] text-white flex items-center">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 lg:gap-20">
        {/* Left Section */}
        <div className="relative">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Get more visitors,
            <br /> <span className="text-white/90">get more sales.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within just a few
            minutes and grow your reach with ease.
          </p>

          <a
            href="#start"
            className="group mt-8 inline-flex items-center text-base font-semibold text-emerald-400"
          >
            Start a free trial
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Right Section (Form Card with Scroll) */}
        <div className="mx-auto w-full max-w-lg">
          <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-black/5 max-h-[500px] overflow-y-auto">
            <h2 className="mb-6 text-2xl font-extrabold text-gray-900">
              Registration Form
            </h2>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4 text-sm"
            >
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="First, Middle, Last"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="+91-XXXXXXXXXX"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Degree
                </label>
                <input
                  type="text"
                  placeholder="e.g. B.Tech, B.Com"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Stream / Specialization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Computer Science, Finance"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Year of Study / Graduation Year
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2025"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  College / University Name
                </label>
                <input
                  type="text"
                  placeholder="Your Institution"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Location / City
                </label>
                <input
                  type="text"
                  placeholder="City Name"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Upload CV (Optional)
                </label>
                <input
                  type="file"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm file:mr-4 file:rounded-md file:border-0 file:bg-emerald-500 file:px-3 file:py-2 file:text-white hover:file:bg-emerald-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Training Preferred
                </label>
                <select className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2">
                  <option value="">Select</option>
                  <option value="tech">Tech Consulting</option>
                  <option value="python">Python</option>
                  <option value="both">Both</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Comments / Queries (Optional)
                </label>
                <textarea
                  placeholder="Your message"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-500 px-4 py-2.5 font-semibold text-white transition hover:bg-emerald-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorsLandingPage;
