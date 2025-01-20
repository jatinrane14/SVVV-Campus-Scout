import TeamCard from "../Components/TeamCard";
import { TeamData } from "../DataBase/Team.js"
import "./About.css"

function About() {
    return (
        <>
            <div className="mainTeamContainer">
                <div className="headparacon">
                    <h2 className="teamhead">Meet the Team</h2>
                    <p className="teampara">Get to known the faces behind the project</p>
                </div>
                <div className="submaintmcon">
                    {TeamData.map(teamd => (
                        <TeamCard Tdata={teamd}></TeamCard>
                    ))}
                </div>
            </div>
        </>
    )
}
export default About;