import { Code, Smartphone, Server, GraduationCap, Building, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building scalable web apps',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Cross-platform mobile solutions',
  },
  {
    icon: Server,
    title: 'ML Solutions',
    description: 'Intelligent data systems',
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Insights from structured and unstructured data',
  }


];

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Rutgers University, New Brunswick',
    period: 'Sep 2025 – May 2027 (Expected)',
    icon: GraduationCap,
  },
  {
    degree: 'Bachelor of Technology in Computer Engineering',
    school: 'Sardar Patel Institute of Technology, Mumbai',
    period: 'Dec 2021 – Jun 2025',
    icon: Building,
  },
];

const About = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Services */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="flex items-center gap-4 p-5 rounded-xl glass-card hover-lift cursor-pointer group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <service.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                  <motion.div
                    className="w-1.5 h-10 bg-gradient-to-b from-primary to-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    layoutId={`indicator-${service.title}`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - About & Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h2 className="section-title">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I am a Computer Science graduate student at Rutgers University with a strong interest in
              machine learning, data analysis and scalable systems. I am passionate about learning by
              doing and building impactful, real-world solutions that make a difference.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {[
                { value: '6', label: 'Completed Projects' },
                { value: '12', label: 'Months Experience' },
                { value: '15', label: 'Technologies' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-xl glass-card hover-glow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl md:text-4xl font-display font-bold text-foreground">{stat.value}</span>
                    <span className="text-primary text-xl font-bold">+</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <h3 className="font-display font-semibold text-xl text-foreground mb-4">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  className="flex gap-4 p-5 rounded-xl glass-card hover-lift group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.15 }}
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: -5 }}
                  >
                    <edu.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm">{edu.school}</p>
                    <p className="text-primary/80 text-xs mt-1 font-medium">{edu.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
