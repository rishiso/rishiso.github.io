window.addEventListener("load", () => {
    const canvas = document.getElementById("myCanvas");

    const borderSize = 5;
    canvas.width = window.innerHeight * .80;
    canvas.height = window.innerHeight * .80;
    canvas.style.border = `${borderSize}px solid white`

    const ctx = canvas.getContext("2d");
    const colorPicker = document.getElementById("colorPicker");
    const clearButton = document.getElementById("clear");

    let painting = false;

    function getMousePos(c, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
    }

    function paintPosition(e) {
        painting = true;
        draw(e);
    }
    function restPosition() {
        painting = false;
        ctx.beginPath();
    }
    function draw(e) {
        if (painting) {    
            ctx.strokeStyle = colorPicker.value;
            ctx.lineWidth = 10;
            ctx.lineCap = "round";

            let position = getMousePos(canvas, e);
            ctx.lineTo(position.x, position.y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(position.x, position.y);
        }
    }
    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    canvas.addEventListener("mousedown", paintPosition);
    canvas.addEventListener("mouseup", restPosition);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseout", restPosition);
    clearButton.addEventListener("click", clearCanvas);
})
