import React from 'react';
import AboutSection from './components/AboutSection';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import './prueba.css'

function App() {

  return (
          <>
            <Header/>
            <main className="l-main">
              <HomeSection/>
              <AboutSection />
            </main>
          </>
  );
}

export default App;