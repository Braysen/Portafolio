import React from 'react';
import AboutSection from './components/AboutSection';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import SkillsSection from './components/SkillsSection';
import QualificationsSection from './components/Qualifications';
import './prueba.css'

function App() {

  return (
          <>
            <Header/>
            <main className="l-main">
              <HomeSection/>
              <AboutSection />
              <SkillsSection/>
              <QualificationsSection />
            </main>
          </>
  );
}

export default App;