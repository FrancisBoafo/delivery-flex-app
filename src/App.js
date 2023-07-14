import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/HeaderMain.js'
import Feature from './components/Feautures-section.js'
import Newsletter from './components/Newsletter-Sections.js'
import Team from './components/Team-Sections.js'
import Signin from './components/Sign-in-and-Registration.js'
import Blog from './components/Blog-Sections.js'
import Error404 from './components/404-Pages'
import Promo from './components/Promo-Sections.js'
import Category from './components/Category-Previews'
import TrustedPartners from './components/Trusted-Partners.js'
import BecomeAPartner from './components/Become-Partner-Application.js'
import Menu from './components/Menu.js'
import About from './components/About-Us.js'
import SecondFeature from './components/Second-feaures-section.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/partnerApplicaction" element={<BecomeAPartner />} />
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
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




