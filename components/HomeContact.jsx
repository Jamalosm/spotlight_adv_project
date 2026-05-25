import WhatsAppLeadForm from "@/components/forms/WhatsAppLeadForm";
import { siteConfig } from "@/lib/site";

const homeContactFields = [
  {
    id: "home-contact-name",
    name: "name",
    label: "Name",
    messageLabel: "Name",
    placeholder: "Name",
    className: `
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
    `,
  },
  {
    id: "home-contact-email",
    name: "email",
    label: "Email",
    messageLabel: "Email",
    placeholder: "Email",
    type: "email",
    className: `
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
    `,
  },
  {
    id: "home-contact-phone",
    name: "phone",
    label: "Phone Number",
    messageLabel: "Phone",
    placeholder: "Phone Number",
    type: "tel",
    className: `
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
    `,
  },
  {
    id: "home-contact-message",
    name: "message",
    label: "Message",
    messageLabel: "Message",
    placeholder: "Message",
    rows: 5,
    className: `
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
    `,
  },
];

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

      {/* Small Line */}
      <div className="w-14 h-[2px] bg-gradient-to-r from-yellow-400 to-transparent rounded-full mb-4" />

      {/* Title */}
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

      {/* Value */}
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
  return (
    <section className="bg-black py-20 md:py-32 px-4 sm:px-6 text-white">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16 md:mb-24 text-left md:text-center">

          {/* Tag */}
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

          {/* Main Heading */}
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

          {/* Paragraph */}
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

              {/* Underline */}
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

            {/* Form */}
            <WhatsAppLeadForm
              fields={homeContactFields}
              messagePrefix="New Enquiry"
              formClassName="space-y-4 sm:space-y-6"
              buttonLabel="Send Enquiry →"
              buttonClassName="
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
              "
            />

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
