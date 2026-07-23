/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Skills } from './components/Skills';
import { ContactTechStack } from './components/ContactTechStack';
import { ResumeModal } from './components/ResumeModal';
import { AiAssistantDrawer } from './components/AiAssistantDrawer';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [aiAssistantOpen, setAiAssistantOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] font-sans selection:bg-[#ba1a1a]/20 selection:text-[#ba1a1a]">
      {/* Navigation Header */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenAiAssistant={() => setAiAssistantOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenAiAssistant={() => setAiAssistantOpen(true)}
        />

        {/* Experience & Timeline Section */}
        <Experience />

        {/* Projects & Case Studies Section */}
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Core Expertise / Skills Section */}
        <Skills />

        {/* Contact & Tech Stack Section */}
        <ContactTechStack />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Interactive Modals & Drawers */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <AiAssistantDrawer
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
      />
    </div>
  );
}
