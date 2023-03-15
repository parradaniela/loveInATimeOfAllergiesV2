import { ChangeEvent, useContext } from "react"
import { DataContext } from "../../../context/DataContext";


const Dropdown = () => {
    const { fbData, userChoice, setUserChoice } = useContext(DataContext)
    const allParties = Object.values(fbData)[0]
    console.log(allParties);
    
    // const partyNames = Object.keys(allParties)

  return (
    <div>
        <label htmlFor="partyChoice">Choose Your Party</label>
        <select 
            name="partyChoice" 
            id="partyChoice"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setUserChoice(e.target.value)}
            value={userChoice}
        >
            {/* <option value="" disabled>Choose a party</option>
            {
                partyNames.map((party) => {
                    return (
                        <option value={party} key={party}>{party}</option>
                    )
                })
            } */}
        </select>
    </div>
  )
}

export default Dropdown