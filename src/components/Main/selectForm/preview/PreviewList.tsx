import { useContext, useEffect } from "react"
import { DataContext } from "../../../../context/DataContext"
import { FirebaseDataType } from "../../../../types/dataTypes"
import PreviewListItem from "./PreviewListItem"

const PreviewList = () => {

  const { firebaseData, userChoice, setPartyPreview } = useContext(DataContext)

  useEffect(() => {
    for (let key in firebaseData) {
      if (key === userChoice) {
        setPartyPreview(Object.values(firebaseData[key as keyof FirebaseDataType]));
      }
    }
  }, [userChoice, firebaseData])

  return (
    <div className="guestList">
      {
        userChoice
          ? <div className="summaryContainer cssanimation sectionPadding">
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
          : null
      }
    </div>
  )
}

export default PreviewList