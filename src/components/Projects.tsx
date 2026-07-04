import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
  {
    title: 'Synapse',
    description: 'Multi-agent LLM orchestration platform where a LangGraph supervisor decomposes and routes tasks across five specialist agents, hitting 76% on GAIA Level 1 (18 pts above GPT-4o), with two-tier Redis + pgvector memory and real-time OpenTelemetry observability.',
    tech: ['LangGraph', 'FastAPI', 'pgvector', 'Multi-Agent'],
    github: 'https://github.com/PasadKunal/synapse',
    live: '',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'QueryPilot',
    description: 'Production NL-to-SQL agent with schema-aware RAG over table metadata and FK graphs, reaching 81% exact-match on Spider (14 pts above GPT-4o) via a self-correction loop and a QLoRA fine-tuned Qwen2.5-Coder-7B at 1/20th the inference cost.',
    tech: ['FastAPI', 'QLoRA', 'RAG', 'pgvector'],
    github: 'https://github.com/PasadKunal/querypilot',
    live: 'https://querypilot-sage.vercel.app',
    gradient: 'from-indigo-500/20 to-violet-500/20',
  },
  {
    title: 'InferMesh',
    description: 'Self-hosted LLM inference gateway for Gemini, OpenAI, and Anthropic with cost-based provider routing, pgvector semantic caching, Fernet-encrypted key isolation, JWT auth, and per-request cost tracking.',
    tech: ['FastAPI', 'Redis', 'pgvector', 'LLM Ops'],
    github: 'https://github.com/PasadKunal/infermesh',
    live: 'https://infermesh.vercel.app',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'StreamLake',
    description: 'Streaming data lakehouse with a PyFlink pipeline (event-time watermarking, late-event handling) hitting a 99.6% data-quality pass rate, a Feast + Delta Lake feature store at sub-10ms p99, and Airflow-orchestrated retraining with PSI drift monitoring.',
    tech: ['Apache Flink', 'Kafka', 'Delta Lake', 'Airflow'],
    github: 'https://github.com/PasadKunal/streamlake',
    live: 'https://streamlake.streamlit.app',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'PulseQueue',
    description: 'Distributed event-driven streaming and observability platform computing p50/p95/p99 latency in tumbling windows with Kafka Streams and a RocksDB state store, plus a zero-config Spring Boot SDK and fault-tolerant SQS dead-letter recovery.',
    tech: ['Java', 'Spring Boot', 'Kafka Streams', 'RocksDB'],
    github: 'https://github.com/PasadKunal/pulsequeue',
    live: 'https://pulsequeue-mu.vercel.app',
    gradient: 'from-orange-500/20 to-amber-500/20',
  },
  {
    title: 'InsightFlow',
    description: 'Production A/B testing platform supporting frequentist and Bayesian tests with automated power analysis, SPRT early stopping, and Benjamini-Hochberg FDR correction, generating ship/no-ship reports in under 2 minutes.',
    tech: ['FastAPI', 'SciPy', 'Statsmodels', 'SHAP'],
    github: 'https://github.com/PasadKunal/InsightFlow',
    live: 'https://insight-flow-fawn-three.vercel.app',
    gradient: 'from-teal-500/20 to-cyan-500/20',
  },
  {
    title: 'BizLens',
    description: 'Self-hosted BI platform with SQL-powered cohort, funnel, and KPI analytics in Plotly Dash, plus a GPT-4o reporting pipeline that generates narrative KPI summaries and anomaly alerts in minutes instead of hours.',
    tech: ['Plotly Dash', 'PostgreSQL', 'OpenAI API', 'Analytics'],
    github: 'https://github.com/PasadKunal/bizlens',
    live: 'https://bizlens-b33l.onrender.com',
    gradient: 'from-yellow-500/20 to-amber-500/20',
  },
  {
    title: 'MindSync',
    description: 'AI journaling assistant with a RoBERTa GoEmotions classifier across 28 emotion categories, a LangChain + pgvector RAG pipeline over journal history, and a multi-turn chatbot surfacing mood trends and writing insights.',
    tech: ['FastAPI', 'RoBERTa', 'LangChain', 'pgvector'],
    github: 'https://github.com/PasadKunal/MindSync',
    live: '',
    gradient: 'from-sky-500/20 to-blue-500/20',
  },
  {
    title: 'Deepfake Guard',
    description: 'Audio deepfake detection pipeline using CNNs, MFCC-based features, and explainability methods like SHAP and Grad-CAM for interpretable predictions.',
    tech: ['PyTorch', 'CNNs', 'MFCC', 'Explainable AI'],
    github: 'https://github.com/PasadKunal/DeepfakeGuard',
    live: '',
    gradient: 'from-red-500/20 to-orange-500/20',
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
          <p className="section-subtitle mx-auto">
            Selected work across AI systems, data engineering, and scalable software
          </p>
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
                
                {(project.github || project.live) && (
                  <div className="flex gap-3 relative z-10">
                    {project.github && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="default" size="sm" asChild className="btn-shine">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                            <Github className="w-4 h-4" />
                            View Github
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    {project.live && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="heroOutline" size="sm" asChild className="glass-card">
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="gap-2">
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
