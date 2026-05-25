import Link from "next/link";

function CTACard({ title, desc, button, link }) {
  return (
    <div
      className="
        border
        border-white/10
        bg-[#0f0f0f]
        rounded-[28px]
        p-6
        md:p-10
        transition-all
        duration-300
        hover:border-yellow-400/20
        flex
        flex-col
        justify-between
      "
    >

      <div>

        {/* Small Line */}
        <div className="w-14 h-[2px] bg-gradient-to-r from-yellow-400 to-transparent rounded-full mb-6" />

        {/* Heading */}
        <h3
          className="
            text-xl
            sm:text-2xl
            md:text-3xl
            font-semibold
            text-white
            tracking-[-0.03em]
            leading-[1.2]
            mb-4
            md:mb-6
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            text-white/75
            text-sm
            sm:text-base
            md:text-lg
            leading-7
            md:leading-8
            font-light
            tracking-[0.01em]
            mb-7
            md:mb-10
            max-w-md
          "
        >
          {desc}
        </p>

      </div>

      {/* Button */}
      <Link
        href={link}
        className="
          inline-flex
          items-center
          gap-2
          bg-yellow-400
          text-black
          px-6
          md:px-7
          py-3
          rounded-full
          text-sm
          md:text-base
          font-semibold
          hover:scale-105
          transition-all
          duration-300
          w-fit
        "
      >
        {button} →
      </Link>

    </div>
  );
}

export default function CTA() {
  return (
    <section className="bg-black py-18 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 text-white">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-16 md:mb-24 text-left md:text-center">

          {/* Tag */}
          <div className="flex items-center md:justify-center gap-3 sm:gap-6 mb-6 md:mb-8">

            <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-yellow-400/60" />

            <p
              className="
                text-yellow-200
                text-sm
                md:text-base
                tracking-[0.26em]
                sm:tracking-[0.4em]
                uppercase
                font-medium
              "
            >
              Get Started
            </p>

            <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-yellow-400/60" />

          </div>

          {/* Main Heading */}
          <h2
            className="
              text-2xl
              sm:text-3xl
              md:text-5xl
              font-semibold
              gradient-text
              tracking-[-0.05em]
              leading-[1.1]
              mb-6
              md:mb-8
            "
          >
            Built for Advertisers & Property Owners
          </h2>

          {/* Paragraph */}
          <div className="flex md:justify-center">

            <p
              className="
                max-w-2xl
                text-white
                text-sm
                sm:text-base
                md:text-lg
                leading-7
                md:leading-8
                font-light
                tracking-[0.02em]
                relative
                inline-block
              "
            >

              Whether you want to promote your brand or monetize your
              property, Spotlight OOH helps maximize visibility and value.

              {/* Underline */}
              <span className="absolute left-0 -bottom-4 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />

            </p>

          </div>

        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-8 items-stretch">

          {/* Advertisers */}
          <CTACard
            title="Ready to Own the Spotlight?"
            desc="Get your brand in front of Chennai’s high-traffic roads with premium outdoor visibility."
            button="Get Pricing"
            link="/advertisers"
          />

          {/* Property Owners */}
          <CTACard
            title="Monetise Your Property"
            desc="Turn your building or land into a revenue-generating advertising asset."
            button="Partner With Us"
            link="/property"
          />

        </div>

      </div>

    </section>
  );
}
