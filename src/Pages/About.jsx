import TeamCard from "../Components/TeamCard";
import { TeamData } from "../DataBase/Team.js"
import "./About.css"

function About() {
    return (
        <>
            <div className="mainTeamContainer">
                <h2 className="teamhead">Meet the Team</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, inventore?</p>
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