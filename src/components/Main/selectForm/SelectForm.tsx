import { FormEvent, useContext } from "react";
import BgWaveOne from "../../../assets/BgWaveOne";
import { DataContext } from "../../../context/DataContext";
import { apiEndpoint, constructApiParams } from "../../../services/recipeService";
import Dropdown from "./Dropdown";
import PreviewList from "./preview/PreviewList";

const SelectForm = () => {
    const { partyPreview, setRecipeData } = useContext(DataContext)

    const callApi = async (restrictionParams: string) => {
        const apiData = await fetch(`${apiEndpoint}${restrictionParams}`)
        const recipes = await apiData.json()
        setRecipeData(recipes.hits)
        //TODO: add error handling
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const copyOfPartyPreview = [...partyPreview]
        const apiSearchParams = constructApiParams(copyOfPartyPreview)
        callApi(apiSearchParams)
        // const results = callApi(apiSearchParams)
        // setRecipeData(results)
    }

    return (
        <section className="partyPreview relContainer sectionPadding">
            <div className="dropdown wrapper">
                <h2>Step 2: Select Your Party</h2>
                <form action="submit" className="dropdownForm" onSubmit={onSubmit}>
                    <fieldset>
                        <legend>Select the party for which you wish to see recipe suggestions!</legend>
                        <Dropdown />
                        <PreviewList />
                        <button className="btn">Show me recipes</button>
                    </fieldset>
                </form>
            </div>
            <BgWaveOne />
        </section>
    )
}

export default SelectForm