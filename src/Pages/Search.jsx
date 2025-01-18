// Code is written by JATIN RANE
import { useState } from 'react'
import { facultyData } from '../DataBase/FacultyData';
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
  }
  return (
    <div className="search">
      <h2>Search Faculty</h2>
      <input
        type="text"
        placeholder="Search by name or department..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />

      {/* Ternary operation if the length of the  result is greator than 0 then card is created otherwise if will check if the give some input or not if input is given but the length of the result of 0 then "No result found is printed otherwise "Start typing to search.." message eill be shown" */}
      {searchResults.length>0 ? (
        <div className="search-results" >
        {searchResults.map(faculty => (
          <div key={faculty.id} className="faculty-card">
            <h3>{faculty.name}</h3>
            <p>Department: {faculty.department}</p>
            <p>Cabin: {faculty.cabin}</p>
            <p>Email: {faculty.email}</p>
            <p>Contact: {faculty.phone}</p>
          </div>
        ))}
      </div>
      ):searchTerm ? (<p className="">No results found</p>):(
        <p className="">Start typing to search...</p>
      )}
    </div>
  )
}
export default Search