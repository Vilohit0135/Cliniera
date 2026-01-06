export default function Input({ placeholder, type = "text", icon }) {
  return (
    <div className="relative">
      {icon && (
        <img
          src={icon}
          alt=""
          className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2"
        />
      )}

      <input
        type={type}
        placeholder={placeholder}
        className={`
          h-[52px] w-full
          rounded-full
          border-1 border-black/20
          bg-white
          ${icon ? "pl-12" : "pl-6"} pr-4
          text-[14px] font-semibold text-black
          placeholder:text-black
          focus:outline-none
        `}
      />
    </div>
  );
}
