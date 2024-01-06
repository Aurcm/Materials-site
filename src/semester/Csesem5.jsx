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
    'Subject Code': 'CS3591 ',
    'Subject Name': 'Computer Networks ',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/1CDBEQORiePbHUPK0g7dqejpEfDLhrnmk?usp=sharing',
  },
  {
    id: 2,
    'Subject Code': 'CS3501',
    'Subject Name': 'Compiler Design',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/1utXThyGFCQYow2ULfEFEjNl1RUHN6hPw?usp=sharing',
  },
  {
    id: 3,
    'Subject Code': 'CB3491 ',
    'Subject Name': 'Cryptography and Cyber Security ',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/1VUn_xBHkkplIv9kqLK7EdqpHDu7UKMrO?usp=sharing',
  },
  {
    id: 4,
    'Subject Code': 'CS3551',
    'Subject Name': 'Distributed Computing',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/14m8ozUZ_oMV8GFPKBdYqhsKdbiEIYXPT?usp=sharing',
  },
  {
    id: 5,
    'Subject Code': 'CCS375',
    'Subject Name': 'Web Technology (PE-1)',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/1PgiaAneQYXjnfTc7A-jMJ0CDmdBjgaVf?usp=sharing',
  },
  {
    id: 6,
    'Subject Code': 'CCS346',
    'Subject Name': 'Big Data Analytics (PE-1)',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/1jna00GVBnl89XAVDSmnKNEuM3Mo6ZtOI?usp=sharing',
  },
  {
    id: 7,
    'Subject Code': 'CCS367',
    'Subject Name': 'Storage Technology(PE-2) ',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/10KsVuhO31fS4hkFVfiaatYo1zrRtGFbx?usp=sharing',
  },
  {
    id:8,
    'Subject Code':'MX3084',
    'Subject Name':'Disaster Management (MC)',
    Upload:'Upload Link3',
    Download:'https://drive.google.com/drive/folders/1DUXTsiPK_i-BuO_S4L_aWgQDszg3qGWP?usp=sharing',
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