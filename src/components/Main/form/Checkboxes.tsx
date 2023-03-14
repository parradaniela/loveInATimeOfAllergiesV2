import { ChangeEvent } from "react";
import { checkboxes } from "../../../data/checkboxes";

type PropsType = {
    restrictions: string[],
    setRestrictions: React.Dispatch<React.SetStateAction<string[]>>
}
const Checkboxes = ({ restrictions, setRestrictions }: PropsType) => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let copyOfRestrictions = [...restrictions]
        if (copyOfRestrictions.includes(e.target.id)) {
            copyOfRestrictions = copyOfRestrictions.filter(val => val !== e.target.id)
        } else {
            copyOfRestrictions.push(e.target.id)
        }
        setRestrictions(copyOfRestrictions)
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
                                onChange={onChange}
                            />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Checkboxes