import { Link } from "react-router-dom";
import {Github,Linkedin,Instagram} from 'lucide-react';
import './TeamCard.css';
function TeamCard({Tdata}){
    return(
        <> 
            <div className="memberCard">
                <div className="subMemberCard">
                    <div className="memberImage">
                         <img src={Tdata.profileimg}/>
                    </div>
                    <div className="memberDetail">
                        <div>
                            <h2>{Tdata.name}</h2>
                        </div>
                        <div className="descptionTm">
                            <p>{Tdata.description}</p>
                        </div>
                        <div className="teamSocioAcc">
                            <Link target="_blank" to={Tdata.Github}>
                                <Github size={20} strokeWidth={2} color="black"/>
                            </Link>
                            <Link target="_blank" to={Tdata.linkedin}>
                                <Linkedin size={20} strokeWidth={2} color="black"/>
                            </Link>
                            <Link target="_blank" to={Tdata.Instagram}>
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