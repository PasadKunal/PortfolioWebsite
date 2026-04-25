const skills = [
  'Python', 'SQL', 'FastAPI', 'PyTorch', 'RAG',
  'LLM Evaluation', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS',
  'Laravel', 'Kubernetes', 'Apache Kafka', 'PySpark', 'Tableau'
];

const SkillsMarquee = () => {
  return (
    <section className="py-8 border-y border-border/50 bg-secondary/30 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-8 px-8 text-muted-foreground font-medium whitespace-nowrap"
            >
              <span className="hover:text-primary transition-colors cursor-default">
                {skill}
              </span>
              <span className="text-primary/50">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
