import React from "react"

const arrObj = [
    { url: "http://", title: "Аккаунт", id: "accaunt" },
    { url: "http://", title: "Поиск", id: "search" },
    { url: "http://", title: "Мой бизнесс", id: "myBusiness" },
    { url: "http://", title: "Карты", id: "maps" },
    { url: "http://", title: "YouTube", id: "YT" },
    { url: "http://", title: "Play", id: "play" },
    { url: "http://", title: "Новости", id: "news" },
    { url: "http://", title: "Почта", id: "mail" },
    { url: "http://", title: "Meet", id: "meet" },
    { url: "http://", title: "Контакты", id: "contacts" },
    { url: "http://", title: "Диск", id: "disc" },
    { url: "http://", title: "Календарь", id: "calend" },
]

const ToggleMenu = () => {
    const liPart = arrObj.map((item, index) => (
        <li key={index.toString()}>
            <div className="menu__item">
                <a href={item.url}>
                    <div id={item.id}></div>
                    <p>{item.title}</p>
                </a>
            </div>
        </li>
    ))

    return <ul className="menu__box">{liPart}</ul>
}

export default ToggleMenu
