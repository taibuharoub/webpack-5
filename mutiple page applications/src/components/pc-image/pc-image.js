import pc from "./pc.jpg"
import "./pc-image.scss"

class pcImage {
    render() {
        const img = document.createElement("img");
        img.src = pc;
        img.alt = "pc"
        img.classList.add("pc-image");
        bodyDomElement.appendChild(img);
    }
}

export default pcImage;