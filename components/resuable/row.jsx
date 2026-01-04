export default function Row({ day, time, icon }) {
  return (
    <div className="flex items-center justify-between text-black font-semibold">
      <div className="flex items-center gap-2">
        {icon && <img src={icon} alt="" className="h-4 w-4" />}
        <span>{day}</span>
      </div>
      <span>{time}</span>
    </div>
  );
}
