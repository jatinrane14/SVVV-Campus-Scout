import { facultyData } from "../DataBase/FacultyData";
import { useState } from "react";
import { Mail, Phone } from 'lucide-react'
import './FacultyList.css'
function FacultyList() {

  const departments = ['all', ...new Set(facultyData.map(f => f.department))];

  const [filterDepartment, setDepartment] = useState('all');

  const Filterfaculty = facultyData.filter(
    faculty => filterDepartment === 'all' || faculty.department === filterDepartment
  )
  console.log(Filterfaculty);

  return (
    <>
      <div className="faculty-list">
        <div className="filter-button-container">
          <div className="fl-def"><h3>Filter by Department</h3></div>
          {/* By button Selection */}
          {/* <div className="sub-fl-btncon">
            {departments.map((depart) => (
              <button style={(depart == filterDepartment) ? { backgroundColor: "#56affa", color: "white", fontWeight: "bold" } : { backgroundColor: "" }} className="filter-btn" key={depart} onClick={() => setDepartment(depart)}>
                {depart === 'all' ? 'All Departments' : depart}
              </button>
            ))}
          </div> */}
          {/* By Dropdown Menu Selection */}
            <div>
              <select id="department" onChange={(e)=>setDepartment(e.target.value)}>
                {departments.map((depart)=>(
                    <option value={depart} >
                      {depart!='all'?depart:'All Department'}
                    </option>
                ))}
              </select>
            </div>

        </div>
        <div className="faculty-grid">
          {Filterfaculty.map(faculty => (
            <div key={faculty.id} className="facultylist-card">
              <div className="faculty-img">
                <img src={faculty.profileURL} alt={faculty.name + " Profile"} />
              </div>
              <h3 className="faculty-name">{faculty.name}</h3>
              <p className="faculty-dept">Department: {faculty.department}</p>
              <p className="faculty-cabin">Cabin: {faculty.cabin}</p>
              <div>
                <Phone size={16}></Phone>
                <pan className="faculty-contact">Contact: {faculty.phone}</pan>
              </div>
              <div>
                <Mail size={16}></Mail>
                <span className="faculty-email">Email: {faculty.email}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default FacultyList;