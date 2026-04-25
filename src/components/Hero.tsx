import { ArrowRight, Download, ChevronLeft, ChevronRight, FileText, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import profilePhoto from '@/assets/profile-photo.jpeg';

const resumeLinks = [
  { label: 'Software Engineer', href: '/Kunal_Pasad_Resume_Software_Engineer.pdf' },
  { label: 'AI Engineer', href: '/Kunal_Pasad_Resume_AI_Engineer.pdf' },
  { label: 'ML Engineer', href: '/Kunal_Pasad_Resume_ML_Engineer.pdf' },
  { label: 'Data Scientist', href: '/Kunal_Pasad_Resume_Data_Scientist.pdf' },
  { label: 'Data Engineer', href: '/Kunal_Pasad_Resume_Data_Engineer.pdf' },
  { label: 'Data Analyst', href: '/Kunal_Pasad_Resume_Data_Analyst.pdf' },
  // { label: 'Research', href: '/Kunal_Pasad_Resume_Research.pdf' },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Floating orbs */}
      <motion.div 
        className="absolute top-1/4 right-1/3 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Rutgers MSCS • GPA 3.83</span>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-3 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-8 h-[2px] bg-gradient-to-r from-primary to-transparent" />
              <span className="text-lg md:text-xl text-muted-foreground">Hello, I am Kunal</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="inline-block">AI, Data &</span>{' '}
              <span className="animate-gradient-text inline-block">Scalable Systems</span>
            </motion.h1>
            
            <motion.p 
              className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Computer Science graduate student at Rutgers building LLM applications, evaluation pipelines,
              data systems, and production services with hands-on experience across AI, analytics, and scalable
              engineering workflows.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" asChild className="btn-shine">
                  <a href="#projects">
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="heroOutline" className="glass-card">
                      <Download className="mr-2 h-5 w-5" />
                      View Resumes
                    </Button>
                  </motion.div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64">
                  <DropdownMenuLabel>Select Resume</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {resumeLinks.map((resume) => (
                    <DropdownMenuItem key={resume.label} asChild>
                      <a href={resume.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        {resume.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="relative">
              {/* Animated decorative rings */}
              <motion.div 
                className="absolute inset-0 -m-6 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-0 -m-12 rounded-full border border-primary/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Floating code brackets */}
              <motion.div 
                className="absolute -top-4 -left-4 w-10 h-10 text-primary/60"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronLeft className="w-full h-full" />
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -right-4 w-10 h-10 text-primary/60"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <ChevronRight className="w-full h-full" />
              </motion.div>
              
              {/* Profile image with glassmorphism frame */}
              <motion.div 
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-card p-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img 
                    src={profilePhoto} 
                    alt="Kunal Hemant Pasad"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full glow-effect-lg" />
              </motion.div>
              
              {/* Floating status badge */}
              <motion.div 
                className="absolute -right-4 top-1/2 -translate-y-1/2 glass-card px-4 py-2 rounded-full"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-foreground font-medium">LLMs • Data • APIs</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
