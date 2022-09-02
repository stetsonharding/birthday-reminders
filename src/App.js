
import './App.css';
import Birthdays from './Birthdays';
 import BirthayData from './BirthdayData'


function App() {
console.log(BirthayData)
  
  return (
    <div className="birthdays-container">
     
    {BirthayData.map((user, index) => {
     return <Birthdays
      key={user.age} 
      selfie={user.image}
      name={user.Name}
      age={user.AgeTurning}
      />
    })}
   
      
    </div>
  );
}

export default App;
