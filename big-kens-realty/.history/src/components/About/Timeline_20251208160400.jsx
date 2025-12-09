// Timeline Section
export default function TimelineSection() {
return (
<section className="py-20 bg-[#0A1023] text-white text-center">
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
);
}