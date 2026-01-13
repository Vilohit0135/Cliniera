import Input from "./input";
import Select from "./select";
import PhoneInput from "./phoneInput";

export default function AppointmentForm() {
  return (
    <form className="rounded-xl bg-white p-4 shadow-lg"
    onSubmit={async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("FORM DATA:", data);

    await fetch("/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    alert("Appointment sent");
  }}>
      <div className="mb-5">
        <h3 className="text-[28px] font-semibold text-black">
          Get in Touch
        </h3>
        <p className="mt-1 text-[14px] text-black/60">
          You can reach us anytime
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">

      <Input
        name='name'
        placeholder="Name"
        icon="/icons_contact/Frame.svg"
      />

      <Input
        name="email"
        placeholder="Email"
        icon="/icons_contact/mail.svg"
      />

      <Select
      name='gender'
        placeholder="Gender"
        icon="/icons_contact/gender.svg"
        options={["Male", "Female", "Other"]}
      />

      <Input
        name='date'
        type="date"
        icon="/icons_contact/date.svg"
      />

      <div className="col-span-2 max-sm:col-span-1">
        <PhoneInput />
        {/* <input type="hidden" name="countryName" />
        <input type="hidden" name="phoneName" /> */}
      </div>



      </div>
      <div className="relative mt-5">
          <Select
          name='service'
          placeholder="Services"
          icon="/icons_contact/serve.svg"
          options={[
            "Clinical Trial Management",
            "Site Selection & Monitoring",
            "Regulatory Affairs",
            "Data Management & Analysis",
            "Medical Writing & Communication",
            "Product Approval"
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
          name='message'
          rows={4}
          placeholder="Message"
          className="
            w-full
            rounded-lg
            border-1 border-black/20
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

      <p className="mt-4 text-center text-[12px] leading-5 text-black/60">
        By contacting us, you agree to our{" "}
        <a href="/terms" className="font-medium text-black hover:underline">
          Terms of service
        </a>{" "}
        and{" "}
        <a href="/privacy-policy" className="font-medium text-black hover:underline">
          Privacy Policy
        </a>
      </p>
    </form>
  );
}
