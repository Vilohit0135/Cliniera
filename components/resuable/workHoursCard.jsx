import Row from './row'

export default function WorkHours() {
  return (
    <div className="self-start rounded-xl bg-white p-8 shadow-lg max-w-[300px]">

      <h3 className="text-[20px] font-semibold text-black">
        Work Hours
      </h3>

      <p className="mt-2 text-[14px] text-black/70">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="mt-6 space-y-3 text-[14px] text-black">
        <Row day="Monday" time="9AM - 5PM" />
        <Row day="Tuesday" time="9AM - 5PM" />
        <Row day="Wednesday" time="9AM - 5PM" />
        <Row day="Friday" time="9AM - 5PM" />
        <Row day="Saturday" time="1PM - 8PM" />
        <Row day="Sunday" time="10AM - 4PM" />
      </div>



      {/* <button className="mt-6 h-[44px] w-full rounded-full bg-[#E56027] text-[14px] font-medium text-white hover:bg-[#ea6a10] transition">
        Contact Us
      </button> */}
    </div>
  );
}
