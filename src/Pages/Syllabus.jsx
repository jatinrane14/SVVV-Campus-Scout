import { SyllabusData } from "../DataBase/Syllabus"
import { useState } from "react"
import './Syllabus.css'
import { facultyData } from "../DataBase/FacultyData";
function SyllabusPage() {
    const [filterbatch, setbatch] = useState(null);
    const [filterdepartment, setDepartment] = useState(null);
    const [filterbranch, setbranch] = useState(null);
    const [filtersemester, setsemester] = useState(null);
    const [filterredSyllbus, setfilterSyllabus] = useState([]);

    // Stores thr unique values of correspong keys
    const year = [...new Set(SyllabusData.map(y => y.batch))];

    // console.log(year)
    const departments = [...new Set(SyllabusData.filter(fil => fil.batch == filterbatch).map(f => f.department))];
    // const departments = [...new Set(SyllabusData.map(f => f.department))];

    const branches = [...new Set(SyllabusData.filter(dep => dep.department === filterdepartment && dep.batch == filterbatch).map(item => item.branch))];

    // console.log(branches)

    const semesters = [...new Set(SyllabusData.filter(
        sem => sem.batch === filterbatch &&
            sem.branch === filterbranch &&
            sem.department === filterdepartment
    ).map(item => item.sem))];
    // console.log(semesters)
    const filterResult = () => {
        if (filterbatch && filterdepartment && filterbranch && filtersemester) {
            const syllabus = SyllabusData.filter(
                sem => sem.batch === filterbatch &&
                    sem.branch === filterbranch &&
                    sem.department === filterdepartment && sem.sem === filtersemester
            );
            setfilterSyllabus(syllabus);
        }
        else {

        }
        console.log(filterredSyllbus)
    };
    return (
        <>
            <div className="syllus-main">
                <h2 className="syll-head">University Syllabus</h2>
                <div className="filterDataCon">
                    <div className="depa-yr-con">
                        <div className="year">
                            <h3>Select Batch: </h3>
                            <div className="btn-con">
                            {
                                year.map(yr => (
                                    <button key={yr} style={(yr == filterbatch) ? { backgroundColor: "#56affa", color: "white", fontWeight: "bold" } : { backgroundColor: "" }} value={yr} onClick={() => setbatch(yr)}>{yr}</button>
                                ))
                            }
                            </div>
                            
                        </div>
                        <div className="department">
                            <h3>Select Department</h3>
                            <select onChange={(e) => setDepartment(e.target.value)}>
                                {
                                    departments.map(dep => (
                                        <option key={dep} value={dep}>{dep}</option>
                                    ))
                                }
                                <option></option>
                            </select>
                        </div>

                    </div>
                    <div className="bran-sem-con">
                        <div className="branch">
                            <h3>Select Branch</h3>
                            {
                                <select onChange={(e) => setbranch(e.target.value)}>
                                    {branches.map(bran => (
                                        <option key={bran} value={bran}>{bran}</option>
                                    )
                                    )}
                                </select>
                            }
                        </div>
                        <div className="semester">
                            <h3>Sellect Semester</h3>
                            {
                                <select onChange={(e) => setsemester(e.target.value)}>
                                    {semesters.map(bran => (
                                        <option key={bran} value={bran}>{bran}</option>
                                    )
                                    )}
                                </select>
                            }
                        </div>
                    </div>
                    <div className="submit-btn">
                        <button onClick={filterResult}>Submit </button>
                    </div>
                </div>
                <div className="selectedResult">
                    <div>
                        {filterredSyllbus.map(data => (
                            <div className="resultCard">
                                <div>
                                    <div>
                                        <h4>{data.syllabusLink}</h4>
                                    </div>
                                    <div>
                                        <span>{data.batch}</span>
                                    </div>
                                </div>
                                <div className="download-option">
                                    {/* <Link>
                                        
                                    </Link> */}
                                </div>
                            </div>
                        )
                        )}
                    </div> 
                </div>
            </div>

        </>
    )
}
export default SyllabusPage