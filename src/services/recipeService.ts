import { PartyPreviewDataType } from "../types/dataTypes";
  
  const edamamAppID = "app_id=d42468c4";
  const edamamApiKey = "app_key=2a81448b298b7c6715d72883fbd595cd"
  const mealType = "mealType=dinner"
  const random = "random=true"
  export const apiEndpoint = `https://api.edamam.com/api/recipes/v2?type=public&${edamamAppID}&${edamamApiKey}&${mealType}&${random}`


  const checkForRestrictions = (partyPreviewData: PartyPreviewDataType) => {
    const filteredData = partyPreviewData.filter(data => data.restrictions)
    return filteredData
  }

  export const constructApiParams = (partyPreviewData: PartyPreviewDataType) => {
    const filteredData = checkForRestrictions(partyPreviewData)
    if (filteredData.length > 0) {
      const mergedRestrictions = filteredData.map(guestObj => {
          return guestObj.restrictions
      });
      const concatenated = Array.prototype.concat.apply([], mergedRestrictions)
      const unique = [...new Set(concatenated)]
      const finalUrlParams = unique.join("&health=")
      return `&health=${finalUrlParams}`
    }
    return ''
  }

