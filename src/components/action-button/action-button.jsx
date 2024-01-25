import { Link } from "react-router-dom"
import "./action-button.css"

function ActionButton({text, style}) {

  return (
    <>
        <button className={`button-action ${style}`}>
            {text}
        </button>
    </>
  )
}

export default ActionButton