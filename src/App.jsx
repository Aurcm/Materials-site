import React, { useState } from 'react';
import './App.css'
import Header from './component/Header'; 
import BoxComponent from './component/BoxComponent';
import CGPACalculator from './component/CGPACalculator';
import SemGPA from './component/SemGPA';
import Welcome from './Welcome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComputerScience from './Pages/ComputerScience';
import CivilEngineering from './Pages/CivilEngineering';
import ElectronicsCommunication from './Pages/ElectronicsCommunication';
import ElectricalElectronics from './Pages/ElectricalElectronics';
import MechanicalEngineering from './Pages/MechanicalEngineering';
import Csesem1 from './semester/Csesem1';
import Csesem2 from './semester/Csesem2';
import Csesem3 from './semester/Csesem3';
import Csesem4 from './semester/Csesem4';
import Csesem5 from './semester/Csesem5';
import Csesem6 from './semester/Csesem6';  
import Csesem7 from './semester/Csesem7';
import Csesem8 from './semester/Csesem8';
import Eeesem1 from './semester/Eeesem1';
import Eeesem2 from './semester/Eeesem2';
import Eeesem3 from './semester/Eeesem3';
import Eeesem4 from './semester/Eeesem4';
import Eeesem5 from './semester/Eeesem5';
import Eeesem6 from './semester/Eeesem6';
import Eeesem7 from './semester/Eeesem7';
import Eeesem8 from './semester/Eeesem8';
import Ecesem1 from './semester/Ecesem1';
import Ecesem2 from './semester/Ecesem2';
import Ecesem3 from './semester/Ecesem3';
import Ecesem4 from './semester/Ecesem4';
import Ecesem5 from './semester/Ecesem5';
import Ecesem6 from './semester/Ecesem6';
import Ecesem7 from './semester/Ecesem7';
import Ecesem8 from './semester/Ecesem8';
import Mechsem1 from './semester/Mechsem1';
import Mechsem2 from './semester/Mechsem2';
import Mechsem3 from './semester/Mechsem3';
import Mechsem4 from './semester/Mechsem4';
import Mechsem5 from './semester/Mechsem5';
import Mechsem6 from './semester/Mechsem6';
import Mechsem7 from './semester/Mechsem7';
import Mechsem8 from './semester/Mechsem8';
import Civilsem1 from './semester/Civilsem1';
import Civilsem2 from './semester/Civilsem2';
import Civilsem3 from './semester/Civilsem3';
import Civilsem4 from './semester/Civilsem4';
import Civilsem5 from './semester/Civilsem5'; 
import Civilsem6 from './semester/Civilsem6';
import Civilsem7 from './semester/Civilsem7';
import Civilsem8 from './semester/Civilsem8';




function App() {
  const [startApp, setStartApp] = useState(false);

  const handleStart = () => {
    setStartApp(true);
  };
  return (
    <Router>
            {startApp ? (
               <>
      <Header />
      <Routes>
        <Route path='/'element={<BoxComponent/>}/>
        <Route path="/home" element={<CGPACalculator/>} />
        <Route path="/cgpa" element={<SemGPA/>} />
        <Route path="/computer-science" element={<ComputerScience />} />
        <Route path="/civil-engineering" element={<CivilEngineering />} />
        <Route path="/electronics-communication" element={<ElectronicsCommunication />} />
        <Route path="/electrical-electronics" element={<ElectricalElectronics />} />
        <Route path="/mechanical-engineering" element={<MechanicalEngineering />} />
        <Route path="/cse-sem1" element={<Csesem1/>}/>
        <Route path="/cse-sem2" element={<Csesem2/>}/>
        <Route path="/cse-sem3" element={<Csesem3/>}/>
        <Route path="/cse-sem4" element={<Csesem4/>}/>
        <Route path="/cse-sem5" element={<Csesem5/>}/>
        <Route path="/cse-sem6" element={<Csesem6/>}/>
        <Route path="/cse-sem7" element={<Csesem7/>}/>
        <Route path="/cse-sem8" element={<Csesem8/>}/>
        <Route path="/eee-sem1" element={<Eeesem1/>}/>
        <Route path="/eee-sem2" element={<Eeesem2/>}/>
        <Route path="/eee-sem3" element={<Eeesem3/>}/>
        <Route path="/eee-sem4" element={<Eeesem4/>}/>
        <Route path="/eee-sem5" element={<Eeesem5/>}/>
        <Route path="/eee-sem6" element={<Eeesem6/>}/>
        <Route path="/eee-sem7" element={<Eeesem7/>}/>
        <Route path="/eee-sem8" element={<Eeesem8/>}/>
        <Route path="/ece-sem1" element={<Ecesem1/>}/>
        <Route path="/ece-sem2" element={<Ecesem2/>}/>
        <Route path="/ece-sem3" element={<Ecesem3/>}/>
        <Route path="/ece-sem4" element={<Ecesem4/>}/>
        <Route path="/ece-sem5" element={<Ecesem5/>}/>
        <Route path="/ece-sem6" element={<Ecesem6/>}/>
        <Route path="/ece-sem7" element={<Ecesem7/>}/>
        <Route path="/ece-sem8" element={<Ecesem8/>}/>
        <Route path="/mech-sem1" element={<Mechsem1/>}/>
        <Route path="/mech-sem2" element={<Mechsem2/>}/>
        <Route path="/mech-sem3" element={<Mechsem3/>}/>
        <Route path="/mech-sem4" element={<Mechsem4/>}/>
        <Route path="/mech-sem5" element={<Mechsem5/>}/>
        <Route path="/mech-sem6" element={<Mechsem6/>}/>
        <Route path="/mech-sem7" element={<Mechsem7/>}/>
        <Route path="/mech-sem8" element={<Mechsem8/>}/>
        <Route path="/civil-sem1" element={<Civilsem1/>}/>
        <Route path="/civil-sem2" element={<Civilsem2/>}/>
        <Route path="/civil-sem3" element={<Civilsem3/>}/>
        <Route path="/civil-sem4" element={<Civilsem4/>}/>
        <Route path="/civil-sem5" element={<Civilsem5/>}/>
        <Route path="/civil-sem6" element={<Civilsem6/>}/>
        <Route path="/civil-sem7" element={<Civilsem7/>}/>
        <Route path="/civil-sem8" element={<Civilsem8/>}/>
        
      
      </Routes>
      </>
      ) : (
        <Welcome onStart={handleStart} />
      )}
    </Router>
  );
}

export default App;
