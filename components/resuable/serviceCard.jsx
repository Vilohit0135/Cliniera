import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <div
      className={`
        group rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] text-center justify p-6 transition-all duration-300
        cursor-pointer
        ${
          service.highlight
            ? "bg-[#E56027] text-white"
            : "bg-white hover:bg-[#E56027] hover:text-white hover:shadow-xl"
        }
      `}
    >
      {/* ICON */}
<div
  className={`
    mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full
    transition
    bg-[#fff4ee] group-hover:bg-white/20
  `}
>
  <img
    src={service.icon}
    alt={service.title}
    className="h-6 w-6 transition"
  />
</div>


      {/* TITLE */}
      <h3 className="text-[16px] font-semibold">
        {service.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-3 text-[14px] leading-6 opacity-90">
        {service.description}
      </p>

      {/* LINK */}
        <Link
        href={`/services/${service.slug}`}
        className="
            mt-4 inline-flex items-center justify-center
            rounded-full px-4 py-2
            text-[14px] font-semibold
            text-[#E56027]
            transition-all duration-300
            group-hover:text-white
            group-hover:border group-hover:border-white
        "
        >
        Learn More →
        </Link>


    </div>
  );
}
