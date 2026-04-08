import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SectionTitle } from './SectionReveal';

const projects = [
  {
    title: "BT Ihr Objektbetreuer",
    category: "Objektbetreuung & Hausmeisterservice",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    color: "from-blue-500/20 to-emerald-500/20",
    link: "https://www.bt-ihrobjektbetreuer.de/"
  },
  {
    title: "Fahrdienst Richter",
    category: "Personenbeförderung & Shuttle",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
    color: "from-emerald-500/20 to-teal-500/20",
    link: "https://fahrdienst-richter.de/"
  },
  {
    title: "Mietfleet",
    category: "Fahrzeugvermietung & Flottenmanagement",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop",
    color: "from-orange-500/20 to-red-500/20",
    link: "https://mietfleet.de/"
  },
  {
    title: "Trainbro",
    category: "Personal Training & Fitness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    color: "from-indigo-500/20 to-blue-500/20",
    link: "https://www.trainbro.de/"
  }
];

function ProjectCard({ project, index }: { project: any, index: number, key?: string | number }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group cursor-pointer block"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 bg-slate-900 border border-slate-800 shadow-sm group-hover:shadow-xl group-hover:border-emerald-500/30 transition-all duration-500">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} z-10 mix-blend-multiply opacity-50 group-hover:opacity-30 transition-opacity duration-500`} />

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors duration-500 z-20" />
          
          {/* Hover Reveal Button */}
          <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="px-6 py-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-full text-white font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
              Website besuchen <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-start px-2">
          <div>
            <h3 className="text-2xl font-display font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors duration-300">{project.title}</h3>
            <p className="text-slate-400">{project.category}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 shadow-sm flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-500 group-hover:rotate-45 group-hover:shadow-md">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </motion.div>
    </motion.a>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <SectionTitle 
            title="Referenzen" 
            subtitle="Einblicke in unsere jüngsten Arbeiten für innovative Unternehmen."
            centered={false}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
