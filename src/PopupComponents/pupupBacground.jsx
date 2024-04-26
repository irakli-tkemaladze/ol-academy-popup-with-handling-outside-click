import { Popup } from "./popup"
import { useEffect, useRef } from "react"
import "./popupBackground.css"
function PopupBacground({ togglePopup, popup }) {

    const PopupRef = useRef(null)
    const bacgroundRef = useRef(null)

    useEffect(() => {


        const cancelPopup = (e) => {
            if (bacgroundRef?.current.contains(e.target) && !PopupRef?.current.contains(e.target)) {
                togglePopup()
            }
        }
        document.addEventListener("click", cancelPopup)
        return function removeListener() {
            document.removeEventListener("click", cancelPopup)

        }

    }, [popup]
    )

    return (
        <div ref={bacgroundRef} className="popupBackground">
            <div ref={PopupRef}> <Popup popup={popup} togglePopup={togglePopup} /></div>
        </div>
    )
}

export { PopupBacground }