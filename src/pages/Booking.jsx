import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";


const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedRoom = location.state?.name || "Not Selected";

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    smoking: "No",
    country: "",
    request: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      console.log("Booking Data:", { ...form, room: selectedRoom });

      navigate("/success");
    }, 2000);
  };

  return (
    <section className="min-h-screen bg-[#1a120d] text-white px-6 py-20 pb-32">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold">
          Book Your Stay
        </h1>
        <p className="text-white/70 mt-3">
          Complete the form below to reserve your room
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-[#2a1f1a] p-6 md:p-10 rounded-2xl space-y-6 shadow-lg"
      >
        <div>
          <label className="text-sm text-white/70">Room Type</label>
          <input
            type="text"
            value={selectedRoom}
            disabled
            className="w-full mt-1 px-4 py-2 rounded-md bg-black/30 text-white"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="px-4 py-2 rounded-md bg-black/30 outline-none"
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="px-4 py-2 rounded-md bg-black/30 outline-none"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="px-4 py-2 rounded-md bg-black/30 outline-none"
          />
          <input
            name="country"
            placeholder="Country"
            onChange={handleChange}
            className="px-4 py-2 rounded-md bg-black/30 outline-none"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="date"
            name="checkIn"
            onChange={handleChange}
            className="px-4 py-2 rounded-md bg-black/30"
          />
          <input
            type="date"
            name="checkOut"
            onChange={handleChange}
            className="px-4 py-2 rounded-md bg-black/30"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="number"
            name="adults"
            min="1"
            placeholder="Adults"
            onChange={handleChange}
            className="px-4 py-2 rounded-md bg-black/30"
          />
          <input
            type="number"
            name="children"
            min="0"
            placeholder="Children"
            onChange={handleChange}
            className="px-4 py-2 rounded-md bg-black/30"
          />
        </div>
        <div>
          <label className="text-sm text-white/70">Smoking Preference</label>
          <select
            name="smoking"
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 rounded-md bg-black/30"
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>
        <textarea
          name="request"
          placeholder="Special Requests (optional)"
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-black/30 h-24"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-black py-3 rounded-full font-semibold transition hover:bg-white/90 hover:scale-[1.02] disabled:opacity-50"
        >
          {loading ? "⏳ Processing..." : "Confirm Booking"}
        </button>

      </form>
    </section>
  );
};

export default Booking;