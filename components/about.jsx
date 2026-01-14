"use client";

import Tab from "./resuable/tab";
import { useState } from "react";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("philosophy");

  const tabContent = {
    philosophy:
      "Morbi integer convallis libero ante quisque urna habitasse auctor. Ante odio ultricies finibus primis tellus tristique. Donec nascetur diam id mattis fringilla pulvinar finibus libero posuere erat ipsum.",
    vision: `To be a global leader in advancing healthcare through innovative and 
      ethical clinical research, driving transformative solutions that improve patient 
      outcomes and contribute to the evolution of medical science.`,
    mission: `To collaborate with pharmaceutical, biotechnology, and medical device companies to 
      conduct high-quality clinical research with a commitment to integrity, excellence, and 
      patient-centricity.`,
  };

  return (
    <section id="about" className="w-full bg-white py-12">
      <div
        className="
          mx-auto
          max-w-[1440px]

          px-16
          max-md:px-6

          xl:max-w-[1600px]
          xl:px-12

          2xl:max-w-[1800px]
          2xl:px-10
        "
      >
        {/* TOP TEXT */}
        <p className="text-left text-[12px] font-semibold text-[#E56027] max-md:text-left">
          Welcome to Cliniera
        </p>

        <h2
          className="
            mt-3 text-left text-[40px] leading-[44px] font-semibold text-black
            max-md:text-left
            max-md:text-[32px]
            max-md:leading-[38px]
          "
        >
          Where Research Meets Results
        </h2>

        {/* MAIN CONTENT */}
        <div
          className="
            mt-16 grid grid-cols-2 gap-16 items-center

            max-lg:grid-cols-1
            max-lg:gap-12
          "
        >
          {/* TEXT CONTENT (comes first on mobile) */}
          <div className="order-1">
            <h3 className="text-[20px] font-semibold text-black">
              Guided by this belief, our values shape every decision we make
            </h3>

            <p className="mt-4 text-[14px] text-gray-600 leading-7">
              Finibus placerat lectus efficitur volutpat mauris. Senectus volutpat
              phasellus sagittis natoque metus tortor.
            </p>

            <ul className="mt-10 space-y-4 text-[14px] text-gray-700">
              {[
                ["Integrity", "Honesty and transparency at every step, ensuring reliable and accurate clinical research."],
                ["Quality", "Delivering services that meet regulatory standards and consistently inspire trust."],
                ["Patient-Centricity", "Prioritizing participant safety, rights, and well-being."],
                ["Compliance", "Adhering strictly to regulations and ethical guidelines."],
                ["Collaboration", "Building strong partnerships for seamless and effective clinical trial execution."],
              ].map(([title, text]) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#E56027]" />
                  <span>
                    <strong>{title}:</strong> {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* IMAGE (moves below text on mobile) */}
          <div className="relative order-2 max-lg:order-3">
            <div className="h-[320px] rounded-xl bg-[#d9d9d9]" />
            <div className="absolute -bottom-6 -left-6 rounded-lg bg-black px-6 py-4 text-white shadow-lg translate-x-2">
              <p className="text-[20px] font-semibold">+500</p>
              <p className="text-[12px] opacity-80">
                Consultations each month
              </p>
            </div>
          </div>
        </div>

        {/* TABS (below image on mobile) */}
        <div
          className="
            mt-20
            flex flex-wrap justify-center gap-4

            max-lg:mt-13
            max-lg:justify-center
            max-md:gap-3
          "
        >
          <Tab
            label="Philosophy"
            active={activeTab === "philosophy"}
            onClick={() => setActiveTab("philosophy")}
          />
          <Tab
            label="Our Vision"
            active={activeTab === "vision"}
            onClick={() => setActiveTab("vision")}
          />
          <Tab
            label="Our Mission"
            active={activeTab === "mission"}
            onClick={() => setActiveTab("mission")}
          />
        </div>

        {/* TAB CONTENT */}
        <p
          className="
            mx-auto mt-6 max-w-[900px]
            text-center text-[16px] leading-7 text-black

            max-lg:mx-0
            max-lg:text-left
          "
        >
          {tabContent[activeTab]}
        </p>
      </div>
    </section>
  );
}
