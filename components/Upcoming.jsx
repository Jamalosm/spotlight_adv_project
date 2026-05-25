import Link from "next/link";

export default function Upcoming() {
  const features = [
    "Prime Traffic Density",
    "Unobstructed Viewing",
    "Architectural Scale",
    "Exclusive Inventory",
  ];

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 overflow-hidden bg-black text-white">

      {/* Background Glow */}
   
      <div className="relative max-w-6xl mx-auto">

{/* Tag */}
<div className="flex items-center justify-center gap-3 sm:gap-6 mb-6 md:mb-8">

  <div className="w-10 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-yellow-400/60" />

  <p className="text-yellow-300 text-xs sm:text-base md:text-lg tracking-[0.28em] sm:tracking-[0.45em] uppercase font-medium">
    Upcoming Launch
  </p>

  <div className="w-10 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-yellow-400/60" />

</div>

        {/* Heading */}
        <div className="text-center">

          <h3 className="text-gray-500 text-base md:text-lg mb-4 md:mb-5 tracking-wide">
            Our First High Impact Location
          </h3>

          {/* Single Line Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6 md:mb-8">
            Launching a{" "}
            <span className="gradient-text">
              Premium Outdoor Site
            </span>
          </h2>

          {/* Styled Paragraph */}
          <div className="flex justify-center">
            <p className="max-w-3xl text-gray-400 text-base md:text-lg leading-7 md:leading-8 relative inline-block">

              We are developing a premium outdoor advertising site in one of
              Chennai’s most visible and high-traffic zones.

              {/* Underline Glow */}
              <span className="absolute left-0 -bottom-3 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />

            </p>
          </div>

        </div>

        {/* Features */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-5 md:gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                md:rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                px-6
                md:px-8
                py-7
                md:py-10
                hover:border-yellow-400/40
                hover:bg-white/[0.07]
                transition-all
                duration-500
              "
            >

              {/* Hover Glow */}
              <div className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                bg-gradient-to-br
                from-yellow-400/5
                via-transparent
                to-yellow-400/10
              " />

              {/* Content */}
              <div className="relative z-10">

                <h4 className="text-xl md:text-2xl font-semibold tracking-wide mb-4">
                  {item}
                </h4>

                <div className="w-14 h-[2px] bg-yellow-400 rounded-full group-hover:w-24 transition-all duration-500" />

              </div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-16 md:mt-24">

          <p className="text-yellow-400 tracking-[0.25em] sm:tracking-[0.35em] text-xs sm:text-sm mb-6 md:mb-8">
            LAUNCHING SOON
          </p>

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              gap-3
              px-7
              md:px-10
              py-3.5
              md:py-4
              rounded-full
              bg-yellow-400
              text-black
              font-semibold
              hover:scale-105
              hover:shadow-[0_0_40px_rgba(255,215,0,0.35)]
              transition-all
              duration-300
            "
          >
            Get Early Access →
          </Link>

        </div>

      </div>
    </section>
  );
}
