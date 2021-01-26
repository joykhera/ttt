import { zones } from "./zones.js"
import { mouseX, mouseY, click } from "./input.js"
import { o } from "./shapes.js"

function checkZones(ctx){
    if(mouseX > zones.one.x1 && mouseX < zones.one.x2 && mouseY > zones.one.y1 && mouseY < zones.one.y2){
        zones.one.in = true
        o.light = true
        o.draw(ctx, zones.one.cx, zones.one.cy)
    }
    else{
        zones.one.in = false
        o.light = false
    } 

    if(mouseX > zones.two.x1 && mouseX < zones.two.x2 && mouseY > zones.two.y1 && mouseY < zones.two.y2){
        zones.two.in = true
        o.light = true
        o.draw(ctx, zones.two.cx, zones.two.cy)
    }
    else{
        zones.two.in = false
        o.light = false
    }

    if(mouseX > zones.three.x1 && mouseX < zones.three.x2 && mouseY > zones.three.y1 && mouseY < zones.three.y2){
        zones.three.in = true
        o.light = true
        o.draw(ctx, zones.three.cx, zones.three.cy)
    }
    else{
        zones.three.in = false
        o.light = false
    }

    if(mouseX > zones.four.x1 && mouseX < zones.four.x2 && mouseY > zones.four.y1 && mouseY < zones.four.y2){
        zones.four.in = true
        o.light = true
        o.draw(ctx, zones.four.cx, zones.four.cy)
    }
    else{
        zones.four.in = false
        o.light = false
    }

    if(mouseX > zones.five.x1 && mouseX < zones.five.x2 && mouseY > zones.five.y1 && mouseY < zones.five.y2){
        zones.five.in = true
        o.light = true
        o.draw(ctx, zones.five.cx, zones.five.cy)
    }
    else{
        zones.five.in = false
        o.light = false
    }

    if(mouseX > zones.six.x1 && mouseX < zones.six.x2 && mouseY > zones.six.y1 && mouseY < zones.six.y2){
        zones.six.in = true
        o.light = true
        o.draw(ctx, zones.six.cx, zones.six.cy)
    }
    else{
        zones.six.in = false
        o.light = false
    }

    if(mouseX > zones.seven.x1 && mouseX < zones.seven.x2 && mouseY > zones.seven.y1 && mouseY < zones.seven.y2){
        zones.seven.in = true
        o.light = true
        o.draw(ctx, zones.seven.cx, zones.seven.cy)
    }
    else{
        zones.seven.in = false
        o.light = false
    }

    if(mouseX > zones.eight.x1 && mouseX < zones.eight.x2 && mouseY > zones.eight.y1 && mouseY < zones.eight.y2){
        zones.eight.in = true
        o.light = true
        o.draw(ctx, zones.eight.cx, zones.eight.cy)
    }
    else{
        zones.eight.in = false
        o.light = false
    }

    if(mouseX > zones.nine.x1 && mouseX < zones.nine.x2 && mouseY > zones.nine.y1 && mouseY < zones.nine.y2){
        zones.nine.in = true
        o.light = true
        o.draw(ctx, zones.nine.cx, zones.nine.cy)
    }
    else{
        zones.nine.in = false
        o.light = false
    } 
}

export const play = {
    turn: true,
    zoneIn: 0,
    player(ctx){
        checkZones(ctx)
        if(this.turn && click){
            if(zones.one.in || zones.one.placed){
                o.light = false
                o.draw(ctx, zones.one.cx, zones.one.cy)
                zones.one.placed = true
            }

            if(zones.two.in || zones.two.placed){
                o.light = false
                o.draw(ctx, zones.two.cx, zones.two.cy)
                zones.two.placed = true
            }

            if(zones.three.in || zones.three.placed){
                o.light = false
                o.draw(ctx, zones.three.cx, zones.three.cy)
                zones.three.placed = true
            }

            if(zones.four.in || zones.four.placed){
                o.light = false
                o.draw(ctx, zones.four.cx, zones.four.cy)
                zones.four.placed = true
            }

            if(zones.five.in || zones.five.placed){
                o.light = false
                o.draw(ctx, zones.five.cx, zones.five.cy)
                zones.five.placed = true
            }

            if(zones.six.in || zones.six.placed){
                o.light = false
                o.draw(ctx, zones.six.cx, zones.six.cy)
                zones.six.placed = true
            }

            if(zones.seven.in || zones.seven.placed){
                o.light = false
                o.draw(ctx, zones.seven.cx, zones.seven.cy)
                zones.seven.placed = true
            }

            if(zones.eight.in || zones.eight.placed){
                o.light = false
                o.draw(ctx, zones.eight.cx, zones.eight.cy)
                zones.eight.placed = true
            }

            if(zones.nine.in || zones.nine.placed){
                o.light = false
                o.draw(ctx, zones.nine.cx, zones.nine.cy)
                zones.nine.placed = true
            }
        } 
        
    },

    computer(){

    },
}