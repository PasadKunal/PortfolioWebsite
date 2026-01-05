import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Dart', 'PHP'],
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    title: 'Web & App Development',
    skills: ['React', 'Node.js', 'Flutter', 'Laravel', 'CodeIgniter', 'Tailwind CSS'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Machine Learning & AI',
    skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'CNNs', 'LSTMs'],
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'LLMs & AI APIs',
    skills: ['Gemini API', 'OpenAI APIs', 'Prompt Engineering', 'Chain-of-Thought'],
    gradient: 'from-pink-500/20 to-rose-500/20',
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
    gradient: 'from-orange-500/20 to-amber-500/20',
  },
  {
    title: 'Data Analysis',
    skills: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'Pandas'],
    gradient: 'from-teal-500/20 to-cyan-500/20',
  },
];

const Skills = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

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
          <h2 className="section-title">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative"
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
              
              <motion.div 
                className="relative glass-card rounded-xl p-6 h-full hover-lift"
                whileHover={{ y: -5 }}
              >
                <motion.h3 
                  className="font-display font-semibold text-foreground mb-4 pb-3 border-b border-border/50 group-hover:border-primary/30 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {category.title}
                </motion.h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium glass-card text-muted-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-all cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
