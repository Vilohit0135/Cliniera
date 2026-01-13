const countryCodes = [{ code: "+91", label: "IND" },
  { code: "+1", label: "US" },
  { code: "+44", label: "UK" },
  { code: "+61", label: "Aus" },
  { code: "+62", label: "Indo" },
  { code: "+81", label: "Japan" },
  { code: "+86", label: "China" },
  { code: "+94", label: "Sri Lanka" },
  { code: "+971", label: "UAE" },
  { code: "+977", label: "Nepal" },
  // you can keep adding or later replace with a lib
];

  export default function PhoneInput({ countryName = "countryCode", phoneName = "phone"} ) {
  return (
    <div
      className="
        flex items-center
        h-[52px] w-full
        rounded-full
        border border-black/20
        bg-white
        overflow-hidden
      "
    >
      {/* COUNTRY CODE */}
      <select
        name={countryName}
        defaultValue="+91"
        className="
          h-full
          w-[115px]
          bg-transparent
          px-4
          text-[14px] font-semibold text-black
          focus:outline-none
          border-r border-black/20
        "
      >
        {countryCodes.map((c) => (
          <option key={c.code} value={c.code}>
            {c.code} ({c.label})
          </option>
        ))}
      </select>

      {/* PHONE INPUT */}
        <div className="relative h-full w-full">
        {/* ICON */}
        <img
            src="/icons_contact/phone.svg"
            alt=""
            className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2"
        />

        <input
            name={phoneName}
            type="tel"
            required
            placeholder="Phone number"
            inputMode="numeric"
            className="
            h-full w-full
            pl-10 pr-4              /* 👈 space for icon */
            text-[14px] font-bold text-black
            placeholder:text-black/80
            focus:outline-none
            "
        />
        </div>
    </div>
  );
}
