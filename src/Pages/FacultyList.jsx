import { facultyData } from "../DataBase/FacultyData";
import { useState } from "react";
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
        <h2>Faculty Directory</h2>
        <div className="filter-button">
          {departments.map((depart) => (
            <button key={depart} onClick={() => setDepartment(depart)}>
              {depart === 'all' ? 'All Departments' : depart}
            </button>
          ))}
        </div>
        <div className="faculty-grid">
          {Filterfaculty.map(faculty => (
            <div key={faculty.id} className="facultylist-card">
              <h3>{faculty.name}</h3>
              <p>Department: {faculty.department}</p>
              <p>Cabin: {faculty.cabin}</p>
              <p>Contact: {faculty.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default FacultyList;