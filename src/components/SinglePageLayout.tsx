import React, { useState, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from './Header';
import Navigation from './Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import DashboardPage from './pages/DashboardPage';
import YouthPage from './pages/YouthPage';
import { Card } from '@/components/ui/card';
import { motion, useScroll, useTransform } from "framer-motion";

const SinglePageLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const isMobile = useIsMobile();
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) closeSidebar();
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <motion.div
        ref={parallaxRef}
        style={{ y, position: 'absolute', top: 0, left: 0, width: '100%', height: '200%', zIndex: 0, background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', opacity: 0.18 }}
        aria-hidden="true"
      />
      <Header 
        onMenuClick={toggleSidebar}
        currentLang={currentLanguage}
        onLanguageChange={setCurrentLanguage}
      />
      
      <div className="flex">
        <Navigation
          isOpen={sidebarOpen}
          onClose={closeSidebar}
          currentPage="home"
          onPageChange={scrollToSection}
          isMobile={isMobile}
        />
        
        <main className="flex-1">
          <div className="max-w-7xl mx-auto">
            <motion.section id="home" className="min-h-screen p-6" initial={{ opacity: 0.7, y: 16, filter: 'blur(4px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.7, ease: 'easeOut' }} viewport={{ once: true }} style={{ background: "#e6f9ed" }}>
              <HomePage language={currentLanguage} />
            </motion.section>
            
            <motion.section id="about" className="min-h-screen p-6 border-t" initial={{ opacity: 0.7, y: 16, filter: 'blur(4px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }} viewport={{ once: true }} style={{ background: "#f0fdf4" }}>
              <AboutPage language={currentLanguage} />
            </motion.section>
            
            <motion.section id="projects" className="min-h-screen p-6 border-t" initial={{ opacity: 0.7, y: 16, filter: 'blur(4px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }} viewport={{ once: true }} style={{ background: "#e6f9ed" }}>
              <ProjectsPage language={currentLanguage} />
            </motion.section>
            
            <motion.section id="dashboard" className="min-h-screen p-6 border-t" initial={{ opacity: 0.7, y: 16, filter: 'blur(4px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.7, delay: 0.24, ease: 'easeOut' }} viewport={{ once: true }} style={{ background: "#f0fdf4" }}>
              <DashboardPage language={currentLanguage} />
            </motion.section>
            
            <motion.section id="youth" className="min-h-screen p-6 border-t" initial={{ opacity: 0.7, y: 16, filter: 'blur(4px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.7, delay: 0.32, ease: 'easeOut' }} viewport={{ once: true }} style={{ background: "#e6f9ed" }}>
              <YouthPage language={currentLanguage} />
            </motion.section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SinglePageLayout;