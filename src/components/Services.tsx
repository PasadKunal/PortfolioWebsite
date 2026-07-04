import { Server, Brain, BarChart3, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    icon: Brain,
    title: 'LLM & Multi-Agent Systems',
    description: 'Building RAG and multi-agent LLM applications with orchestration, prompt engineering, fine-tuning, and evaluation frameworks focused on reliability and low latency.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Server,
    title: 'Backend & Platform Engineering',
    description: 'Designing FastAPI and Spring Boot services, REST and event-driven APIs, and distributed, deployment-ready systems with caching, observability, and fault tolerance.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: BarChart3,
    title: 'Data & Streaming Pipelines',
    description: 'Building batch and streaming pipelines with Kafka, Flink, and lakehouse workflows, plus validation, feature stores, and analytics that turn raw data into decision-ready inputs.',
    gradient: 'from-green-500 to-emerald-500',
  },
];

const Services = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">What I Work On</span>
          </div>
          <h2 className="section-title">
            <span className="text-gradient">Areas of Interest</span>
          </h2>
          <p className="section-subtitle mx-auto">
            The technical themes that show up consistently across my work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              {/* Animated gradient border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur`} />
              
              <motion.div 
                className="relative glass-card rounded-xl p-8 text-center h-full hover-lift"
                whileHover={{ y: -10 }}
              >
                {/* Icon container with gradient bg */}
                <motion.div 
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <service.icon className="w-10 h-10 text-primary" />
                  </div>
                </motion.div>
                
                <motion.h3 
                  className="font-display font-bold text-xl text-foreground mb-4 group-hover:text-primary transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
