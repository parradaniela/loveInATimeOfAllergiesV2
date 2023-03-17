import { useContext } from "react"
import { BaseDataType, DataContext } from "../../../../context/DataContext"
import PreviewListText from "./PreviewListText"

type PropsType = {
    className: string,
    heading: string,
    property: string
}

const PreviewListItem = ({className, heading, property}: PropsType) => {
    const {partyPreviewObj} = useContext(DataContext)
    const parties = Object.values(partyPreviewObj)

    return (
        <li className={className}>
            <h3>{heading}</h3>
            <ol>
                {
                    parties.map((party, index) => {
                        return (
                            <li key={index}>
                                <PreviewListText number={index + 1} listItemText={party[property as keyof BaseDataType]} />
                            </li>
                        )
                    })
                }
            </ol>
        </li>
    )
}

export default PreviewListItem