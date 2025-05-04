import './Contact.css'
import Contactcard from '../../Components/Contactcard.jsx';
import {ContactData} from '../../DataBase/ContactData.js'
function Contact() {
    return (
        <>
        <div>
            <h1 className='contact-head'>Contact Information</h1>
        </div>
            <div className='main-container'>
                {ContactData.map(ContD => (
                    <Contactcard ContD={ContD}></Contactcard>
                ))}
            </div>
        </>
    );
}
export default Contact;