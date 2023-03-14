import { DataSnapshot } from "firebase/database"
import { useState } from "react";
import Dropdown from "./Dropdown";

type PropsType = {
    allPartyData: {}
}

const SelectForm = ({allPartyData}: PropsType) => {
    const partyNames = Object.keys(allPartyData)
    const [userChoice, setUserChoice] = useState('')
    
    return (
        <section className="partyPreview">
            <div className="dropdown wrapper">
                <h2>Step 2: Select Your Party</h2>
                <form action="submit" className="dropdownForm">
                    <fieldset>
                        <legend>Select the party for which you wish to see recipe suggestions!</legend>
                        <Dropdown 
                            partyNames={partyNames}
                            userChoice={userChoice}
                            setUserChoice={setUserChoice}
                        />
                    </fieldset>
                </form>
            </div>
        </section>
    )
}

export default SelectForm