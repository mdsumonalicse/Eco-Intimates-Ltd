import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';

export default function DirectorsOverview() {
  const directors = [
    {
      name: "John Doe",
      role: "Managing Director",
      bio: "With over 25 years of experience in the textile industry, John has led Eco Intimates to become a global leader in sustainable manufacturing.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500"
    },
    {
      name: "Jane Smith",
      role: "Director of Operations",
      bio: "Jane oversees our state-of-the-art facilities, ensuring that technology and sustainability are integrated into every production line.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500"
    },
    {
      name: "Ahmed Raza",
      role: "Director of Sustainability",
      bio: "Ahmed is the visionary behind our Platinum LEED certification and our goal to reach net-zero emissions by 2030.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500"
    }
  ];

  return (
    <section className="py-32 bg-white" id="directors-overview">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-emerald font-tech font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Leadership</span>
          <h2 className="text-4xl lg:text-5xl font-tech font-bold text-navy mb-8 uppercase tracking-tighter">
            Our <span className="text-emerald italic">Directors</span>
          </h2>
          <div className="h-[2px] w-32 bg-emerald/30 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {directors.map((director, idx) => (
            <motion.div
              key={director.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className="relative rounded-[40px] overflow-hidden mb-8 aspect-[4/5] bg-soft-gray shadow-2xl">
                <img 
                  src={director.image} 
                  alt={director.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8 gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-emerald transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-emerald transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
              <h3 className="text-2xl font-tech font-bold text-navy mb-1 uppercase">{director.name}</h3>
              <p className="text-emerald font-bold text-sm uppercase tracking-widest mb-4">{director.role}</p>
              <p className="text-navy/50 font-medium leading-relaxed italic border-l-2 border-emerald/20 pl-4">{director.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
