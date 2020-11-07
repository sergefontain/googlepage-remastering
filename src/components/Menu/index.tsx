import React from "react"
import { v4 as uuidv4 } from "uuid"
import ToggleMenu from "../ToggleMenu/"

const arrObj = [
    { url: "http://", name: "Почта" },
    { url: "http://", name: "Картинки" },
]

const Menu = () => {
    const ref: any = React.useRef()
    //const [isChecked, setIsChecked] = React.useState(true)
    const liPart = arrObj.map((item, index) => (
        <li key={index.toString()}>
            <a href={item.url}>{item.name}</a>
        </li>
    ))

    React.useEffect(() => {
        const changer = (e: any) => {
            let node = ref.current
            if (!node.contains(e.target)) {
                node.children[0].checked = false //setIsChecked(!isChecked)
            }
        }
        document.addEventListener("click", changer)
        return () => {
            document.removeEventListener("click", changer)
        }
    },[])

    return (
        <div className="container">
            <nav className="main-nav">
                <ul id="mainMenu">
                    {liPart}
                    <li key={uuidv4()} ref={ref}>
                        <input
                            type="checkbox"
                            id="menu__toggle"
                            defaultChecked={false}
                        />
                        <label
                            className="menu__btn"
                            htmlFor="menu__toggle"
                            id="label"
                        >
                            <span id="labelSpan"></span>
                        </label>
                        <ToggleMenu />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu
