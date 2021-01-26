const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

import { board } from './board.js'
import { x } from './shapes.js'
import { o } from './shapes.js'
    
board.draw(ctx)
o.draw(ctx, canvas.width / 2, canvas.height / 2)

    // function update(){
    //     ctx.canvas.width = window.innerWidth
    //     ctx.canvas.height = window.innerHeight

    //     window.requestAnimationFrame(update);
    // }
    // update()