import React, { useState ,useEffect} from 'react';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import Ecesem1 from '../semester/Ecesem1';
import Ecesem2 from '../semester/Ecesem2';
import Ecesem3 from '../semester/Ecesem3';
import Ecesem4 from '../semester/Ecesem3';
import Ecesem5 from '../semester/Ecesem5';
import Ecesem6 from '../semester/Ecesem6';
import Ecesem7 from '../semester/Ecesem7';
import Ecesem8 from '../semester/Ecesem8';


function ElectronicsCommunication() {
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
       to="/ece-sem1"
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
      to="/ece-sem2"
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
      to="/ece-sem3"
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
      to="/ece-sem4"
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
      to="/ece-sem5"
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
     component={Link} to="/ece-sem6"
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
     // component={Link} to="/ece-sem7"
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
     // component={Link}  to="/ece-sem8"
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

export default ElectronicsCommunication;
