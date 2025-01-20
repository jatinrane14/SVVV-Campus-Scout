// Code is written by JATIN RANE
import { useState } from 'react'
import { facultyData } from '../DataBase/FacultyData';
import { Mail, Phone } from 'lucide-react'
import './Search.css'
function Search() {
  // store the value of SEarch term
  const [searchTerm, setSearchTerm] = useState('')
  // store the value of resilt
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    // to clear the cards of no niput is given
    if (term.trim() === '') {
      setSearchResults([]);
      return;
    }
    // Filter the data with given condition.
    const results = facultyData.filter(
      faculty =>
        (faculty.name.toLowerCase().includes(term)) ||
        faculty.department.toLowerCase().includes(term) ||
        faculty.cabin.toLowerCase().includes(term) ||
        faculty.expertise.some(exp => exp.toLowerCase().includes(term))
    );
    // update the reslt value by new result data
    setSearchResults(results)
    console.log(results)
  }
  return (
    <div className="search">
      <h2 className='searchhead'>Search Faculty</h2>
      <div className='search-input'>
        <input type="text" placeholder="Search by name, department or Expertise..." onChange={handleSearch} className="search-input" />
      </div>
      {/* Ternary operation if the length of the  result is greator than 0 then card is created otherwise if will check if the give some input or not if input is given but the length of the result of 0 then "No result found is printed otherwise "Start typing to search.." message eill be shown" */}
      <div className='resultContainer'>
        {searchResults.length > 0 ? (
          <div className="search-results" >
            {searchResults.map(faculty => (
              <div key={faculty.id} className="faculty-card">
                <div className='facul-img-srch'>
                  <img src={faculty.profileURL} alt={faculty.name + "Profile"} />
                </div>
                <h3>{faculty.name}</h3>
                <p>Department: {faculty.department}</p>
                <p>Cabin: {faculty.cabin}</p>
                <div>
                  <Mail size={16}></Mail>
                  <span>Email: {faculty.email}</span>
                </div>
                <div>
                  <Phone size={16}></Phone>
                  <span>Contact: {faculty.phone}</span>
                </div>
                  <span>Expertise: </span>
                <div  className='faculty-expertise'>
                  {faculty.expertise.map((exp, index) => (
                    <div>
                      <p key={index} className="">{exp}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : searchTerm ? (<p className="othermsgres">No results found</p>
        ) : (
          <p className="othermsgres">Start typing to search...</p>
        )}
      </div>

    </div>
  )
}
export default Search