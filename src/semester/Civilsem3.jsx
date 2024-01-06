import React, { useState ,useEffect, useRef} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../MyDataGrid.css'; // Create a CSS file for styling
import Swal from 'sweetalert2';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Link ,useNavigate} from 'react-router-dom';

const initialRows = [
  {
    id: 1,
    'Subject Code': 'MA3351 ',
    'Subject Name': 'Transforms and Partial Differential Equations',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/1nbDscQNXFU7sVM2_MqT9GiQMP8OoViJ8?usp=sharing',
  },
  {
    id: 2,
    'Subject Code': '. ME3351 ',
    'Subject Name': 'Engineering Mechanics',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/17OnWrtlduK63kBsQwthFIcgfu73IuURD?usp=sharing',
    
  },
  {
    id: 3,
    'Subject Code': 'CE3301',
    'Subject Name': 'Fluid Mechanics',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9g',
    Download: 'https://drive.google.com/drive/folders/17A1iuVr5l2RpMo8EoaGlvLVhj-Dykgz0?usp=sharing',
  },
  {
    id: 4,
    'Subject Code': 'CE3302 ',
    'Subject Name': 'Construction Materials and Technology',
    Upload: 'https://docs.google.com/forms/d/e/1FAIpQLSfYm8DStHYH0HIOLrcS3NcciAnDiSbfXDi_oWeAxMyura-8iw/viewform?usp=sf_link',
    Download: 'https://drive.google.com/drive/folders/1r8YCj050Kd84IwIggUwxbQLq9ZwyqVzm?usp=sharing',
  },
  {
    id: 5,
    'Subject Code': 'CE3303',
    'Subject Name': 'Water Supply and Wastewater Engineering',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/1U3SEtdIl_fNum9ZZLLw4W8JC_aYu10yz?usp=sharing',
  },
  {
    id: 6,
    'Subject Code': 'CE3351 ',
    'Subject Name': 'Surveying and Levelling',
    Upload: 'https://forms.gle/LzhC2gyAqGXGJHiE9',
    Download: 'https://drive.google.com/drive/folders/1N_hQytyjc19rL9PnTJi3z6TxSQ4BMDLh?usp=sharing',
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