import React from "react"
import { v4 as uuidv4 } from "uuid"
import ToggleMenu from "../ToggleMenu/"

const arrObj = [
    { url: "http://", name: "Почта" },
    { url: "http://", name: "Картинки" },
]

const Menu = () => {
    const [isChecked, setIsChecked] = React.useState(true)
    const liPart = arrObj.map((item, index) => (
        <li key={index.toString()}>
            <a href={item.url}>{item.name}</a>
        </li>
    ))

    React.useEffect(() => {
        const changer = (e: any) => {
            console.log(e)
        }
        document.addEventListener("click", changer)
        return (
            document.removeEventListener("click", changer)
        )
    }, [])

    return (
        <div className="container">
            <nav className="main-nav">
                <input
                    type="checkbox"
                    id="menu__toggle"
                    defaultChecked={!isChecked}
                />
                <ul id="mainMenu">
                    {liPart}
                    <li key={uuidv4()}>
                        <label className="menu__btn" htmlFor="menu__toggle">
                            <span></span>
                        </label>
                        <ToggleMenu />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu
