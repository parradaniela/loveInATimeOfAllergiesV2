import firebase from "../firebase/firebase";
import { DataSnapshot, getDatabase, ref, Database, DatabaseReference } from "firebase/database";
import { createContext, useState, Dispatch, ReactNode } from "react";

interface DataContextInterface {
  fbData: {},
  partyName: string,
  guestName: string,
  restrictions: string[],
  userChoice: string,
  setFbData: Dispatch<React.SetStateAction<{}>>,
  setPartyName: Dispatch<React.SetStateAction<string>>,
  setGuestName: Dispatch<React.SetStateAction<string>>,
  setRestrictions: Dispatch<React.SetStateAction<string[]>>,
  setUserChoice: Dispatch<React.SetStateAction<string>>
}

type ChildrenType = { children?: ReactNode}

const defaultState = {
  fbData: {},
  partyName: '',
  guestName: '',
  restrictions: [''],
  userChoice: '',
  setFbData: (data: {}) => {},
  setPartyName: (party: string) => {},
  setGuestName: (guest: string) => {},
  setRestrictions: (restrictions: string[]) => {},
  setUserChoice: (choice: string) => {}
} as DataContextInterface

export const DataContext = createContext<DataContextInterface>(defaultState);


const DataProvider = ({children}: ChildrenType)=> {
    
    
    const [fbData, setFbData] = useState<{}>({})
    const [userChoice, setUserChoice] = useState('')
    const [partyName, setPartyName] = useState<string>('');
    const [guestName, setGuestName] = useState<string>('');
    const [restrictions, setRestrictions] = useState<string[]>([]);
    
    return (
        <DataContext.Provider value={{ fbData, setFbData, userChoice, setUserChoice, partyName, setPartyName, guestName, setGuestName, restrictions, setRestrictions }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
