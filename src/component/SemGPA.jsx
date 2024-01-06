import React, { useState } from 'react';
import './Cgpa.css';

function SemesterGPA() {
  const [selectedDepartment, setSelectedDepartment] = useState('CHOOSE');
  const [subjectData, setSubjectData] = useState([]);
  const [gpa, setGPA] = useState(null);

  const departmentSubjects = {
    'SEMESTER 1': [
      { name: 'IP3151-Induction Progamme' },
      { name: 'HS3152-Professional English-I', credit: 3 },
      { name: 'MA3151-Matrices and Calculus', credit: 4 },
      { name: 'PH3151-Engineering Physics', credit: 3 },
      { name: 'CY3151-Engineering Chemistry', credit: 3 },
      { name: 'GE3151-Problem Solving and Python Programming', credit: 3 },
      { name: 'GE3152-Tamiler Marabu', credit: 1 },
      { name: 'GE3171-Problem Solving and Python Programming Lab', credit: 2 },
      { name: 'BS3171-Physics and Chemistry Laboratory', credit: 2 },
      { name: 'GE3172-English Laboratory', credit: 1 },
  ],
  'SEMESTER 2': [
      { name: 'HS3252-Professional English-II', credit: 2 },
      { name: 'MA3251-Statistics and Numerical Methods', credit: 4 },
      { name: 'PH3256-Physics for Informaton Science', credit: 3 },
      { name: 'BE2351-Basic Electrical and Electronics Engineering', credit: 3 },
      { name: 'GE3251-Engineering Graphics', credit: 4 },
      { name: 'CS3251-Programming in C', credit: 3 },
      { name: 'GE3252-Tamil and Technology', credit: 1 },
      { name: 'GE3271-Engineering Practicals Laboratory', credit: 2 },
      { name: 'CS3271-Programming in C Laboratory', credit: 2 },
      { name: 'GE3272-Communication Laboratory/Foreign Language', credit: 2 },
  ],
  'SEMESTER 3': [
      { name: 'MA3354-Discrete Mathematics', credit: 4 },
      { name: 'CS3351-Digital Principles and Computer Organization', credit: 4 },
      { name: 'CS3352-Foundations of Data Science', credit: 3 },
      { name: 'CS3301-Data Structures', credit: 3 },
      { name: 'CS3391-Object Oriented Programming', credit: 3 },
      { name: 'CS3311-Data Structures Laboratory', credit: 1.5 },
      { name: 'CS3381-Object Oriented Programming Laboratory', credit: 1.5 },
      { name: 'CS3361-Data Science Laboratory', credit: 2 },
      { name: 'GE3Professional Development', credit: 1 },
  ],
  'SEMESTER 4': [
      { name: 'CS3401-Algorithm', credit: 4 },
      { name: 'CS3451-Operating system', credit: 3 },
      { name: 'CS3452-Theory of computation', credit: 3 },
      { name: 'CS3461-Operating system lab', credit: 1.5 },
      { name: 'CS3481-Database Management System lab', credit: 1.5 },
      { name: 'CS3491-Artificial intelligence and Machine learning', credit: 4 },
      { name: 'CS3492-Database Management System', credit: 3 },
      { name: 'GE3451-Environmental Science and Sustainability', credit: 2 },
      { name: 'SB8023', credit: 2 },
  ],
  'SEMESTER 5': [
      { name: 'CS3391-Computer Networks', credit: 4 },
      { name: 'CS3501-Compiler Design', credit: 4 },
      { name: 'CS3491-Cryptography and CyberSecurity', credit: 3 },
      { name: 'CS3551-Distributed Computing', credit: 3 },
      { name: 'Professional Elective I', credit: 3 },
      { name: 'Professional Elective II', credit: 3 },
      { name: 'Mandatory Course-I' },
  ],
  'SEMESTER 6': [
      { name: 'CCS356-Object Oriented Software Engineering', credit: 4 },
      { name: 'CS3691-Embedded Systems and Iot', credit: 4 },
      { name: 'Open Elective-I', credit: 3 },
      { name: 'Professional Elective III', credit: 3 },
      { name: 'Professional Elective IV', credit: 3 },
      { name: 'Professional Elective V', credit: 3 },
      { name: 'Professional Elective VI', credit: 3 },
      { name: 'Mandatory Course-II' },
  ],
  'SEMESTER 7': [
      { name: 'GE3791-Human Values and Ethics', credit: 2 },
      { name: 'Elective-Management', credit: 3 },
      { name: 'Open Elective-II', credit: 3 },
      { name: 'Open Elective-III', credit: 3 },
      { name: 'Open Elective-IV', credit: 3 },
  ],
  'SEMESTER 8': [
      { name: 'Project Work/Internship', credit: 10 },
  ],
  };

  const handleDepartmentChange = (e) => {
    const department = e.target.value;
    setSelectedDepartment(department);
    if (departmentSubjects[department]) {
      setSubjectData(departmentSubjects[department]);
    } else {
      setSubjectData([]);
    }
  };

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;

    subjectData.forEach((subject, index) => {
      const gradeSelect = document.querySelector(`select[name="subject${index}"]`);
      const selectedGrade = gradeSelect.value;
      const credit = subject.credit || 0;

      if (selectedGrade !== 'CHOOSE') {
        let gradePoint;
        switch (selectedGrade) {
          case 'O':
            gradePoint = 10;
            break;
          case 'A+':
            gradePoint = 9;
            break;
          case 'A':
            gradePoint = 8;
            break;
          case 'B+':
            gradePoint = 7;
            break;
          case 'B':
            gradePoint = 6;
            break;
          case 'C':
            gradePoint = 5;
            break;
          case 'Arrear':
            gradePoint = 0;
            break;
          default:
            gradePoint = 0;
        }

        totalGradePoints += gradePoint * credit;
        totalCredits += credit;
      }
    });

    if (totalCredits > 0) {
      const calculatedGPA = totalGradePoints / totalCredits;
      setGPA(calculatedGPA.toFixed(2));
    } else {
      setGPA(null);
    }
  };

  return (
    <div id="dep" style={{ marginTop: '70px' }}>
      <h2 style={{ color: '#333' }}>GPA CALCULATOR FOR CSE DEPARTMENT</h2>
      <h3 style={{ color: '#333' }}>ANNA UNIVERSITY 2021 REGULATION</h3>
      <h4 style={{ color: '#333' }}>SELECT DEPARTMENT</h4>
      <select name="SELECT DEPARTMENT" id="department-select" onChange={handleDepartmentChange} value={selectedDepartment}>
        <option>CHOOSE</option>
        <option>SEMESTER 1</option>
        <option>SEMESTER 2</option>
        <option>SEMESTER 3</option>
        <option>SEMESTER 4</option>
        <option>SEMESTER 5</option>
        <option>SEMESTER 6</option>
        <option>SEMESTER 7</option>
                <option>SEMESTER 8</option>
        {/* Add options for other semesters... */}
      </select>

      {subjectData.length > 0 && (
        <div id="subject-section">
          {subjectData.map((subject, index) => (
            <div key={index}>
              <label>{subject.name}:</label>
              <select name={`subject${index}`}>
                <option>CHOOSE</option>
                <option value="O">O grade</option>
                <option value="A+">A+ grade</option>
                <option value="A">A grade</option>
                <option value="B+">B+ grade</option>
                <option value="B">B grade</option>
                <option value="C">C grade</option>
                <option value="Arrear">Arrear</option>
                {/* Add more grade options... */}
              </select>
            </div>
          ))}
        </div>
      )}

      <br />
      <button
        id="calculateGPAButton"
        style={{ backgroundColor: '#0077b6', color: '#fff' }}
        onClick={calculateGPA}
      >
        CALCULATE
      </button>
      <br />
      <h4 style={{ color: '#333'}}>Your GPA IS</h4>
      <input type="number" id="cal" value={gpa !== null ? gpa : ''} readOnly />
    </div>
  );
}

export default SemesterGPA;
