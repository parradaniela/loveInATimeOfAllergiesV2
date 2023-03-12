import { ChangeEvent, FormEvent, useState } from "react"
import Checkbox from "./Checkbox";

const RestrictionsForm = () => {
    const [formState, setFormState] = useState({})
    const [guestRestrictions, setGuestRestrictions] = useState({});
    const [nameInput, setNameInput] = useState('');

    const removeFalse = (stateObj: {}) => {
        for (const key in stateObj) {
            if (stateObj[key as keyof {}] === false) {
                delete stateObj[key as keyof {}]
            }
        }
        return stateObj
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState({
            name: nameInput,
            restrictions: removeFalse(guestRestrictions)
        });
        const target = e.target as Element;
        const checkboxNodeList = target.children[1].childNodes;
        
        checkboxNodeList.forEach(childNode => {
            const checkboxInputs = childNode.childNodes[1] as HTMLInputElement;
            
            if (checkboxInputs.checked) {
                checkboxInputs.checked = false
            }
        })
        setGuestRestrictions({});
        setNameInput('')
    }

  return (
    <div className="checkboxContainer">
        <div className="wrapper">
            <form 
            action="#" 
            className="guestRestrictionsForm" 
            onSubmit={handleSubmit}
            >
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
                <div className="buttonContainer">
                    <button className="btn">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default RestrictionsForm