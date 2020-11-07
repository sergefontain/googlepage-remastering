import React from "react"
import FooterLeft from "./components/FooterLeft/"
import FooterRight from "./components/FooterRight/"
import Logo from "./components/Logo/"
import SearchBar from "./components/SearchBar/"
import SearchButtons from "./components/SearchButtons/"
import SearchInfo from "./components/SearchInfo/"
import Menu from "./components/Menu/"
import "./App.css"

function App() {
    
    return (
        <div id="wrapper">
            <header id="header">
                <Menu />
            </header>
            <main id="main">
                <div className="container">
                    <Logo />
                    <SearchBar />
                    <SearchButtons />
                    <SearchInfo />
                </div>
            </main>
            <footer id="footer">
                <div className="container">
                    <FooterLeft />
                    <FooterRight />
                </div>
            </footer>
        </div>
    )
}

export default App
