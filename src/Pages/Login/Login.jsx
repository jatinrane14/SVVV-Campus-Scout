import React, { useState } from "react"

function Login() {
    const [userType, setUserType] = useState("student");
    return (
        <div>
            <h1>Login Page</h1>
            <div className="userType">
                <button onClick={() => setUserType('student')}>Student</button>
                <button onClick={() => setUserType('faculty')}>Teacher</button>
            </div>
            <div>
                {userType === 'student' ? (
                    <div>Student Login Form</div>
                ) : (
                    <div>Teacher Login Form</div>
                )}
            </div>
        </div>
    )
}
export default Login;