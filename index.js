const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');

import { board } from './board.js'
import { click } from './input.js'
import { play } from './play.js'

function update(){
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerHeight
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    board.draw(ctx)
    play.player(ctx)
    //click = false
    window.requestAnimationFrame(update);
}
update()