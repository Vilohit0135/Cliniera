"use client";

import AppointmentForm from "../../components/resuable/appointmet";
import WorkHours from "../../components/resuable/workHoursCard";

export default function ContactPage() {
  return (
    <section className="w-full bg-[#f3d5bd] py-24 pb-0">
      <div className="mx-auto max-w-[1440px] px-16">

        {/* HEADER */}
        <p className="text-[14px] font-semibold uppercase tracking-wider text-white/80">
          Appointment
        </p>

        <h1 className="mt-2 max-w-[540px] text-[44px] leading-[52px] font-semibold text-white">
          Schedule Your Care with Our Certified Experts
        </h1>

        {/* CONTENT */}
        <div className="mt-20 flex items-start">

          {/* FORM */}
          <div className="w-full max-w-[750px]">
            <AppointmentForm />
          </div>

          {/* IMAGE + WORK HOURS */}
          <div className="relative -mt-8 h-[720px] w-[420px] bg-[#d9d9d9]">

            {/* WORK HOURS – TOP RIGHT */}
            <div className="absolute -top-54 -right-28 z-10">
              <WorkHours />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
