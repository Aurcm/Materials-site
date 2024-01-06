import React, { useState ,useEffect} from 'react';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import Eeesem1 from '../semester/Eeesem1';
import Eeesem2 from '../semester/Eeesem2';
import Eeesem3 from '../semester/Eeesem3';
import Eeesem4 from '../semester/Eeesem4';
import Eeesem5 from '../semester/Eeesem5';
import Eeesem6 from '../semester/Eeesem6';
import Eeesem7 from '../semester/Eeesem7';
import Eeesem8 from '../semester/Eeesem8';

function ElectricalElectronics() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    // Disable the button when clicked
    setIsButtonDisabled(true);
  };


  return (
    <div style={{ marginTop: '70px' }}>
    <Button
    component={Link}
    to="/eee-sem1" 
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
     to="/eee-sem2" 
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
     to="/eee-sem3" 
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
    component={Link} to="/eee-sem4" 
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
    component={Link} to="/eee-sem5" 
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
    component={Link}  to="/eee-sem6" 
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
   //  component={Link} to="/eee-sem7" 
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
     //component={Link} to="/eee-sem8" 
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

export default ElectricalElectronics;
