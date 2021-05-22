import React from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import './prueba.css'

function App() {

  return (
          <>
            <Header/>
            <main className="l-main">
              <HomeSection/>
            </main>
          </>
  );
}

export default App;