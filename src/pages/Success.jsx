import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoCheckmarkDoneCircle } from "react-icons/io5";


const Success = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#1a120d] text-white flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#2a1f1a] p-8 md:p-12 rounded-2xl text-center max-w-md w-full shadow-lg"
      >
        <div className="text-5xl flex justify-center  mb-4"><IoCheckmarkDoneCircle /></div>
        <h1 className="text-2xl md:text-3xl font-bold">
          Booking Confirmed
        </h1>
        <p className="text-white/70 mt-3">
          Your reservation has been received. Our team will contact you shortly.
        </p>
        <div className="mt-6 flex flex-col gap-3">

          <button
            onClick={() => navigate("/")}
            className="w-full bg-white text-black py-2 rounded-full hover:bg-white/90 transition"
          >
            Back to Home
          </button>

          <button
            onClick={() => navigate("/rooms")}
            className="w-full border border-white/30 py-2 rounded-full hover:bg-white/10 transition"
          >
            Explore More Rooms
          </button>

        </div>

      </motion.div>

    </section>
  );
};

export default Success;