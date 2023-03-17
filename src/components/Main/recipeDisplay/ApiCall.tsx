import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

const ApiCall = () => {
    const {partyPreview} = useContext(DataContext)
    
    const edamamAppID = "app_id=d42468c4";
    const edamamApiKey = "app_key=2a81448b298b7c6715d72883fbd595cd"
    const mealType = "mealType=dinner"
    const random = "random=true"
    const apiEndpoint = `https://api.edamam.com/api/recipes/v2?type=public&${edamamAppID}&${edamamApiKey}&${mealType}&${random}&health=`

    const mergedRestrictions = partyPreview.map(guestObj => {
        return guestObj.restrictions
    })
    const concatenated = Array.prototype.concat.apply([], mergedRestrictions)
    const unique = [...new Set(concatenated)]
    const finalUrlParams = unique.join("&health=")

  return (
    <div>ApiCall</div>
  )
}

export default ApiCall