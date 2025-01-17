import {Book, Search} from 'lucide-react';
import './FeatureCard.css';
function FeatureCard({icon,Fname,desc}){
    return (
        <>
                <div className="card cards1">
                    <Book></Book>
                    <h2 className="card-head">{Fname}</h2>
                    <p className="bene-card-para">{desc}</p>
                </div>
        </> 
    )
}
export default FeatureCard;