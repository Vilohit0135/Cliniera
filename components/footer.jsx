import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#E56027] text-white">
      {/* MAIN FOOTER */}
      <div
        className="
          mx-auto max-w-[1440px] py-15

          px-16                 /* laptop – unchanged */
          max-md:px-6           /* mobile – unchanged */
          max-sm:px-4           /* small mobile */

          /* ONLY wider than laptop */
          xl:max-w-[1600px]
          xl:px-12

          2xl:max-w-[1800px]
          2xl:px-10
        "
      >

        <div
          className="
            grid grid-cols-5 gap-12

            /* TABLET */
            max-lg:grid-cols-2

            /* MOBILE */
            max-md:grid-cols-1
          "
        >
          {/* BRAND (TOP ON MOBILE) */}
          <div
            className="
              flex flex-col items-start text-left
              col-span-1

              max-lg:col-span-2
              max-md:col-span-1
              max-md:order-1
            "
          >
            <div className="bg-white rounded-3xl p-3 inline-flex">
              <img
                src="/Cliniera_logo_tran.webp"
                alt="CliniEra Logo"
                className="h-10"
              />
            </div>

            <p className="mt-4 max-w-[280px] text-[14px] leading-relaxed text-white/90">
              End-to-end clinical research solutions delivering quality,
              compliance, and innovation across every phase.
            </p>

            <Link href="/contact">
              <button className="mt-6 rounded-full bg-white px-6 py-2 text-[14px] font-medium text-[#E56027]">
                Make Appointment
              </button>
            </Link>
          </div>

          {/* LINKS + INFO GRID */}
          <div
            className="
              col-span-4
              grid grid-cols-4 gap-12

              /* TABLET */
              max-lg:grid-cols-2

              /* MOBILE: 3 COLUMN GRID */
              max-md:grid-cols-3
              max-md:order-2
            "
          >
            {/* SERVICES */}
            <div>
              <h4 className="text-[16px] font-semibold">Services</h4>
              <div className="mt-2 h-[2px] w-25 bg-white" />
              <ul className="mt-4 space-y-3 text-[14px] text-white/90">
                <li><Link href="/services/clinical-trial-management">Clinical Trial</Link></li>
                <li><Link href="/services/site-selection-monitoring">Site Monitoring</Link></li>
                <li><Link href="/services/regulatory-affairs">Regulatory</Link></li>
                <li><Link href="/services/data-management-analysis">Data</Link></li>
              </ul>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-[16px] font-semibold">Quick Links</h4>
              <div className="mt-2 h-[2px] w-25 bg-white" />
              <ul className="mt-4 space-y-3 text-[14px] text-white/90">
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            {/* INFORMATION */}
            <div>
              <h4 className="text-[16px] font-semibold">Information</h4>
              <div className="mt-2 h-[2px] w-25 bg-white" />
              <ul className="mt-4 space-y-3 text-[14px] text-white/90">
                <li>(+91) 9959279640</li>
                <li>support@cliniera.in</li>
                <li>India</li>
              </ul>
            </div>

            {/* SOCIAL MEDIA (DESKTOP COLUMN) */}
              <div className="max-md:hidden">
                {/* HEADING */}
                <h4 className="text-[16px] font-semibold">Social Media</h4>

                {/* WHITE SEPARATOR */}
                <div className="mt-2 h-[2px] w-8 bg-white" />

                {/* SOCIAL LINKS */}
                <ul className="mt-4 space-y-4 text-[14px] text-white/90">
                  {/* <li className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                      <img src="/icons/facebook.svg" className="h-5 w-5" />
                    </span>
                    Facebook
                  </li> */}

                  <li className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                      <img src="/icons/linkedin.svg" className="h-5 w-5" />
                    </span>
                    LinkedIn
                  </li>
{/* 
                  <li className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                      <img src="/icons/twitter.svg" className="h-5 w-5" />
                    </span>
                    Twitter
                  </li> */}
                </ul>
              </div>

          </div>

          {/* SOCIAL MEDIA – MOBILE HORIZONTAL ROW */}
          <div
            className="
              hidden max-md:flex
              order-3
              mt-4
              flex-col
              items-start
              gap-4
            "
          >
            {/* HEADING */}
            <h4 className="text-[16px] font-semibold">
              Social Media
            </h4>

            {/* WHITE SEPARATOR */}
            <div className="h-[2px] w-25 bg-white" />

            {/* ICON BUTTONS */}
            <div className="flex gap-4">
              {/* <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <img src="/icons/facebook.svg" className="h-5 w-5" />
              </div> */}

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <img src="/icons/linkedin.svg" className="h-5 w-5" />
              </div>

              {/* <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <img src="/icons/twitter.svg" className="h-5 w-5" />
              </div> */}
            </div>
          </div>


        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/30">
        <div
          className="
            mx-auto max-w-[1440px]
            py-6

            px-16                 /* laptop – unchanged */
            max-md:px-6           /* mobile – unchanged */

            /* ONLY wider than laptop */
            xl:max-w-[1600px]
            xl:px-12

            2xl:max-w-[1800px]
            2xl:px-10

            flex justify-between items-center
            text-[13px] text-white/90
            max-md:flex-col max-md:gap-4
          "
        >

          <p>© CliniEra 2026. Developed by SuperCX</p>
          <div className="flex gap-6">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
