import "./header.scss"

export class Header {
    render(name) {
        const heading = document.createElement('h1')
        heading.innerText = "Webpack is awwwsome! This is page" + " " + name
        const body = document.querySelector("body")
        body.appendChild(heading)
    }
}

