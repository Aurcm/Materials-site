import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Mechsem1 from '../semester/Mechsem1';
import Mechsem2 from '../semester/Mechsem2';
import Mechsem3 from '../semester/Mechsem3';
import Mechsem4 from'../semester/Mechsem4';
import Mechsem5 from '../semester/Mechsem5';
import Mechsem6 from '../semester/Mechsem6';
import Mechsem7 from '../semester/Mechsem7';
import Mechsem8 from '../semester/Mechsem8';

function MechanicalEngineering() {
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
       to="/mech-sem1"
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
       to="/mech-sem2"
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
       to="/mech-sem3"
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
       to="/mech-sem4"
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
       to="/mech-sem5"
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
      component={Link} to="/mech-sem6" 
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
      // component={Link} to="/mech-sem7"
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
      // component={Link} to="/mech-sem8"
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

export default MechanicalEngineering;
