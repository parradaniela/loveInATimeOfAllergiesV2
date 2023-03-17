import { useContext, useEffect } from "react"
import { DataContext, FirebaseDataType } from "../../../../context/DataContext"
import PreviewListItem from "./PreviewListItem"

const PreviewList = () => {

  const { firebaseData, userChoice, partyPreviewObj, setPartyPreviewObj } = useContext(DataContext)

  useEffect(() => {
    for (let key in firebaseData) {
      if (key === userChoice) {
        setPartyPreviewObj(firebaseData[key as keyof FirebaseDataType]);
      }
    }
  }, [userChoice, firebaseData])

  const parties = Object.values(partyPreviewObj)

  return (
    <div className="guestList">
      <div className="summaryContainer cssanimation">
        <h2>Step 3: Review Your Party</h2>
        <ul className="partySummary">
          <PreviewListItem 
            className="guestNames"
            heading="Name"
            property="guestName"
          />
          <PreviewListItem 
            className="guestRestrictions"
            heading="Dietary Restrictions"
            property="restrictions"
          />
        </ul>
      </div>
    </div>
  )
}

export default PreviewList