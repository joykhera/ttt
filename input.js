export let mouseX = 0;
export let mouseY = 0;
export let click = false;

canvas.addEventListener("mousemove", (e) => moveHandler(e), false);
canvas.addEventListener("click", () => clickHandler(), false);

function moveHandler(e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
}

function clickHandler() {
    click = true
}

export function unClick(){
    click = false
}