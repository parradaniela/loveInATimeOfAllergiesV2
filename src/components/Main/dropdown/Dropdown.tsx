import { ChangeEvent, useContext } from "react"
import { DataContext } from "../../../context/DataContext";

type PartyDataType = {
        guestName: string,
        party: string, 
        restrictions: string[]
}

const Dropdown = () => {
    const { firebaseData, userChoice, setUserChoice } = useContext(DataContext)
    // const allParties = firebaseData.map(data => Object.values(data))
    // console.log(allParties);
    // const data = [...firebaseData]
    // console.log(data);
    
    
    // const partyNames = Object.keys(allParties)
    
    return (
    <div>
        {/* <label htmlFor="partyChoice">Choose Your Party</label>
        <select 
            name="partyChoice" 
            id="partyChoice"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setUserChoice(e.target.value)}
            value={userChoice}
        >
            <option value="" disabled>Choose a party</option>
            {
                partyNames.map((party) => {
                    return (
                        <option value={party} key={party}>{party}</option>
                    )
                })
            }
        </select> */}
    </div>
  )
}

export default Dropdown