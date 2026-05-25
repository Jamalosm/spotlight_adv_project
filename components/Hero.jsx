import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-black py-20 sm:py-24 md:py-32 px-4 sm:px-6 text-white overflow-hidden">

      <div className="max-w-6xl mx-auto section-container">

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
            High-Impact Outdoor Media
          </p>

          <div className="w-10 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-yellow-400/60" />

        </div>

        {/* Heading */}
        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-7xl
            font-semibold
            leading-[1]
            tracking-[-0.04em]
            sm:tracking-[-0.05em]
            text-left
            md:text-center
            mb-7
            md:mb-10
          "
        >
          The Best Brands Live in the{" "}
          <span className="gradient-text">
            Spotlight
          </span>
        </h1>

        {/* Styled Paragraph */}
        <div className="flex md:justify-center">

          <p
            className="
              mt-2
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
              text-left
              md:text-center
              relative
              inline-block
            "
          >

            Reach Chennai on the move with strategic OOH placements
            that deliver maximum visibility and strong brand recall.

            {/* Underline */}
            <span className="absolute left-0 -bottom-4 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />

          </p>

        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-14 text-left md:text-center">

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
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
          >
            Enquire Now →
          </Link>

        </div>

      </div>

    </section>
  );
}
