import { Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css'
import prlogo from '../assets/prlogo.png'
function Footer() {
    return (
        <>
            <footer>
                <div className="footer-links">
                    <div className="footer-con">
                        <div className='ftrlogo'>
                            <img src={prlogo} alt=""></img>
                            <h4>SvvvCampusScout</h4>
                        </div>
                        <p>Finding Faculty's name , their details , Cabin details and all other information regarding the Faculty's of
                            SVVV is made easy with "SVVV Campus Scout".</p>
                           

                        
                        <div className="socio-links">
                            <Link>
                                <Github size={26} fill='white' color='black' strokeWidth={1} />
                            </Link>
                            <Link>
                                <Linkedin size={26} fill='white' color='black' strokeWidth={1} />
                            </Link>
                        </div>
                    </div>
                    <div className="hrlp-menu  footer-childs">
                        <h2>Pages</h2>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/FacultyList"}>Faculty List</Link></li>
                            <li><Link to={"/Search"}>Faculty Search</Link></li>
                            <li><Link to={"/About"}>About Us</Link></li>
                        </ul>
                    </div>
                    <div className="support-con footer-childs">
                        <h2>Support</h2>
                        <ul>
                            <li><Link to="#">Contact</Link></li>
                            <li><Link to="#">Feedback</Link></li>
                            <li><Link to="#">Privacy Policys</Link></li>
                            <li><Link to="#">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                    {/* <div className=" footer-childs">
                        <h2></h2>
                        <ul>
                            <li><Link to="#">Example</Link></li>
                            <li><Link to="#">Link</Link></li>
                            <li><Link to="#">Link</Link></li>
                            <li><Link to="#">Link</Link></li> 
                        </ul>
                    </div> */}
                </div>
                <p className='cpyr'>Copyright &copy 2025 SVVVCampusScout. All Right reserved</p>
            </footer>
        </>
    )
}
export default Footer;