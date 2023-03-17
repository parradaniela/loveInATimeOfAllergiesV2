import { useContext, useEffect } from "react"
import { DataContext, FirebaseDataType } from "../../../../context/DataContext"
import PreviewListItem from "./PreviewListItem"

const PreviewList = () => {

  const { firebaseData, userChoice, partyPreview, setPartyPreview } = useContext(DataContext)

  useEffect(() => {
    for (let key in firebaseData) {
      if (key === userChoice) {
        setPartyPreview(Object.values(firebaseData[key as keyof FirebaseDataType]));
      }
    }
  }, [userChoice, firebaseData])

  return (
    <div className="guestList">
      <div className="summaryContainer cssanimation">
        <h2>Step 3: Review Your Party</h2>
        <ul className="partySummary">
          <PreviewListItem 
            heading="Name"
            property="guestName"
          />
          <PreviewListItem 
            heading="Dietary Restrictions"
            property="restrictions"
          />
        </ul>
      </div>
    </div>
  )
}

export default PreviewList