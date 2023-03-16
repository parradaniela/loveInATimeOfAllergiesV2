import { DataSnapshot, getDatabase, onValue, ref } from "firebase/database";
import { createContext, useState, Dispatch, ReactNode, useEffect } from "react";
import firebase from "../firebase/firebase";

export type PartyPreviewDataType = {
  [key: string]: {
    guestName: string,
    party: string,
    restrictions?: string[]
  }
}

type ChildrenType = { children?: ReactNode}

interface DataContextInterface {
  firebaseData: DataSnapshot | {},
  partyName: string,
  guestName: string,
  restrictions: string[],
  userChoice: string,
  partyPreviewObj: PartyPreviewDataType,
  setFirebaseData: Dispatch<React.SetStateAction<DataSnapshot>>,
  setPartyName: Dispatch<React.SetStateAction<string>>,
  setGuestName: Dispatch<React.SetStateAction<string>>,
  setRestrictions: Dispatch<React.SetStateAction<string[]>>,
  setUserChoice: Dispatch<React.SetStateAction<string>>,
  setPartyPreviewObj: Dispatch<React.SetStateAction<PartyPreviewDataType>>
}

export const DataContext = createContext<Partial<DataContextInterface>>({});


const DataProvider = ({children}: ChildrenType)=> {
    const [firebaseData, setFirebaseData] = useState<DataSnapshot | {}>({})
    const [partyName, setPartyName] = useState('');
    const [guestName, setGuestName] = useState('');
    const [restrictions, setRestrictions] = useState<string[]>([]);
    const [userChoice, setUserChoice] = useState('');
    const [partyPreviewObj, setPartyPreviewObj] = useState({})
    
    useEffect(() => {
      const database = getDatabase(firebase)
      const dbRef = ref(database)
      onValue(dbRef, (response) => {
        setFirebaseData(response.val())
      });
    }, [])

    return (
        <DataContext.Provider 
          value={{ 
            firebaseData, 
            partyName, 
            guestName, 
            restrictions, 
            userChoice,
            partyPreviewObj, 
            setFirebaseData, 
            setPartyName, 
            setGuestName, 
            setRestrictions, 
            setUserChoice,
            setPartyPreviewObj 
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
