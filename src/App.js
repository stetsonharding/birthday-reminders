import { useState } from "react";
import "./App.css";
import Birthdays from "./Birthdays";
import BirthayData from "./BirthdayData";
import { AddBirthdayModal, AddBirthdayButton } from "./AddBirthdayModal";

function App() {
  //Keeping track of all birthdays
  const [allBirthdays, setAllBirthdays] = useState([...BirthayData]);
  //keeping track if add birthday modal is displayed
  const [isAddBirthdayShown, setIsAddBirthdayShown] = useState(false);

  //Delete selected birthday by index and reset new birthday array.
  const DeleteBirthday = (indx) => {
    const updatedBirthdays = [...allBirthdays];
    updatedBirthdays.splice(indx, 1);
    setAllBirthdays(updatedBirthdays);
  };

  return (
    <>
      <AddBirthdayModal
        setIsAddBirthdayShown={setIsAddBirthdayShown}
        isAddBirthdayShown={isAddBirthdayShown}
      />
      <div className="birthdays-container">
        <h2 style={{ textAlign: "center", fontFamily: "cursive" }}>
          {allBirthdays.length} Birthdays Today
        </h2>
        <div style={{ minHeight: "550px", height: "fit-content" }}>
          {allBirthdays.length >= 1
            ? allBirthdays.map((user, index) => {
                return (
                  <Birthdays
                    key={user.id}
                    selfie={user.image}
                    name={user.Name}
                    age={user.AgeTurning}
                    deleteBirthday={DeleteBirthday}
                    index={index}
                  />
                );
              })
            : null}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          height: "30px",
          marginTop: "10px",
          justifyContent: "center",
        }}
      >
        <button className="btn" onClick={() => setAllBirthdays([])}>
          Clear
        </button>
        <AddBirthdayButton setIsAddBirthdayShown={setIsAddBirthdayShown} />
      </div>
    </>
  );
}

export default App;
