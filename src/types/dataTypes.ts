// Firebase data types
export type BaseDataType = {
    guestName: string,
    party: string,
    restrictions?: string[]
}

export type PartyPreviewDataType = BaseDataType[]

export type FirebaseDataType = {
    [key: string]: {
        [key: string]: BaseDataType
    }
}

// Edamam API data types
export type RecipeDataType = {
    recipe: {
        [key: string]: any
    },
    _links: {
        [key: string]: string
    }
}