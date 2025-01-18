import { facultyData } from "../DataBase/FacultyData";
function FacultyList(){
    return(
        <>
            <div className="faculty-list">
      <h2>Faculty Directory</h2>
      <div className="faculty-grid">
        {facultyData.map(faculty => (
          <div key={faculty.id} className="faculty-card">
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