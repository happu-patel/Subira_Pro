// App.js
import './App.css';
import Home from './Pages/Home/Home';
// import Page3 from './Pages/About/Page3';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Page2 from './Pages/Features/Page2';
import { useState } from 'react';

function App() {
  const [scrollToPricing, setScrollToPricing] = useState(false);
  const [scrollToFeature, setScrollToFeature] = useState(false);
  const [scrollToServices, setScrollToService] = useState(false);
  const [scrollToFaq, setScrollToFaq] = useState(false);

  const handleScrollToPricing = () => {
    setScrollToPricing(true);
    setTimeout(() => setScrollToPricing(false), 6000); // Reset scrollToPricing after 1 second
  };

  const handleScrollToFeature = () => {
    setScrollToFeature(true);
    setTimeout(() => setScrollToFeature(false), 6000);
  }

  const handleScrollToservice = () => {
    setScrollToService(true);
    setTimeout(() => setScrollToService(false), 6000);
  }

  const handleScrollToFaq = () => {
    setScrollToFaq(true);
    setTimeout(() => setScrollToFaq(false), 6000);
  }
  return (
    <>
      <BrowserRouter>
        <Header scrollToPricing={handleScrollToPricing} scrollToFeature={handleScrollToFeature} scrollToServices={handleScrollToservice} scrollToFaq={handleScrollToFaq}/>
        <Routes>
          <Route exact path='/' element={<Home scrollToPricing={scrollToPricing} scrollToFeature={scrollToFeature} scrollToServices={scrollToServices} scrollToFaq={scrollToFaq}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
