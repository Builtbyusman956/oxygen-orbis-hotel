import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/oxygen.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50"></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 h-full flex items-center px-6 md:px-16"
      >
        <div className="max-w-xl">

          <p className="text-sm md:text-base text-white/70 tracking-widest uppercase">
            Oxygen Hotel
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-2">
            Experience Luxury Redefined
          </h1>

          <p className="mt-4 text-white/80 text-sm md:text-base">
            Premium rooms, fine dining, and unforgettable stays.
          </p>

          <div className="mt-6 flex gap-4">

            <button
              onClick={() => navigate("/rooms")}
              className="px-6 py-2 rounded-full bg-white text-black transition-all duration-300 hover:bg-white/90 hover:scale-105 active:scale-95"
            >
              View Rooms
            </button>

            <button className="px-6 py-2 rounded-full border border-white/30 transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:scale-105 active:scale-95">
              Book Now
            </button>

          </div>

        </div>
      </motion.div>

    </section>
  );
};

export default Home;