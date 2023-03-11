import { ChangeEvent, useState } from "react"
import Checkbox from "./Checkbox";

const RestrictionsForm = () => {
    const [nameInput, setNameInput] = useState<string>('');
    const [guestRestrictions, setGuestRestrictions] = useState({});

  return (
    <div className="checkboxContainer">
        <div className="wrapper">
            <form action="#" className="guestRestrictionsForm">
                <div className="guestNameBox">
                    <label htmlFor="nameField">Guest Name: </label>
                    <input
                        type="text"
                        id="nameField"
                        value={nameInput}
                        onChange={(e: ChangeEvent<HTMLInputElement>): void => setNameInput(e.target.value)}
                        placeholder="Ex: John Smith"
                    />
                </div>
                <div className="checkboxes">
                    <Checkbox 
                        guestRestrictions={guestRestrictions}
                        setGuestRestrictions={setGuestRestrictions}
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default RestrictionsForm