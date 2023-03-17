import { getDatabase, onValue, ref } from "firebase/database";
import { createContext, useState, Dispatch, ReactNode, useEffect } from "react";
import firebase from "../firebase/firebase";

export type BaseDataType = {
  guestName: string,
  party: string,
  restrictions?: string[]
}

type PartyPreviewDataType = { 
  [key: string]: BaseDataType
}

export type FirebaseDataType = {
  [key: string]: PartyPreviewDataType
}


type ChildrenType = { children?: ReactNode}

interface DataContextInterface {
  firebaseData: FirebaseDataType,
  partyName: string,
  guestName: string,
  restrictions: string[],
  userChoice: string,
  partyPreviewObj: PartyPreviewDataType,
  setFirebaseData: Dispatch<React.SetStateAction<FirebaseDataType>>,
  setPartyName: Dispatch<React.SetStateAction<string>>,
  setGuestName: Dispatch<React.SetStateAction<string>>,
  setRestrictions: Dispatch<React.SetStateAction<string[]>>,
  setUserChoice: Dispatch<React.SetStateAction<string>>,
  setPartyPreviewObj: Dispatch<React.SetStateAction<PartyPreviewDataType>>
}

const initFbState = {
  '': {
    '': {
      guestName: '',
      party: '',
      restrictions: []
    }
  }
} as FirebaseDataType

const initPartyPreviewObjState = {
  '': {
    guestName: '',
    party: '',
    restrictions: []
  }
} as PartyPreviewDataType

const initContextState = {
  firebaseData: initFbState,
  partyName: '',
  guestName: '',
  restrictions: [],
  userChoice: '',
  partyPreviewObj: initPartyPreviewObjState,
  setFirebaseData: (value: FirebaseDataType) => {},
  setPartyName: (name: string) => {},
  setGuestName: (guest: string) => {},
  setRestrictions: (restrictions: string[]) => {},
  setUserChoice: (choice: string) => {},
  setPartyPreviewObj: (obj: PartyPreviewDataType) => {}
} as DataContextInterface


export const DataContext = createContext<DataContextInterface>(initContextState);

const DataProvider = ({children}: ChildrenType)=> {
    const [firebaseData, setFirebaseData] = useState<FirebaseDataType>(initFbState)
    const [partyName, setPartyName] = useState('');
    const [guestName, setGuestName] = useState('');
    const [restrictions, setRestrictions] = useState<string[]>([]);
    const [userChoice, setUserChoice] = useState('');
    const [partyPreviewObj, setPartyPreviewObj] = useState(initPartyPreviewObjState)
    
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
