import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HiringInfo from './components/HiringInfo';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css';
import Testimonial from './components/Testinomial';
import Projects from './components/Projects'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <HiringInfo/>
    <About/>
    <Services/>
    <Projects/>
   {/* <Testimonial/> */}
   <br></br>
 <Contact/>
    <Footer/>
    </>
  );
}

const data = [
  {
    name: `John Morgan`,
    img: `./components/img/user.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson`,
    img: `./components/img/user.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: `./components/img/user.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img: `./components/img/user.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: `./components/img/user.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  
];
export default App;
