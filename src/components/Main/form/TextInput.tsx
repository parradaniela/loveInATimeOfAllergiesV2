import { ChangeEvent } from "react"

type PropsType = {
    id: string,
    label: string
    inputState: string,
    setInputState: React.Dispatch<React.SetStateAction<string>>,
    placeholder: string
}

const TextInput = ({id, label, inputState, setInputState, placeholder}: PropsType) => {

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
          type="text"
          id={id}
          value={inputState}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => setInputState((e.target.value).toLowerCase())}
          placeholder={placeholder}
          required
      />
    </>
  )
}

export default TextInput