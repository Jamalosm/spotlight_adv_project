"use client";

import { useState } from "react";

function ContactCard({ title, value, link, buttonText }) {
  return (
    <a
      href={link}
      target="_blank"
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-7
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-yellow-400/30
        hover:bg-white/[0.05]
        hover:shadow-[0_0_40px_rgba(255,215,0,0.08)]
      "
    >

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.08),transparent_40%)]" />

      <div className="relative z-10">

        <p className="text-yellow-400 text-sm tracking-[0.2em] uppercase mb-3">
          {title}
        </p>

        <h3 className="text-white text-lg md:text-xl font-semibold mb-5 break-words">
          {value}
        </h3>

        <div className="flex items-center gap-2 text-gray-400 group-hover:text-yellow-300 transition">

          <span className="text-sm">{buttonText}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"
            />
          </svg>

        </div>

      </div>

    </a>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `New Enquiry:%0A
Name: ${form.name}%0A
Email: ${form.email}%0A
Phone: ${form.phone}%0A
Message: ${form.message}`;

    window.open(`https://wa.me/918525867890?text=${text}`, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-black py-28 px-6 md:px-10 text-white">

      {/* DARK BACKGROUND */}
      <div className="absolute inset-0 bg-black" />

      {/* Soft Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/[0.02] blur-[180px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-24">

          {/* Small Tag */}
          <div className="flex items-center justify-center gap-6 mb-8">

            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-white/20" />

          

            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-white/20" />

          </div>

          {/* Main Heading */}
          {/* HERO */}
<div className="relative text-center mb-32 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 flex justify-center">
    <div className="w-[700px] h-[700px] bg-yellow-500/5 blur-[180px] rounded-full" />
  </div>

  <div className="relative z-10">

    {/* Top Label */}
    <div className="flex items-center justify-center gap-5 mb-10">

      <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent" />

      <p
        className="
          text-yellow-400
          text-[11px]
          md:text-sm
          tracking-[0.5em]
          uppercase
          font-semibold
        "
      >
        Contact Spotlight OOH
      </p>

      <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent via-yellow-500/70 to-transparent" />

    </div>

    {/* Main Heading */}
    <h1
      className="
        text-5xl
        sm:text-6xl
        md:text-7xl
        font-bold
        tracking-[-0.08em]
        leading-[0.92]
        mb-10
      "
    >

      <span className="block text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.08)]">
        Let’s Build
      </span>

      <span className="block bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,215,0,0.18)]">
        Visibility Together
      </span>

    </h1>

    {/* Description */}
    <div className="flex justify-center">

      <p
        className="
          max-w-4xl
          text-gray-400
          text-lg
          md:text-2xl
          leading-10
          font-light
          tracking-[0.01em]
          relative
        "
      >
        Connect with us for advertising opportunities, partnerships,
        premium billboard placements, or launch collaborations across Chennai.

        {/* Premium Underline */}
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-40 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />

      </p>

    </div>

  </div>
</div>
</div>
        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">

          <ContactCard
            title="Email Us"
            value="contact@spotlightooh.com"
            link="mailto:contact@spotlightooh.com"
            buttonText="Send Email"
          />

          <ContactCard
            title="Call Us"
            value="+91 85258 67890"
            link="tel:+918525867890"
            buttonText="Call Now"
          />

          <ContactCard
            title="WhatsApp"
            value="+91 85258 67890"
            link="https://wa.me/918525867890"
            buttonText="Chat on WhatsApp"
          />

        </div>

        {/* FORM SECTION */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            p-8
            md:p-14
            max-w-4xl
            mx-auto
            transition-all
            duration-500
            hover:border-yellow-400/20
            hover:bg-white/[0.05]
          "
        >

          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.06),transparent_45%)]" />

          <div className="relative z-10">

            {/* Heading */}
            <div className="text-center mb-12">

              <h2
                className="
                  text-3xl
                  md:text-5xl
                  font-semibold
                  text-white
                  tracking-[-0.04em]
                  mb-5
                "
              >
                Leave your details
              </h2>

              <p
                className="
                  text-gray-400
                  text-lg
                  leading-8
                  max-w-2xl
                  mx-auto
                  font-light
                "
              >
                We’ll get back to you within 24 hours.
              </p>

            </div>

           {/* FORM */}
<form
id="enquiry-form"
  onSubmit={handleSubmit}
  className="space-y-6"
>

  {/* ROW 1 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <input
      type="text"
      placeholder="Your Name"
      className="
        w-full
        h-16
        px-6
        rounded-2xl
        bg-black/80
        border
        border-white/10
        text-white
        placeholder:text-gray-500
        outline-none
        transition-all
        duration-300
        focus:border-yellow-400/50
        focus:shadow-[0_0_25px_rgba(255,215,0,0.08)]
        hover:border-white/20
      "
      onChange={(e) =>
        setForm({ ...form, name: e.target.value })
      }
    />

    <input
      type="email"
      placeholder="Email Address"
      className="
        w-full
        h-16
        px-6
        rounded-2xl
        bg-black/80
        border
        border-white/10
        text-white
        placeholder:text-gray-500
        outline-none
        transition-all
        duration-300
        focus:border-yellow-400/50
        focus:shadow-[0_0_25px_rgba(255,215,0,0.08)]
        hover:border-white/20
      "
      onChange={(e) =>
        setForm({ ...form, email: e.target.value })
      }
    />

  </div>

  {/* ROW 2 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <input
      type="text"
      placeholder="Phone Number"
      className="
        w-full
        h-16
        px-6
        rounded-2xl
        bg-black/80
        border
        border-white/10
        text-white
        placeholder:text-gray-500
        outline-none
        transition-all
        duration-300
        focus:border-yellow-400/50
        focus:shadow-[0_0_25px_rgba(255,215,0,0.08)]
        hover:border-white/20
      "
      onChange={(e) =>
        setForm({ ...form, phone: e.target.value })
      }
    />

    <input
      type="text"
      placeholder="Company / Brand"
      className="
        w-full
        h-16
        px-6
        rounded-2xl
        bg-black/80
        border
        border-white/10
        text-white
        placeholder:text-gray-500
        outline-none
        transition-all
        duration-300
        focus:border-yellow-400/50
        focus:shadow-[0_0_25px_rgba(255,215,0,0.08)]
        hover:border-white/20
      "
    />

  </div>

  {/* MESSAGE */}
  <textarea
    rows={7}
    placeholder="Tell us about your campaign requirements..."
    className="
      w-full
      p-6
      rounded-3xl
      bg-black/80
      border
      border-white/10
      text-white
      placeholder:text-gray-500
      outline-none
      resize-none
      transition-all
      duration-300
      focus:border-yellow-400/50
      focus:shadow-[0_0_25px_rgba(255,215,0,0.08)]
      hover:border-white/20
    "
    onChange={(e) =>
      setForm({ ...form, message: e.target.value })
    }
  />

  {/* BUTTON */}
  <button
    className="
      group
      relative
      overflow-hidden
      w-full
      h-16
      rounded-2xl
      bg-[#ffcc00]
      text-black
      font-semibold
      text-lg
      transition-all
      duration-300
      hover:scale-[1.01]
      hover:shadow-[0_0_40px_rgba(255,204,0,0.25)]
    "
  >

    {/* Shine Effect */}
    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

    <span className="relative z-10 flex items-center justify-center gap-3">

      Send Enquiry

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"
        />
      </svg>

    </span>

  </button>

</form>

          </div>

        </div>

      </div>

    </section>
  );
}