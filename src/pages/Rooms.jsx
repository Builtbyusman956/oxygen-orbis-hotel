import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const vipRoom = {
  name: "VIP Executive",
  price: "$350 / night",
  desc: "Luxury living with premium experience, private services and exclusive comfort.",
  img: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
};

const rooms = [
  {
    name: "Basic Room",
    price: "$80 / night",
    desc: "Simple comfort with essential amenities",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
  },
  {
    name: "Deluxe Room",
    price: "$120 / night",
    desc: "Comfort and elegance for your perfect stay",
    img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
  },
  {
    name: "Executive Room",
    price: "$180 / night",
    desc: "Designed for business and relaxation",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
];

const Rooms = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#1a120d] text-white px-6 py-20 pb-32">
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold">
          Explore Our Rooms
        </h1>
        <p className="mt-4 text-white/70 max-w-xl mx-auto">
          Choose from a variety of rooms designed for comfort, luxury, and relaxation.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px]">

          <img
            src={vipRoom.img}
            alt={vipRoom.name}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute bottom-0 p-6 md:p-10 max-w-xl">

            <p className="text-sm uppercase text-white/70">
              Premium Selection
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mt-2">
              {vipRoom.name}
            </h2>

            <p className="mt-3 text-white/80">
              {vipRoom.desc}
            </p>

            <div className="flex items-center gap-6 mt-6">

              <span className="text-lg font-semibold">
                {vipRoom.price}
              </span>

              <button
                onClick={() => navigate("/booking", { state: vipRoom })}
                className="px-6 py-2 rounded-full bg-white text-black hover:bg-white/90 hover:scale-105 transition"
              >
                Book VIP
              </button>

            </div>

          </div>

        </div>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {rooms.map((room, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group rounded-2xl overflow-hidden bg-[#2a1f1a] shadow-lg hover:scale-[1.03] transition duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={room.img}
                alt={room.name}
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-5">

              <h2 className="text-lg font-semibold">
                {room.name}
              </h2>

              <p className="text-sm text-white/70 mt-1">
                {room.desc}
              </p>

              <div className="flex items-center justify-between mt-4">

                <span className="font-semibold">
                  {room.price}
                </span><button
                  onClick={() => navigate("/booking", { state: room })}
                  className="px-4 py-1.5 text-sm rounded-full border border-white/30 hover:bg-white/10 transition hover:scale-105 active:scale-95"
                >
                  Book Now
                </button>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Rooms;