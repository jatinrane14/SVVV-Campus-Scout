import { Menu, Search, Users, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import  svvvLogo from '../assets/svvvLogo.png';
import './Navbar.css'
function Navbar(){
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
                    <Link to="/Search" className="navlink">
                        <span>Feedback</span> 
                    </Link>
                </div>
                <div className='Menu'>
                    <Menu size={30}></Menu>
                </div>
               </div>
            </nav>
        </>
    )
}
export default Navbar;