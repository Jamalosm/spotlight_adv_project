import WhatsAppLeadForm from "@/components/forms/WhatsAppLeadForm";

const propertyFieldClass = `
  w-full
  bg-black
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
`;

const propertyFields = [
  {
    id: "property-owner-name",
    name: "name",
    label: "Owner Name",
    messageLabel: "Name",
    placeholder: "Owner Name",
    className: propertyFieldClass,
  },
  {
    id: "property-email",
    name: "email",
    label: "Email",
    messageLabel: "Email",
    placeholder: "Email",
    type: "email",
    className: propertyFieldClass,
  },
  {
    id: "property-phone",
    name: "phone",
    label: "Phone Number",
    messageLabel: "Phone",
    placeholder: "Phone Number",
    type: "tel",
    className: propertyFieldClass,
  },
  {
    id: "property-details",
    name: "message",
    label: "Property Details",
    messageLabel: "Details",
    placeholder: "Property Details",
    rows: 5,
    className: `${propertyFieldClass} resize-none`,
  },
];

function HorizontalCard({ number, title, desc }) {
  return (
    <div
      className="
        group
        border-b
        border-white/10
        py-8
        md:py-10
        transition-all
        duration-300
      "
    >

      <div className="grid md:grid-cols-[120px_1fr_2fr] gap-4 md:gap-8 items-start">

        {/* Number */}
        <div
          className="
            text-yellow-400/40
            text-4xl
            md:text-5xl
            font-semibold
            tracking-[-0.05em]
          "
        >
          {number}
        </div>

        {/* Title */}
        <div>

          {/* Small Line */}
          <div className="w-14 h-[2px] bg-gradient-to-r from-yellow-400 to-transparent rounded-full mb-5" />

          <h3
            className="
              text-yellow-300
              text-xl
              md:text-2xl
              md:text-3xl
              font-semibold
              tracking-[-0.03em]
              leading-[1.2]
            "
          >
            {title}
          </h3>

        </div>

        {/* Description */}
        <div>

          <p
            className="
              text-white
              text-base
              md:text-lg
              leading-7
              md:leading-9
              font-light
              tracking-[0.01em]
              max-w-2xl
            "
          >
            {desc}
          </p>

        </div>

      </div>

    </div>
  );
}

export default function PropertySection() {
  return (
    <section className="bg-black py-20 md:py-28 px-4 sm:px-6 md:px-10 text-white">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20 md:mb-32">

          {/* Tag */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-6 md:mb-8">

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
              Property Owners
            </p>

            <div className="w-10 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-yellow-400/60" />

          </div>

          {/* Heading */}
          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl
              font-semibold
              gradient-text
              tracking-[-0.05em]
              leading-[1.05]
              mb-6
              md:mb-8
            "
          >
            Monetise Your Property
          </h1>

          {/* Paragraph */}
          <div className="flex justify-center">

            <p
              className="
                max-w-3xl
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

              Turn your building or land into a steady long-term
              source of income through premium outdoor advertising.

              {/* Underline */}
              <span className="absolute left-0 -bottom-4 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />

            </p>

          </div>

        </div>

        {/* SECTION */}
        <div className="mb-20 md:mb-36">

          <HorizontalCard
            number="01"
            title="Steady Income"
            desc="Generate consistent monthly income from unused building or land space through premium outdoor advertising."
          />

          <HorizontalCard
            number="02"
            title="We Handle Everything"
            desc="From permissions and installation to campaign management and maintenance, our team manages the complete process."
          />

          <HorizontalCard
            number="03"
            title="Premium Structures"
            desc="Clean, professionally designed advertising structures that integrate naturally with your property."
          />

          <HorizontalCard
            number="04"
            title="High Visibility Potential"
            desc="Properties near high-traffic roads and open viewing angles offer stronger advertising value and revenue opportunity."
          />

        </div>

        {/* CTA */}
        <div className="text-center mb-16 md:mb-24">

          <p
            className="
              text-xl
              sm:text-2xl
              md:text-4xl
              text-white
              font-light
              leading-[1.5]
              tracking-[-0.02em]
            "
          >
            Your property could become a
            <span className="gradient-text font-medium">
              {" "}long-term revenue asset.
            </span>
          </p>

        </div>

        {/* FORM */}
        <div
          className="
            max-w-4xl
            mx-auto
            border
            border-white/10
            bg-[#0f0f0f]
            rounded-[28px]
            md:rounded-[36px]
            p-5
            sm:p-8
            md:p-12
          "
        >

          {/* Heading */}
          <div className="mb-8 md:mb-12 text-left md:text-center">

            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-semibold
                text-white
                mb-5
                tracking-[-0.03em]
              "
            >
              Share Your Property Details
            </h2>

            <p
              className="
                text-white/70
                text-base
                md:text-lg
                font-light
                tracking-[0.02em]
              "
            >
              Our team will review your property and contact you shortly.
            </p>

          </div>

          {/* Form */}
          <WhatsAppLeadForm
            fields={propertyFields}
            messagePrefix="Property Lead"
            formClassName="space-y-4 sm:space-y-6"
            buttonLabel="Submit via WhatsApp →"
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

      </div>

    </section>
  );
}
