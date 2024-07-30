import { useState } from "react"

const Expand = (props) => {
    const [isShowing, setIsShowing] = useState(true)
    function handleClick() {
        setIsShowing(!isShowing)
    }

    return (
        <div>
            <button onClick={handleClick}>{isShowing ? "Hide" : "Show"} Cat</button>
            {isShowing ? props.children: null}
        </div>
    )
}

export default Expand