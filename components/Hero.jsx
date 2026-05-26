import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
         {/* MOBILE IMAGE */}
  <div className="absolute inset-0 md:hidden">

        <Image
          src="/spotlight-bg.jpg"
          alt="Spotlight OOH"
          fill
          priority
          className="
            object-cover
            object-[68%_center]

            md:object-[center_25%]
            lg:object-center

            scale-105
            md:scale-100
          "
        />
</div>

{/* LAPTOP IMAGE */}
  <div className="hidden md:block absolute inset-0">

    <Image
      src="/spotlight-laptop-view.png"
      alt="Spotlight Laptop"
      fill
      priority
      quality={100}
      className="
        object-cover
        object-center
      "
    />

  </div>


        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/35 md:bg-black/25" />

        {/* PREMIUM CINEMATIC GRADIENT */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black
            via-black/55
            md:via-black/35
            to-transparent
          "
        />

        {/* EXTRA MOBILE OVERLAY */}
        <div className="absolute inset-0 md:hidden bg-black/20" />

      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          min-h-screen
          flex
          items-center

          pt-24
          md:pt-0
        "
      >

        {/* CONTAINER */}
        <div
          className="
            w-full
            max-w-7xl
            mx-auto

            px-5
            sm:px-8
            md:px-16
            lg:px-24
          "
        >

          {/* TEXT AREA */}
          <div className="max-w-[320px] sm:max-w-xl lg:max-w-2xl">

            {/* TAG */}
            <div className="flex items-center gap-3 mb-5">

              <div className="w-8 sm:w-10 h-[1px] bg-yellow-400" />

              <p
                className="
                  text-yellow-200
                  uppercase
                  tracking-[0.28em]
                  text-[10px]
                  sm:text-sm
                  font-medium
                "
              >
                High-Impact Outdoor Media
              </p>

            </div>

            {/* HEADING */}
            <h1
              className="
                text-[48px]
                leading-[0.92]
                tracking-[-0.05em]
                font-semibold
                mb-5

                sm:text-6xl
                md:text-7xl
                lg:text-[92px]
                lg:leading-[0.9]
              "
            >
              The Best
              <br />
              Brands Live
              <br />
              in the{" "}
              <span className="text-yellow-400">
                Spotlight
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                text-white/85
                text-[16px]
                leading-8
                font-light
                mb-8

                sm:text-lg
                md:text-xl
                lg:text-2xl
                lg:leading-10

                max-w-xl
              "
            >
              Reach Chennai on the move with strategic
              OOH placements that deliver maximum
              visibility and strong brand recall.
            </p>

            {/* BUTTON */}
            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center

                bg-yellow-400
                text-black

                px-7
                py-3.5

                md:px-8
                md:py-4

                rounded-full

                text-base
                md:text-lg

                font-semibold

                hover:scale-105
                transition-all
                duration-300

                shadow-xl
                shadow-yellow-500/20
              "
            >
              Enquire Now →
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}