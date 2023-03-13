import BgWaveTwo from "../../assets/BgWaveTwo"
import firebase from "../../firebase/firebase";
import { getDatabase, ref, onValue, DataSnapshot } from 'firebase/database';
import Form from "./form/Form";
import { useEffect, useState } from "react";

const Main = () => {

  const [fbData, setFbData] = useState<DataSnapshot[]>([])
  const database = getDatabase(firebase)
  const dbRef = ref(database)

  useEffect(() => {
    onValue(dbRef, (response) => {
      const newDataState: DataSnapshot[] = []
      newDataState.push(response.val());
      setFbData(newDataState)
    })
  }, [dbRef])

  return (
    <main>
          <Form />
          {/* <BgWaveTwo /> */}

    </main>
  )
}

export default Main