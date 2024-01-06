import React, { useState ,useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import Csesem1 from '../semester/Csesem1';
import Csesem2 from '../semester/Csesem2';
import Csesem3 from '../semester/Csesem3';
import Csesem4 from '../semester/Csesem4';
import Csesem5 from '../semester/Csesem5';
import Csesem6 from '../semester/Csesem6';
import Csesem7 from '../semester/Csesem7';
import Csesem8 from '../semester/Csesem8';

function ComputerScience() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    // Disable the button when clicked
    setIsButtonDisabled(true);
  };

  return (
    <div  style={{ marginTop: '70px' }}>
      <Button
       component={Link}
       to="/cse-sem1"
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
       to="/cse-sem2"
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
      to="/cse-sem3"
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
       to="/cse-sem4"
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
       to="/cse-sem5"
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
       component={Link}
       to="/cse-sem6"
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
      // component={Link}
      // to="/cse-sem7"
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
      // component={Link}
       //to="/cse-sem8"
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

export default ComputerScience;
