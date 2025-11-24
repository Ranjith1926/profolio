import React from 'react';
import { AnimatedBackground, Navbar, Footer, ScrollToTop } from '@/components/layout';
import { Hero, Stats, About, Skills, Experience, Projects, Education, Contact, } from '@/components/sections';

export default function Home() {
  return (
    <main className="relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
