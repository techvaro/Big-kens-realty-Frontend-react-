// Contact Section
export default function ContactSection() {
return (
<section className="py-20 bg-[#0A1023] text-white px-6 md:px-20">
<h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>


<div className="grid md:grid-cols-2 gap-10">
<img src="/phone.jpg" className="rounded-lg shadow-lg" />


<form className="space-y-4 bg-[#10172B] p-6 rounded-lg shadow-lg">
<div className="grid grid-cols-2 gap-4">
<input placeholder="First Name" className="p-3 bg-[#0A1023] rounded" />
<input placeholder="Last Name" className="p-3 bg-[#0A1023] rounded" />
</div>
<input placeholder="Phone Number" className="p-3 bg-[#0A1023] rounded w-full" />
<input placeholder="Email" className="p-3 bg-[#0A1023] rounded w-full" />
<input placeholder="Category" className="p-3 bg-[#0A1023] rounded w-full" />
<textarea placeholder="Message" className="p-3 bg-[#0A1023] rounded w-full"></textarea>


<button className="bg-[#C8FFD4] text-black font-bold px-6 py-3 rounded w-full">Send</button>
</form>
</div>
</section>
);
}