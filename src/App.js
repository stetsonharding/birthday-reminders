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
          key={user.id}
          selfie={user.image}
          name={user.Name}
          age={user.AgeTurning}
        />
      }) : null } 
     
     </div>
     
    </div>

<div style={{display: 'flex', height: '30px', marginTop: '10px', justifyContent: 'center'}}>
<button className='btn' onClick={() => setBirthdays([])}>Clear</button>
<button  className='btn'>Add Birthday</button>
</div>
</>
  );
}

export default App;
