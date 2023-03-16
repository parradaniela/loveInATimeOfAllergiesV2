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
                //Using optional chaining here to check that setUserChoice is not undefined then executes it, once again due to the Partial typing in the Context
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setUserChoice?.(e.target.value)}
                value={userChoice}
            >
                <option value="" disabled>Choose a party</option>
                {
                    // Using the non-null assertion operator because creating the Context with a Partial Interface means that all of the values can be undefined. So I have to assert that the firebaseData will not be undefined
                    (Object.keys(firebaseData!)).map((party) => {
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