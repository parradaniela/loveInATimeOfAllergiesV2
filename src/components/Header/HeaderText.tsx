// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//TODO: Do I want to try to figure out how to use TS with fontawesome? Currently the fontawesome component is giving me trouble with the typing on icon
type PropsType = {
  text: string,
  // icon: string | undefined,
  // iconClass: string | undefined
}
const HeaderText = ({text}: PropsType) => {
  return (
        <div className="iconTextDiv">
          <p>{text}</p>
        </div>
  )
}

export default HeaderText