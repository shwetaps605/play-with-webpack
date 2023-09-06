
import Team from "../assets/team.PNG"
import altText from "../assets/alt-text.txt"

function addImage() {
    const img = document.createElement('img');
    img.alt = altText
    img.width = 300
    img.src = Team

    const body = document.querySelector("body")
    body.appendChild(img);
}

export default addImage