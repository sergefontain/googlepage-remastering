import React from "react"

const arrObj = [
    { url: "http://", name: "Реклама" },
    { url: "http://", name: "Для бизнеса" },
    { url: "http://", name: "Все о гугл" },
    { url: "http://", name: "Как работает гугл поиск" },
]

const FooterLeft = () => {
    const liPart = arrObj.map((item, index) => (
        <li key={index.toString()}>
            <a href={item.url}>{item.name}</a>
        </li>
    ))

    return <ul id="footerLeft">{liPart}</ul>
}

export default FooterLeft
