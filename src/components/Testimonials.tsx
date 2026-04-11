import { motion } from 'motion/react';
import { SectionTitle } from './SectionReveal';

const testimonials = [
  {
    quote: "Die Zusammenarbeit hat unsere internen Prozesse durch KI-Automatisierung revolutioniert. Das Design ist erstklassig.",
    author: "Sarah Weber",
    role: "CTO, TechFlow GmbH"
  },
  {
    quote: "Von der Markenentwicklung bis zur finalen Web-App: Ein extrem professionelles Team mit tiefem Verständnis für B2B-Anforderungen.",
    author: "Michael Schmidt",
    role: "Gründer, DataSync"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle title="Kundenstimmen" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="relative h-full"
              >
                <div className="relative bg-slate-900 p-10 rounded-3xl h-full border border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all duration-500 overflow-hidden group flex flex-col">
                  
                  {/* Decorative quote mark */}
                  <div className="absolute -top-4 -left-2 text-[120px] font-serif text-slate-800 opacity-50 group-hover:text-slate-700 group-hover:-translate-y-2 transition-all duration-500 pointer-events-none select-none leading-none">
                    "
                  </div>

                  <div className="relative z-10 flex-grow">
                    <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-slate-300 group-hover:text-white transition-colors duration-300">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="relative z-10 mt-auto pt-6 border-t border-slate-800 group-hover:border-emerald-500/20 transition-colors duration-500">
                    <div className="font-display font-semibold text-lg text-white">{testimonial.author}</div>
                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
