import MainBanner from './components/banner';
import Preloader from './components/preloader';
import Header from './components/header';
import FooterMain from './components/footer1';
import About from './components/about';
import ServicesSection from './components/services';
import ContactSection from './components/contactUsSection';

import './App.css';
import "./assets/css/style.css";

function App() {
  return (
    <div className="App">
      <Preloader />
      <Header />
      <MainBanner />
      <About />
      <ServicesSection />
      <ContactSection />
      <FooterMain />
    </div>
  );
}

export default App;
