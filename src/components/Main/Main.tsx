import InputForm from "./inputForm/InputForm";
import SelectForm from "./dropdown/SelectForm";
import DataProvider from "../../context/DataContext";
import RecipeDisplay from "./recipeDisplay/RecipeDisplay";

const Main = () => {

  return (
    <main>
      <DataProvider>
        <InputForm />
        <SelectForm />
        <RecipeDisplay />
      </DataProvider>
    </main>
  )
}

export default Main