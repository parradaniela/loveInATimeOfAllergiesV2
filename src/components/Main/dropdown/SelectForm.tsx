import Dropdown from "./Dropdown";
import PreviewList from "./preview/PreviewList";

const SelectForm = () => {

    return (
        <section className="partyPreview">
            <div className="dropdown wrapper">
                <h2>Step 2: Select Your Party</h2>
                <form action="submit" className="dropdownForm">
                    <fieldset>
                        <legend>Select the party for which you wish to see recipe suggestions!</legend>
                        <Dropdown />
                        <PreviewList />
                    </fieldset>
                </form>
            </div>
        </section>
    )
}

export default SelectForm