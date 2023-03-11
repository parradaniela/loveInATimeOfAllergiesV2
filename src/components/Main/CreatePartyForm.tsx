import { ChangeEvent, useState } from "react"
import RestrictionsForm from "./RestrictionsForm";

const CreatePartyForm = () => {

  const [partyNameInput, setPartyNameInput] = useState<string>('');

  return (
    <section className="forms">
          <div className="wrapper">
              <form action="submit" className="partyForm">
                  <h2>Step 1: Create Your Party</h2>
                  <fieldset>
                        <legend>
                            Enter what you would like to call your party, your guest's name and dietary restrictions, then click the Submit button. You can enter multiple guests and parties!
                        </legend>
                        <label htmlFor="newParty">Party Name:</label>
                        <input
                            type="text"
                            id="party"
                            onChange={(e: ChangeEvent<HTMLInputElement>): void => setPartyNameInput(e.target.value)}
                            value={partyNameInput}
                            placeholder="ex: Birthday Party"
                        />
                  </fieldset>
              </form>
              <RestrictionsForm />
        </div>
    </section>
  )
}

export default CreatePartyForm