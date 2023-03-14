import { FormEvent, useState } from "react";
import TextInput from "./TextInput";
import Checkboxes from "./Checkboxes";
import { getDatabase, push, ref } from "firebase/database";
import firebase from "../../../firebase/firebase";

const InputForm = () => {
  const [partyName, setPartyName] = useState<string>('');
  const [guestName, setGuestName] = useState<string>('');
  const [restrictions, setRestrictions] = useState<string[]>([]);
  const database = getDatabase(firebase)
  
  const resetForm = (): void => {
    setRestrictions([]);
    setGuestName('')
  }

  const clearCheckboxes = (e: FormEvent<HTMLFormElement>): void => {
    const target = e.target as Element;
    //Navigating through properties on the node list to find the checked property on each checkbox and flip it back to false
    const checkboxNodeList = target.childNodes[1].childNodes[5].childNodes;
    checkboxNodeList.forEach(checkboxNode => {     
        const checkboxInputs = checkboxNode.childNodes[1] as HTMLInputElement;
        if (checkboxInputs.checked) {
            checkboxInputs.checked = false
        }
    });
}

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const childNodeRef = ref(database, `/${partyName}`)
    const newGuest = {
      party: partyName,
      guestName: guestName,
      restrictions: Object.keys(restrictions)
    }
    push(childNodeRef, newGuest);
    clearCheckboxes(e);
    resetForm()
  }

  return (
    <section className="forms">
      <div className="wrapper">
        <form 
          action="submit" 
          className="partyForm"
          onSubmit={onSubmit}
        >
          <h2>Step 1: Create Your Party</h2>
          <fieldset>
            <legend>
                Enter what you would like to call your party, your guest's name and dietary restrictions, then click the Submit button. You can enter multiple guests and parties!
            </legend>
            
            <TextInput 
              id="partyName"
              label="Party Name: "
              inputState={partyName}
              setInputFunc={setPartyName}
              placeholder="Ex: Birthday Party"
            />
            <TextInput 
              id="guestName"
              label="Guest Name: "
              inputState={guestName}
              setInputFunc={setGuestName}
              placeholder="Ex: John Smith"
            />
            <div className="checkboxes">
              <Checkboxes 
                restrictions={restrictions}
                setRestrictions={setRestrictions}
              />
            </div>
            <div className="buttonContainer">
                <button className="btn">Submit</button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  )
}

export default InputForm