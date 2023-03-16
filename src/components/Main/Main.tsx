import InputForm from "./form/InputForm";
import SelectForm from "./dropdown/SelectForm";
import DataProvider from "../../context/DataContext";

const Main = () => {

  return (
    <main>
      <DataProvider>
        <InputForm />
        <SelectForm />
      </DataProvider>
    </main>
  )
}

export default Main