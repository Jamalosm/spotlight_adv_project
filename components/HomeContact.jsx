"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

function ContactInfo({ title, value }) {
  return (
    <div
      className="
        group
        border-b
        border-white/10
        py-6
        md:py-8
        transition-all
        duration-300
      "
    >

      <div className="w-14 h-[2px] bg-gradient-to-r from-yellow-400 to-transparent rounded-full mb-4" />

      <p
        className="
          text-yellow-300
          text-sm
          uppercase
          tracking-[0.25em]
          mb-3
        "
      >
        {title}
      </p>

      <p
        className="
          text-white
          text-lg
          font-light
          tracking-[0.01em]
          break-words
        "
      >
        {value}
      </p>

    </div>
  );
}

export default function HomeContact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    try {

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: "770301f1-682c-4907-9bc1-188fca5cd1fa",

            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,

            subject: "New Website Enquiry",
          }),
        }
      );

      const data = await response.json();

      if (data.success) {

        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

      } else {

        setSuccess(false);

      }

    } catch (error) {

      console.log(error);

      setSuccess(false);

    } finally {

      setLoading(false);

    }
  };

  return (
    <section className="bg-black py-20 md:py-32 px-4 sm:px-6 text-white">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16 md:mb-24 text-left md:text-center">

          <div className="flex items-center md:justify-center gap-3 sm:gap-6 mb-6 md:mb-8">

            <div className="w-10 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-yellow-400/60" />

            <p
              className="
                text-yellow-200
                text-xs
                sm:text-base
                md:text-lg
                tracking-[0.28em]
                sm:tracking-[0.45em]
                uppercase
                font-medium
              "
            >
              Contact
            </p>

            <div className="w-10 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-yellow-400/60" />

          </div>

          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl
              font-semibold
              gradient-text
              mb-6
              md:mb-8
              tracking-[-0.05em]
              leading-[1.05]
            "
          >
            Let’s Connect
          </h1>

          <div className="flex md:justify-center">

            <p
              className="
                max-w-2xl
                text-white
                text-base
                sm:text-lg
                md:text-xl
                leading-7
                sm:leading-8
                md:leading-9
                font-light
                tracking-[0.02em]
                relative
                inline-block
              "
            >

              Whether you are looking to advertise or partner with us,
              reach out to get started.

              <span className="absolute left-0 -bottom-4 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />

            </p>

          </div>

        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* LEFT SIDE */}
          <div>

            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-semibold
                text-white
                mb-7
                md:mb-10
                tracking-[-0.03em]
              "
            >
              Leave your details
            </h2>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="
                  w-full
                  bg-[#0f0f0f]
                  border
                  border-white/10
                  rounded-2xl
                  px-4
                  sm:px-5
                  py-3.5
                  sm:py-4
                  text-white
                  placeholder:text-white/40
                  outline-none
                  focus:border-yellow-400/40
                  transition
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="
                  w-full
                  bg-[#0f0f0f]
                  border
                  border-white/10
                  rounded-2xl
                  px-4
                  sm:px-5
                  py-3.5
                  sm:py-4
                  text-white
                  placeholder:text-white/40
                  outline-none
                  focus:border-yellow-400/40
                  transition
                "
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="
                  w-full
                  bg-[#0f0f0f]
                  border
                  border-white/10
                  rounded-2xl
                  px-4
                  sm:px-5
                  py-3.5
                  sm:py-4
                  text-white
                  placeholder:text-white/40
                  outline-none
                  focus:border-yellow-400/40
                  transition
                "
              />

              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="
                  w-full
                  bg-[#0f0f0f]
                  border
                  border-white/10
                  rounded-2xl
                  px-4
                  sm:px-5
                  py-3.5
                  sm:py-4
                  text-white
                  placeholder:text-white/40
                  outline-none
                  focus:border-yellow-400/40
                  transition
                  resize-none
                "
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  bg-yellow-400
                  text-black
                  px-7
                  md:px-10
                  py-3.5
                  md:py-4
                  rounded-full
                  font-semibold
                  hover:scale-105
                  transition-all
                  duration-300
                  disabled:opacity-50
                "
              >
                {loading ? "Sending..." : "Send Enquiry →"}
              </button>

              {success && (
                <p className="text-green-400 text-sm pt-2">
                  Enquiry submitted successfully.
                </p>
              )}

            </form>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:pl-10">

            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-semibold
                text-white
                mb-7
                md:mb-10
                tracking-[-0.03em]
              "
            >
              Contact Information
            </h2>

            <div>

              <ContactInfo
                title="Email"
                value={siteConfig.email}
              />

              <ContactInfo
                title="Phone"
                value={siteConfig.phoneDisplay}
              />

              <ContactInfo
                title="WhatsApp"
                value={siteConfig.phoneDisplay}
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}