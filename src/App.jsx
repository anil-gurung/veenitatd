import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ScrollToTop from './scrollToTop';
import About from './pages/about/About';
import Products from './pages/products/Products';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Gallery from './pages/gallery/Gallery';
import NotFound from './pages/notFound/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact index element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="products" element={<Products />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="gallery" element={<Gallery />} />
        <Route exact path="notfound" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
