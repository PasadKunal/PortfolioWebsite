import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Experience = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  const responsibilities = [
    'Worked on production-level web applications alongside experienced engineers',
    'Improved backend logic, database queries, and API performance',
    'Built reusable UI components and integrated third-party services (authentication, payments)',
    'Collaborated directly with a client to successfully launch a CodeIgniter-based website',
    'Gained end-to-end development experience in a professional team environment',
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative pl-8 border-l-2 border-primary/30">
            {/* Animated timeline dot */}
            <motion.div 
              className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >
              <motion.div 
                className="absolute inset-0 rounded-full bg-primary"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            
            <motion.div 
              className="glass-card rounded-xl p-6 md:p-8 hover-lift"
              whileHover={{ x: 8 }}
            >
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <motion.div 
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10"
                  whileHover={{ scale: 1.05 }}
                >
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">Full Stack Web Developer</span>
                </motion.div>
                <span className="text-muted-foreground">•</span>
                <span className="text-foreground font-medium">Mukesoft IT Consultants</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 glass-card w-fit px-3 py-1.5 rounded-full">
                <Calendar className="w-4 h-4" />
                <span>July 2023 – February 2024</span>
              </div>
              
              <ul className="space-y-3">
                {responsibilities.map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex gap-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="flex-shrink-0 mt-0.5"
                    >
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </motion.div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
