import { ChangeEvent, useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { checkboxes } from "../../../data/checkboxes";


const Checkboxes = () => {

    const {restrictions, setRestrictions} = useContext(DataContext);

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
                        <div key={i} className="checkboxContainer">
                            <input
                                type="checkbox"
                                id={checkbox.toLowerCase()}
                                onChange={onChange}
                            />
                            <label htmlFor={checkbox.toLowerCase()}>{checkbox}</label>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Checkboxes