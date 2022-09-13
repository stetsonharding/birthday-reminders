import React, { useState } from "react";
import "./AddBirthdayModal.css";

import { storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function AddBirthdayModal({
  setIsAddBirthdayShown,
  isAddBirthdayShown,
  setAllBirthdays,
}) {
  const { v1: uuidv1 } = require("uuid");

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [progress, setProgress] = useState();

  function formHandler(e) {
    e.preventDefault();
    const file = e.target.files[0];

    uploadFiles(file);
  }

  const uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage, "images/");
    console.log(storageRef);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),

      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          addBirthday(downloadURL); // 👈 but instead call it here
        });
      }
    );
  };

  function calculateAgeTurning() {
    let usersBirthday = date;
    let usersYearBorn = usersBirthday.substring(0, 4);
    return new Date().getFullYear() - usersYearBorn;
  }

  function addBirthday(url) {
    const newAge = calculateAgeTurning();

    const newBirthday = {
      id: uuidv1(),
      Name: name,
      AgeTurning: newAge,
      image: url,
    };

    setAllBirthdays((prevState) => [...prevState, newBirthday]);

    setIsAddBirthdayShown(false);
  }

  return (
    <div className="modal-container">
      <div className="modal">
        <p className="modal-title">Who's Birthday?</p>
        {progress && <p style={{ textAlign: "center" }}>{progress}%</p>}
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
              onChange={(e) => formHandler(e)}
            />
            <br />
            <div style={{ margin: "0 auto" }}>
              <button
                className="form-btn"
                onClick={() => setIsAddBirthdayShown(!isAddBirthdayShown)}
              >
                Close
              </button>
              {/* Fix bug for add Birthday */}
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
