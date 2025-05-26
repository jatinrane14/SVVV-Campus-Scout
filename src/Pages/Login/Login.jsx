import React, { useState } from "react"
import './Login.css'
function Login() {
    const [userType, setUserType] = useState("student");
    return (
        <div className="login-con">
            <h2>Login Credencial</h2>
            <div className="login-head">
                <div className="userType">
                    <button className="user-btn student-btn" onClick={() => setUserType('student')} style={(userType === 'student') ? { backgroundColor: '#3598db' } : { backgroundColor: '' }}>Student</button>
                    <button className="user-btn faculty-btn" onClick={() => setUserType('faculty')} style={(userType === 'faculty') ? { backgroundColor: 'blue' } : { backgroundColor: '' }}>Teacher</button>
                </div>
                <div>
                    {userType === 'student' ? (
                        <div className="login-form">
                            <form method="POST" action="">
                                <input className="user-dtl-in username" type="text" id="username" name="username" placeholder="Enter Email/Enrl No." required/>
                                <p className="input-status"></p>
                                <input className="user-dtl-in" type="password" id="password" name="password" required />
                                <button id="submit-btn" type="submit">Login</button>
                                <p>Don't have an account? <a href="#">Sign up</a></p>
                            </form>
                        </div>
                    ) : (
                        <div>Teacher Login Form</div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Login;