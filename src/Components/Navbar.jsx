import { Menu, Search, Users, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import svvvLogo from '../assets/svvvLogo.png';
import './Navbar.css'
function Navbar() {
    const [sty, setstyles] = useState({ transform: "translateX(100%)" })
    const [flag, setflag] = useState(false)
    let Mobilenavtoggle = () => {
        if (flag) {
            setstyles({ transform: "translateX(100%)" })
            setflag(false)
        } else {
            setstyles({ transform: "translateX(-0%)" })
            setflag(true)
        }
    }
    return (
        <>
            <nav>
                <div className='flexcon'>
                    <div className='svvvLogo'>
                        <img src={svvvLogo} alt="" />
                        <h1 className='Pname'>SvvvCampusScout</h1>
                    </div>
                    <div className='NavigationLinks'>
                        <Link to="/" className="navlink">
                            <Home size={16}></Home>
                            <span>Home</span>
                        </Link>
                        <Link to="/Search" className="navlink">
                            <Search size={16}></Search>
                            <span>Faculty Search</span>
                        </Link>
                        <Link to="/FacultyList" className="navlink">
                            <Users size={16}></Users>
                            <span>Faculty List</span>
                        </Link>
                        <Link to="/About" className="navlink">
                            <Users size={16}></Users>
                            <span>About Us</span>
                        </Link>
                        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSf0aH9houK3qlxPtCl6F8zHuzGSRJ7cYwIck5Z2utwIvmUZIg/viewform?usp=sharing" className="navlink" target="_blank" rel="noopener noreferrer">
                            <span>Feedback</span>
                        </Link>
                    </div>
                    <div onClick={Mobilenavtoggle} className='Menu'>
                        <Menu size={30}></Menu>
                    </div>
                </div>

                <div style={sty} className='mobileNav'>
                    <div className=''>
                        <Link to="/" className="navlink">
                            <Home size={16}></Home>
                            <span>Home</span>
                        </Link>
                        <Link to="/Search" className="navlink">
                            <Search size={16}></Search>
                            <span>Faculty Search</span>
                        </Link>
                        <Link to="/FacultyList" className="navlink">
                            <Users size={16}></Users>
                            <span>Faculty List</span>
                        </Link>
                        <Link to="/About" className="navlink">
                            <Users size={16}></Users>
                            <span>About Us</span>
                        </Link>
                        <Link to="/Search" className="navlink">
                            <span>Feedback</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;