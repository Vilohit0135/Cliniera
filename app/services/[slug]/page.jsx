import { notFound } from "next/navigation";
import Link from "next/link";

const servicesData = {
  "clinical-trial-management": {
    title: "Clinical Trial Management",
    intro:
      "CliniEra provides seamless end-to-end clinical trial management, ensuring quality execution, regulatory compliance, and timely delivery across all phases of clinical research.",
    content: [
      {
        heading: "Overview",
        text:
          "CliniEra offers unmatched expertise, cutting-edge technology, and a commitment to accelerating clinical development—on time, every time. Our solutions ensure your clinical trials remain compliant, efficient, and aligned with real-world clinical needs.",
      },
      {
        heading: "Our Approach",
        text:
          "Our clinical research specialists apply proven methodologies to deliver innovative solutions across all stages of clinical studies. We focus on quality, efficiency, and patient safety at every step.",
      },
      {
        heading: "Key Capabilities",
        points: [
          "End-to-end clinical trial planning and execution",
          "Patient recruitment and site coordination",
          "Protocol adherence and risk management",
          "Real-time monitoring and issue resolution",
          "Regulatory compliance and quality assurance",
        ],
      },
      {
        heading: "Why CliniEra",
        text:
          "With extensive market experience and deep regulatory insight, CliniEra is your trusted partner for outsourcing clinical trials. We minimize risks, streamline processes, and accelerate approvals while maintaining the highest standards of excellence.",
      },
    ],
  },

  "site-selection-monitoring": {
    title: "Site Selection & Monitoring",
    intro:
      "We optimize clinical trial success through strategic site selection and comprehensive monitoring, ensuring compliance, data integrity, and smooth trial operations.",
    content: [
      {
        heading: "Strategic Site Selection",
        text:
          "Leveraging our robust investigator network and feasibility expertise, we identify high-performing trial sites that align with protocol requirements and recruitment goals.",
      },
      {
        heading: "Monitoring Excellence",
        points: [
          "Feasibility assessments and site qualification",
          "On-site and remote monitoring",
          "Protocol deviation management",
          "Data quality and audit readiness",
        ],
      },
    ],
  },

  "regulatory-affairs": {
    title: "Regulatory Affairs",
    intro:
      "CliniEra provides expert regulatory guidance to navigate complex global requirements and accelerate product development with confidence.",
    content: [
      {
        heading: "Regulatory Strategy",
        text:
          "We craft tailored regulatory strategies for pharmaceutical, biotech, and medical device companies, ensuring compliance across development and commercialization stages.",
      },
      {
        heading: "Our Expertise",
        points: [
          "IND, NDA, and MA submissions",
          "Regulatory documentation and compliance",
          "Pharmacovigilance support",
          "Lifecycle management",
        ],
      },
    ],
  },

  "data-management-analysis": {
    title: "Data Management & Analysis",
    intro:
      "We transform clinical trial data into accurate, compliant, and actionable insights through robust data management and advanced analytics.",
    content: [
      {
        heading: "Data Integrity & Quality",
        text:
          "Our data management services ensure accuracy, consistency, and regulatory compliance across all clinical trial datasets.",
      },
      {
        heading: "Analytics Capabilities",
        points: [
          "Electronic Data Capture (EDC)",
          "Biostatistics and statistical analysis",
          "Data validation and quality control",
          "Regulatory-ready reporting",
        ],
      },
    ],
  },

  "medical-writing": {
    title: "Medical Writing & Communication",
    intro:
      "CliniEra delivers clear, compliant, and impactful medical writing solutions to support regulatory submissions and scientific communication.",
    content: [
      {
        heading: "Scientific & Regulatory Writing",
        text:
          "Our expert medical writers transform complex clinical data into clear, precise, and regulatory-compliant documentation.",
      },
      {
        heading: "Deliverables",
        points: [
          "Clinical study reports (CSR)",
          "Regulatory submissions",
          "Scientific publications",
          "Medical communication strategies",
        ],
      },
    ],
  },

  "product-approval": {
    title: "Product Approval",
    intro:
      "We streamline product approval processes in India by guiding companies through efficient and compliant regulatory pathways.",
    content: [
      {
        heading: "Approval Expertise",
        text:
          "CliniEra supports pharmaceutical, biotech, and medical device companies through CDSCO and Indian regulatory approval processes.",
      },
      {
        heading: "Approval Support",
        points: [
          "Regulatory strategy development",
          "Submission preparation and review",
          "Post-approval compliance",
          "Regulatory authority liaison",
        ],
      },
    ],
  },
};

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) notFound();

  return (
    <section className="w-full bg-white py-10 overflow-x-hidden">
      <div
        className="
          mx-auto max-w-[1440px] py-15

          px-16                 /* laptop – unchanged */
          max-md:px-6           /* mobile – unchanged */
          max-sm:px-4           /* small mobile */

          /* ONLY wider than laptop */
          xl:max-w-[1600px]
          xl:px-12

          2xl:max-w-[1800px]
          2xl:px-10
        "
      >

        {/* HEADER */}
        <div>
          <p className="mb-3 text-[13px] text-gray-500">
            Home <span className="mx-1">›</span> Services{" "}
            <span className="mx-1">›</span>
            <span className="text-[#E56027]">{service.title}</span>
          </p>

          <h1 className="text-[26px] sm:text-[34px] font-semibold text-black">
            {service.title}
          </h1>

          <p className="mt-4 text-[14px] leading-7 text-gray-600 max-w-none sm:max-w-[760px]">
            {service.intro}
          </p>
        </div>

        {/* GRID */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-8">
            {/* IMAGE */}
            <div className="mb-10 h-[220px] sm:h-[320px] w-full rounded-xl bg-[#d9d9d9]" />

            {/* TEXT CONTENT */}
            <div className="space-y-10 max-w-none">
              {service.content.map((block, i) => (
                <div key={i}>
                  <h3 className="text-[20px] font-semibold text-black">
                    {block.heading}
                  </h3>

                  {block.text && (
                    <p className="mt-4 text-[14px] leading-7 text-gray-700">
                      {block.text}
                    </p>
                  )}

                  {block.points && (
                    <ul className="mt-4 space-y-3 text-[14px] text-gray-700">
                      {block.points.map((pt, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E56027]" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 flex flex-col gap-8 w-full">
            {/* CTA CARD */}
            <div className="w-full rounded-xl bg-[#E56027] p-6 text-white shadow-lg">
              <h4 className="text-[16px] font-semibold">
                Take the First Step Today
              </h4>

              <p className="mt-3 text-[14px] leading-6 opacity-90">
                Connect with our experts to accelerate your clinical journey.
              </p>

              <Link href="/contact">
                <button className="mt-5 w-full rounded-full bg-white py-2 text-[14px] font-semibold text-[#E56027]">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* OTHER SERVICES */}
            <div className="w-full rounded-xl bg-[#f6f6f6] p-6">
              <h4 className="mb-5 text-[16px] font-semibold text-black">
                Other Services
              </h4>

              <ul className="space-y-4 text-[14px]">
                {Object.entries(servicesData).map(([key, s]) => (
                  <li key={key}>
                    <Link
                      href={`/services/${key}`}
                      className={
                        key === slug
                          ? "font-semibold text-[#E56027]"
                          : "text-gray-700 hover:text-[#E56027]"
                      }
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}