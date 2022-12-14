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
  const [userBirthday, setUserBirthday] = useState("");
  const [progress, setProgress] = useState();

  //Keeping track of users image and passing image file to uploadFiles.
  function formHandler(e) {
    e.preventDefault();
    const file = e.target.files[0];
    uploadFiles(file);
  }

  //Getting image from firebase
  const uploadFiles = (file) => {
    if (!file) return;

    //Refrencing image in correct location in firebase.
    const storageRef = ref(storage, "images/");
    //Keep track of file size
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //Keep track of download progress and storing progress in state.
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      //Logging error
      (error) => console.log(error),
      () => {
        //Getting the URL of the image and setting it in state.
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          addBirthday(downloadURL); // 👈 but instead call it here
        });
      }
    );
  };

  function calculateAgeTurning() {
    //Subracting users birth year by the current year to get age.
    let usersNewAge = new Date().getFullYear() - userBirthday.substring(0, 4);
    return usersNewAge;
  }

  function addBirthday(url) {
    //getting the returned value and setting it in newBirthday object.
    let newAge = calculateAgeTurning();

    //New birthday object.
    const newBirthday = {
      id: uuidv1(),
      Name: name,
      AgeTurning: newAge,
      image: url,
    };

    //Adding new birthday to allBirthdays array.
    setAllBirthdays((prevState) => [...prevState, newBirthday]);

    //Closing modal.
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
              onChange={(e) => setUserBirthday(e.target.value)}
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
