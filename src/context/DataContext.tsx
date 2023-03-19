import { getDatabase, onValue, ref } from "firebase/database";
import { createContext, useState, Dispatch, ReactNode, useEffect } from "react";
import { PartyPreviewDataType, FirebaseDataType, RecipeDataType } from "../types/dataTypes";
import firebase from "../services/firebase";
import { initContextState, initFbState, initPartyPreviewState, initRecipeDataState } from "./initialStates";

type ChildrenType = { children: ReactNode }

export interface DataContextInterface {
  firebaseData: FirebaseDataType,
  partyName: string,
  guestName: string,
  restrictions: string[],
  userChoice: string,
  partyPreview: PartyPreviewDataType,
  recipeData: RecipeDataType[],
  setFirebaseData: Dispatch<React.SetStateAction<FirebaseDataType>>,
  setPartyName: Dispatch<React.SetStateAction<string>>,
  setGuestName: Dispatch<React.SetStateAction<string>>,
  setRestrictions: Dispatch<React.SetStateAction<string[]>>,
  setUserChoice: Dispatch<React.SetStateAction<string>>,
  setPartyPreview: Dispatch<React.SetStateAction<PartyPreviewDataType>>,
  setRecipeData: Dispatch<React.SetStateAction<RecipeDataType[]>>
}

export const DataContext = createContext<DataContextInterface>(initContextState);

const DataProvider = ({ children }: ChildrenType) => {
  const [firebaseData, setFirebaseData] = useState(initFbState)
  const [partyName, setPartyName] = useState('');
  const [guestName, setGuestName] = useState('');
  const [restrictions, setRestrictions] = useState<string[]>([]);
  const [userChoice, setUserChoice] = useState('');
  const [partyPreview, setPartyPreview] = useState(initPartyPreviewState)
  const [recipeData, setRecipeData] = useState(initRecipeDataState)

  //Pulls FB data when the DataProvider mounts, and updates when values change
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
        partyPreview,
        recipeData,
        setFirebaseData,
        setPartyName,
        setGuestName,
        setRestrictions,
        setUserChoice,
        setPartyPreview,
        setRecipeData
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;
