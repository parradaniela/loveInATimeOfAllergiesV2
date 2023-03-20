import { ChangeEvent, useContext } from "react"
import { DataContext } from "../../../context/DataContext";

const Dropdown = () => {
    const { firebaseData, userChoice, setUserChoice } = useContext(DataContext)

    return (
        <div>
            <label htmlFor="partyChoice">Choose Your Party</label>
            <select
                name="partyChoice"
                id="partyChoice"
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setUserChoice(e.target.value)}
                value={userChoice}
            >
                <option value="" disabled>Choose a party</option>
                {
                    (Object.keys(firebaseData)).map((party) => {
                        return (
                            <option value={party} key={party}>{party}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Dropdown