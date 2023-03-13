import { ChangeEvent } from "react";
import { checkboxes } from "../../../data/checkboxes";
import { GuestRestrictionType } from "../form/Form";

type PropsType = {
    guestRestrictions: GuestRestrictionType,
    setGuestRestrictions: React.Dispatch<React.SetStateAction<GuestRestrictionType>>
}

const Checkboxes = ({guestRestrictions, setGuestRestrictions}: PropsType) => {
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setGuestRestrictions({...guestRestrictions, [e.target.id]: e.target.checked})
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

export default Checkboxes