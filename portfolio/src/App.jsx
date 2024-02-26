import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portolios/portfolio";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <>
      <div className='App'>
        {/* particles */}

        {/* navbar */}

        {/* main page content  */}
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
