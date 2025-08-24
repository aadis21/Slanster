"use client";
import React from "react";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-0 py-20  md:grid-cols-6 gap-12 animate-fadeIn  text-white min-h-screen">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
        Privacy Policy
      </h1>

      {/* Intro */}
    <p className="text-center text-lg text-gray-300 max-w-4xl mx-auto mb-12">
  At Slanster, we value the trust of our clients, users, and visitors. 
  This Privacy Policy explains the information we collect, how we use and safeguard it, 
  and the rights you have regarding your personal data.
</p>


      {/* Section 1 */}
      <div className="bg-gradient-to-r from-green-700 to-green-400 w-fit px-4 py-2 rounded-t-md mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          1. Information We Collect
        </h2>
      </div>
      <div className="space-y-6 mb-10">
        <div className="flex items-start space-x-3">
          <span className="text-2xl">👉</span>
          <p className="text-lg text-gray-300">
            <span className="font-bold text-green-300">
              1.1 Personal Information :
            </span>{" "}
            When you contact us or use our services, we may collect personal
            information such as your name, email address, phone number, and
            company details.
          </p>
        </div>

        <div className="flex items-start space-x-3">
          <span className="text-2xl">👉</span>
          <p className="text-lg text-gray-300">
            <span className="font-bold text-green-300">
              1.2 Non-Personal Information :
            </span>{" "}
            We collect non-identifiable data such as IP addresses, browser
            types, and website usage patterns to enhance user experience.
          </p>
        </div>

        <div className="flex items-start space-x-3">
          <span className="text-2xl">👉</span>
          <p className="text-lg text-gray-300">
            <span className="font-bold text-green-300">
              1.3 Cookies & Tracking Technologies :
            </span>{" "}
            We use cookies to analyze site traffic, improve site performance,
            and offer personalized content. You can manage cookie preferences
            through your browser settings.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-gradient-to-r from-green-700 to-green-400 w-fit px-4 py-2 rounded-t-md mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          2. How We Use Your Information
        </h2>
      </div>
      <div className="space-y-4 mb-10">
        {[
          "To provide, operate, and improve our services.",
          "To respond to inquiries, provide support, and communicate with you.",
          "To personalize your experience and deliver relevant content.",
          "To monitor usage and detect, prevent, or address technical issues.",
        ].map((t, i) => (
          <div key={i} className="flex items-start space-x-3">
            <span className="text-2xl">👉</span>
            <p className="text-lg text-gray-300">{t}</p>
          </div>
        ))}
      </div>

      {/* Section 3 */}
      <div className="bg-gradient-to-r from-green-700 to-green-400 w-fit px-4 py-2 rounded-t-md mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">3. Data Protection</h2>
      </div>
      <div className="space-y-4 mb-10">
        <div className="flex items-start space-x-3">
          <span className="text-2xl">👉</span>
          <p className="text-lg text-gray-300">
            We implement reasonable technical and organizational measures to
            protect your personal data against unauthorized access, loss, or
            misuse.
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div className="bg-gradient-to-r from-green-700 to-green-400 w-fit px-4 py-2 rounded-t-md mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          4. Sharing of Information
        </h2>
      </div>
      <div className="space-y-4 mb-10">
        {[
          "We do not sell or rent your personal information.",
          "We may share your data with trusted partners who help us operate our services, under strict confidentiality agreements.",
          "We may disclose information when required by law or to protect our rights and safety.",
        ].map((t, i) => (
          <div key={i} className="flex items-start space-x-3">
            <span className="text-2xl">👉</span>
            <p className="text-lg text-gray-300">{t}</p>
          </div>
        ))}
      </div>

      {/* Section 5 */}
      <div className="bg-gradient-to-r from-green-700 to-green-400 w-fit px-4 py-2 rounded-t-md mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">5. Your Rights</h2>
      </div>
      <div className="space-y-4 mb-10">
        {[
          "Access, update, or delete your personal information.",
          "Opt out of marketing communications at any time.",
          "Restrict or object to certain processing activities.",
          "Request a copy of the personal data we hold about you.",
        ].map((t, i) => (
          <div key={i} className="flex items-start space-x-3">
            <span className="text-2xl">👉</span>
            <p className="text-lg text-gray-300">{t}</p>
          </div>
        ))}
      </div>

      {/* Section 6 */}
      <div className="bg-gradient-to-r from-green-700 to-green-400 w-fit px-4 py-2 rounded-t-md mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          6. Changes to This Policy
        </h2>
      </div>
      <div className="space-y-4 mb-10">
        <div className="flex items-start space-x-3">
          <span className="text-2xl">👉</span>
          <p className="text-lg text-gray-300">
            We may update this Privacy Policy from time to time. The revised
            version will be effective once posted on this page.
          </p>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gradient-to-r from-green-700 to-green-400 w-fit px-4 py-2 rounded-t-md mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
      </div>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <span className="text-2xl">👉</span>
          <p className="text-lg text-gray-300">
            If you have any questions about this Privacy Policy, please contact
            us at
            <span className="font-semibold text-green-300">
              {" "}
              privacy@example.com
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
