import Input from "./input";
import Select from "./select";

export default function AppointmentForm() {
  return (
    <form className="rounded-xl bg-white p-8 shadow-lg">

      <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">

      <Input
        placeholder="Name"
        icon="/icons_contact/Frame.svg"
      />

      <Input
        placeholder="Email"
        icon="/icons_contact/mail.svg"
      />

      <Input
        placeholder="Telephone"
        icon="/icons_contact/phone.svg"
      />

      <Input
        placeholder="Number"
        icon="/icons_contact/num.svg"
      />

      <Input
        type="date"
        icon="/icons_contact/date.svg"
      />

      <Select
        placeholder="Gender"
        icon="/icons_contact/gender.svg"
        options={["Male", "Female", "Other"]}
      />



      </div>
      <div className="relative mt-5">
          <Select
          placeholder="Services"
          icon="/icons_contact/serve.svg"
          options={[
            "Clinical Research",
            "Regulatory Affairs",
            "Medical Writing",
          ]}
        />

      </div>
  

      {/* MESSAGE */}
      <div className="relative mt-5">
        {/* ICON */}
        <img
          src="/icons_contact/msg.svg"
          alt=""
          className="absolute left-5 top-4 h-4 w-4"
        />

        <textarea
          rows={4}
          placeholder="Message"
          className="
            w-full
            rounded-lg
            border-2 border-black
            bg-white
            pl-12 pr-4 py-3
            text-[14px] font-semibold text-black
            placeholder:text-black
            focus:outline-none
          "
        />
      </div>


      {/* SUBMIT */}
      <button
        type="submit"
        className="mt-6 h-[48px] w-full rounded-full bg-[#E56027] text-[14px] font-semibold text-white hover:bg-[#ea6a10] transition"
      >
        Make Appointment
      </button>
    </form>
  );
}
