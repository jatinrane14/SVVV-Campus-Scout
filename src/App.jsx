import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx'
import Home from './Pages/Home/Home.jsx'
import Search from './Pages/Search/Search.jsx'
import About from './Pages/About/About.jsx'
import Footer from './Components/Footer.jsx'
import FacultyList from './Pages/FacultyList/FacultyList.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import SyllabusPage from './Pages/Syllabus/Syllabus.jsx';
import Login from './Pages/Login/Login.jsx';
import './App.css'

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    return null;
}
  return (
    <>
      <Router>
        <div className="">
          <ScrollToTop></ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Search" element={<Search/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/FacultyList" element={<FacultyList/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Syllabus" element={<SyllabusPage/>} />
            <Route path="/Login" element={<Login/>} />
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </>
  )
}
export default App
