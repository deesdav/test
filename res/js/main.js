const send = document.getElementById("send");
const userInput = document.getElementById("userInput");



send.onclick = () => {
    document.body.style.backgroundImage = `url(${userInput.value})`;
}

const send2 = document.getElementById("send2");
const userInput2 = document.getElementById("userInput2");
const content = document.getElementById("content");

send2.onclick = () => {
    content.style.fontSize = userInput2.value;
}



const contentImg = document.getElementById("contentImg");

contentImg.onclick = () => {
    contentImg.style.height = "600px";
    contentImg.style.width = "600px";
 }
 contentImg.onmouseout = () => {
    contentImg.style.height = "auto";
    contentImg.style.width = "auto";
 }