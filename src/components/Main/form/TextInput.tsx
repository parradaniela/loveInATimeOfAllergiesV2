import { ChangeEvent } from "react"

type PropsType = {
    id: string,
    label: string
    inputState: string,
    setInputFunc: React.Dispatch<React.SetStateAction<string>>,
    placeholder: string
}

const TextInput = ({id, label, inputState, setInputFunc, placeholder}: PropsType) => {

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
          type="text"
          id={id}
          value={inputState}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => setInputFunc((e.target.value).toLowerCase())}
          placeholder={placeholder}
          required
      />
    </>
  )
}

export default TextInput