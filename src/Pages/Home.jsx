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
                            <Card Fname={"Faculty List"} indx={0} desc={"Browse complete list of faculty members with their contact information, departments."} />
                            <Card Fname={"Cabin Location"} indx={1} desc={"Find faculty cabin numbers and office locations across campus buildings."} />
                            <Card Fname={"Faculty Specialization"} indx={2} desc={"Find faculty members by their areas of expertise, research interests, and academic specializations. "} />
                            <Card Fname={"Contact Details"} indx={3} desc={"Find Contact Informations for Account Section, ERP section, Examination centre and etc..."} />
                            <Card Fname={"University Syllabus"} indx={4} desc={"Find Contact Informations for Account Section, ERP section, Examination centre and etc..."} />
                            <Card Fname={"Previous Year Question"}  desc={"Find Contact Informations for Account Section, ERP section, Examination centre and etc..."} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Home;