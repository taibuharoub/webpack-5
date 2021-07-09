import pc from "./pc.jpg";

function addImage() {
  const img = document.createElement("img");
  img.alt = "pc";
  img.width = 300;
  img.src = pc;
  const body = document.querySelector("body");
  body.append(img);
}

export default addImage;
