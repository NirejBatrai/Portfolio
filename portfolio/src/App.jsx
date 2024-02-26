import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portolios/portfolio";
import Contact from "./components/contact/Contact";
import Navbar from "./components/Navbars/Navbar";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      <div className='App'>
        {/* particles */}

        {/* navbar */}

        <Navbar />
        {/* main page content  */}
        <div className='App__main-page-content'>
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
