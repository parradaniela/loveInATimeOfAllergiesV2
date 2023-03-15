import firebase from "../../firebase/firebase";
import { getDatabase, ref, onValue, DataSnapshot } from 'firebase/database';
import InputForm from "./form/InputForm";
import { useContext, useEffect, useState } from "react";
import SelectForm from "./dropdown/SelectForm";
import DataProvider, {DataContext} from "../../context/DataContext";


export type DatabaseDataType = {
  [key: string]: {
    [key: string]: {
      guestName: string,
      party: string,
      restrictions: string[]
    }
  }
}

const Main = () => {
  
  const database = getDatabase(firebase)
  const dbRef = ref(database)
  // const { setFbData } = useContext(DataContext)
  const [fbData, setFbData] = useState<DataSnapshot[]>([])
  // const [allPartyData, setAllPartyData] = useState<DatabaseDataType | {}>({})

  useEffect(() => {
    onValue(dbRef, (response) => {
      const newDataState: DataSnapshot[] = []
      newDataState.push(response.val());
      setFbData(newDataState)
      // setAllPartyData(Object.values(newDataState)[0])
    })
  }, [dbRef])

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