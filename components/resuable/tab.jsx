export default function Tab({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-full px-6 py-2 text-[14px] font-semibold transition
        ${active
          ? "bg-[#E56027] text-white"
          : "bg-[#f3f3f3] text-gray-600 hover:bg-gray-200"}
      `}
    >
      {label}
    </button>
  );
}
