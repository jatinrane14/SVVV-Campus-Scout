import SvvvBuilding from '../assets/SvvvBuilding.jpg';
import Card from '../Components/FeatureCard.jsx';
import "./Home.css"
function Home() {
    return (
        <>
            <main>
                <div className='wellcomesec'>
                    <img className='img' src={SvvvBuilding} alt="" srcSet="" />
                    <div className='wlcmTxtAbsolute'>
                        <h1>Wellcome to SVVV Campus Scout</h1>
                    </div>
                </div>
                <div id='benefit-section'>
                    <div className='benefit-child-con'>
                        <div className='benefits-card-con'>
                        <Card Fname={"Faculty List"} desc={"Browse complete list of faculty menbers"} />
                        <Card Fname={"Cabin Location"} desc={"Find faculty Cabin numbers"} />
                        <Card Fname={"Faculty Specialization"} desc={"Find faculty name along with their specialization"} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Home;