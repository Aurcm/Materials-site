import React, { useState } from 'react';
import Header from './Header';
import './Cgpa.css';

function CGPACalculator() {
  const [selectedSemester, setSelectedSemester] = useState('CHOOSE');
  const [semestersData, setSemestersData] = useState([]);

  const handleSemesterChange = (e) => {
    const semester = e.target.value;
    setSelectedSemester(semester);
    setSemestersData(new Array(Number(semester)).fill(''));
  };

  const calculateCGPA = () => {
    // Implement CGPA calculation logic
    const semesterSelect = document.getElementById('semesterSelect');
        const cgpaInputsContainer = document.getElementById('cgpa-inputs');
        const cgpaResultElement = document.getElementById('cal1');
        
        semesterSelect.addEventListener('change', () => {
            const selectedSemester = parseInt(semesterSelect.value);
            cgpaInputsContainer.innerHTML = '';
            for (let i = 0; i < selectedSemester; i++) {
                const inputBox = document.createElement('input');
                inputBox.type = 'number';
                inputBox.placeholder = `Enter GPA for Semester ${i + 1}`;
                cgpaInputsContainer.appendChild(inputBox);
            }
        });
        
        document.getElementById('calculateCGPAButton').addEventListener('click', calculateCGPA);

        function calculateCGPA() {
            const inputs = cgpaInputsContainer.getElementsByTagName('input');
            let totalGPA = 0;
            let validSemesters = 0;

            for (let i = 0; i < inputs.length; i++) {
                const gpa = parseFloat(inputs[i].value);

                if (!isNaN(gpa)) {
                    totalGPA += gpa;
                    validSemesters++;
                }
            }

            if (validSemesters > 0) {
                const cgpa = totalGPA / validSemesters;
                cgpaResultElement.value = cgpa.toFixed(2); 
            } else {
                cgpaResultElement.value = '0.00'; 
            }
        }
  };

  return (
    <div id="boxNumber" style={{ marginTop: '70px' }}>
      <h4 style={{ color: '#333' }}>SELECT SEMESTER</h4>
      <select id="semesterSelect" onChange={handleSemesterChange} value={selectedSemester}>
        <option>CHOOSE</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
      </select>

      <div id="cgpa">
       <center><h2 style={{ color: '#333' }}>CGPA CALCULATOR FOR ALL DEPARTMENT</h2></center> 
        <div id="cgpa-inputs">
          {semestersData.map((value, index) => (
            <center><input
              key={index}
              type="number"
              placeholder={`Enter GPA for Semester ${index + 1}`}
            /></center>
          ))}
        </div>
        <br />
        <center>
        <button
          id="calculateCGPAButton"
          style={{ backgroundColor: '#0077b6', color: '#fff' }}
          onClick={calculateCGPA}
        >
          CALCULATE
        </button>
        </center>
        <br />
       <center> <h4 style={{ color: '#333' }}>Your CGPA IS</h4></center>
        <center><input type="number" id="cal1" readOnly /></center>
      </div>
    </div>
  );
}

export default CGPACalculator;
