import { useState} from "react"
import { PopupBacground } from "./pupupBacground"
import "./popupWrapper.css"


function PopupWrapper() {
    const [popup, setPopUp] = useState(false)

  
    function togglePopup() {
        setPopUp(!popup)
    }

    return (
        <div className="popupWrapper">
            {!popup && <div>
                <h1>hello i can call popup</h1>
                <p>you have to click button for call</p>
                <div>
                    <button onClick={togglePopup}>click me for call</button>
                </div>
            </div>}
            {popup && <PopupBacground togglePopup={togglePopup} popup={popup} />}
        </div>

    )

}

export { PopupWrapper }