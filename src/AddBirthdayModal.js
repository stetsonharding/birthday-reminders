import React from 'react'
import "./AddBirthdayModal.css"

export default function AddBirthdayModal({ isAddBirthdayShown, setIsAddBirthdayShown }) {

    const showHideClassName = isAddBirthdayShown ? 'modal-container display-block' : 'modal display-none'

    return (
        <div className={showHideClassName}>
            <div className='modal'>
                <p className='modal-title'>Who's Birthday?</p>
                <div className='form-container'>
                    <form className='birthday-form'>

                        <input type='text' placeholder='Name' />
                        <br />
                        <input type='text' placeholder='Age' />
                        <br />
                        <label for="myfile">Select a Image: </label>
                        <input type="file" id="myfile" name="myfile" />
                        <br />
                        <button onClick={() => setIsAddBirthdayShown(false)}>Close</button>
                    </form>
                </div>

            </div>
        </div>

    )

}