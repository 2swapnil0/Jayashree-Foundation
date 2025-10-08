
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import JoinUs from './pages/JoinUs';
import Gallery from './pages/Gallery';
import Donate from './pages/Donate';
import Layout from './components/Layout';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/JoinUs" element={<JoinUs />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Donate" element={<Donate />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
