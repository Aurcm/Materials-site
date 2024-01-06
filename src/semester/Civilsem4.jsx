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
    'Subject Code': 'CE3401',
    'Subject Name': 'Applied Hydraulics Engineering',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9g',
    Download: 'https://drive.google.com/drive/folders/1WvfO_Ut75SQoJyiBF9wFSrp65OxYH2Ua?usp=sharing',
  },
  {
    id: 2,
    'Subject Code': 'CE3402',
    'Subject Name': 'Strength of Materials ',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9g',
    Download: 'https://drive.google.com/drive/folders/1jreArZph5M_SQFwUWwRDk0zuie2aPxCI?usp=sharing',
  },
  {
    id: 3,
    'Subject Code': 'CE3403 ',
    'Subject Name': 'Concrete Technology',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9g',
    Download: 'https://drive.google.com/drive/folders/1S1WYrtroAvxtCl7JhcCCAND_7b7Y4ba2?usp=sharing',
  },
  {
    id: 4,
    'Subject Code': 'CE3404 ',
    'Subject Name': 'Soil Mechanics ',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9g',
    Download: 'https://drive.google.com/drive/folders/1tw-TDsoFRC5q48o7u9JHo054Q04eiQ8O?usp=sharing',
  },
  {
    id: 5,
    'Subject Code': 'CE3405 ',
    'Subject Name': 'Highway and Railway Engineering ',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9g',
    Download: 'https://drive.google.com/drive/folders/1LxhHGcTDVzLPCY4WlozrD4gsXzPFhz1-?usp=sharing',
  },
  {
    id: 6,
    'Subject Code': 'GE3451',
    'Subject Name': 'Environmental Sciences and Sustainability ',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9g',
    Download: 'https://drive.google.com/drive/folders/1P7jVd3NhwTnPzZlyuWPM_Db_yL0pRrRW?usp=sharing',
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