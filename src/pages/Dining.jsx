const dining = [
  {
    name: "Poolside Bar",
    desc: "Relax with drinks by the pool under the open sky",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
  },
  {
    name: "VIP Bar",
    desc: "Exclusive drinks and premium ambiance",
    img: "https://s3.amazonaws.com/hoth.bizango/images/1318601/RiverSpirit_Aug24_24_PhotobyZackBenson_home.jpg",
  },
  {
    name: "VVIP Lounge",
    desc: "Ultra-luxury private experience",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    name: "Smoking Lounge",
    desc: "Comfortable space for relaxation and smoking",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
  },
  {
    name: "Fine Dining",
    desc: "Elegant meals prepared by top chefs",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
  },
  {
    name: "Grilling Arena",
    desc: "Live grilling experience with rich flavors",
    img: "https://slotwinyarena.pl/wp-content/uploads/2025/05/490020876_1066165205539240_5538512236779554168_n.jpg",
  },
  {
    name: "Club",
    desc: "Music, nightlife, and unforgettable vibes",
    img: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
  },
];

const Dining = () => {
  return (
    <section className="min-h-screen bg-[#1a120d] text-white px-6 py-20 pb-32">
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold">
          Dining & Experience
        </h1>
        <p className="mt-4 text-white/70 max-w-xl mx-auto">
          Discover a variety of dining and lifestyle experiences crafted for your comfort and enjoyment.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {dining.map((item, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden bg-[#2a1f1a] shadow-lg hover:scale-[1.03] transition duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-5">

              <h2 className="text-lg font-semibold">
                {item.name}
              </h2>

              <p className="text-sm text-white/70 mt-1">
                {item.desc}
              </p>

              <button className="mt-4 px-4 py-1.5 text-sm rounded-full border border-white/30 hover:bg-white/10 transition hover:scale-105">
                Explore
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Dining;