export default function Tab({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center

        h-[44px]              /* ✅ same height */
        min-w-[140px]         /* ✅ same width */
        px-6

        rounded-full
        text-[14px] font-medium
        whitespace-nowrap     /* ✅ keeps text in one line */

        transition-all duration-200

        ${
          active
            ? "bg-[#E56027] text-white shadow-md"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }
      `}
    >
      {label}
    </button>
  );
}
