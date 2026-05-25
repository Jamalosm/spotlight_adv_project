import Link from "next/link";

function TimelineItem({ title, desc }) {
  return (
    <div className="relative pl-10 sm:pl-14 pb-12 md:pb-16 group">

      {/* Vertical Line */}
      <div className="absolute left-3 sm:left-4 top-0 w-[1px] h-full bg-gradient-to-b from-yellow-400/30 via-white/10 to-transparent" />

      {/* Premium Dot */}
      <div
        className="
          absolute
          left-0
          top-1
          w-6
          h-6
          sm:w-8
          sm:h-8
          rounded-full
          border
          border-yellow-400/30
          bg-yellow-400/10
          backdrop-blur-xl
          shadow-[0_0_30px_rgba(250,204,21,0.15)]
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:border-yellow-300/60
          group-hover:bg-yellow-300/10
        "
      />

      {/* Content */}
      <div>

        {/* Small Accent Line */}
        <div className="w-12 sm:w-16 h-[2px] bg-gradient-to-r from-yellow-400 via-yellow-200/60 to-transparent rounded-full mb-4 sm:mb-5" />

        {/* Title */}
        <h3
          className="
            text-yellow-300
            text-xl
            md:text-2xl
            font-semibold
            mb-4
            tracking-[-0.02em]
            leading-tight
            group-hover:text-yellow-50
            transition-all
            duration-300
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            text-gray-300
            text-base
            md:text-lg
            leading-7
            md:leading-8
            font-light
            tracking-[0.01em]
            max-w-2xl
          "
        >
          {desc}
        </p>

      </div>

    </div>
  );
}

function SectionHeading({ title, align = "left" }) {
  return (
    <div
      className={`
        mb-12
        md:mb-20
        ${align === "left" ? "text-left" : ""}
        ${align === "center" ? "text-center" : ""}
        ${align === "right" ? "text-right" : ""}
      `}
    >

      {/* Small Tag */}
      <p
        className="
          text-yellow-300
          uppercase
          tracking-[0.26em]
          sm:tracking-[0.4em]
          text-sm
          mb-5
          font-medium
        "
      >
        Spotlight OOH
      </p>

      {/* Heading */}
      <h2
        className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-semibold
          text-white
          tracking-[-0.05em]
          leading-[1.1]
          mb-6
        "
      >
        {title}
      </h2>

      {/* Accent Line */}
      <div
        className={`
          flex
          ${align === "left" ? "justify-start" : ""}
          ${align === "center" ? "justify-center" : ""}
          ${align === "right" ? "justify-end" : ""}
        `}
      >
        <div className="w-32 h-[2px] bg-gradient-to-r from-yellow-400 via-yellow-200/70 to-transparent rounded-full" />
      </div>

    </div>
  );
}

