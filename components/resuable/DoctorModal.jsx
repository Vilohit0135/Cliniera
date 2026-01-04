export default function DoctorModal({ doctor, onClose }) {
  if (!doctor) return null;

  return (
    /* OVERLAY */
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    >
      {/* MODAL CARD */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[420px] rounded-2xl bg-white p-6"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl font-bold"
        >
          ×
        </button>

        {/* IMAGE */}
        <div className="h-[260px] overflow-hidden rounded-xl bg-[#d9d9d9]">
          {doctor.image && (
            <img
              src={doctor.image}
              alt={doctor.name}
              className="h-full w-full object-cover object-top"
            />
          )}
        </div>

        {/* INFO */}
        <div className="mt-5 text-center">
          <h3 className="text-[18px] font-semibold">{doctor.name}</h3>
          <p className="text-[#E56027] font-medium">{doctor.role}</p>

          <p className="mt-4 text-[14px] text-gray-600 text-justify leading-7 ">
            {doctor.description}
          </p>
        </div>
      </div>
    </div>
  );
}
