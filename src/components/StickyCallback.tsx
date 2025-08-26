"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PhoneCall, X } from "lucide-react";

export default function StickyCallback() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Vertical Tab */}
      <button
        aria-label="Get a Call Back"
        onClick={() => setOpen(true)}
        className="fixed right-0 top-1/3 z-[60] rounded-l-md bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="px-2 py-3 flex items-center gap-2 rotate-180">
          <PhoneCall className="h-4 w-4" />
          <span className="text-sm font-medium tracking-wide">Get a Call Back</span>
        </span>
      </button>

      {/* Slide-in Drawer */}
      <div
        className={`fixed inset-0 z-[70] transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <aside
          className={`absolute right-0 top-0 h-full w-[90%] max-w-[360px] bg-white shadow-2xl transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
          role="dialog"
          aria-modal="true"
          aria-label="Request a call back"
        >
          <div className="p-4 border-b flex items-center justify-between">
            <h3 className="text-lg font-semibold">Request a Call Back</h3>
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="rounded-md p-1 hover:bg-slate-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-4 space-y-4">
            {/* Quick actions */}
            <div className="space-y-2">
              <a
                href="tel:+910000000000" // ← put your real number here
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50"
              >
                <PhoneCall className="h-4 w-4" />
                Call us now
              </a>

              <Link
                href="/contact" // ← or your contact page route
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                onClick={() => setOpen(false)}
              >
                Go to Contact Page
              </Link>

              <a
                href="https://wa.me/910000000000" // ← optional WhatsApp link
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-slate-50"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Lightweight “request a callback” form (opens mail client) */}
            <CallbackMiniForm />
          </div>

          <p className="px-4 pb-4 text-xs text-slate-500">
            We typically respond within 15–30 minutes during business hours.
          </p>
        </aside>
      </div>
    </>
  );
}

function CallbackMiniForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Creates a mailto: draft including form info. Replace email with yours.
  const mailto = `mailto:hello@yourdomain.com?subject=Call%20Back%20Request&body=Name:%20${encodeURIComponent(
    name
  )}%0APhone:%20${encodeURIComponent(phone)}`;

  const disabled = !name.trim() || !phone.trim();

  return (
    <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-1">
        <label className="text-sm font-medium">Name</label>
        <input
          type="text"
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Phone</label>
        <input
          type="tel"
          placeholder="+91 XXXXXXXXXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <a
        href={disabled ? "#" : mailto}
        aria-disabled={disabled}
        className={`inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white
        ${disabled ? "bg-slate-300 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700"}`}
        onClick={(e) => disabled && e.preventDefault()}
      >
        Request Call Back
      </a>
    </form>
  );
}
