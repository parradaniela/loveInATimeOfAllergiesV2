type PropsType = {
    listItemText: string | string[] | undefined
}

const PreviewListText = ({ listItemText }: PropsType) => {
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