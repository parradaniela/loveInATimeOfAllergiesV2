import { ChangeEvent } from "react";
import { checkboxes } from "../../data/checkboxes";

type PropsType = {
    guestRestrictions: {},
    setGuestRestrictions: React.Dispatch<React.SetStateAction<{}>>
}
const Checkbox = ({guestRestrictions, setGuestRestrictions}: PropsType) => {
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setGuestRestrictions({...guestRestrictions, [e.target.name]: e.target.checked})
    }

  return (
    <>
        {
            checkboxes.map((checkbox, i) => {
                return (
                <div key={i}>
                    <label htmlFor={checkbox.id}>{checkbox.label}</label>
                    <input 
                        type="checkbox" 
                        name={checkbox.id}
                        id={checkbox.id}
                        onChange={handleChange}
                    />
                </div>
                )
            })
        }
    </>
  )
}

export default Checkbox