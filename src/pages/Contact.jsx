const Contact = () => {
  return (
    <section className="min-h-screen bg-[#1a120d] text-white px-6 py-20 pb-32">
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold">
          Contact Us
        </h1>
        <p className="mt-4 text-white/70">
          We’re here to assist you with your bookings and inquiries.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="space-y-6">

          <div className="bg-[#2a1f1a] p-5 rounded-xl">
            <h3 className="font-semibold">Phone</h3>
            <p className="text-white/70 mt-1">+234 800 000 0000</p>
          </div>

          <div className="bg-[#2a1f1a] p-5 rounded-xl">
            <h3 className="font-semibold">Email</h3>
            <p className="text-white/70 mt-1">support@oxygenhotel.com</p>
          </div>

          <div className="bg-[#2a1f1a] p-5 rounded-xl">
            <h3 className="font-semibold">Location</h3>
            <p className="text-white/70 mt-1">
              Ibadan, Nigeria
            </p>
          </div>

        </div>

        {/* Contact Form */}
        <form className="bg-[#2a1f1a] p-6 rounded-xl space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md bg-black/30 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-md bg-black/30 outline-none"
          />

          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded-md bg-black/30 h-32"
          ></textarea>

          <button className="w-full bg-white text-black py-2 rounded-full hover:bg-white/90 transition hover:scale-[1.02]">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;