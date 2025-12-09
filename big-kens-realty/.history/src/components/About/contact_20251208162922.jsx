import contact from "../../assets/image_about/contact.png";

export default function ContactSection() {
  return (
    <section className="py-20 bg-[#0A1023] text-white px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
      <p className="text-gray-400 text-center mb-16">
        Whether you have a question, suggestion, or need support, feel free to contact us. Our team is always ready to assist you.
      </p>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={contact}
            alt="Contact Phone"
            className="rounded-lg shadow-lg w-full max-w-sm"
          />
        </div>

        {/* Right Form */}
        <form className="space-y-4 bg-[#10172B] p-8 rounded-2xl shadow-lg">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 bg-[#C8FFD4] text-black rounded w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 bg-[#C8FFD4] text-black rounded w-full"
            />
          </div>

          <input
            type="text"
            placeholder="Phone Number"
            className="p-3 bg-[#C8FFD4] text-black rounded w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 bg-[#C8FFD4] text-black rounded w-full"
          />
          <input
            type="text"
            placeholder="Category"
            className="p-3 bg-[#C8FFD4] text-black rounded w-full"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="p-3 bg-[#C8FFD4] text-black rounded w-full resize-none"
          />

          <button className="bg-[#0F1831] text-[#C8FFD4] font-bold px-6 py-3 rounded w-full hover:bg-[#0D1425] transition">
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
}
