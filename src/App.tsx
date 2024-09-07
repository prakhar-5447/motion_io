import './App.css'
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Creative from './components/Creative';
import Content from './components/Content';
import Gallery from './components/Gallery';
import Cursor from './utils/Cursor';
import Testimonial from './components/Testimonial';

function App() {

  return (
    <>
      <Hero />
      <About />
      <Content />
      <Testimonial />
      <Creative />
      <Gallery />
      <Blog />
      <Footer />
      <Cursor />
    </>
  )
}

export default App
