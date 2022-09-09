import React, { useState } from "react";
import "./AddBirthdayModal.css";

import { storage } from "./firebase";
import { ref, uploadBytes } from "firebase/storage";

function AddBirthdayModal({
  setIsAddBirthdayShown,
  isAddBirthdayShown,
  setAllBirthdays,
}) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [imgUpload, setImgUpload] = useState();

  const { v1: uuidv1 } = require("uuid");

  let usersNewAge = 0;
  //Calculate age user is turning.
  function calculateAgeTurning() {
    let usersBirthday = date;
    let usersYearBorn = usersBirthday.substring(0, 4);
    usersNewAge = new Date().getFullYear() - usersYearBorn;
  }

  function addBirthday() {
    calculateAgeTurning();

    if (imgUpload !== null) {
      const imageRef = ref(storage, `images/${imgUpload.name + uuidv1()}`);
      uploadBytes(imageRef, imgUpload).then(() => {
        alert("image uploaded");
      });
    }

    const newBirthday = {
      id: uuidv1(),
      Name: name,
      AgeTurning: usersNewAge,
      image: imgUpload,
    };

    setAllBirthdays((prevState) => [...prevState, newBirthday]);

    setIsAddBirthdayShown(false);
  }

  return (
    <div className="modal-container">
      <div className="modal">
        <p className="modal-title">Who's Birthday?</p>
        <div className="form-container">
          <form className="birthday-form">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="birthday">Birthday:</label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              onChange={(e) => setDate(e.target.value)}
            />
            <br />
            <label htmlFor="myfile">Select a Image: </label>
            <input
              type="file"
              id="myfile"
              name="myfile"
              onChange={(e) => setImgUpload(e.target.files[0])}
            />
            <br />
            <div style={{ margin: "0 auto" }}>
              <button
                className="form-btn"
                onClick={() => setIsAddBirthdayShown(!isAddBirthdayShown)}
              >
                Close
              </button>
              <button className="form-btn" onClick={addBirthday}>
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
