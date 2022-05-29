import React, { useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { AboutMe } from './pages/AboutMe';
import { AboutChannel } from './pages/AboutChannel';
import { Contact } from './pages/Contact';
import { DirectosOpen } from './pages/DirectosOpen';
import { DirectosSubscribers } from './pages/DirectosSubscribers';
import { TitleContext } from './components/TitleContext';

function App() {
  const [title, setTitle] = useState("Prisma de Orquesta")
  return (
    <div className="App">
      <TitleContext.Provider value={{ title, setTitle }}>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/aboutchannel" element={<AboutChannel />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/directosopen" element={<DirectosOpen />} />
            <Route
              path="/directosSubscribers"
              element={<DirectosSubscribers />}
            />
          </Routes>
        </main>
      </TitleContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
