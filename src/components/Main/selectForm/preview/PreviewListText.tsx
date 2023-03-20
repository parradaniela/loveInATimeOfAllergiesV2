type PropsType = {
    listItemText: string | string[] | undefined
}

const PreviewListText = ({ listItemText }: PropsType) => {

  const checkForArray = () => {
    let text = ''
    if (typeof(listItemText) === 'object') {
      text = listItemText.join(' | ')
    } else if (listItemText !== undefined) {
      text = listItemText
    }
    return text
  }

  const finalText = checkForArray()

  return (
    <>
        {
            listItemText ?
            <p>{finalText} </p>
            : <p>None</p>
        }
    </>
  )
}

export default PreviewListText