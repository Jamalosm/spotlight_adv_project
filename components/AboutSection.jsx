export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28 px-4 sm:px-6 md:px-10 text-white">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-[320px] md:w-[700px] md:h-[700px] bg-yellow-500/[0.03] blur-[120px] md:blur-[220px]" />

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">

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
              About Us
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
              leading-[1]
              md:whitespace-nowrap
            "
          >
            Built to Put Brands in the Spotlight
          </h1>

          {/* Styled Paragraph */}
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
                tracking-[0.02em]
                font-light
                relative
                inline-block
              "
            >

              Spotlight OOH was built to bring a more focused and high-impact
              approach to outdoor advertising.

              {/* Underline */}
              <span className="absolute left-0 -bottom-4 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />

            </p>

          </div>

        </div>

        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">

          <p
            className="
              text-white
              text-lg
              md:text-xl
              leading-8
              md:leading-9
              tracking-[0.02em]
              font-light
            "
          >
            We believe strong visibility comes from the right combination
            of location, format, and execution.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-8 mb-20 md:mb-28">

          {/* Card 1 */}
          <div
            className="
              rounded-[24px]
              md:rounded-[30px]
              border
              border-white/10
              bg-[#0f0f0f]
              p-7
              md:p-10
              transition-all
              duration-300
              hover:border-yellow-400/20
            "
          >

            <div className="w-14 h-[2px] bg-gradient-to-r from-yellow-400 to-transparent rounded-full mb-6" />

            <h2
              className="
                text-yellow-300
                font-semibold
                mb-5
                text-xl
                md:text-2xl
                tracking-[0.02em]
              "
            >
              Strategic Locations
            </h2>

            <p
              className="
                text-white
                leading-8
                text-base
                md:text-lg
                font-light
                tracking-[0.01em]
              "
            >
              High-traffic areas where your brand is seen clearly and consistently.
            </p>

          </div>

          {/* Card 2 */}
          <div
            className="
              rounded-[24px]
              md:rounded-[30px]
              border
              border-white/10
              bg-[#0f0f0f]
              p-7
              md:p-10
              transition-all
              duration-300
              hover:border-yellow-400/20
            "
          >

            <div className="w-14 h-[2px] bg-gradient-to-r from-yellow-400 to-transparent rounded-full mb-6" />

            <h2
              className="
                text-yellow-300
                font-semibold
                mb-5
                text-xl
                md:text-2xl
                tracking-[0.02em]
              "
            >
              Premium Formats
            </h2>

            <p
              className="
                text-white
                leading-8
                text-base
                md:text-lg
                font-light
                tracking-[0.01em]
              "
            >
              Clean, high-quality structures designed for maximum visual impact.
            </p>

          </div>

          {/* Card 3 */}
          <div
            className="
              rounded-[24px]
              md:rounded-[30px]
              border
              border-white/10
              bg-[#0f0f0f]
              p-7
              md:p-10
              transition-all
              duration-300
              hover:border-yellow-400/20
            "
          >

            <div className="w-14 h-[2px] bg-gradient-to-r from-yellow-400 to-transparent rounded-full mb-6" />

            <h2
              className="
                text-yellow-300
                font-semibold
                mb-5
                text-xl
                md:text-2xl
                tracking-[0.02em]
              "
            >
              Precise Execution
            </h2>

            <p
              className="
                text-white
                leading-8
                text-base
                md:text-lg
                font-light
                tracking-[0.01em]
              "
            >
              Optimized placements and viewing angles for uninterrupted visibility.
            </p>

          </div>

        </div>

        {/* Principles */}
        <div className="mb-20 md:mb-28">

          <div className="text-center mb-10 md:mb-14">

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-semibold
                text-white
                mb-6
                tracking-[-0.04em]
              "
            >
              Our Principles
            </h2>

            <div className="flex justify-center">
              <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-8 max-w-5xl mx-auto">

            {/* Card */}
            <div
              className="
                rounded-[24px]
                md:rounded-[30px]
                border
                border-white/10
                bg-[#0f0f0f]
                p-7
                md:p-10
                transition-all
                duration-300
                hover:border-yellow-400/20
              "
            >

              <div className="w-14 h-[2px] bg-gradient-to-r from-yellow-400 to-transparent rounded-full mb-6" />

              <h2
                className="
                  text-yellow-300
                  font-semibold
                  mb-5
                  text-xl
                  md:text-2xl
                  tracking-[0.02em]
                "
              >
                Integrity
              </h2>

              <p
                className="
                  text-white
                  leading-8
                  text-base
                  md:text-lg
                  font-light
                  tracking-[0.01em]
                "
              >
                All legal permissions and compliance handled professionally.
              </p>

            </div>

            {/* Card */}
            <div
              className="
                rounded-[24px]
                md:rounded-[30px]
                border
                border-white/10
                bg-[#0f0f0f]
                p-7
                md:p-10
                transition-all
                duration-300
                hover:border-yellow-400/20
              "
            >

              <div className="w-14 h-[2px] bg-gradient-to-r from-yellow-400 to-transparent rounded-full mb-6" />

              <h2
                className="
                  text-yellow-300
                  font-semibold
                  mb-5
                  text-xl
                  md:text-2xl
                  tracking-[0.02em]
                "
              >
                Selective Development
              </h2>

              <p
                className="
                  text-white
                  leading-8
                  text-base
                  md:text-lg
                  font-light
                  tracking-[0.01em]
                "
              >
                Only high-impact locations with clear and unobstructed visibility.
              </p>

            </div>

          </div>

        </div>

        {/* Closing */}
        <div className="text-center max-w-3xl mx-auto">

          <p
            className="
              text-xl
              sm:text-2xl
              md:text-3xl
              text-white
              font-light
              leading-[1.6]
              tracking-[-0.01em]
            "
          >
            Our goal is simple —
            <span className="gradient-text font-medium">
              {" "}to create outdoor media that gets seen and remembered.
            </span>
          </p>

        </div>

      </div>

    </section>
  );
}
