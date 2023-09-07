import altText from "../../../assets/alt-text.txt"
import "./hello-world-button.css"
import Team from "../../../assets/team.PNG"

class HelloWorldButton {
    buttonClass = "fancy-button"
    render() {
        const button = document.createElement("button")
        button.innerHTML = "Click me!"
        const body = document.querySelector("body")
        button.onclick = () => {
            const image = document.createElement("img")
            image.alt = altText
            image.width = 300
            image.src = Team
            body.appendChild(image)
        }
        button.classList.add(this.buttonClass);
        body.appendChild(button);
    }
}

export default HelloWorldButton