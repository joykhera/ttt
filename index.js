const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

import { board } from './board.js'


    board.draw(ctx)

    function update(){
        ctx.canvas.width = window.innerWidth
        ctx.canvas.height = window.innerHeight

        window.requestAnimationFrame(update);
    }
    update()