// Team Section
export default function TeamSection() {
const team = [1, 2, 3];


return (
<section className="py-20 bg-[#0F1831] text-center text-white">
<h2 className="text-3xl font-bold mb-12">Meet the Team</h2>
<div className="grid md:grid-cols-3 gap-10 px-6 md:px-20">
{team.map((_, index) => (
<div key={index} className="bg-[#C8FFD4] p-6 rounded-xl shadow-lg text-black">
<img src="/avatar.jpg" className="w-28 h-28 rounded-full mx-auto mb-4" />
<h3 className="font-bold text-xl">Kennedy Godwin</h3>
<p className="text-gray-700">CEO</p>
</div>
))}
</div>
</section>
);
}