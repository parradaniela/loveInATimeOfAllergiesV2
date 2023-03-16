import { DataSnapshot, getDatabase, onValue, ref } from "firebase/database";
import { createContext, useState, Dispatch, ReactNode, useEffect } from "react";
import firebase from "../firebase/firebase";

export type DatabaseDataType = {
      guestName: string,
      party: string,
      restrictions: string[]
    }

type ChildrenType = { children?: ReactNode}

interface DataContextInterface {
  firebaseData: DataSnapshot | {},
  partyName: string,
  guestName: string,
  restrictions: string[],
  userChoice: string,
  setFirebaseData: Dispatch<React.SetStateAction<DataSnapshot>>,
  setPartyName: Dispatch<React.SetStateAction<string>>,
  setGuestName: Dispatch<React.SetStateAction<string>>,
  setRestrictions: Dispatch<React.SetStateAction<string[]>>,
  setUserChoice: Dispatch<React.SetStateAction<string>>
}

const initFbDataState: DatabaseDataType[] = [
  {
    guestName: '',
    party: '',
    restrictions: ['']
  }
]

// const defaultState = {
//   firebaseData: initFbDataState,
//   partyName: '',
//   guestName: '',
//   restrictions: [],
//   userChoice: '',
//   setFirebaseData: (data: DatabaseDataType[]) => {},
//   setPartyName: (party: string) => {},
//   setGuestName: (guest: string) => {},
//   setRestrictions: (restrictions: string[]) => {},
//   setUserChoice: (choice: string) => {}
// } as DataContextInterface

export const DataContext = createContext<Partial<DataContextInterface>>({});


const DataProvider = ({children}: ChildrenType)=> {
    const [firebaseData, setFirebaseData] = useState<DataSnapshot | {}>({})
    const [partyName, setPartyName] = useState('');
    const [guestName, setGuestName] = useState('');
    const [restrictions, setRestrictions] = useState<string[]>([]);
    const [userChoice, setUserChoice] = useState('')
    
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
            setFirebaseData, 
            setPartyName, 
            setGuestName, 
            setRestrictions, 
            setUserChoice 
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
