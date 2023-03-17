import InputForm from "./form/InputForm";
import SelectForm from "./dropdown/SelectForm";
import DataProvider from "../../context/DataContext";
import ApiCall from "./recipeDisplay/ApiCall";

const Main = () => {

  return (
    <main>
      <DataProvider>
        <InputForm />
        <SelectForm />
        <ApiCall />
      </DataProvider>
    </main>
  )
}

export default Main