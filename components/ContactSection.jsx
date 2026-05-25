import WhatsAppLeadForm from "@/components/forms/WhatsAppLeadForm";
import { siteConfig } from "@/lib/site";

const contactInputClass = `
  h-12
  sm:h-14
  px-4
  sm:px-5
  bg-black/50
  border
  border-white/10
  rounded-2xl
  text-white
  placeholder:text-gray-500
  focus:outline-none
  focus:border-yellow-400/40
  focus:ring-2
  focus:ring-yellow-400/10
  transition-all
  duration-300
`;

const contactFields = [
  {
    id: "contact-name",
    name: "name",
    label: "Your Name",
    messageLabel: "Name",
    placeholder: "Your Name",
    className: contactInputClass,
  },
  {
    id: "contact-email",
    name: "email",
    label: "Email Address",
    messageLabel: "Email",
    placeholder: "Email Address",
    type: "email",
    className: contactInputClass,
  },
  {
    id: "contact-phone",
    name: "phone",
    label: "Phone Number",
    messageLabel: "Phone",
    placeholder: "Phone Number",
    type: "tel",
    className: contactInputClass,
  },
  {
    id: "contact-company",
    name: "company",
    label: "Company / Brand",
    messageLabel: "Company / Brand",
    placeholder: "Company / Brand",
    required: false,
    className: contactInputClass,
  },
  {
    id: "contact-message",
    name: "message",
    label: "Tell us about your campaign requirements",
    messageLabel: "Message",
    placeholder: "Tell us about your campaign requirements...",
    rows: 6,
    wrapperClassName: "md:col-span-2",
    className: `
      w-full
      p-4
      sm:p-5
      bg-black/50
      border
      border-white/10
      rounded-2xl
      text-white
      placeholder:text-gray-500
      focus:outline-none
      focus:border-yellow-400/40
      focus:ring-2
      focus:ring-yellow-400/10
      transition-all
      duration-300
      resize-none
    `,
  },
];

function ContactCard({ title, value, link, buttonText }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        relative
        overflow-hidden
        rounded-[22px]
        md:rounded-[28px]
        border
        border-white/10
        bg-gradient-to-b
        from-[#111111]
        to-[#0a0a0a]
        p-6
        md:p-7
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-yellow-400/30
        hover:shadow-[0_0_60px_rgba(250,204,21,0.08)]
      "
    >

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.10),transparent_45%)]" />

      {/* Shine */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-white/[0.03] via-transparent to-yellow-400/[0.03]" />

      <div className="relative z-10">

        {/* Top Line */}
        <div className="w-14 h-[2px] rounded-full bg-gradient-to-r from-yellow-400 to-transparent mb-6" />

        {/* Title */}
        <p
          className="
            text-yellow-400
            text-sm
            font-medium
            tracking-[0.18em]
            uppercase
            mb-3
          "
        >
          {title}
        </p>

        {/* Value */}
        <p
          className="
            text-white
            text-base
            sm:text-lg
            md:text-xl
            font-semibold
            leading-relaxed
            mb-6
            md:mb-8
            break-words
          "
        >
          {value}
        </p>

        {/* CTA */}
        <div
          className="
            inline-flex
            items-center
            gap-2
            text-gray-400
            text-sm
            font-medium
            group-hover:text-yellow-300
            transition-all
            duration-300
          "
        >
          <span>{buttonText}</span>

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
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28 px-4 sm:px-5 md:px-10">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-[320px] md:w-[800px] md:h-[800px] bg-yellow-400/5 blur-[120px] md:blur-[220px] rounded-full" />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HERO */}
        <div className="mb-16 md:mb-24 text-center">

          {/* Small Tag */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 mb-6 md:mb-8">

            <div className="w-9 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-yellow-400/60" />

            <p
              className="
                text-yellow-400
                text-xs
                sm:text-sm
                tracking-[0.24em]
                sm:tracking-[0.45em]
                uppercase
                font-medium
              "
            >
              Contact Spotlight OOH
            </p>

            <div className="w-9 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-yellow-400/60" />

          </div>

          {/* Heading */}
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-semibold
              tracking-[-0.06em]
              leading-[1]
              mb-6
              md:mb-8
            "
          >

            <span className="text-white">
              Let’s Build
            </span>

            <br />

            <span className="text-yellow-400">
              Visibility Together
            </span>

          </h1>

          {/* Paragraph */}
          <p
            className="
              text-gray-400
              text-base
              sm:text-lg
              md:text-xl
              max-w-3xl
              mx-auto
              leading-7
              sm:leading-8
              md:leading-9
              font-light
            "
          >
            Connect with us for advertising opportunities,
            partnerships, premium billboard placements, or launch
            collaborations across Chennai.
          </p>

        </div>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-16 md:mb-24">

          <ContactCard
            title="Email"
            value={siteConfig.email}
            link={`mailto:${siteConfig.email}`}
            buttonText="Send Email"
          />

          <ContactCard
            title="Phone"
            value={siteConfig.phoneDisplay}
            link={`tel:${siteConfig.phoneHref}`}
            buttonText="Call Now"
          />

          <ContactCard
            title="WhatsApp"
            value={siteConfig.phoneDisplay}
            link={`https://wa.me/${siteConfig.whatsappNumber}`}
            buttonText="Start Chat"
          />

        </div>

        {/* FORM CARD */}
        <div
          className="
            group
            relative
            overflow-hidden
            rounded-[28px]
            md:rounded-[36px]
            border
            border-white/10
            bg-gradient-to-b
            from-[#111111]
            to-[#080808]
            p-5
            sm:p-7
            md:p-12
            max-w-4xl
            mx-auto
            backdrop-blur-2xl
            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            transition-all
            duration-500
            hover:border-yellow-400/20
            hover:shadow-[0_0_80px_rgba(250,204,21,0.08)]
          "
        >

          {/* Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.10),transparent_50%)]" />

          <div className="relative z-10">

            {/* Top Line */}
            <div className="w-16 md:w-20 h-[2px] rounded-full bg-gradient-to-r from-yellow-400 to-transparent mb-6 md:mb-8 mx-auto" />

            {/* Heading */}
            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-5xl
                font-semibold
                text-white
                tracking-[-0.04em]
                text-center
                mb-4
                md:mb-5
              "
            >
              Start Your Campaign
            </h2>

            {/* Subtitle */}
            <p
              className="
                text-gray-400
                text-sm
                sm:text-base
                md:text-lg
                text-center
                leading-7
                md:leading-8
                max-w-2xl
                mx-auto
                mb-8
                md:mb-12
              "
            >
              Share your requirements and our team will connect
              with you to discuss premium outdoor advertising
              opportunities.
            </p>

            {/* FORM */}
            <WhatsAppLeadForm
              fields={contactFields}
              messagePrefix="New Enquiry"
              formClassName="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
              buttonClassName="
                md:col-span-2
                group/button
                relative
                overflow-hidden
                h-12
                sm:h-14
                rounded-2xl
                bg-yellow-400
                text-black
                font-semibold
                text-base
                transition-all
                duration-300
                hover:scale-[1.01]
                hover:bg-yellow-300
                hover:shadow-[0_0_40px_rgba(250,204,21,0.30)]
              "
              buttonContent={
                <>
                  <span className="absolute inset-0 -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Send Enquiry

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>

                  </span>
                </>
              }
            />

          </div>

        </div>

      </div>
    </section>
  );
}
