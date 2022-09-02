import { useState } from 'react';
import './App.css';
import Birthdays from './Birthdays';
import BirthayData from './BirthdayData'



function App() {

  const [Birthdayz, setBirthdays] = useState([...BirthayData])

  return (
    <>
    <div className="birthdays-container">
      <h2 style={{ textAlign: 'center', fontFamily: 'cursive' }}>{Birthdayz.length} Birthdays Today</h2>
      <div style={{minHeight: '550px', height:"fit-content"}}>
      {Birthdayz.length > 1 ? Birthdayz.map((user, index) => {
        return <Birthdays
          key={index}
          selfie={user.image}
          name={user.Name}
          age={user.AgeTurning}
        />
      }) : null } 
     
     </div>
     
    </div>

<div>
<button onClick={() => setBirthdays(0)}  >Clear</button>
</div>
</>
  );
}

export default App;
