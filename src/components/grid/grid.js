import "./grid.scss"

class GridComponent {
    render() {
        const wrapperDiv = document.createElement("div");
        wrapperDiv.classList.add("wrapper")
        const bodyDomElement = document.querySelector("body")
        
        const paragraph = document.createElement("p")
        paragraph.innerText = "Webpack is an amazing modern JS bundler"
        wrapperDiv.appendChild(paragraph)

        bodyDomElement.appendChild(wrapperDiv)
    }
}

export default GridComponent;