import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx'
import Home from './Pages/Home.jsx'
import Search from './Pages/Search.jsx'
import About from './Pages/About.jsx'
import Footer from './Components/Footer.jsx'
import FacultyList from './Pages/FacultyList.jsx';
import './App.css'
function App() {
  return (
    <>
      <Router>
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Search" element={<Search/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/FacultyList" element={<FacultyList/>} />
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </>
  )
}
export default App
