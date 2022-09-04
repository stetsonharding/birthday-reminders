import React from "react";
import "./AddBirthdayModal.css";

function AddBirthdayModal({ setIsAddBirthdayShown, isAddBirthdayShown }) {
  return (
    <div className="modal-container">
      <div className="modal">
        <p className="modal-title">Who's Birthday?</p>
        <div className="form-container">
          <form className="birthday-form">
            <label htmlfor="name">Name:</label>
            <input id="name" type="text" placeholder="Name" />
            <br />
            <label htmlfor="birthday">Birthday:</label>
            <input type="date" id="birthday" name="birthday" />
            <br />
            <label htmlfor="myfile">Select a Image: </label>
            <input type="file" id="myfile" name="myfile" />
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
                onClick={() => setIsAddBirthdayShown(!isAddBirthdayShown)}
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
