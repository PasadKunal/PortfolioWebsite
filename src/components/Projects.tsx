import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
  {
    title: 'MindSync',
    description: 'AI-powered mental wellness platform generating personalized insights using intelligent workflows and natural language processing.',
    tech: ['React', 'Node.js', 'AI/ML', 'APIs'],
    github: 'https://github.com/PasadKunal/MindSync',
    demo: 'https://github.com/PasadKunal/MindSync',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Optimizing Chess Search Algorithms',
    description: 'Built a high-performance chess engine using alpha-beta pruning enhanced with A* search, aspiration windows, and zero-window search to improve depth and efficiency.',
    tech: ['Python', 'Alpha-Beta Pruning', 'A* Search', 'Heuristics', 'Game Theory'],
    github: 'https://github.com/PasadKunal/chess-search-optimization',
    demo: 'https://github.com/PasadKunal/chess-search-optimization',
    gradient: 'from-indigo-500/20 to-violet-500/20',
  },
  {
    title: 'Mutual Fund Analysis',
    description: 'Data-driven tool to evaluate mutual funds using performance metrics, risk analysis, and visualization dashboards.',
    tech: ['Python', 'Pandas', 'Data Visualization'],
    github: 'https://github.com/PasadKunal/mutual-fund-analysis',
    demo: 'https://github.com/PasadKunal/mutual-fund-analysis',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Deepfake Guard',
    description: 'Audio deepfake detection system using ML models with explainable AI techniques for transparency and trust.',
    tech: ['Python', 'CNNs', 'MFCC', 'XAI'],
    github: 'https://github.com/PasadKunal/DeepfakeGuard',
    demo: 'https://github.com/PasadKunal/DeepfakeGuard',
    gradient: 'from-red-500/20 to-orange-500/20',
  },
  {
    title: 'MarketInsight-AI',
    description: 'AI-based market analysis system for trend detection and actionable insights using advanced machine learning models.',
    tech: ['Python', 'Machine Learning', 'Data Analysis'],
    github: 'https://github.com/PasadKunal/MarketInsight-AI',
    demo: 'https://github.com/PasadKunal/MarketInsight-AI',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'DeliciousBytes',
    description: 'Full-stack food delivery application with real-time tracking, order management, and comprehensive admin dashboard.',
    tech: ['Flutter', 'Laravel', 'MySQL'],
    github: 'https://github.com/PasadKunal/DeliciousBytes',
    demo: 'https://github.com/PasadKunal/DeliciousBytes',
    gradient: 'from-yellow-500/20 to-amber-500/20',
  },
];

const Projects = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <motion.div 
            className="flex justify-center mt-4"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full" />
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
              
              <motion.div 
                className="relative glass-card rounded-xl p-6 h-full hover-lift"
                whileHover={{ y: -8 }}
              >
                {/* Project number */}
                <span className="absolute top-4 right-4 text-6xl font-display font-bold text-muted/20 group-hover:text-primary/20 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                <motion.h3 
                  className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors relative z-10"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                  <ArrowUpRight className="inline-block ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.h3>
                
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium glass-card text-muted-foreground rounded-full group-hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed relative z-10">
                  {project.description}
                </p>
                
                <div className="flex gap-3 relative z-10">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="default" size="sm" asChild className="btn-shine">
                      <a href={project.github} className="gap-2">
                        <Github className="w-4 h-4" />
                        View Github
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="ghost" size="sm" asChild className="glass-card">
                      <a href={project.demo} className="gap-2 text-muted-foreground hover:text-foreground">
                        View project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
