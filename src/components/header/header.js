import "./header.scss"

class Header {
    render() {
        const heading = document.createElement('h1')
        heading.innerText = "Webpack is awwwsome!"
        const body = document.querySelector("body")
        body.appendChild(heading)
    }
}

export default Header