function newColor() {
    color = Math.floor(Math.random()*16777215).toString(16);
    color = "#" + color;
    document.body.style.backgroundColor = color;
}

setInterval(() => {
    newColor();
}, 400);
