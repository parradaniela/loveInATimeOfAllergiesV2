import { useContext } from "react"
import { BaseDataType, DataContext } from "../../../../context/DataContext"
import PreviewListText from "./PreviewListText"

type PropsType = {
    heading: string,
    property: string
}

const PreviewListItem = ({ heading, property }: PropsType) => {
    const {partyPreview} = useContext(DataContext)

    return (
        <li>
            <h3>{heading}</h3>
            <ol>
                {
                    partyPreview.map((party, index) => {
                        return (
                            <li key={index}>
                                <PreviewListText listItemText={party[property as keyof BaseDataType]} />
                            </li>
                        )
                    })
                }
            </ol>
        </li>
    )
}

export default PreviewListItem