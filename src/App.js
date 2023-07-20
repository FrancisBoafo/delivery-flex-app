import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/HeaderMain.js'
import Feature from './components/Feautures-section.js'
import Newsletter from './components/Newsletter-Sections.js'
import Team from './components/Team-Sections.js'
import Blog from './components/Blog-Sections.js'
import Error404 from './components/404-Pages'
import Promo from './components/Promo-Sections.js'
import Category from './components/Category-Previews'
import TrustedPartners from './components/Trusted-Partners.js'
import BecomeAPartner from './components/Become-Partner-Application.js'
import Menu from './components/Menu.js'
import About from './components/About-Us.js'
import SecondFeature from './components/Second-feaures-section.js'
import { 
  ClerkProvider, 
  SignedIn, 
  SignedOut, 
  RedirectToSignIn,
  SignIn,
  SignUp
} from "@clerk/clerk-react";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const clerk_pub_key = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <Router>
      <ClerkProvider publishableKey={clerk_pub_key}>
        <div className="App">
          <Routes>
            <Route path="/signin" element={
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <SignIn />
              </div>
            } />
            <Route path="/signup" element={
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <SignUp />
              </div>
            } />
            <Route path="/menu" element={<Menu />} />
            <Route path="/" element={
              <>
                <Header />
                <Category />
                <Promo />
                <Feature />
                <SecondFeature />
                <Team />
                <Blog />
                <TrustedPartners />
                <About />
                <Newsletter />
              </>
            }/>
            <Route path="/partnerApplicaction" element={
              <>
                <SignedIn>
                  <BecomeAPartner />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }/>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </ClerkProvider>
    </Router>
  );
}

export default App;





