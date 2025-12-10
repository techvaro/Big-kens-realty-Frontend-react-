export default function TimelineSection() {
  return (
    <div>
    {/* DESKTOP / LARGE SCREENS */}
    <section className="hidden lg:block py-20 bg-[#0A1023] text-white text-center">
        <h2 className="text-3xl font-bold mb-2">Our Story</h2>
        <p className="text-gray-300 mb-16">A Journey of Commitment and Growth</p>

        <div className="relative max-w-4xl mx-auto">
        {/* Center Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-600"></div>

        <div className="space-y-20">

            {/* === 2021 === */}
            <div className="relative flex items-center">
            {/* Left card */}
            <div className="w-1/2 pr-10 text-right">
                <div className="bg-[#C8FFD4] text-black p-6 rounded-xl shadow-lg inline-block">
                <h3 className="font-bold text-lg">2021</h3>
                <p className="font-semibold">Company Founded</p>
                <p className="text-sm mt-2">
                    Founded to create innovative solutions that enhance everyday life.
                </p>
                </div>
            </div>

            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#C8FFD4] rounded-full border-4 border-[#0A1023]"></div>

            {/* Right empty */}
            <div className="w-1/2"></div>
            </div>

            {/* === 2023 (Clients) === */}
            <div className="relative flex items-center">
            {/* Empty left */}
            <div className="w-1/2"></div>

            {/* Right card */}
            <div className="w-1/2 pl-10 text-left">
                <div className="bg-[#C8FFD4] text-black p-6 rounded-xl shadow-lg inline-block">
                <h3 className="font-bold text-lg">2023</h3>
                <p className="font-semibold">300+ Clients Satisfied</p>
                <p className="text-sm mt-2">
                    Innovating solutions that enhance everyday life.
                </p>
                </div>
            </div>

            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#C8FFD4] rounded-full border-4 border-[#0A1023]"></div>
            </div>

            {/* === 2023 (Expansion) === */}
            <div className="relative flex items-center">
            {/* Left card */}
            <div className="w-1/2 pr-10 text-right">
                <div className="bg-[#C8FFD4] text-black p-6 rounded-xl shadow-lg inline-block">
                <h3 className="font-bold text-lg">2023</h3>
                <p className="font-semibold">First Major Expansion</p>
                <p className="text-sm mt-2">
                    Enhancing everyday life through innovation.
                </p>
                </div>
            </div>

            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#C8FFD4] rounded-full border-4 border-[#0A1023]"></div>

            {/* Right empty */}
            <div className="w-1/2"></div>
            </div>

        </div>
        </div>
    </section>

    {/* MOBILE / TABLET */}
    <section className="lg:hidden py-20 bg-[#0A1023] text-white text-center">
        <h2 className="text-3xl font-bold mb-10">Our Story</h2>
        <p className="text-gray-300 mb-16">A Journey of Commitment and Growth</p>

        <div className="flex flex-col items-center space-y-12">

        <div className="bg-[#C8FFD4] text-black p-6 rounded-xl shadow max-w-md w-full">
            <h3 className="font-bold text-lg">2021 — Company Founded</h3>
            <p>Founded to create innovative solutions.</p>
        </div>

        <div className="bg-[#C8FFD4] text-black p-6 rounded-xl shadow max-w-md w-full">
            <h3 className="font-bold text-lg">2023 — 300+ Clients Satisfied</h3>
            <p>Continuing to deliver excellence daily.</p>
        </div>

        <div className="bg-[#C8FFD4] text-black p-6 rounded-xl shadow max-w-md w-full">
            <h3 className="font-bold text-lg">2023 — First Major Expansion</h3>
            <p>Enhancing everyday life through innovation.</p>
        </div>

        </div>
  </section>
</div>

  );
}