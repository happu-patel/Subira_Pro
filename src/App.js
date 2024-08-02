import './App.css';
import Home from './Pages/Home/Home';
import Page3 from './Pages/About/Page3';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page2 from './Pages/Features/Page2';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact={true} path='/' element={<Home />} />
          <Route exact={true} path='/features' element={<Page2 />} />
          <Route exact={true} path='/about' element={<Page3 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
