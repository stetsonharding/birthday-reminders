import React, {useState} from "react";
import "./AddBirthdayModal.css";

function AddBirthdayModal({ setIsAddBirthdayShown, isAddBirthdayShown, setAllBirthdays }) {

  const [name, setName] = useState("")
  const [date, setDate] = useState();
  const [img, setImg] = useState()


  

const newBirthday = {
  id:6,
  Name: name,
  AgeTurning: date,
  image: img
}



function addBirthday(e) {
e
  setAllBirthdays((prevState) => [...prevState, newBirthday])

 setIsAddBirthdayShown(false)

}



  return (
    <div className="modal-container">
      <div className="modal">
        <p className="modal-title">Who's Birthday?</p>
        <div className="form-container">
          <form className="birthday-form">
            <label htmlfor="name">Name:</label>
            <input id="name" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}  />
            <br />
            <label htmlfor="birthday">Birthday:</label>
            <input type="date" id="birthday" name="birthday" onChange={(e) => setDate(e.target.value)} />
            <br />
            <label htmlfor="myfile">Select a Image: </label>
            <input type="file" id="myfile" name="myfile" onChange={(e) => setImg(e.target.value)} />
            <br />
            <div style={{ margin: "0 auto" }}>
              <button
                className="form-btn"
                onClick={() => setIsAddBirthdayShown(!isAddBirthdayShown)}
              >
                Close
              </button>
              <button
                className="form-btn"
                onClick={addBirthday}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function AddBirthdayButton({ setIsAddBirthdayShown }) {
  return (
    <div>
      <button className="btn" onClick={() => setIsAddBirthdayShown(true)}>
        Add Birthday
      </button>
    </div>
  );
}

export { AddBirthdayModal, AddBirthdayButton };
