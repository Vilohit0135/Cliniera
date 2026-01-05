import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#E56027] text-white">
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-[1440px] px-16 py-16">
        <div className="grid grid-cols-5 gap-12 max-lg:grid-cols-2 max-md:grid-cols-1">

          {/* BRAND */}
          <div className="col-span-1 max-lg:col-span-2">
            {/* LOGO */}
            <img
              src="/Cliniera_logo_tran.webp"
              alt="CliniEra Logo"
              className="h-13"
            />

            <p className="mt-4 max-w-[280px] text-[14px] leading-relaxed text-white/90">
              End-to-end clinical research solutions delivering quality,
              compliance, and innovation across every phase.
            </p>

            {/* MAKE APPOINTMENT */}
            <Link href="/contact">
              <button className="mt-6 rounded-full bg-white px-6 py-2 text-[14px] font-medium text-[#E56027] hover:bg-white/90 transition">
                Make Appointment
              </button>
            </Link>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-[16px] font-semibold">Services</h4>
            <div className="mt-2 h-[2px] w-25 bg-white" />

            <ul className="mt-4 space-y-3 text-[14px] text-white/90">
              <li><Link href="/services/clinical-trial-management">Clinical Trial Management</Link></li>
              <li><Link href="/services/site-selection-monitoring">Site Selection & Monitoring</Link></li>
              <li><Link href="/services/regulatory-affairs">Regulatory Affairs</Link></li>
              <li><Link href="/services/data-management-analysis">Data Management & Analysis</Link></li>
              <li><Link href="/services/medical-writing">Medical Writing & Communication</Link></li>
              <li><Link href="/services/product-approval">Product Approval</Link></li>
            </ul>
          </div>

          {/* QUICK LINKS (SCROLL) */}
          <div>
            <h4 className="text-[16px] font-semibold">Quick Links</h4>
            <div className="mt-2 h-[2px] w-25 bg-white" />

            <ul className="mt-4 space-y-3 text-[14px] text-white/90">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h4 className="text-[16px] font-semibold">Social Media</h4>
            <div className="mt-2 h-[2px] w-25 bg-white" />

            <ul className="mt-4 space-y-4 text-[14px] text-white/90">
              <li className="flex items-center gap-3">
                <img src="/icons/facebook.svg" className="h-6 w-6" />
                Facebook
              </li>
              <li className="flex items-center gap-3">
                <img src="/icons/linkedin.svg" className="h-6 w-6" />
                LinkedIn
              </li>
              <li className="flex items-center gap-3">
                <img src="/icons/twitter.svg" className="h-6 w-6" />
                Twitter
              </li>
            </ul>
          </div>

          {/* INFORMATION */}
          <div>
            <h4 className="text-[16px] font-semibold">Information</h4>
            <div className="mt-2 h-[2px] w-25 bg-white" />

            <ul className="mt-4 space-y-4 text-[14px] text-white/90">
              <li className="flex items-start gap-3">
                <img src="/icons/phone.svg" className="h-4 w-4 mt-1" />
                (+1) 2345-6789-1123
              </li>
              <li className="flex items-start gap-3">
                <img src="/icons_contact/mail1.svg" className="h-4 w-4 mt-1" />
                info@cliniera.com
              </li>
              <li className="flex items-start gap-3">
                <img src="/icons_contact/location.svg" className="h-4 w-4 mt-1" />
                Head Office<br />India
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/30">
        <div className="mx-auto max-w-[1440px] px-16 py-6 flex items-center justify-between text-[13px] text-white/90 max-md:flex-col max-md:gap-4">
          <p>© CliniEra 2026. Developed by SuperCX</p>

          <div className="flex items-center gap-6">
            <Link href="/terms">Terms & Service</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
