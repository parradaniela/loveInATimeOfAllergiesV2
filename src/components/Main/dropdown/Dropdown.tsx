import { ChangeEvent } from "react"

type PropsType = {
    partyNames: string[],
    userChoice: string,
    setUserChoice: React.Dispatch<React.SetStateAction<string>>
}

const Dropdown = ({partyNames, userChoice, setUserChoice}: PropsType) => {
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
                partyNames.map((party) => {
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