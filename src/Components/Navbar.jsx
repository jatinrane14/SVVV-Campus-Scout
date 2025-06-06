import { Menu, Search, Users, Home, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import prlogo from '../assets/prlogo.png';
import './Navbar.css'
import ThemeToggle from './ThemeToggle';
// import profiledefault from '../assets/';
function Navbar() {
    const [user, setUser] = useState(true);
    const [sty, setstyles] = useState({ transform: "translateX(100%)" })
    const [flag, setflag] = useState(false)
    const navClose = () => {
        setstyles({ transform: "translateX(100%)" });
        setflag(false);
    }
    let Mobilenavtoggle = () => {
        if (flag) {
            navClose();
        } else {
            setstyles({ transform: "translateX(-0%)" });
            setflag(true)
        }
    }
    // Gsap Animation
    // let tl = gsap.timeline();
    // let Mobilenavtoggle = () => {
    //     tl.play();
    // }
    // useGSAP(() => {
    //     tl.to("nav", {
    //         transform: "translateX(0)",
    //         duration: 1
    //     })


    // })



    // setUser(false);
    return (
        <>
            <nav>
                <div className='flexcon'>
                    <div className='svvvLogo'>
                        <img src={prlogo} alt="" />
                        <h1 className='Pname'>SvvvCampusScout</h1>
                    </div>
                    <div className='NavigationLinks'>
                        <Link to="/" className="navlink"  >
                            {/* <Home size={16}></Home> */}
                            <span>Home</span>
                        </Link>

                        <Link to="/Search" className="navlink">
                            {/* <Search size={16}></Search> */}
                            <span>Faculty Search</span>
                        </Link>

                        {/* <Link to="/FacultyList" className="navlink">
                             <Users size={16}></Users> 
                            <span>Faculty List</span>
                        </Link> */}

                        <Link to="/Contact" className="navlink">
                            {/* <Users size={16}></Users> */}
                            <span>Contact Directory</span>
                        </Link>
                        <Link to="/Syllabus" className="navlink">
                            {/* <Users size={16}></Users> */}
                            <span>Syllabus</span>
                        </Link>
                        <Link to="/About" className="navlink">
                            {/* <Users size={16}></Users> */}
                            <span>Team</span>
                        </Link>
                        <Link to="/Notes" className="navlink" target="_blank" rel="noopener noreferrer">
                            <span>Notes</span>
                        </Link>


                        {user ? <Link to={"/Login"} className="navlink">
                            <span>Login</span>
                        </Link> :
                            <div>
                                <Link to={"http://localhost:3000/profile/jatin"} ac>
                                    <img src={''}></img>
                                </Link>
                            </div>
                        }
                        <ThemeToggle></ThemeToggle>
                    </div>
                    <div onClick={Mobilenavtoggle} className='Menu'>
                        {(flag != true) ? <Menu size={30}></Menu> : <X size={30}></X>}
                    </div>
                </div>

                <div style={sty} className='mobileNav'>
                    <div className='mob-navLinkcon'>
                        <Link to="/" style={{ textDecoration: 'none' }} onClick={navClose} className="mobnavlink">
                            {/* <Home size={16}></Home> */}
                            <span>Home</span>
                        </Link>
                        <Link to="/Search" style={{ textDecoration: 'none' }} onClick={navClose} className="mobnavlink">
                            {/* <Search size={16}></Search> */}
                            <span>Faculty Search</span>
                        </Link>
                        <Link to="/FacultyList" style={{ textDecoration: 'none' }} onClick={navClose} className="mobnavlink">
                            {/* <Users size={16}></Users> */}
                            <span>Faculty List</span>
                        </Link>
                        <Link to="/Syllabus" style={{ textDecoration: 'none' }} onClick={navClose} className="mobnavlink">
                            {/* <Users size={16}></Users> */}
                            <span>University Syllabus</span>
                        </Link>
                        <Link to="/Contact" style={{ textDecoration: 'none' }} onClick={navClose} className="mobnavlink">
                            {/* <Users size={16}></Users> */}
                            <span>Contact Directory</span>
                        </Link>
                        <Link to="/About" style={{ textDecoration: 'none' }} onClick={navClose} className="mobnavlink">
                            {/* <Users size={16}></Users> */}
                            <span>About Us</span>
                        </Link>
                        <ThemeToggle></ThemeToggle>
                        <Link to="" style={{ textDecoration: 'none' }}className="mobnavlink">
                            <span>Notes</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;