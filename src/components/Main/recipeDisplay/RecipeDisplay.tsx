import { useContext } from "react"
import { DataContext } from "../../../context/DataContext"
import RecipeItem from "./RecipeItem"
import { initRecipeDataState } from "../../../context/DataContext"

const RecipeDisplay = () => {
    const { recipeData } = useContext(DataContext)

    return (
        <section className="sectionPadding relContainer">
            <div className="wrapper">
                <ul className="recipeList">
                    {
                        recipeData === initRecipeDataState 
                        ? null
                        : recipeData.map(recipeObj => {
                            return (
                                <li 
                                className="individualRecipe cssanimation fadeInBottom" 
                                key={recipeObj.recipe.label}
                                >
                                    <RecipeItem 
                                        url={recipeObj.recipe.url}
                                        imgSrc={recipeObj.recipe.image}
                                        label={recipeObj.recipe.label}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default RecipeDisplay