import React, { useState, useEffect } from "react";
import "./StudentLogin.css";
import { database, auth } from "../../firebase";
import { ref, update, onValue } from "firebase/database";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const StudentLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [standard, setStandard] = useState("");
  const [students, setStudents] = useState({});
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const studentsRef = ref(database, "students/studentsLogin");
    onValue(studentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setStudents(data);
    });
  }, []);

  useEffect(() => {
    if (standard) {
      const unactivatedStudents = students[standard]?.filter(
        (student) => !student.accountActivated
      );
      setFilteredStudents(unactivatedStudents || []);
    } else {
      setFilteredStudents([]);
    }
  }, [standard, students]);

  const handleRegister = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (!standard || !selectedName || !email || !password || !verificationCode) {
      setError("All fields are required.");
      return;
    }

    const student = filteredStudents.find(
      (student) => student.name === selectedName
    );

    

    if (!student) {
      setError("Selected student not found.");
      return;
    }

    if (student.verificationCode !== verificationCode) {
      setError("Incorrect verification code.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const studentPath = `students/studentsLogin/${standard}`;
        const studentIndex = students[standard].findIndex(
          (student) => student.name === selectedName
        );

        if (studentIndex !== -1) {
          const updates = {};
          updates[`${studentPath}/${studentIndex}/email`] = email;
          updates[`${studentPath}/${studentIndex}/accountActivated`] = true;
          update(ref(database), updates);
          alert("Registration successful!");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Login successful!");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <p style={{ fontWeight: "500" }}>Navigate more options from the sidebar</p>
      <div className="student-login-container">
        <h1>Student Portal</h1>
        <p className="student-login-intro">
          Welcome to the Student Portal. Please{" "}
          {isLogin ? "log in" : "sign up"} to access your account.
        </p>
        <div className="student-login-form-container">
          <form
            onSubmit={isLogin ? handleLogin : handleRegister}
            className="student-login-form"
          >
            {!isLogin && (
              <>
                <div className="form-group">
                  <label htmlFor="standard">Select Standard</label>
                  <select
                    id="standard"
                    value={standard}
                    onChange={(e) => setStandard(e.target.value)}
                  >
                    <option value="">--Select Standard--</option>
                    {Object.keys(students).map((std,index) => (
                      <option key={index} value={std}>
                        {std}
                      </option>
                    ))}
                  </select>
                </div>

                {filteredStudents.length > 0 && (
                  <div className="form-group">
                    <label htmlFor="student">Select Student</label>
                    <select
                      id="student"
                      value={selectedName}
                      onChange={(e) => setSelectedName(e.target.value)}
                    >
                      <option value="">--Select Student--</option>
                      {filteredStudents.map((student, index) => (
                        <option key={index} value={student.name}>
                          {student.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="verificationCode">Verification Code</label>
                  <input
                    type="text"
                    id="verificationCode"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
                </div>
              </>
            )}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="login-button">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
        </div>
        <p className="toggle-link">
          {isLogin
            ? "Don't have an account? "
            : "Already have an account? "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
        <p className="student-login-footer">Powered by GHFS</p>
      </div>
    </div>
  );
};

export default StudentLogin;
