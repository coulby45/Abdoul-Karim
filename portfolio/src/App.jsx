
import './App.css';
import Header from './components/Header';
import AboutSection from './components/About';
import SkillsCards from './components/Skills';
import PortfolioCarousel from './components/Projets';
import Education from './components/formation';
function App() {
  return (
    <div>
      <Header />
      <AboutSection />
      <SkillsCards />
      <PortfolioCarousel/> 
      <Education />
    </div>
  );
}

export default App;
