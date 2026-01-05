"use client";
import { useState } from "react";

const items = [
  {
    icon: "/icons/Icon1.svg",
    title: "Results-Driven Research",
    short: "Research that leads to real, measurable outcomes.",
    full:
      "Why choose Cliniera? Because research should lead to real results—and we make that happen for pharmaceutical and medical device innovations."
  },
  {
    icon: "/icons/Icon2.svg",
    title: "Real-World Impact",
    short: "Transforming research into practical outcomes.",
    full:
      "At Cliniera, we transform research into real-world outcomes that advance healthcare across pharmaceuticals and medical devices."
  },
  {
    icon: "/icons/Icon3.svg",
    title: "Precision Partnership",
    short: "Your partner in tailored clinical solutions.",
    full:
      "Cliniera is your partner in precision, delivering tailored clinical solutions that support success in pharma and medical device development."
  },
  {
    icon: "/icons/Icon4.svg",
    title: "Accelerated Development",
    short: "Science and strategy working together.",
    full:
      "Accelerate development and achieve meaningful results with Cliniera—where science and strategy drive excellence in pharma and medical devices."
  },
  {
    icon: "/icons/Icon1.svg",
    title: "Streamlined Trials",
    short: "Efficient, well-managed clinical trials.",
    full:
      "When you’re ready to elevate and streamline clinical trials for pharmaceuticals or medical devices, Cliniera is the partner you need."
  },
  {
    icon: "/icons/Icon2.svg",
    title: "Operational Excellence",
    short: "Excellence where it matters most.",
    full:
      "When excellence in clinical operations matters most for pharma and medical devices, it takes Cliniera."
  },
  {
    icon: "/icons/Icon3.svg",
    title: "Innovation & Efficiency",
    short: "Driving smarter clinical research.",
    full:
      "Driving innovation and efficiency in clinical research for pharmaceuticals and medical devices—it starts with Cliniera."
  }
];

export default function WhyChooseUs() {
  const [active, setActive] = useState(0);

  return (
    <section
  id="why-cliniera"
  className="w-full bg-[#fdfdfd] pt-36 pb-16 relative "
>

      <div className="mx-auto max-w-[1440px] px-16">

        {/* HEADER */}
        <p className="text-[14px] font-semibold uppercase tracking-wider text-[#E56027]">
          Why Choose Us
        </p>
        <h2 className="mt-2 text-[40px] leading-[48px] font-semibold text-black">
          Why Choose Cliniera
        </h2>

        {/* FLOW GRID */}
        <div
          className="
            mt-20 grid grid-cols-5 gap-x-12 gap-y-20
            max-xl:grid-cols-4
            max-lg:grid-cols-3
            max-md:grid-cols-2
            max-sm:grid-cols-1
          "
        >
          {items.map((item, index) => {
            const isActive = active === index;

            return (
              <div key={index} className="relative flex justify-center">

                {/* NODE */}
                <div
                  onClick={() => setActive(index)}
                  className="cursor-pointer flex flex-col items-center text-center max-w-[220px]"
                >
                  {/* ICON */}
                  <img
                    src={item.icon}
                    alt={item.title}
                    className={`h-20 w-20 transition-transform duration-300 ${
                      isActive ? "scale-110 opacity-100" : "opacity-80"
                    }`}
                  />

                  {/* TITLE */}
                  <h4 className="mt-6 text-[18px] font-semibold text-black">
                    {item.title}
                  </h4>

                  {/* UNIFORM SEPARATOR */}
                  <div
                    className={`mt-3 mb-3 h-[2px] w-[40px] transition-colors duration-300 ${
                      isActive ? "bg-[#E56027]" : "bg-black/30"
                    }`}
                  />

                  {/* DESCRIPTION */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-500 text-justify hyphens-auto
                      ${isActive ? "max-h-[200px]" : "max-h-[48px]"}
                    `}
                  >
                    <p className="text-[14px] leading-relaxed text-black/70">
                      {isActive ? item.full : item.short}
                    </p>
                  </div>
                </div>

                {/* CONNECTOR (ONLY LARGE SCREENS & SAME ROW) */}
                {index !== items.length - 1 && index % 5 !== 4 && (
                  <div className="hidden xl:block absolute top-[52px] right-[-72px] h-[1px] w-[120px] bg-black/40"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* RIGHT BOTTOM VISUAL (OVERLAY) */}
      <div className="hidden xl:block absolute bottom-[50px]
 right-20">

        {/* BIG GREY CARD */}
        <div className="h-[250px] w-[600px] rounded-xl bg-[#d9d9d9]" />

        {/* OVERLAPPED SMALL CARD */}
        <div className="absolute right-[-40px] top-[80px] h-[220px] w-[180px] rounded-xl bg-[#d9d9d9] border-4 border-[#f4f1fb]" />

        {/* STATS CARD */}
        <div className="absolute left-[-60px] bottom-[-20px] w-[220px] rounded-xl bg-black px-5 py-4 text-white shadow-xl">
          <h3 className="text-[28px] font-semibold">99%</h3>
          <p className="text-[14px] font-medium mt-1">
            Satisfied Clients
          </p>
          <p className="mt-2 text-[13px] text-white/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

      </div>

    </section>
  );
}
