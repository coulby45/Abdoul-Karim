
import './App.css';
import Header from './components/Header';
import AboutSection from './components/About';
import SkillsCards from './components/Skills';
import PortfolioCarousel from './components/Projets';
import Formation from './components/formation';
import WhyChooseMe from './components/whyme';
/*import PassionsSection from './components/passions';*/
import Footer from './components/footer';
import ContactSection from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <AboutSection />
      <SkillsCards />
      <PortfolioCarousel />
      <Formation />
      {/*<PassionsSection />*/}
      <WhyChooseMe />
      <ContactSection />
      
      <Footer />
    </div>
  );
}

export default App;
