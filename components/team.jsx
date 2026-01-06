"use client";

import { useState } from "react";
import DoctorCard from "./resuable/team_card";
import DoctorModal from "./resuable/DoctorModal";

const doctors = [
  {
    name: "Dr. Harshitha Chanduri ",
    role: "Co-Founder & Strategic Partner",
    description:
    `
    Dr. Harshitha Chanduri is a healthcare professional with expertise in patient care,
    clinical research, and medical device research & development.

    As Co-Founder and Strategic Partner, she plays a key role in guiding innovation-driven
    initiatives, ensuring high-quality outcomes and aligning research efforts with real-world
    clinical needs. Her creative and results-focused approach strengthens the organization’s
    strategic and scientific vision.
    `,
    image: "/team/john-doe.jpg",
  },
  {
    name: "Mr. Kaushik M Gawali ",
    role: "Co-Founder & Chief Research Officer",
    description:`A seasoned professional whose journey intertwines innovation in light-based research and medical device R&D. With a solid foundation in the medical device industry and a penchant for exploration, he enriches our team with a hands-on approach honed through years of experience. His commitment to excellence is evident in every contribution he makes, ensuring that our endeavours maintain both a professional and innovative edge. Kaushik's expertise serves as a cornerstone, driving our mission forward with integrity.`,
    image: "/team/kaushik.jpg",
  },
  {
    name: "Dr. Amarnath Surath ",
    role: "Chief Medical Officer",
    description:`Dr. Amarnath Surath is a highly experienced clinical research leader and physician 
    with over 30 years of expertise in patient care and clinical operations. An MD 
    from AIIMS with advanced training in clinical research from Harvard Medical 
    School, he oversees clinical strategy, trials, and medical governance. His patient
    centric and evidence-based approach drives excellence in clinical outcomes and 
    medical innovation.`,
    image: "/team/sebastian-junn.jpg",
  },
  {
    name: "Mr. Vikas Sharma ",
    role: "Consultant Biostatistician",
    description:`Vikas Sharma is a Consultant Biostatistician specializing in clinical research 
    statistics and data analysis. With experience across academic and industry settings, 
    he provides statistical leadership for research projects and clinical studies. His work, 
    supported by multiple peer-reviewed publications, ensures methodological rigor, data 
    integrity, and impactful research outcomes.`,
    image: "/team/cee-bloggs.jpg",
  },
];

export default function OurTeam() {
  const [activeDoctor, setActiveDoctor] = useState(null);

  return (
    <section id="team" className="w-full bg-white py-8">
      <div className="mx-auto max-w-[1440px] px-6">

        {/* HEADER */}
        <p className="text-[14px] font-semibold text-[#E56027]">
          OUR TEAM
        </p>

        <h2 className="mt-3 max-w-[450px] text-[36px] leading-[44px] font-semibold text-black">
      MEET THE PEOPLE MAKING A DIFFERENCE
        </h2>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {doctors.map((doc, i) => (
            <DoctorCard
              key={i}
              name={doc.name}
              role={doc.role}
              image={doc.image}
              onClick={() => setActiveDoctor(doc)}
            />
          ))}
        </div>

      </div>

      {/* MODAL */}
      <DoctorModal
        doctor={activeDoctor}
        onClose={() => setActiveDoctor(null)}
      />
    </section>
  );
}
