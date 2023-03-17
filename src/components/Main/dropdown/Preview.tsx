import { useContext, useEffect } from "react"
import { DataContext, FirebaseDataType } from "../../../context/DataContext"

const Preview = () => {

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
          <li className="guestName">
            <h3>Name</h3>
          </li>
          {
            parties.map((party, index) => {
              return (
                <div key={index}>
                  <p>{party.guestName}</p>
                  <p>{party.restrictions}</p>
                </div>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Preview