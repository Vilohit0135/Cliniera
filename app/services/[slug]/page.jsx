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
    <section className="w-full bg-white py-12 overflow-x-hidden">
      <div className="mx-auto max-w-[1440px] px-16 max-md:px-0">

        {/* HEADER */}
        <div className="max-md:px-6">
          <p className="mb-3 text-[13px] text-gray-500">
            Home <span className="mx-1">›</span> Services{" "}
            <span className="mx-1">›</span>
            <span className="text-[#E56027]">{service.title}</span>
          </p>

          <h1 className="text-[38px] font-semibold text-black max-md:text-[30px]">
            {service.title}
          </h1>

          <p className="mt-4 max-w-[760px] text-[15px] leading-7 text-gray-600">
            {service.intro}
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-12 gap-14 max-lg:grid-cols-1">
          
          {/* MAIN CONTENT */}
          <div className="col-span-8 max-lg:col-span-12 max-md:px-6">
            
            {/* IMAGE */}
            <div
              className="
                mb-14 h-[360px] bg-[#d9d9d9] rounded-xl
                max-md:h-[220px]
                max-md:-mx-6
                max-md:w-[calc(100%+3rem)]
                max-md:rounded-none
              "
            />

            {/* TEXT */}
            <div className="space-y-12 max-w-[900px]">
              {service.content.map((block, i) => (
                <div key={i}>
                  <h3 className="text-[22px] font-semibold text-black">
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
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[#E56027]" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <aside
            className="
              col-span-4 space-y-8
              justify-self-end
              max-lg:col-span-12
              max-lg:justify-self-auto
              max-md:flex
              max-md:flex-col
              max-md:items-center
            "
          >
            {/* CTA */}
            <div
              className="
                bg-[#E56027] text-white p-6 rounded-xl shadow-lg

                /* MOBILE FIX */
                max-md:mx-6
                max-md:rounded-xl
              "
            >
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
            <div
              className="
                bg-[#f6f6f6] p-6 rounded-xl

                /* MOBILE FIX */
                max-md:mx-6
                max-md:rounded-xl
              "
            >
              <h4 className="mb-5 text-[16px] font-semibold text-black">
                Other Services
              </h4>

              <ul className="space-y-4 text-[14px]">
                {Object.entries(servicesData).map(([key, s]) => (
                  <li key={key}>
                    <Link
                      href={`/services/${key}`}
                      className={`block ${
                        key === slug
                          ? "font-semibold text-[#E56027]"
                          : "text-gray-700 hover:text-[#E56027]"
                      }`}
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

