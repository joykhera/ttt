import { zonearr } from "./zones.js"
import { mouseX, mouseY, click } from "./input.js"
import { o } from "./shapes.js"

function inZone(ctx, zone){
    if(mouseX > zone.x1 && mouseX < zone.x2 && mouseY > zone.y1 && mouseY < zone.y2){
        zone.in = true
        o.light = true
        o.draw(ctx, zone.cx, zone.cy)
    }
    else{
        zone.in = false
        o.light = false
    } 
}

function checkZones(ctx){
    for(const zone of zonearr){
        inZone(ctx, zone)
    }
}

export const player = {
    turn: true,
    place: false,

    checkDraw(ctx, zone){
        o.light = false
        o.draw(ctx, zone.cx, zone.cy)
        zone.placed = true
        this.turn = false
    },

    draw(ctx){
        checkZones(ctx)
        if(this.turn && click){
            for(const zone of zonearr){
                if(zone.in) this.checkDraw(ctx, zone)
            }
        }
        //console.log(zones.nine.x1, zones.nine.x2, zones.nine.y1, zones.nine.y2, mouseX, mouseY, zones.nine.in)
        console.log(this.turn)
    }
}