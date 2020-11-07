import React from "react"

const arrObj = [
    { url: "http://", name: "Конфиденциальность" },
    { url: "http://", name: "Условия" },
    { url: "http://", name: "Настройки" },
]

const FooterRight = () => {
    const liPart = arrObj.map((item, index) => (
        <li key={index.toString()}>
            <a href={item.url}>{item.name}</a>
        </li>
    ))
    return <ul id="footerRight">{liPart}</ul>
}

export default FooterRight
