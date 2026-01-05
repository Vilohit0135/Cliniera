
"use client";

import Tab from './resuable/tab'
import { useState } from "react";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("philosophy");

  const tabContent = {
    philosophy:
      "Morbi integer convallis libero ante quisque urna habitasse auctor. Ante odio ultricies finibus primis tellus tristique. Donec nascetur diam id mattis fringilla pulvinar finibus libero posuere erat ipsum.",
    vision:`To be a global leader in advancing healthcare through innovative and 
        ethical clinical research, driving transformative solutions that improve patient 
        outcomes and contribute to the evolution of medical science.`,
    mission:`To collaborate with pharmaceutical, biotechnology, and medical device companies to   conduct high-quality clinical research with a commitment to integrity, excellence, and  patient-centricity.`
  };

  return (
    <section id="about" className="w-full bg-white py-8">
      <div className="mx-auto max-w-[1440px] px-16">

        {/* TOP TEXT */}
        <p className="text-center text-[12px] font-semibold text-[#E56027]">
          Welcome to Cliniera
        </p>

        <h2 className="mt-3 text-center text-[40px] leading-[44px] font-semibold text-black">
          Where Research Meets Results
        </h2>

        {/* CONTENT */}
        <div className="mt-16 grid grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="relative">
            <div className="h-[320px] rounded-xl bg-[#d9d9d9]" />
            <div className="absolute -bottom-6 -left-6 rounded-lg bg-black px-6 py-4 text-white shadow-lg">
              <p className="text-[20px] font-semibold">+500</p>
              <p className="text-[12px] opacity-80">
                Consultations each month
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-[20px] font-semibold text-black">
              Guided by this belief, our values shape every decision we make
            </h3>

            <p className="mt-4 text-[14px] text-gray-600 leading-7">
              Finibus placerat lectus efficitur volutpat mauris. Senectus volutpat
              phasellus sagittis natoque metus tortor.
            </p>
            <ul className="mt-10 space-y-4 text-[14px] text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#E56027]" />
                <span>
                  <strong>Integrity:</strong> Honesty and transparency at every step,
                  ensuring reliable and accurate clinical research.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#E56027]" />
                <span>
                  <strong>Quality:</strong> Delivering services that meet regulatory
                  standards and consistently inspire trust.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#E56027]" />
                <span>
                  <strong>Patient-Centricity:</strong> Prioritizing participant safety,
                  rights, and well-being.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#E56027]" />
                <span>
                  <strong>Compliance:</strong> Adhering strictly to regulations and ethical
                  guidelines.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#E56027]" />
                <span>
                  <strong>Collaboration:</strong> Building strong partnerships for seamless
                  and effective clinical trial execution.
                </span>
              </li>
            </ul>


            {/* <button className="mt-8 rounded-full bg-[#E56027] px-6 py-3 text-[14px] font-semibold text-white">
              Learn More
            </button> */}
          </div>

        </div>

        {/* TABS */}
        <div className="mt-20 flex justify-center gap-6">
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
        <p className="mx-auto mt-6 max-w-[900px] text-center text-[14px] leading-7 text-gray-600 transition-all">
          {tabContent[activeTab]}
        </p>

      </div>
    </section>
  );
}
