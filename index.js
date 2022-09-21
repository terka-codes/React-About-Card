import React from "react"
import ReactDOM from "react-dom"

function Photo() {
    return (
        <img src="https://pbs.twimg.com/profile_images/1572270258739712005/5dSK2u6t_400x400.jpg" className="profile-pic" />
    )
}

function Header() {
    return (
        <header>
            <h1 className="full-name">Terka Codes</h1>
            <h3 className="occupation">Frontend Developer</h3>
            <a href="https://twitter.com/TerkaCodes" target="_blank">terka-codes.twitter</a>
            <div className="buttons">
                <button type="button" href="#" className="btn btn-email"><img src="./Images/Mail.svg" className="btn-icon"></img>Email</button>
                <button type="button" href="#" className="btn btn-linkedin"><img src="./Images/linkedin.png" className="btn-icon icon-linkedin"></img>LinkedIn</button>
            </div>
        </header>
    )
}

function About() {
    return (
        <div className="main-content">
            <h2>About</h2>
            <p>I am a frontend developer with a tremendous interests for beautiful websites. I love to code and design aesthetically pleasing web applications in various styles. I am always learning new things.</p>
            <h2>Interests</h2>
            <p>Free time digital illustrator. Reader. Tech fanatic. Nature & dog addict. Design enthusiast. TV series lover.</p>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <div className="icons">
                <img src="./Images/Twitter-Icon.svg" href="https://twitter.com/TerkaCodes" target="_blank" className="icon" />
                <img src="./Images/Facebook-Icon.svg" href="#" target="_blank" className="icon" />
                <img src="./Images/Instagram-Icon.svg" href="#" target="_blank" className="icon" />
                <img src="./Images/GitHub-Icon.svg" href="https://github.com/terka-codes" target="_blank" className="icon" />
            </div>
        </footer>
    )
}

function App() {
    return (
        <main>
            <Photo />
            <Header />
            <About />
            <Footer />
        </main>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))