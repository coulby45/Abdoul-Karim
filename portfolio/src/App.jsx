
import './App.css';
import Header from './components/Header';
import AboutSection from './components/About';
import SkillsCards from './components/Skills';
import PortfolioCarousel from './components/Projets';
import Education from './components/formation';
import CVSection from './components/CVsection';
import PassionsSection from './components/passions';
import Footer from './components/footer';
import ContactSection from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <AboutSection />
      <SkillsCards />
      <PortfolioCarousel/> 
      <Education />
      <CVSection />
      <PassionsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
