import { FormEvent, useContext } from "react";
import TextInput from "./TextInput";
import Checkboxes from "./Checkboxes";
import { getDatabase, push, ref } from "firebase/database";
import firebase from "../../../services/firebase";
import { DataContext } from "../../../context/DataContext";
import BgWaveTwo from "../../../assets/BgWaveTwo";

const InputForm = () => {
  const {
    partyName,
    guestName,
    restrictions,
    setPartyName,
    setGuestName,
    setRestrictions
  } = useContext(DataContext)

  const resetForm = (): void => {
    setRestrictions([]);
    setGuestName('')
  }

  const clearCheckboxes = (e: FormEvent<HTMLFormElement>): void => {
    //TODO: Come up with a better solution than this :( 
      
    const target = e.target as Element;
    const checkboxNodeList = target.childNodes[1].childNodes[3].childNodes;
    // Iterating through the checkboxes to find checked boxes and flip them back to false
    checkboxNodeList.forEach(checkboxNode => {
      const checkboxInputs = checkboxNode.childNodes[0] as HTMLInputElement;
      if (checkboxInputs.checked) {
        checkboxInputs.checked = false
      }
    });
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const database = getDatabase(firebase)
    const childNodeRef = ref(database, `/${partyName}`)
    const newGuest = {
      party: partyName,
      guestName: guestName,
      restrictions: restrictions
    }
    push(childNodeRef, newGuest);
    clearCheckboxes(e);
    resetForm()
  }

  return (
    <section className="sectionPadding relContainer inputForm">
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
              setInputState={setPartyName}
              placeholder="Ex: Birthday Party"
            />
            <TextInput
              id="guestName"
              label="Guest Name: "
              inputState={guestName}
              setInputState={setGuestName}
              placeholder="Ex: John Smith"
            />
            <div className="checkboxes">
              <Checkboxes />
            </div>
            <div className="btnContainer">
              <button className="btn">Submit</button>
            </div>
          </fieldset>
        </form>
      </div>
      <BgWaveTwo />
    </section>
  )
}

export default InputForm