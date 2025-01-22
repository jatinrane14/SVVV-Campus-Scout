import { List, MapPin, GraduationCap, Contact } from 'lucide-react';
import { Link } from 'react-router-dom'

import './FeatureCard.css';
function FeatureCard({ icon, Fname, desc, indx }) {
    let navigationLinks = ["/FacultyList","/Search","/Search","/Contact"]
    let ic = (indx == 0) ? <List color='#56affa' size={40} /> : (indx == 1) ? <MapPin color='#56affa' size={40} /> : (indx==2)?<GraduationCap color='#56affa' size={40} />:<Contact color='#56affa' size={40}></Contact>;

    // gsap.registerPlugin(useGSAP);

    // const card = useRef();
    // useGSAP(() => {
    //     gsap.from(".card", {
    //         opacity: 0,
    //         y: -50,
    //         duration:2,
    //     })
    // })
    return (
        <>
            <div className="card cards1" >
                <Link to={navigationLinks[indx]} style={{ textDecoration: 'none' }}>
                    <div>{ic}</div>
                    <h4 className="card-head">{Fname}</h4>
                    <p className="bene-card-para">{desc}</p>
                </Link>
            </div>

        </>
    )
}
export default FeatureCard;