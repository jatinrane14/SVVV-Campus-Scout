import { Book, Search, MapPinCheckInside } from 'lucide-react';
import './FeatureCard.css';
function FeatureCard({ icon, Fname, desc, indx }) {
    let ic = (indx==0)?<Search color='#56affa' size={35}/>:(indx == 1)?<MapPinCheckInside color='#56affa' size={35}/>:<Book color='#56affa' size={35}/>;
    return (
        <>
            <div className="card cards1">
                <div>{ic}</div>
                <h4 className="card-head">{Fname}</h4>
                <p className="bene-card-para">{desc}</p>
            </div>
        </>
    )
}
export default FeatureCard;