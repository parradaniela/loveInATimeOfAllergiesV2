import { FormEvent, useContext } from "react";
import BgWaveOne from "../../../assets/BgWaveOne";
import { DataContext } from "../../../context/DataContext";
import { apiEndpoint, constructApiParams } from "../../../services/recipeService";
import Dropdown from "./Dropdown";
import PreviewList from "./preview/PreviewList";

const SelectForm = () => {
    const { partyPreview, setRecipeData, loading, setLoading } = useContext(DataContext)

    const callApi = async (restrictionParams: string) => {
        try {
            setLoading(true)
            const apiData = await fetch(`${apiEndpoint}${restrictionParams}`)
            const recipes = await apiData.json()
            setRecipeData(recipes.hits)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error(error)
        }

    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const copyOfPartyPreview = [...partyPreview]
        const apiSearchParams = constructApiParams(copyOfPartyPreview)
        callApi(apiSearchParams)
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
                        <button className="btn">{loading ? 'Fetching...' : 'Get recipes'}</button>
                    </fieldset>
                </form>
            </div>
            <BgWaveOne />
        </section>
    )
}

export default SelectForm