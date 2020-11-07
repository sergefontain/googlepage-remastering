import React from "react"

const arrObj = [
    { url: "http://", name: "English" },
    { url: "http://", name: "Українська" },
]

const InsideList = () => {
    const liPart = arrObj.map((item, index) => (
        <li key={index.toString()}>
            <a href={item.url}>{item.name}</a>
        </li>
    ))
    return <ul id="insideList">{liPart}</ul>
}

export default InsideList
