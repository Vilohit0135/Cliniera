import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative h-[800px] w-full bg-[#f5f5f5]
        max-lg:h-auto

        /* MOBILE: reserve space for image + banner */
        max-md:pb-[450px]
      "
    >
      {/* LEFT BACKGROUND PANEL */}
      <div className="absolute inset-y-0 left-0 w-full bg-[#f3d5bd]"></div>

      {/* CONTENT WRAPPER */}
      <div
        className="
          relative z-10 mx-auto h-full max-w-[1440px]
          px-16
          2xl:px-[120px]
          max-md:px-6
        "
      >
        <div
          className="
            grid h-full grid-cols-2 items-center
            max-lg:grid-cols-1
            max-lg:pt-24
          "
        >
          {/* LEFT CONTENT */}
          <div className="max-w-[640px]">
            <div className="-translate-y-12 max-lg:translate-y-0">
              {/* HEADING */}
              <h1
                className="
                  text-[56px] leading-[62px] font-semibold text-black
                  max-md:text-[36px] max-md:leading-[42px]
                "
              >
                Our Drive, Your Destination
              </h1>

              {/* KEYWORDS */}
              <div
                className="
                  mt-6 flex items-center gap-x-4
                  text-[16px] font-semibold tracking-widest text-black/80
                  whitespace-nowrap

                  max-lg:flex-wrap max-lg:whitespace-normal

                  max-md:text-[12px]
                  max-md:gap-x-2
                  max-md:leading-relaxed
                "
              >
                <span>INNOVATE</span>
                <span className="text-black/40 max-md:hidden">|</span>
                <span>ACCELERATE</span>
                <span className="text-black/40 max-md:hidden">|</span>
                <span>SUCCEED</span>
                <span className="text-black/40 max-md:hidden">|</span>
                <span>PRECISION</span>
                <span className="text-black/40 max-md:hidden">|</span>
                <span>PERFORMANCE</span>
                <span className="text-black/40 max-md:hidden">|</span>
                <span>PROGRESS</span>
              </div>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-6 text-[16px] leading-relaxed text-black/90
                  max-md:text-[14px]
                "
              >
                Cliniera empowers medtech innovators with end-to-end clinical
                development expertise, transforming research into measurable
                real-world results.
              </p>

              {/* CTA BUTTONS */}
              <div
                className="
                  mt-8 flex items-center gap-6
                  max-md:flex-nowrap
                  max-md:gap-3
                "
              >
                <Link
                  href="/contact"
                  className="
                    inline-flex items-center justify-center
                    h-[48px] px-6 rounded-full
                    bg-[#E56027] text-white text-[14px] font-medium
                    hover:bg-[#ea6a10] transition

                    max-md:h-[40px]
                    max-md:px-4
                    max-md:text-[13px]
                  "
                >
                  Get Started
                </Link>

                <button
                  className="
                    h-[48px] px-6 rounded-full
                    border border-[#E56027]
                    text-[#E56027] text-[14px] font-medium
                    flex items-center gap-2
                    hover:bg-[#f97316]/10 transition

                    max-md:h-[40px]
                    max-md:px-4
                    max-md:text-[13px]
                    max-md:gap-1
                  "
                >
                  <span>☎</span>
                  <span>(+1)2345-6789-1123</span>
                </button>
              </div>
            </div>

            {/* FEATURES */}
            <div
              className="
                mt-10 flex items-start gap-12
                max-md:flex-col max-md:gap-6
              "
            >
              <div className="flex items-start gap-3">
                <img src="/icons/Frame1.svg" className="h-10 w-10" />
                <div>
                  <h4 className="text-[18px] font-semibold text-black">
                    Healthy Advice
                  </h4>
                  <p className="mt-1 text-[15px] text-black/70">
                    Ut elit tellus, luctus nec ullamcorper mattis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <img src="/icons/Frame.svg" className="h-10 w-10" />
                <div>
                  <h4 className="text-[18px] font-semibold text-black">
                    24/7 Support
                  </h4>
                  <p className="mt-1 text-[15px] text-black/70">
                    Ut elit tellus, luctus nec ullamcorper mattis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="
              relative flex justify-start
              -translate-y-8 translate-x-9

              max-lg:translate-x-0
              max-lg:translate-y-0
              max-lg:justify-center
              max-lg:mt-12

              max-md:absolute
              max-md:bottom-[-475px]
              max-md:left-1/2
              max-md:-translate-x-1/2
            "
          >
            <Image
              src="/hero1.png"
              alt="Cliniera Healthcare"
              width={450}
              height={650}
              className="
                h-[830px] w-[650px] object-cover rounded-md

                max-lg:h-[520px] max-lg:w-[380px]

                /* MOBILE */
                max-md:h-[550px]        /* 👈 increase height */
                max-md:w-auto           /* 👈 natural width */
                max-md:max-w-[95vw]     /* 👈 nearly full screen */
                max-md:object-cover   /* 👈 no cropping */
                max-md:mx-auto
                max-md:mt-10
              "
            />
          </div>
        </div>
      </div>

      {/* STATS BANNER */}
      <div
        className="
          absolute left-1/2 bottom-[-110px] z-20
          w-full -translate-x-1/2 -translate-y-25

          max-md:static
          max-md:translate-x-0
          max-md:translate-y-113
          max-md:mt-6
        "
      >
        <div
          className="
            bg-[#E56027] text-white shadow-lg

            px-8 py-3
            max-sm:px-5
            max-sm:py-3

            /* DESKTOP */
            flex justify-between

            /* TABLET */
            max-lg:grid
            max-lg:grid-cols-2
            max-lg:gap-y-6
            max-lg:gap-x-6

            /* MOBILE */
            max-sm:grid-cols-1
            max-sm:gap-y-4
          "
        >
          {[
            ["50+", "Years of Experience.", "/icons/Icon1.svg"],
            ["3,124+", "Satisfied Clients.", "/icons/Icon2.svg"],
            ["231+", "Experienced Doctors.", "/icons/Icon3.svg"],
            ["17+", "Hospital Rooms.", "/icons/Icon4.svg"],
          ].map(([num, label, icon]) => (
            <div
              key={label}
              className="
                flex items-center gap-3
                max-sm:items-start
              "
            >
              <img src={icon} className="h-9 w-9 shrink-0" />

              <div >
                <div className="flex items-baseline gap-2">
                  <p className="text-[26px] font-semibold max-sm:text-[22px]">
                    {num}
                  </p>
                  <p className="text-[12px] font-medium relative -top-1 max-sm:text-[11px]">
                    {label}
                  </p>
                </div>

                <p className="mt-1 text-[11px] text-white/85 max-sm:text-[10px] relative -top-2">
                  Ut elit tellus, luctus nec ullamcorper mattis.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}
