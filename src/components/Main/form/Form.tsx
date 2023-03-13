import { FormEvent, useState } from "react";
import TextInput from "./TextInput";
import Checkboxes from "./Checkboxes";

type FormStateType = {
  party: string,
  guestName: string,
  restrictions: string[]
}

export type GuestRestrictionType = {[key: string]: boolean}

const Form = () => {
  const [partyName, setPartyName] = useState<string>('');
  const [guestName, setGuestName] = useState<string>('');
  const [formState, setFormState] = useState<FormStateType>({party: '', guestName: '', restrictions: []});
  const [guestRestrictions, setGuestRestrictions] = useState<GuestRestrictionType>({});
  
  const resetForm = (): void => {
    setGuestRestrictions({});
    setGuestName('')
  }

  //Handling the logic to remove any false properties (ie, checkboxes that were checked, then unchecked) here, rather than in Checkbox component, so that it only has to check for the false values once (on submit) instead of multiple times (on change) in case the user decides to check and uncheck the same box multiple times
  const removeFalse = (stateObj: GuestRestrictionType) => {
    for (const key in stateObj) {
        if (stateObj[key as keyof GuestRestrictionType] === false) {
            delete stateObj[key as keyof GuestRestrictionType]
        }
    }
    return stateObj
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setFormState({
        party: partyName,
        guestName: guestName,
        restrictions: Object.keys(removeFalse(guestRestrictions))
    });
    clearCheckboxes(e);
    resetForm()
  }

  return (
    <section className="forms">
      <div className="wrapper">
        <form 
          action="submit" 
          className="partyForm"
          onSubmit={handleSubmit}>
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
                guestRestrictions={guestRestrictions}
                setGuestRestrictions={setGuestRestrictions}
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

export default Form