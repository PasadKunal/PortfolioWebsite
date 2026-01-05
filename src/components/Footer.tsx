import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: Mail, href: 'mailto:kunalpasad6523@gmail.com', label: 'Email' },
    { icon: Github, href: 'https://github.com/PasadKunal', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kunal-pasad-9254a5246/', label: 'LinkedIn' },
  ];

  return (
    <footer className="py-12 border-t border-border/30 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center gap-6">
          <motion.p 
            className="font-display font-bold text-2xl text-foreground"
            whileHover={{ scale: 1.05 }}
          >
            Kunal <span className="text-gradient">Pasad</span>
          </motion.p>
          
          <p className="text-sm text-muted-foreground text-center flex items-center gap-2">
            Designed & built with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </motion.span>
            All rights reserved © {new Date().getFullYear()}
          </p>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
