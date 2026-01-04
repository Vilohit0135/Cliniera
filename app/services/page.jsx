"use client";

import Link from "next/link";
import ServiceCard from "../../components/resuable/serviceCard";

const services = [
  {
    title: "Clinical Trial Management",
    description:
      "End-to-end clinical trial execution ensuring quality, compliance, and timely delivery across all study phases.",
    slug: "clinical-trial-management",
    icon: "/icons_services/Icon.svg",
  },
  {
    title: "Site Selection & Monitoring",
    description:
      "Identifying high-performing trial sites and providing continuous oversight to ensure protocol compliance and data integrity.",
    slug: "site-selection-monitoring",
    icon: "/icons_services/Icon1.svg",
  },
  {
    title: "Regulatory Affairs",
    description:
      "Strategic regulatory guidance to navigate global requirements and accelerate product approvals with confidence.",
    slug: "regulatory-affairs",
    icon: "/icons_services/Icon2.svg",
  },
  {
    title: "Data Management & Analysis",
    description:
      "Transforming clinical data into accurate, compliant, and actionable insights through robust data management and analytics.",
    slug: "data-management-analysis",
    icon: "/icons_services/Icon3.svg",
  },
  {
    title: "Medical Writing & Communication",
    description:
      "Developing clear, compliant, and impactful scientific and regulatory documents to support successful submissions.",
    slug: "medical-writing",
    icon: "/icons_services/Icon4.svg",
  },
  {
    title: "Product Approval",
    description:
      "Streamlining regulatory pathways to achieve efficient and compliant product approvals in India’s healthcare landscape.",
    slug: "product-approval",
    icon: "/icons_services/Icon5.svg",
  },
];



export default function Services() {
  return (
    <section id="services" className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1440px] px-16">

        {/* HEADER */}
        <div className="mb-16 grid grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[14px] font-semibold text-[#E56027]">
              What We Offer
            </p>
            <h2 className="mt-2 text-[36px] leading-[44px] font-semibold text-black">
              Personalized Healthcare Solutions for Every Stage of Life
            </h2>
          </div>

          <div>
          <Link
            href="/contact"
            className="inline-flex h-[48px] items-center px-6 rounded-full bg-[#E56027] text-white text-[14px] font-medium hover:bg-[#ea6a10] transition translate-x-120"
          >
            Learn More
          </Link>

          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}
