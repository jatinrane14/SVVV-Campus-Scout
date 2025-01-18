import { Link } from "react-router-dom";
import {Github,Linkedin,Instagram} from 'lucide-react';
import './TeamCard.css';
function TeamCard({Tdata}){
    return(
        <> 
            <div className="memberCard">
                <div className="subMemberCard">
                    <div className="memberImage">
                         <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="2kb"/>
                    </div>
                    <div className="memberDetail">
                        <div>
                            <h2>{Tdata.name}</h2>
                        </div>
                        <div className="descptionTm">
                            <p>{Tdata.description}</p>
                        </div>
                        <div className="teamSocioAcc">
                            <Link to={Tdata.Github}>
                                <Github size={20} strokeWidth={2} color="black"/>
                            </Link>
                            <Link to={Tdata.Linkedin}>
                                <Linkedin size={20} strokeWidth={2} color="black"/>
                            </Link>
                            <Link to={Tdata.Instagram}>
                                <Instagram size={20} strokeWidth={2} color="black"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default TeamCard;