import { player } from './player.js'

export let mouseX = 0;
export let mouseY = 0;

canvas.addEventListener("mousemove", (e) => moveHandler(e), false);
canvas.addEventListener("click", () => clickHandler(), false);

function moveHandler(e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
}

function clickHandler(ctx) {
    player.push(ctx)
}