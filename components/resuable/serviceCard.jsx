"use client";

import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <div
      className="
        group
        rounded-2xl bg-white
        p-8
        shadow-lg
        transition
        hover:bg-[#E56027]
      "
    >
      {/* ICON */}
      <div
        className="
          mx-auto mb-6 flex h-12 w-12 items-center justify-center
          rounded-full bg-[#fff4ee]
          transition
          group-hover:bg-white/20
        "
      >
        <img
          src={service.icon}
          alt={service.title}
          className="h-10 w-10"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-center text-[18px] font-semibold text-black transition group-hover:text-white">
        {service.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-3 text-justify hyphens-auto text-[14px] leading-6 text-gray-600 transition group-hover:text-white/90">
        {service.description}
      </p>

      {/* LEARN MORE */}
      <div className="mt-6 flex justify-center">
        <Link
          href={`/services/${service.slug}`}
          className="
            inline-flex items-center gap-2
            rounded-full
            border border-transparent
            px-5 py-2
            text-[14px] font-medium
            text-[#E56027]
            transition
            group-hover:border-white
            group-hover:text-white
          "
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}
