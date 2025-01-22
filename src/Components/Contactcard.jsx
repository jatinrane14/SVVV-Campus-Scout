import { Phone, MailPlus, Clock, MapPinCheckInside } from 'lucide-react'
import './Contactcard.css'
function Contactcard({ ContD }) {
    return (
        <>
            <div key={ContD.id} className='contact-card'>
                <div className='contact-card-child'>
                    <div className='depart-con'>
                        <h3>{ContD.DepartmentName}</h3>
                    </div>
                    <div className='contact-details-con'>
                        {ContD.contact.map(cont => (
                            <div className='contact-d'>
                                <h3>{cont.name}</h3>
                                <div className=''>
                                    <Phone color='gray' className="icon" size={16}></Phone>
                                    <span>{cont.phone}</span>
                                </div>
                                <div className='mail'>
                                    <MailPlus color='gray' className="icon" size={16}></MailPlus>
                                    <span>{cont.email}</span>
                                </div>
                            </div>
                        ))}
                        <hr className='devider' />
                        <div className='contact-time'>
                            <div className='time-date'>
                                <Clock color='gray' className="icon" size={16}></Clock>
                                <span>{ContD.time}</span>
                            </div>
                            <div className='location'>
                                <MapPinCheckInside color='gray' className="icon" size={16}></MapPinCheckInside>
                                <span>{ContD.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Contactcard;