const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');

import { board } from './board.js'
import { comp } from './comp.js';
import { unClick } from './input.js'
import { player } from './player.js'

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    board.draw(ctx)
    player.draw(ctx)
    comp.draw(ctx)
    unClick()
    console.log(player.turn)
    window.requestAnimationFrame(update);
}
update()