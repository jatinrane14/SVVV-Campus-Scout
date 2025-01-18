import { Github,Linkedin} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css'
function Footer() {
    return (
        <> 
            <footer>
                <div className="footer-links">
                    <div className="footer-con">
                        <img src={""} alt=""></img>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, perspiciatis harum nihil quia corporis ipsam fuga voluptatibus temporibus perferendis consequuntur!</p>
                        <div className="socio-links">
                            <Link>
                                <Github size={26} fill='white' color='black' strokeWidth={1}/>
                            </Link>
                            <Link>
                                <Linkedin size={26} fill='white' color='black' strokeWidth={1}/>
                            </Link>
                        </div>
                    </div>
                    <div className="hrlp-menu  footer-childs">
                        <h2>Help Menu</h2>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/"}>Faculty List</Link></li>
                            <li><Link to={"/Search"}>Faculty Search</Link></li>
                            <li><Link to={"/About"}>About Us</Link></li>
                        </ul>
                    </div>
                    <div className="support-con footer-childs">
                        <h2>Support</h2>
                        <ul>
                            <li><Link to="#">Contact</Link></li>
                            <li><Link to="#">Help & Support</Link></li>
                            <li><Link to="#">Privacy Policys</Link></li>
                            <li><Link to="#">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                    <div className="product footer-childs">
                        <h2>Products</h2>
                        <ul>
                            <li><Link to="#">Example</Link></li>
                            <li><Link to="#">Link</Link></li>
                            <li><Link to="#">Link</Link></li>
                            <li><Link to="#">Link</Link></li>
                        </ul>
                    </div>
                </div>
                <p className='cpyr'>Copyright &copy 2025 SVVVCampusScout. All Right reserved</p>
            </footer>
        </>
    )
}
export default Footer;