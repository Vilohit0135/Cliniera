export default function DoctorCard({ name, role, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        relative h-[360px] cursor-pointer rounded-2xl bg-white
        transition-transform hover:-translate-y-1
      "
    >
      {/* TOP SHADOW / GLOW */}
      <div
        className="
          pointer-events-none
          absolute top-0 left-4 right-4 h-8
          rounded-t-xl
          bg-gradient-to-b
          from-[#E56027]/35 to-transparent
        "
      />

      {/* IMAGE AREA */}
      <div className="absolute top-4 left-4 right-4 bottom-24 overflow-hidden rounded-xl bg-[#d9d9d9]">
        {image && (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* INFO STRIP */}
      <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-[#E56027] py-4 text-center text-white">
        <p className="text-[15px] font-semibold">{name}</p>
        <p className="text-[13px] font-medium opacity-90">{role}</p>
        <div className="mx-auto my-2 h-[1.5px] w-40 bg-white/80" />
      </div>
    </div>
  );
}
