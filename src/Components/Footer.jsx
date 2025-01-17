import { Facebook,} from 'lucide-react';
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
                                <Facebook></Facebook>
                            </Link>
                        </div>
                    </div>
                    <div className="hrlp-menu  footer-childs">
                        <h2>Help Menu</h2>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/"}>Faculty List</Link></li>
                            <li><Link to={"/"}>Faculty Search</Link></li>
                            <li><Link to={"/"}>About Us</Link></li>
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
                            <li><Link to="#">Shades Pro</Link></li>
                            <li><Link to="#">Essential Blocks</Link></li>
                            <li><Link to="#">Avasta Dash</Link></li>
                            <li><Link to="#">vApp Landing Page</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;