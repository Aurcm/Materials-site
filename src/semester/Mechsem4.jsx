import React, { useState ,useEffect, useRef} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../MyDataGrid.css'; // Create a CSS file for styling
import Swal from 'sweetalert2';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Link,useNavigate} from 'react-router-dom';

const initialRows = [
  {
    id: 1,
    'Subject Code': 'ME3491 ',
    'Subject Name': 'Theory of Machines ',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/1scviPwMdMwll5JA43GK2FCa1u_ndgufr?usp=sharing',
  },
  {
    id: 2,
    'Subject Code': 'ME3451 ',
    'Subject Name': 'Thermal Engineering ',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/10Hk8fwHqD9NQ6imtlAgUhnfaYlVX_nb_?usp=sharing',
  },
  {
    id: 3,
    'Subject Code': 'ME3492',
    'Subject Name': 'Hydraulics and Pneumatics',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/18R2xG3uNtUKSPRz7A7GzL_o0BkX8yNiR?usp=sharing',
  },
  {
    id: 4,
    'Subject Code': 'ME3493',
    'Subject Name': 'Manufacturing Technology',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/1sX9Z_Pdkx1IgdYSpmAmetYDGT7H849B6?usp=sharing',
  },
  {
    id: 5,
    'Subject Code': 'CE3491 ',
    'Subject Name': 'Strength of Materials',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/1b63VV9PhkixTTYsWF71FwbhmPNCIhXZw?usp=sharing',
  },
  {
    id: 6,
    'Subject Code': 'GE3451',
    'Subject Name': 'Environmental Sciences and Sustainability',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/1qroTZjBhG4-AjX0kASiPd9uolwsBlPIl?usp=sharing',
  },
];

export default function MyDataGrid() {
  const [initialNotificationShown, setInitialNotificationShown] = useState(false);
  const initialNotificationRef = useRef(false); // Create a ref to track if the initial notification has been shown
  const navigate = useNavigate();
  const showInitialNotification = () => {
    if (!initialNotificationRef.current) {
      const initialNotification = (
        <div>
          <span> Give your feedback for this site </span>
          <Link to="https://forms.gle/zJPB6JNqvpDTLjUYA">Click Here</Link>
        </div>
      );

      toast.info(initialNotification, {
        position: 'top-left',
        autoClose: 8000, 
      });

      initialNotificationRef.current = true; // Update the ref to indicate the initial notification has been shown
    }
  };
  useEffect(() => {
    showInitialNotification();
  }, []); 

  const [rows] = useState(initialRows);

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
       <ToastContainer position="top-left" autoClose={false} />
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