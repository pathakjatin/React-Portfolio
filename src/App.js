import Header from './components/header/Header';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualifications/Qualification';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';


export default function App(){
  return(
    <>
      <Header />
      
      <main className="main">
        <Home />
        <About />
        <Skills/>
        <Qualification/>
        <Portfolio/>
        <Contact/>
      </main>

        <Footer/>
        <ScrollUp/>
    </>
  );
}