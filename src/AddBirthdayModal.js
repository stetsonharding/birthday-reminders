import React from 'react'
import "./AddBirthdayModal.css"

export default function AddBirthdayModal({isAddBirthdayShown, setIsAddBirthdayShown}) {

const showHideClassName = isAddBirthdayShown ? 'modal-container display-block' : 'modal display-none'

    return(
        <div className={showHideClassName}>
            <div className="modal">
                <p className="modal-title">Who's Birthday?</p>
                <form className="birthday-form">
                    
                </form>
                <button onClick={() => setIsAddBirthdayShown(false)}>Close</button>
            </div>
        </div>
        
    )

}