import Image from "next/image";
import Link from "next/link";


export default function Hero() {
  return (
    <section className="relative h-[800px] w-full bg-[#f5f5f5]">
      
      {/* LEFT BACKGROUND PANEL */}
      <div className="absolute inset-y-0 left-0 w-full bg-[#f3d5bd]"></div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 mx-auto h-full max-w-[1440px] px-16">
        <div className="grid h-full grid-cols-2 items-center">
          
          {/* LEFT CONTENT AREA */}
          <div className="max-w-[640px]">
              <div className="-translate-y-12" >
                            {/* MAIN TAGLINE */}
              <h1 className="text-[56px] leading-[62px] font-semibold text-black">
                Our Drive, Your Destination
              </h1>

              {/* KEYWORDS ROW */}
              <div className="mt-6 flex items-center gap-x-4 text-[16px] font-semibold tracking-widest text-black/80 whitespace-nowrap max-lg:whitespace-normal max-lg:flex-wrap">
                <span>INNOVATE</span>
                <span className="text-black/40">|</span>
                <span>ACCELERATE</span>
                <span className="text-black/40">|</span>
                <span>SUCCEED</span>
                <span className="text-black/40">|</span>
                <span>PRECISION</span>
                <span className="text-black/40">|</span>
                <span>PERFORMANCE</span>
                <span className="text-black/40">|</span>
                <span>PROGRESS</span>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-6 text-[16px] leading-relaxed text-black/90">
                Cliniera empowers medtech innovators with end-to-end clinical
                development expertise, transforming research into measurable
                real-world results.
              </p>

              <div className="mt-8 flex items-center gap-6 ">
                {/* Primary Button */}
              <Link
                href="/contact"
                className="inline-flex h-[48px] items-center px-6 rounded-full bg-[#E56027] text-white text-[14px] font-medium hover:bg-[#ea6a10] transition"
              >
                Get Started
              </Link>


                {/* Secondary Button */}
                <button className="h-[48px] px-6 rounded-full border border-[#E56027] text-[#E56027] text-[14px] font-medium flex items-center gap-2 hover:bg-[#f97316]/10 transition">
                  <span className="text-[14px]">☎</span>
                  <span>(+1)2345-6789-1123</span>
                </button>
              </div>

            </div>

            <div className="mt-10 flex items-start gap-12">

              <div className="flex items-start gap-3">
                <img
                  src="/icons/Frame1.svg"
                  alt="Healthy Advice"
                  className="h-10 w-10"
                />

                <div>
                  <h4 className="text-[18px] font-semibold text-black">
                    Healthy Advice
                  </h4>
                  <p className="mt-1 text-[15px] leading-relaxed text-black/70">
                    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3">
                <img
                  src="/icons/Frame.svg"
                  alt="24/7 Support"
                  className="h-10 w-10"
                />

                <div>
                  <h4 className="text-[18px] font-semibold text-black">
                    24/7 Support
                  </h4>
                  <p className="mt-1 text-[15px] leading-relaxed text-black/70">
                    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                  </p>
                </div>
              </div>
            </div>


          </div>



        {/* RIGHT CONTENT AREA */}
        <div className="relative flex justify-start -translate-y-8 translate-x-9">

          
          {/* GREY IMAGE PLACEHOLDER */}
          {/* <div className="h-[650px] w-[450px] rounded-md bg-[#d9d9d9]"></div> */}
          <Image
            src="/hero1.png"
            alt="Cliniera Healthcare"
            width={450}
            height={650}
            className="h-[830px] w-[650px] rounded-md object-cover"
          />


          {/* CERTIFIED CARE CARD */}
          {/* <div className="absolute  right-[200px] top-24 max-w-[200px] rounded-xl bg-[#E56027] px-4 py-3 text-white shadow-lg">
            <div className="flex items-start gap-3">
              <div className="flex w-8 items-center justify-center rounded-full bg-white/20">
                ⭐
              </div>
              <div>
                <p className="text-[12px] font-semibold">Certified Care</p>
                <p className="mt-1 text-[11px] leading-snug text-white/90">
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div> */}

          {/* CLIENT RATING CARD */}
          {/* <div className="absolute bottom-20 left-[-40px] rounded-xl bg-white px-4 py-3 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="text-[#E56027]">⭐</span>
              <p className="text-[12px] font-semibold text-black">
                4.9 Clients Rating
              </p>
            </div>

            <div className="mt-2 flex items-center gap-1">
              <div className="h-6 w-6 rounded-full bg-gray-200"></div>
              <div className="h-6 w-6 rounded-full bg-gray-200"></div>
              <div className="h-6 w-6 rounded-full bg-gray-200"></div>
              <div className="h-6 w-6 rounded-full bg-gray-200"></div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E56027] text-white text-sm">
                +
              </div>
            </div>
          </div> */}

        </div>
        </div>
      </div>

      {/* STATS BANNER */}

<div className="absolute left-1/2 bottom-[-110px] z-20 w-full -translate-x-1/2 -translate-y-8">
  <div className="flex justify-between bg-[#E56027] px-8 py-3 text-white shadow-lg">

    {/* ITEM 1 */}
    <div className="flex max-w-[260px] items-center gap-3">
      {/* ICON */}
      <img
        src="/icons/Icon1.svg"
        className="h-9 w-9 shrink-0"
      />

      {/* TEXT COLUMN */}
      <div className="flex flex-col">
        
        {/* TOP ROW */}
        <div className="flex items-baseline gap-2">
          <p className="text-[26px] leading-[30px] font-semibold shrink-0">
            50+
          </p>
          <p className="text-[12px] font-medium">
            Years of Experience
          </p>
        </div>

        {/* DESCRIPTION (starts under 50+) */}
        <p className="mt-1 text-[11px] leading-[16px] text-white/85 pl-[2px]">
          Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
      </div>
    </div>

    {/* ITEM 2 */}

    <div className="flex max-w-[260px] items-center gap-3">
      <img src="/icons/Icon2.svg" className="h-9 w-9 shrink-0" />

      <div className="flex flex-col">
        <div className="flex items-baseline gap-2">
          <p className="text-[26px] leading-[30px] font-semibold shrink-0">
            3,124+
          </p>
          <p className="text-[12px] font-medium">
            Satisfied Clients
          </p>
        </div>

        <p className="mt-1 text-[11px] leading-[16px] text-white/85 pl-[2px]">
          Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
      </div>
    </div>


    {/* ITEM 3 */}
   
    <div className="flex max-w-[260px] items-center gap-3">
      <img src="/icons/Icon3.svg" className="h-9 w-9 shrink-0" />

      <div className="flex flex-col">
        <div className="flex items-baseline gap-2">
          <p className="text-[26px] leading-[30px] font-semibold shrink-0">
            231+
          </p>
          <p className="text-[12px] font-medium">
            Experienced Doctors
          </p>
        </div>

        <p className="mt-1 text-[11px] leading-[16px] text-white/85 pl-[2px]">
          Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
      </div>
    </div>


    {/* ITEM 4 */}

    <div className="flex max-w-[260px] items-center gap-3">
      <img src="/icons/Icon4.svg" className="h-9 w-9 shrink-0" />

      <div className="flex flex-col">
        <div className="flex items-baseline gap-2">
          <p className="text-[26px] leading-[30px] font-semibold shrink-0">
            17+
          </p>
          <p className="text-[12px] font-medium">
            Hospital Rooms
          </p>
        </div>

        <p className="mt-1 text-[11px] leading-[16px] text-white/85 pl-[2px]">
          Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
      </div>
    </div>


  </div>
</div>







    </section>
  );
}


