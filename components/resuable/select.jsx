export default function Select({ placeholder, options = [], icon }) {
  return (
    <div className="relative">
      {icon && (
        <img
          src={icon}
          alt=""
          className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2"
        />
      )}

      <select
        className={`
          h-[52px] w-full
          appearance-none
          rounded-full
          border-2 border-black
          bg-white
          ${icon ? "pl-12" : "pl-6"} pr-12
          text-[14px] font-semibold text-black
          focus:outline-none
        `}
      >
        <option value="">{placeholder}</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {/* DROPDOWN ARROW */}
      <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-black">
        ▼
      </span>
    </div>
  );
}
