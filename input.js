import { player } from './player.js'
import { scaler } from './index.js'

export let mouseX = 0;
export let mouseY = 0;
const getscaller = scaler(canvas)

canvas.addEventListener("mousemove", (e) => moveHandler(e), false);
canvas.addEventListener("click", () => clickHandler(), false);

function moveHandler(e) {
    mouseX = (e.pageX - getscaller.bound.left) / getscaller.scale
    mouseY = (e.pageY - getscaller.bound.top) / getscaller.scale
    console.log(mouseX, mouseY)
}

function clickHandler() {
    player.push()
}