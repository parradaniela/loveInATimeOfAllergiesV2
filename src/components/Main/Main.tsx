import firebase from "../../firebase/firebase";
import { getDatabase, ref, onValue, DataSnapshot } from 'firebase/database';
import InputForm from "./form/InputForm";
import { useEffect, useState } from "react";
import SelectForm from "./dropdown/SelectForm";

const Main = () => {

  const [fbData, setFbData] = useState<DataSnapshot[]>([])
  const [allPartyData, setAllPartyData] = useState({})
  const database = getDatabase(firebase)
  const dbRef = ref(database)

  useEffect(() => {
    onValue(dbRef, (response) => {
      const newDataState: DataSnapshot[] = []
      newDataState.push(response.val());
      setFbData(newDataState)
      setAllPartyData(Object.values(newDataState)[0])
    })
  }, [dbRef])

  return (
    <main>
        <InputForm />
        <SelectForm allPartyData={allPartyData}/>
    </main>
  )
}

export default Main