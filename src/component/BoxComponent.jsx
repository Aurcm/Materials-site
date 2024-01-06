import React, { useState ,useEffect, useRef} from 'react';
import Header from './Header';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ComputerScience from '../Pages/ComputerScience';
import CivilEngineering from '../Pages/CivilEngineering';
import ElectricalElectronics from '../Pages/ElectricalElectronics';
import ElectronicsCommunication from '../Pages/ElectronicsCommunication';
import MechanicalEngineering from '../Pages/MechanicalEngineering';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { red } from '@mui/material/colors';
import './BoxComponent.css';

function BoxComponent() {
  const [initialNotificationShown, setInitialNotificationShown] = useState(false);
  const initialNotificationRef = useRef(false); // Create a ref to track if the initial notification has been shown

  const showInitialNotification = () => {
    if (!initialNotificationRef.current) {
      const initialNotification = (
        <div>
          <span><p>Welcome !!<br></br><br></br> Semester 1 Notes for all department is available here !!! <br></br><br></br> 
Remaining Semester Notes will update as soon as possible !!!!
  </p> </span>
        </div>
      );

      toast.info(initialNotification, {
        position: 'top-left',
        autoClose: 8000, 
      });

      initialNotificationRef.current = true; // Update the ref to indicate the initial notification has been shown
    }
  };

  const showAdditionalNotification = () => {
    const additionalNotification = (
      <div>
        <span>The Semester 1 Notes for all department is here by available  and the remaining Semester Notes will be updated as soon as possible !!!!</span><br></br>
        <Link to=""></Link><br></br>
        <span>The skill enhancement and learning,specific coding training will be updated later <br></br> 
        <br></br>CGPA and GPA calculator is only available for Computer Science Department!! and the
        <br></br>other department CGPA and GPA calculator is under processing and it will be updated later on
</span>
      </div>
    );

    toast.info(additionalNotification, {
      position: 'top-left',
      autoClose: false, // This notification won't auto-close
    });
  };

  useEffect(() => {
    showInitialNotification();
  }, []); 

  return (

<div style={{ marginTop: '50px' }}>
<button onClick={showAdditionalNotification} style={{ marginBottom: '20px' }}>
         Notification
      </button>

      <ToastContainer position="top-left" autoClose={false} />
      {/* Box 1 */}
      <Button
         component={Link} 
         to="/computer-science"
        sx={{
          width: '500px',
          height: '150px',
          marginBottom: '20px',
          backgroundColor: 'primary.dark',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.5em', 
          transition: 'background-color 0.9s',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.99)',
          '@media (max-width: 768px)': {
            width: '100%', 
            marginLeft: '0px', 
          },
        }}
      >
        COMPUTER SCIENCE ENGINEERING
      </Button>

      {/* Box 2 */}
      <Button
            component={Link}
            to="/civil-engineering"
        sx={{
          width: '500px',
          height: '150px',
          marginBottom: '20px',
          backgroundColor: '#5499C7 ',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.5em', 
          transition: 'background-color 0.9s',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.99)',
          '@media (max-width: 768px)': {
            width: '100%', 
            marginLeft: '0px', 
          },
        }}
      >
       CIVIL ENGINEERING
      </Button>

      {/* Box 3 */}
      <Button
        component={Link}
        to="/electronics-communication"
        sx={{
          width: '500px',
          height: '150px',
          marginBottom: '20px',
          backgroundColor: '#FFB000 ',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.5em', 
          transition: 'background-color 0.9s',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.99)',
          
        }}
      >
       ELECTRONICS AND COMMUNUCATION ENGINEERING
      </Button>

      {/* Box 4 */}
      <Button
       component={Link}
       to="/electrical-electronics"
        sx={{
            
          width: '500px',
          height: '150px',
          marginBottom: '20px',
          backgroundColor: '#138D75 ',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.5em', 
          transition: 'background-color 0.9s',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.99)',
        }}
      >
        ELECTRICAL AND ELECTRONICS  ENGINEERING
      </Button>
     
      {/* Box 5 */}
      <Button
       component={Link}
       to="/mechanical-engineering"
        sx={{
           
          width: '500px',
          height: '150px',
          backgroundColor: '#626567 ',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.5em', 
          transition: 'background-color 0.9s',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.99)',
        }}
      >
        MECHANICAL ENGINEERING
      </Button>

      
    </div>
   
  );
}

export default BoxComponent;
