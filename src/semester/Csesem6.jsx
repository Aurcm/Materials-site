import React, { useState } from 'react';
import '../MyDataGrid.css'; // Create a CSS file for styling
import Swal from 'sweetalert2';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Link,useNavigate} from 'react-router-dom';

const initialRows = [
  {
    id: 1,
    'Subject Code': 'CCS356 ',
    'Subject Name': 'Object Oriented Software Engineering ',
    Upload: 'Upload Link 1',
    Download: 'Download Link 1',
  },
  {
    id: 2,
    'Subject Code': 'CS3691',
    'Subject Name': 'Embedded Systems and IoT',
    Upload: 'Upload Link 2',
    Download: 'Download Link 2',
  },
  {
    id: 3,
    'Subject Code': '',
    'Subject Name': 'Open Elective – I* ',
    Upload: 'Upload Link 2',
    Download: 'Download Link 2',
  },
  {
    id: 4,
    'Subject Code': '',
    'Subject Name': 'Professional Elective III ',
    Upload: 'Upload Link 2',
    Download: 'Download Link 2',
  },
  {
    id: 5,
    'Subject Code': '',
    'Subject Name': 'Professional Elective IV',
    Upload: 'Upload Link 2',
    Download: 'Download Link 2',
  },
  {
    id: 6,
    'Subject Code': '',
    'Subject Name': 'Professional Elective V ',
    Upload: 'Upload Link 2',
    Download: 'Download Link 2',
  },
  {
    id: 7,
    'Subject Code': '',
    'Subject Name': 'Professional Elective VI ',
    Upload: 'Upload Link 2',
    Download: 'Download Link 2',
  },
  {
    id: 8,
    'Subject Code': '',
    'Subject Name': 'Mandatory Course-II',
    Upload: 'Upload Link 2',
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
