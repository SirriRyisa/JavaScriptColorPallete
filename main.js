const container = document.querySelector('.container')
const refreshButton = document.querySelector('.refresh-btn')
//Selecting these elements means we can manipulate them in the DOM

const maxPalleteBoxes = 32;
//Specifies the number of boxes that will be created/generated

const generatePallete = () => {
container.innerHTML = "";
for(let i = 0; i < maxPalleteBoxes; i++) {

    //generating random hex color code
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, 10)}`;
    
    //Creating a new li element and inserting it into the container
    const color = document.createElement("li");
    color.classList.add('color')
    color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
    <span class="hex-value">${randomHex}</span>`;

    color.addEventListener("click", () => copyColor(color, randomHex));
    container.appendChild(color);
}

}
generatePallete();
const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector('.hex-value');
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("Failed to copy color code!"));
}

refreshButton .addEventListener("click", generatePallete);