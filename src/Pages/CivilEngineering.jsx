import React, { useState ,useEffect} from 'react';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Civilsem1 from '../semester/Civilsem1';
import Civilsem2 from '../semester/Civilsem2';
import Civilsem3 from '../semester/Civilsem3';
import Civilsem4 from '../semester/Civilsem4';
import Civilsem5 from '../semester/Civilsem5';
import Civilsem6 from '../semester/Civilsem6';
import Civilsem7 from '../semester/Civilsem7';
import Civilsem8 from '../semester/Civilsem8';


function CivilEngineering() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    // Disable the button when clicked
    setIsButtonDisabled(true);
  };


  return (
    <div style={{ marginTop: '70px' }} >
    <Button
       component={Link}
       to="/civil-sem1"
    sx={{
      width: '400px',
      height: '50px',
      marginBottom: '20px',
      backgroundColor: '#FFB000 ',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.5em', 
    }}
    >
   Semester 1
    </Button>

    <Button
    component={Link}
    to="/civil-sem2"
    sx={{
      width: '400px',
      height: '50px',
      marginBottom: '20px',
      backgroundColor: '#138D75',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.5em', 
    }}
    >
   Semester 2
    </Button>

    <Button 
    component={Link}
    to="/civil-sem3"
    sx={{
      width: '400px',
      height: '50px',
      marginBottom: '20px',
      backgroundColor: '#FFB000   ',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.5em', 
    }}
    >
   Semester 3
    </Button>

    <Button 
    component={Link}
    to="/civil-sem4"
    sx={{
      width: '400px',
      height: '50px',
      marginBottom: '20px',
      backgroundColor: '#138D75',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.5em', 
    }}
    >
   Semester 4
    </Button>

    <Button 
    component={Link}
    to="/civil-sem5"
    sx={{
      width: '400px',
      height: '50px',
      marginBottom: '20px',
      backgroundColor: '#FFB000 ',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.5em', 
    }}
    >
   Semester 5
    </Button>

    <Button 
   component={Link} to="/civil-sem6"
    sx={{
      width: '400px',
      height: '50px',
      marginBottom: '20px',
      backgroundColor: '#138D75',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.5em', 
    }}
   
    >
   Semester 6
    </Button>

    <Button 
   // component={Link} to="/civil-sem7"
    sx={{
      width: '400px',
      height: '50px',
      marginBottom: '20px',
      backgroundColor: '#FFB000 ',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.5em', 
    }}
    onClick={handleClick}
      disabled={isButtonDisabled}
    >
   Semester 7
    </Button>

    <Button 
   // component={Link} to="/civil-sem8"
    sx={{
      width: '400px',
      height: '50px',
      marginBottom: '20px',
      backgroundColor: '#138D75',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.5em', 
    }}x
    onClick={handleClick}
      disabled={isButtonDisabled}
    >
   Semester 8
    </Button>
    <Button
        sx={{
          width: '400px',
          height: '50px',
          marginBottom: '20px',
          backgroundColor: 'red',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.5em',
        }}
        onClick={() => navigate(-1)}
      >
        GO Back
      </Button>
  </div>
  );
}

export default CivilEngineering;
