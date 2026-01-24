"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useInView, useMotionValue, animate } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.56, ease: "easeOut" } },
  };

  const imgVariant = {
    hidden: { opacity: 0, x: 80, scale: 0.98 },
    show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, ease: "circOut" } },
  };

  const floatAnim = shouldReduceMotion
    ? {}
    : { y: [0, -8, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } };

  function Counter({ to, suffix = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const mv = useMotionValue(0);
    const [value, setValue] = useState(0);

    useEffect(() => {
      if (shouldReduceMotion) {
        setValue(to);
        return;
      }
      if (!isInView) return;
      const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
      const unsub = mv.on("change", (v) => setValue(Math.round(v)));
      return () => {
        controls.stop();
        unsub();
      };
    }, [isInView, to]);

    return (
      <span ref={ref} aria-hidden={shouldReduceMotion ? "false" : "true"}>
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <section
      className="
        relative isolate h-[800px] w-full bg-[#f5f5f5]
        max-lg:h-auto

        /* MOBILE: reserve space for image + banner */
        max-md:pb-[450px]
      "
    >
      {/* LEFT BACKGROUND PANEL */}
      <div className="absolute  inset-y-0 left-0 w-full bg-[#f3d5bd] z-0"></div>


      {/* CONTENT WRAPPER */}
      <div
        className="
          relative z-10 mx-auto h-full
          max-w-[1440px]

          px-16
          max-md:px-8

          xl:max-w-[1600px]
          xl:px-12

          2xl:max-w-[1800px]
          2xl:px-10
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
            <motion.div
              variants={container}
              initial="hidden"
              whileInView={shouldReduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.18 }}
              className="
                lg:-translate-y-0        /* laptop */
                md:translate-y-0  /* tablet & mobile */

                xl:-translate-y-12     /* reduce lift */
                2xl:-translate-y-36    /* almost normal */
              "
            >

              {/* HEADING */}
              <motion.h1
                variants={item}
                className="
                  text-[56px] leading-[62px] font-semibold text-black
                  max-md:text-[36px] max-md:leading-[42px]
                "
              >
                Our Drive, Your Destination
              </motion.h1>

              {/* KEYWORDS */}
              <motion.div
                variants={item}
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
              </motion.div>

              {/* DESCRIPTION */}
              <motion.p
                variants={item}
                className="
                  mt-6 text-[16px] leading-relaxed text-black/90
                  max-md:text-[14px]
                "
              >
                Cliniera empowers medtech innovators with end-to-end clinical
                development expertise, transforming research into measurable
                real-world results.
              </motion.p>

              {/* CTA BUTTONS */}
              <motion.div
                variants={item}
                className="
                  mt-8 flex items-center gap-6
                  max-md:flex-nowrap
                  max-md:gap-3
                "
              >
                <Link href="/contact">
                  <motion.a
                    whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
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
                  </motion.a>
                </Link>

                <motion.button
                  whileHover={shouldReduceMotion ? {} : { y: -3 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
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
                  <span>(+91) 9959279640</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* FEATURES */}
            <div
              className="
                mt-10 flex items-start gap-12
                max-md:flex-col max-md:gap-6
                xl:-translate-y-6     /* reduce lift */
                2xl:-translate-y-18 
              "
            >
              <div className="flex items-start gap-3">
                <img src="/icons/Frame1.svg" alt="Healthy Advice icon" className="h-10 w-10" />
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
                <img src="/icons/Frame.svg" alt="Support icon" className="h-10 w-10" />
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

              /* LAPTOP – unchanged */
              max-lg:translate-x-0
              max-lg:translate-y-0
              max-lg:justify-center
              max-lg:mt-12

              /* XL */
              xl:translate-x-16

              /* 2XL */
              2xl:translate-x-24

              max-md:absolute
              max-md:bottom-[-475px]
              max-md:left-1/2
              max-md:-translate-x-1/2
            "
          >

            <motion.div
              variants={imgVariant}
              initial="hidden"
              whileInView={shouldReduceMotion ? {} : "show"}
              viewport={{ once: true, amount: 0.2 }}
              className=""
              animate={floatAnim}
            >
              <Image
                src="/hero1.png"
                alt="Cliniera Healthcare"
                width={450}
                height={650}
                className="
                  h-[830px] w-[650px] object-cover rounded-md

                  /* LAPTOP */
                  max-lg:h-[520px] max-lg:w-[380px]

                  /* XL */
                  xl:h-[900px] xl:w-[700px]

                  /* 2XL */
                  2xl:h-[980px] 2xl:w-[760px]

                  /* MOBILE */
                  max-md:h-[550px]
                  max-md:w-auto
                  max-md:max-w-[95vw]
                  max-md:object-cover
                  max-md:mx-auto
                  max-md:mt-10
                "
              />
            </motion.div>

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

            px-8 py-4
            max-sm:px-5
            max-sm:py-3

            /* DESKTOP */
            flex justify-between items-center

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
          ].map(([num, label, icon]) => {
            const numeric = parseInt(num.replace(/\D/g, ""), 10) || 0;
            const hasPlus = /\+$/.test(num);

            return (
              <div
                key={label}
                className="
                  flex items-center gap-3
                  max-sm:items-start
                "
              >
                <img src={icon} className="h-9 w-9 shrink-0" />

                <div>
                  <div className="flex items-baseline gap-2">
                    <p className="text-[26px] font-semibold max-sm:text-[22px]">
                      <Counter to={numeric} suffix={hasPlus ? "+" : ""} />
                    </p>

                    {/* 🔧 REMOVED relative top offset */}
                    <p className="text-[12px] font-medium max-sm:text-[11px]">
                      {label}
                    </p>
                  </div>

                  {/* 🔧 REMOVED relative top offset */}
                  <p className="mt-1 text-[11px] text-white/85 max-sm:text-[10px]">
                    Ut elit tellus, luctus nec ullamcorper mattis.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>



    </section>
  );
}
