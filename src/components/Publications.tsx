import { BookOpen, ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const publications = [
  {
    title: 'Multilingual Sports Question Answering Benchmark',
    venue: 'EMNLP 2025',
    type: 'Conference Publication',
    description:
      'Co-authored multilingual QA benchmark with 33K+ questions across 11 languages and 60 countries, with multi-hop reasoning tasks designed to evaluate compositional and cross-lingual LLM reasoning.',
    tags: ['LLM Evaluation', 'Multilingual NLP', 'Benchmarking'],
    link: '/2025.emnlp-main.769.pdf',
    gradient: 'from-sky-500/20 to-cyan-500/20',
  },
  {
    title: 'IMPULSE: Intelligent Message Prioritization System',
    venue: 'Springer ICACIS 2024',
    type: 'Research Publication',
    description:
      'Developed an NLP-driven message prioritization system using embeddings and gradient-boosted models, with preprocessing and feature extraction workflows that achieved 96.55% classification accuracy.',
    tags: ['Machine Learning', 'NLP', 'Embeddings'],
    link: '/IMPULSE__Important_Message_Prioritization_Using_Relevancy_Scoring_Engine.pdf',
    gradient: 'from-fuchsia-500/20 to-rose-500/20',
  },
];

const Publications = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="publications" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Research Work</span>
          </div>
          <h2 className="section-title">
            Selected <span className="text-gradient">Publications</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Papers and benchmarks highlighted in my research-focused resume
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.title}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.12, duration: 0.6 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${publication.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
              />

              <motion.div
                className="relative glass-card rounded-xl p-6 h-full hover-lift"
                whileHover={{ y: -8 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary/80">
                      {publication.type}
                    </p>
                    <p className="text-sm text-muted-foreground">{publication.venue}</p>
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {publication.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {publication.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium glass-card text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {publication.description}
                </p>
                <Button variant="ghost" size="sm" asChild className="glass-card">
                  <a href={publication.link} target="_blank" rel="noopener noreferrer" className="gap-2 text-muted-foreground hover:text-foreground">
                    View paper
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
