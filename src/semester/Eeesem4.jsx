import React, { useState ,useEffect, useRef} from 'react';
import '../MyDataGrid.css'; // Create a CSS file for styling
import Swal from 'sweetalert2';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Link,useNavigate} from 'react-router-dom';

const initialRows = [
  {
    id: 1,
    'Subject Code': 'GE3451',
    'Subject Name': 'Environmental Sciences and Sustainability ',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'Download Link 1',
  },
  {
    id: 2,
    'Subject Code': 'EE3401 ',
    'Subject Name': 'Transmission and Distribution',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'Download Link 2',
  },
  {
    id: 3,
    'Subject Code': 'EE3402 ',
    'Subject Name': 'Linear Integrated Circuits ',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'Download Link 2',
  },
  {
    id: 4,
    'Subject Code': 'EE3403',
    'Subject Name': 'Measurements and Instrumentation ',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'Download Link 2',
  },
  {
    id: 5,
    'Subject Code': 'EE3404 ',
    'Subject Name': 'Microprocessor and Microcontroller ',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'Download Link 2',
  },
  {
    id: 6,
    'Subject Code': 'EE3405 ',
    'Subject Name': 'Electrical Machines - II ',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'Download Link 2',
  },
];

export default function MyDataGrid() {
  const [rows] = useState(initialRows);
  const navigate = useNavigate();
  const handleDownloadClick = (downloadLink, subjectName) => {
    Swal.fire({
      title: `Download ${subjectName}`,
      text: `Do you want to download ${subjectName}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, download',
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(downloadLink, '_blank');
      }
    });
  };

  const handleUploadClick = (uploadLink, subjectName) => {
    Swal.fire({
      title: `Upload ${subjectName}`,
      text: `Do you want to upload a file for ${subjectName}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, upload',
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(uploadLink, '_blank');
      }
    });
  };

  return (
    <div className="MyDataGrid" style={{ marginTop: '70px' }}>
       <a
        href="#"
        style={{
          width: '100px',
          height: '30px',
          marginLeft:'570px',
          marginBottom: '20px',
          backgroundColor: 'transparent',
          color: 'black',
          fontSize: '1.5em',
          textDecoration: 'none', // Remove underline from link
        }}
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        X
      </a>
      <h2>Download here</h2>
      <table>
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Upload</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row['Subject Code']}</td>
              <td>{row['Subject Name']}</td>
              <td>
                <Button onClick={() => handleUploadClick(row.Upload, row['Subject Name'])}>Upload</Button>
              </td>
              <td>
                <Button onClick={() => handleDownloadClick(row.Download, row['Subject Name'])}>
                  Download
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}