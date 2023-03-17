type PropsType = {
    number: number
    listItemText: string | string[] | undefined
}

const PreviewListText = ({number, listItemText}: PropsType) => {
  return (
    <>
        {
            listItemText ? 
            <p>{listItemText} </p>
            : <p>None</p>
        }
    </>
  )
}

export default PreviewListText