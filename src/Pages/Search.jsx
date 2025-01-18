import { useState } from 'react'
import { facultyData } from '../DataBase/FacultyData'

function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    const results = facultyData.filter(
      faculty => 
        faculty.name.toLowerCase().includes(term) ||
        faculty.department.toLowerCase().includes(term)
    )
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
    </div>
  )
}

export default Search