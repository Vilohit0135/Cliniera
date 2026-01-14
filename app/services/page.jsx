"use client";

import Link from "next/link";
import ServiceCard from "../../components/resuable/serviceCard";
import { motion, useReducedMotion } from "framer-motion";

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
  const shouldReduceMotion = useReducedMotion();
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
  const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" } } };
  const header = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

  return (
    <section id="services" className="w-full bg-white py-15">
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


      {/* HEADER */}
      <div
        className="
          mb-16
          flex items-center justify-between
          gap-8

          max-md:flex-col
          max-md:items-start
        "
      >
        {/* LEFT */}
        <motion.div
          variants={header}
          initial="hidden"
          whileInView={shouldReduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-[14px] font-semibold text-[#E56027]">
            What We Offer
          </p>
          <h2 className="mt-2 text-[36px] leading-[44px] font-semibold text-black">
            Our Services
          </h2>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={header}
          initial="hidden"
          whileInView={shouldReduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Link
            href="/contact"
            className="
              inline-flex h-[48px] items-center px-6
              rounded-full bg-[#E56027]
              text-white text-[14px] font-medium
              hover:bg-[#ea6a10] transition

              max-md:self-start
              -translate-x-10
            "
          >
            Learn More
          </Link>
        </motion.div>
      </div>


        {/* SERVICES GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView={shouldReduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.18 }}
          className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1"
        >
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
