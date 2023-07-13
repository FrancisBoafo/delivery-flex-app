import './App.css';
import Header from './components/HeaderMain.js'
import Feature from './components/Feautures-section.js'
import Newsletter from './components/Newsletter-Sections.js'
import Team from './components/Team-Sections.js'
import Signin from './components/Sign-in-and-Registration.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <Team />
      <Newsletter />
    </div>
  );
}

export default App;

