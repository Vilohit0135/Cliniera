"use client";

import AppointmentForm from "../../components/resuable/appointmet";
import WorkHours from "../../components/resuable/workHoursCard";

export default function ContactPage() {
  return (
    <section className="w-full bg-[#f3d5bd] py-10 pb-0">
      <div
        className="
          mx-auto max-w-[1440px]
          px-16
          2xl:px-[120px]
          max-lg:px-10
          max-md:px-6
        "
      >
        {/* CONTENT */}
        <div
          className="
            mt-12 grid grid-cols-2 gap-20 items-start

            max-lg:grid-cols-1
            max-lg:gap-16
          "
        >
          {/* LEFT CONTENT */}
          <div className="max-w-[520px] mt-10 max-lg:mt-0">
            {/* HEADER */}
            <p className="text-[14px] font-semibold uppercase tracking-wider text-[#E56027]">
              Appointment
            </p>

            <h1
              className="
                mt-2 max-w-[540px]
                text-[44px] leading-[52px] font-semibold text-black

                max-md:text-[34px]
                max-md:leading-[42px]
              "
            >
              Contact Us
            </h1>

            <p
              className="
                mt-8 text-[16px] leading-6 text-black/70
                max-md:text-[14px]
              "
            >
              Email, call, or complete the form to learn how Cliniera can support
              your clinical and regulatory needs.
            </p>

            <div className="mt-6 space-y-2 text-[14px] text-black/80">
              <p>
                <span className="font-medium">Email:</span> info@cliniera.com
              </p>
              <p>
                <span className="font-medium">Phone:</span> +91 98765 43210
              </p>
            </div>

            {/* OPTIONAL INFO BLOCKS */}
            <div
              className="
                mt-10 grid grid-cols-2 gap-6
                text-[13px] text-black/70

                max-md:grid-cols-1
              "
            >
              <div>
                <h4 className="font-semibold text-[#E56027]">
                  Customer Support
                </h4>
                <p className="mt-2">
                  Our support team is available to address your queries.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#E56027]">
                  Media Inquiries
                </h4>
                <p className="mt-2">
                  For media-related questions, contact press@cliniera.com
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <div
            className="
              w-full max-w-[500px]
              bg-white rounded-2xl shadow-xl p-8

              -translate-y-12 translate-x-16

              max-lg:translate-x-0
              max-lg:translate-y-0
              max-lg:mx-auto
              max-lg:p-6
            "
          >
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}



