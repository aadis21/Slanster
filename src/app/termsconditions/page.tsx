"use client";
import React from "react";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-0 py-20  md:grid-cols-6 gap-12 animate-fadeIn  text-white min-h-screen">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
        Terms & Conditions
      </h1>

      {/* Intro */}
      <p className="text-center text-lg text-gray-300 max-w-4xl mx-auto mb-12">
        These Terms &amp; Conditions (“Terms”) govern your access to and use of
        our website, products, and services. By accessing or using our services,
        you agree to be bound by these Terms. If you do not agree, please do not
        use our services.
      </p>

      {/* 1 */}
      <div className="bg-gradient-to-r from-green-700 to-green-400 w-fit px-4 py-2 rounded-t-md mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          1. Acceptance of Terms
        </h2>
      </div>
      <div className="space-y-4 mb-10">
        <div className="flex items-start space-x-3">
          <span className="text-2xl">👉</span>
          <p className="text-lg text-gray-300">
            By using our website or services, you confirm that you have read,
            understood, and agree to these Terms and our Privacy Policy.
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="bg-gradient-to-r from-green-700 to-green-400 w-fit px-4 py-2 rounded-t-md mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">2. Changes to Terms</h2>
      </div>
      <div className="space-y-4 mb-10">
        <div className="flex items-start space-x-3">
          <span className="text-2xl">👉</span>
          <p className="text-lg text-gray-300">
            We may update these Terms at any time. Changes will be effective
            when posted on this page. Continued use of the services signifies
            acceptance of the updated Terms.
          </p>
        </div>
      </div>

      {/* 3 */}
      <div className="bg-gradient-to-r from-green-700 to-green-400 w-fit px-4 py-2 rounded-t-md mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          3. Eligibility & Accounts
        </h2>
      </div>
      <div className="space-y-4 mb-10">
        <div className="flex items-start space-x-3">
          <span className="text-2xl">👉</span>
          <p className="text-lg text-gray-300">
            You must be at least the age of majority in your jurisdiction to use
            our services. You’re responsible for maintaining the confidentiality
            of your account credentials and all activities under your account.
          </p>
        </div>
      </div>

      {/* Example More Sections */}
      <div className="bg-gradient-to-r from-green-700 to-green-400 w-fit px-4 py-2 rounded-t-md mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">4. Acceptable Use</h2>
      </div>
      <div className="space-y-4 mb-10">
        {[
          "Do not misuse, disrupt, or interfere with the services.",
          "Do not upload or transmit harmful, illegal, or infringing content.",
          "Do not attempt to reverse engineer, probe, or circumvent security.",
        ].map((t, i) => (
          <div key={i} className="flex items-start space-x-3">
            <span className="text-2xl">👉</span>
            <p className="text-lg text-gray-300">{t}</p>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="bg-gradient-to-r from-green-700 to-green-400 w-fit px-4 py-2 rounded-t-md mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
      </div>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <span className="text-2xl">👉</span>
          <p className="text-lg text-gray-300">
            If you have any questions about these Terms, please contact us at
            <span className="font-semibold text-green-300">
              {" "}
              info@example.com
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
