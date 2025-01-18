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
                        <h1>Wellcome to SVVV Campus Scout</h1>
                    </div>
                </div>
                <div id='benefit-section'>
                    <div className='feature-head-con'>
                        <h2>Features of SvvvCampusScout</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint rem nam. Quia, ea culpa.
                        </p>
                    </div>
                    <div className='benefit-child-con'>
                        <div className='benefits-card-con'>
                            <Card Fname={"Faculty List"} indx={0} desc={"Browse complete list of faculty menbers"} />
                            <Card Fname={"Cabin Location"} indx={1} desc={"Find faculty Cabin numbers"} />
                            <Card Fname={"Faculty Specialization"} indx={2} desc={"Find faculty name along with their specialization"} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Home;