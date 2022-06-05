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
import { Account } from './pages/Account';
import { SignIn } from './pages/SignIn';
import { Directos } from './pages/Directos';
import { AuthContextProvider } from './components/AuthContext';

/* import { Signup } from './pages/Signup'; */

function App() {
  const [title, setTitle] = useState('Prisma de Orquesta');
  const [logStatus, setLogStatus] = useState(false);

  return (
    <div className="App">
      <AuthContextProvider>
        <TitleContext.Provider
          value={{ title, setTitle, logStatus, setLogStatus }}
        >
          <Header />
          <main>
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/aboutchannel" element={<AboutChannel />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/account" element={<Account />} />
              <Route path="/directosopen" element={<DirectosOpen />} />
              <Route
                path="/directosSubscribers"
                element={<DirectosSubscribers />}
              />
              <Route path='/directos' element={<Directos />} />
            </Routes>
          </main>
        </TitleContext.Provider>
      </AuthContextProvider>
      <Footer />
    </div>
  );
}

export default App;
