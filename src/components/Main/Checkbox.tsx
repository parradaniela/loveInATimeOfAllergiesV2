import { ChangeEvent, useState } from "react";
import { checkboxes } from "../../data/checkboxes";

type PropsType = {
    guestRestrictions: {},
    setGuestRestrictions: React.Dispatch<React.SetStateAction<{}>>
}

const Checkbox = ({guestRestrictions, setGuestRestrictions}: PropsType) => {
    
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
                        value={guestRestrictions[checkbox.id as keyof {}]}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setGuestRestrictions({...guestRestrictions, [e.target.name]: e.target.checked})}
                    />
                </div>
                )
            })
        }
    </>
  )
}

export default Checkbox