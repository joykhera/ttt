const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');

import { board } from './board.js'
import { comp, over } from './comp.js';
import { draw } from './draw.js'
import { end, gameOver, getWinner } from "./gameover.js"

function scaler(canvas) {
    const winw = window.innerWidth;
    const winh = window.innerHeight;
    const xvalue = winw / canvas.width;
    const yvalue = winh / canvas.height;
    const scale = Math.min(xvalue, yvalue);
    canvas.style.transform = 'scale(' + scale + ')';
    canvas.style.left = (winw - canvas.width) / 2 + 'px';
    canvas.style.top = (winh - canvas.height) / 2 + 'px';
}
scaler(canvas)

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if(over) gameOver(0, ctx)
    if(end){
        getWinner(ctx)
        return
    }
    board.size = canvas.height / 3
    board.draw(ctx)
    comp.push(ctx)
    draw(ctx)
    window.requestAnimationFrame(update);
}
update()