import { IoMdHome } from "react-icons/io";
import { IoBed } from "react-icons/io5";
import { MdDining } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate(); 

  const navItems = [
    { icon: IoMdHome, label: "Home", path: "/" },
    { icon: IoBed, label: "Rooms", path: "/rooms" },
    { icon: MdDining, label: "Dining", path: "/dining" },
    { icon: CiCalendar, label: "Booking", path: "/booking" },
    { icon: FaPhoneAlt, label: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-end gap-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl text-white shadow-2xl border border-white/20">

        {navItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              onClick={() => navigate(item.path)} 
              className="group relative flex flex-col items-center cursor-pointer"
            >
              <span className="absolute -top-10 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 bg-[#2a1f1a]/80 px-3 py-1 rounded-md text-xs whitespace-nowrap">
                {item.label}
              </span>
              <div className="transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-125 text-white/80 group-hover:text-white">
                <Icon size={24} />
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Navbar2;