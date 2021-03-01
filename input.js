import { player } from './player.js'
import { scaler } from './index.js'

export let mouseX = 0;
export let mouseY = 0;
// const getscaller = scaler(canvas)

canvas.addEventListener("mousemove", (e) => moveHandler(e), false);
canvas.addEventListener("click", () => clickHandler(), false);

function moveHandler(e) {
    mouseX = Math.round((e.pageX - getBound().left) / window.scale)
    mouseY = Math.round((e.pageY - getBound().top) / window.scale)
	console.log(mouseX, mouseY)
}

function clickHandler() {
    player.push()
}