export default function AdvertisersSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28 px-4 sm:px-6 md:px-10 text-white">

      {/* Premium Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-[320px] md:w-[700px] md:h-[700px] bg-yellow-500/5 blur-[120px] md:blur-[180px]" />

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      <div className="relative max-w-7xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20 md:mb-36">

          {/* Top Tag */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 mb-6 md:mb-8">

            <div className="w-9 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-yellow-400/60" />

            <p
              className="
                text-yellow-300
                text-xs
                sm:text-sm
                md:text-base
                tracking-[0.24em]
                sm:tracking-[0.45em]
                uppercase
                font-medium
              "
            >
              Premium Outdoor Media
            </p>

            <div className="w-9 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-yellow-400/60" />

          </div>

          {/* Main Heading */}
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
              Outdoor Advertising
            </span>

            <br />

            <span className="text-yellow-400 gradient-text">
              Designed for Visibility
            </span>
          </h1>

          {/* Paragraph */}
          <div className="flex justify-center">

            <p
              className="
                max-w-3xl
                text-gray-300
                text-base
                sm:text-lg
                md:text-xl
                leading-7
                sm:leading-8
                md:leading-9
                font-light
                tracking-[0.02em]
                relative
              "
            >
              High-impact outdoor advertising placements crafted to give
              brands stronger visibility, premium positioning, and
              consistent audience attention across Chennai.

              {/* Underline */}
              <span className="absolute left-0 -bottom-5 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

            </p>

          </div>

        </div>

        {/* SECTION 1 */}
        <div className="mb-24 md:mb-40 relative">

          {/* Background Text */}
          <div
            className="
              absolute
              -top-20
              left-0
              text-[130px]
              font-bold
              text-yellow-400/[0.06]
              tracking-[-0.08em]
              pointer-events-none
              hidden lg:block
            "
          >
            VISIBILITY
          </div>

          <SectionHeading
            title="Why Outdoor Advertising Matters"
            align="left"
          />

          <div className="max-w-4xl">

            <TimelineItem
              title="Daily Visibility"
              desc="Reach your audience where they spend most of their time — on roads, signals, and high-traffic locations."
            />

            <TimelineItem
              title="Repeated Brand Recall"
              desc="Frequent exposure strengthens familiarity and improves long-term customer memory."
            />

            <TimelineItem
              title="Real-World Presence"
              desc="Your brand stays visible in physical environments where attention naturally exists."
            />

          </div>

        </div>

        {/* SECTION 2 */}
        <div className="mb-24 md:mb-40">

          <SectionHeading
            title="What Makes It Effective"
            align="center"
          />

          <div className="max-w-4xl mx-auto">

            <TimelineItem
              title="Clear Line of Sight"
              desc="Strategic placement ensures your advertisement remains highly visible from multiple viewing angles."
            />

            <TimelineItem
              title="Premium Positioning"
              desc="Placement height, angle, and traffic direction significantly improve visibility duration."
            />

            <TimelineItem
              title="Natural Attention Flow"
              desc="Positioned where people naturally focus during traffic movement and waiting zones."
            />

          </div>

        </div>

        {/* SECTION 3 */}
       <div className="max-w-4xl">

          <SectionHeading
            title="What You Get with Spotlight OOH"
            align="left"
          />

          <div className="max-w-4xl ml-auto">

            <TimelineItem
              title="Prime Locations"
              desc="Selected based on traffic density, visibility distance, and audience exposure quality."
            />

            <TimelineItem
              title="Premium Structures"
              desc="Modern billboard formats designed with a clean, sophisticated visual presence."
            />

            <TimelineItem
              title="Reliable Execution"
              desc="Professional installation, maintenance, and monitoring for uninterrupted campaign visibility."
            />

          </div>

        </div>

        {/* CTA SECTION */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]
            md:rounded-[40px]
            border
            border-yellow-400/10
            bg-gradient-to-b
            from-white/[0.04]
            to-white/[0.02]
            backdrop-blur-2xl
            p-6
            sm:p-8
            md:p-14
            text-center
          "
        >

          {/* CTA Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/[0.03] via-transparent to-yellow-400/[0.06]" />

          <div className="relative z-10">

            <p
              className="
                text-yellow-400/70
                uppercase
                tracking-[0.24em]
                sm:tracking-[0.35em]
                text-sm
                mb-5
              "
            >
              Limited Launch Access
            </p>

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-6xl
                font-semibold
                text-white
                tracking-[-0.05em]
                leading-tight
                mb-6
                md:mb-8
              "
            >
              Launch Your Brand
              <span className="text-yellow-200"> Where Attention Exists</span>
            </h2>

            <p
              className="
                text-gray-300
                text-base
                sm:text-lg
                md:text-xl
                leading-7
                sm:leading-8
                md:leading-9
                max-w-3xl
                mx-auto
                font-light
                mb-8
                md:mb-12
              "
            >
              Our first premium advertising location in Chennai is now
              opening for selected launch partners with limited placement
              availability.
            </p>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                gap-3
                bg-yellow-300
                text-black
                px-7
                md:px-10
                py-3.5
                md:py-4
                rounded-full
                font-semibold
                hover:bg-yellow-200
                hover:scale-105
                hover:shadow-[0_0_40px_rgba(250,204,21,0.25)]
                transition-all
                duration-300
              "
            >
              Get Pricing →
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
