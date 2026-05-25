function ServiceCard({ title, desc }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        border-b
        border-white/10
        py-8
        md:py-10
        transition-all
        duration-500
      "
    >

      {/* Hover Line */}
      <div
        className="
          absolute
          left-0
          bottom-0
          h-[1px]
          w-0
          bg-yellow-400
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-8">

        {/* Left */}
        <div className="md:w-1/3">

          {/* Small Line */}
          <div className="w-16 h-[2px] bg-gradient-to-r from-yellow-400 to-transparent rounded-full mb-5" />

          <h3
            className="
              text-yellow-300
              text-xl
              md:text-2xl
              font-semibold
              tracking-[-0.02em]
            "
          >
            {title}
          </h3>

        </div>

        {/* Right */}
        <div className="md:w-2/3">

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

export default function WhatWeDo() {
  return (
    <section className="bg-black py-20 md:py-28 px-4 sm:px-6 md:px-10 text-white">

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
              What We Do
            </p>

            <div className="w-10 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-yellow-400/60" />

          </div>

          {/* Main Heading */}
          <h2
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
            Outdoor Advertising, Done Right
          </h2>

          {/* Paragraph */}
          <div className="flex md:justify-center">

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

              We identify, develop, and manage high-visibility outdoor advertising
              spaces across Chennai.

              {/* Underline */}
              <span className="absolute left-0 -bottom-4 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />

            </p>

          </div>

        </div>

        {/* Services */}
        <div className="max-w-5xl mx-auto">

          <ServiceCard
            title="High Visibility Locations"
            desc="Carefully selected placements across high-traffic junctions to maximize exposure and brand recall."
          />

          <ServiceCard
            title="Premium Formats"
            desc="LED displays, backlit hoardings, and large-format billboards designed for impactful outdoor visibility."
          />

          <ServiceCard
            title="Flawless Execution"
            desc="We ensure campaigns run smoothly with professional installation, monitoring, and maintenance."
          />

        </div>

      </div>

    </section>
  );
}
