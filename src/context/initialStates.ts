
import { BaseDataType, FirebaseDataType, PartyPreviewDataType, RecipeDataType } from "../types/dataTypes"
import { DataContextInterface } from "./DataContext"

//Initial states for when the DataContext initially loads

const initBaseDataState = { guestName: '', party: '', restrictions: [] } as BaseDataType

export const initFbState = { '': { '': initBaseDataState } } as FirebaseDataType

export const initPartyPreviewState = [initBaseDataState] as PartyPreviewDataType

export const initRecipeDataState = [
    {
        recipe: {
            '': ''
        },
        _links: {
            '': ''
        }
    }
] as RecipeDataType[]

export const initContextState = {
    firebaseData: initFbState,
    partyName: '',
    guestName: '',
    restrictions: [],
    userChoice: '',
    partyPreview: initPartyPreviewState,
    recipeData: initRecipeDataState,
    loading: false,
    setFirebaseData: (value: FirebaseDataType) => { },
    setPartyName: (name: string) => { },
    setGuestName: (guest: string) => { },
    setRestrictions: (restrictions: string[]) => { },
    setUserChoice: (choice: string) => { },
    setPartyPreview: (obj: PartyPreviewDataType) => { },
    setRecipeData: (recipes: RecipeDataType[]) => { },
    setLoading: (loading: boolean) => { }
} as DataContextInterface