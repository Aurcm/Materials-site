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
    'Subject Code': 'EC3501',
    'Subject Name': 'Wireless Communication',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/1Gx8Seonte5J-gOrdp2X6c0GtmJ9NNpCb?usp=sharing',
  },
  {
    id: 2,
    'Subject Code': 'EC3552',
    'Subject Name': 'VLSI and Chip Design',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/1r_QFTI41gdEcmCEeC-pyibQefWWosR7q?usp=sharing',
  },
  {
    id: 3,
    'Subject Code': 'EC3551',
    'Subject Name': 'Transmission lines and RF Systems',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/1eyiN-Q9M0M23LNl7dZzBbIiF5KyaxMe1?usp=sharing',
  },
  {
    id: 4,
    'Subject Code': 'CEC350',
    'Subject Name': 'RF Transceivers (PE-1)',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/11UplZGIg2M4lp3k9D5zULDa3YTzEwyCJ?usp=sharing',
  },
  {
    id: 5,
    'Subject Code': 'CEC366',
    'Subject Name': 'Image Processing (PE-2)',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/1d8C6EIE8g3M0cHdSQHT7S1WaXJQ9DXP7?usp=sharing',
  },
  {
    id: 6,
    'Subject Code': 'CEC334',
    'Subject Name': 'Analog IC Design (PE-3)',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/123eNiJwXirZ_CBTNQn513LrhB0Sk3p0x?usp=sharing',
  },
  {
    id: 7,
    'Subject Code': 'MX3084',
    'Subject Name': 'Disaster Risk Reduction and Management',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/13e0SZFIAr54S0THEbwWaW3K0-9aeXH_c?usp=sharing',
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