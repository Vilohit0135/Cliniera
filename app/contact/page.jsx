"use client";

import AppointmentForm from "../../components/resuable/appointmet";
import WorkHours from "../../components/resuable/workHoursCard";

export default function ContactPage() {
  return (
    <section className="w-full bg-[#f3d5bd] py-10 pb-0">
      <div
        className="
          mx-auto max-w-[1440px]
          px-16
          2xl:px-[120px]
          max-lg:px-10
          max-md:px-6
        "
      >
        {/* CONTENT */}
        <div
          className="
            mt-12 grid grid-cols-2 gap-20 items-start

            max-lg:grid-cols-1
            max-lg:gap-16
          "
        >
          {/* LEFT CONTENT */}
          <div className="max-w-[520px] mt-10 max-lg:mt-0">
            {/* HEADER */}
            <p className="text-[14px] font-semibold uppercase tracking-wider text-[#E56027]">
              Appointment
            </p>

            <h1
              className="
                mt-2 max-w-[540px]
                text-[44px] leading-[52px] font-semibold text-black

                max-md:text-[34px]
                max-md:leading-[42px]
              "
            >
              Contact Us
            </h1>

            <p
              className="
                mt-8 text-[16px] leading-6 text-black/70
                max-md:text-[14px]
              "
            >
              Email, call, or complete the form to learn how Cliniera can support
              your clinical and regulatory needs.
            </p>

            <div className="mt-6 space-y-2 text-[14px] text-black/80">
              <p>
                <span className="font-medium">Email:</span> info@cliniera.com
              </p>
              <p>
                <span className="font-medium">Phone:</span> +91 98765 43210
              </p>
            </div>

            {/* OPTIONAL INFO BLOCKS */}
            <div
              className="
                mt-10 grid grid-cols-2 gap-6
                text-[13px] text-black/70

                max-md:grid-cols-1
              "
            >
              <div>
                <h4 className="font-semibold text-[#E56027]">
                  Customer Support
                </h4>
                <p className="mt-2">
                  Our support team is available to address your queries.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#E56027]">
                  Media Inquiries
                </h4>
                <p className="mt-2">
                  For media-related questions, contact press@cliniera.com
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <div
            className="
              w-full max-w-[500px]
              bg-white rounded-2xl shadow-xl p-8

              -translate-y-12 translate-x-16

              max-lg:translate-x-0
              max-lg:translate-y-0
              max-lg:mx-auto
              max-lg:p-6
            "
          >
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}





















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