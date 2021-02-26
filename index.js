const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');

import { board } from './board.js'
import { comp, over } from './comp.js';
import { draw } from './draw.js'
import { end, gameOver, getWinner } from "./gameover.js"

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if(over) gameOver(0, ctx)
    if(end){
        getWinner(ctx)
        return
    }
    board.draw(ctx)
    comp.push(ctx)
    draw(ctx)
    window.requestAnimationFrame(update);
}
update()