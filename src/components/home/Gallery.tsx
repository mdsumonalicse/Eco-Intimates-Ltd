import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { url: "https://i.postimg.cc/PrdW8Dcp/12.jpg", title: "Production Line", size: "col-span-2 row-span-2" },
    { url: "https://i.postimg.cc/J4RNBXgb/13.jpg", title: "Knitting Hall", size: "col-span-1 row-span-1" },
    { url: "https://i.postimg.cc/ncn4Qm54/16.jpg", title: "Quality Control", size: "col-span-1 row-span-1" },
    { url: "https://i.postimg.cc/CLwGf8tn/2.jpg", title: "Exterior View", size: "col-span-2 row-span-1" },
    { url: "https://i.postimg.cc/kX7QtSZB/4.jpg", title: "Cutting Section", size: "col-span-1 row-span-1" },
    { url: "https://i.postimg.cc/ZKJ8yNgW/8.jpg", title: "Packaging Hub", size: "col-span-1 row-span-1" },
    { url: "https://i.postimg.cc/xCyk0x9W/3.jpg", title: "R&D Lab", size: "col-span-1 row-span-1" },
    { url: "https://i.postimg.cc/G2JBc7c0/14.jpg", title: "Staff Lounge", size: "col-span-1 row-span-1" },
  ];

  return (
    <section className="py-32 bg-soft-gray" id="gallery">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-emerald font-tech font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Visual Journey</span>
          <h2 className="text-4xl lg:text-5xl font-tech font-bold text-navy mb-8 uppercase tracking-tighter">
            Our <span className="text-emerald italic">Facility</span>
          </h2>
          <div className="h-[2px] w-32 bg-emerald/30 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`${img.size} relative group overflow-hidden rounded-[40px] cursor-pointer`}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-tech font-bold uppercase tracking-widest text-xs md:text-sm">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
