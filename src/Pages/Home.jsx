import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Card from '../Components/FeatureCard.jsx';
import "./Home.css"
function Home() {


    return (
        <>
            <main>
                <div className='wellcomesec'>
                    <div className='imagecontainer'>
                        {/* <img className='img' src={SvvvBuilding} alt="" srcSet="" /> */}
                    </div>
                    <div className='wlcmTxtAbsolute'>
                        <h1>Welcome to SVVV Campus Scout</h1>
                    </div>
                </div>
                <div id='benefit-section'>
                    <div className='feature-head-con'>
                        <h2 className='heading'>Features of SvvvCampusScout</h2>
                        <p>Find Faculty's name , their contact number and cabin details with ease without wasting any time.
                        </p>
                    </div>
                    <div className='benefit-child-con'>
                        <div className='benefits-card-con'>
                            <Card Fname={"Faculty List"} indx={0} desc={"Browse complete list of faculty members with their contact information, departments, and current teaching schedules."} />
                            <Card Fname={"Cabin Location"} indx={1} desc={"Find faculty cabin numbers and office locations across campus buildings."} />
                            <Card Fname={"Faculty Specialization"} indx={2} desc={"Find faculty members by their areas of expertise, research interests, and academic specializations. "} />
                        </div>
                    </div>
                </div>
            </main> 
        </>
    )
}
export default Home;