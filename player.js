import { zonearr } from "./zones.js"
import { mouseX, mouseY, click } from "./input.js"
import { o } from "./shapes.js"

function inZone(ctx, zone){
    if(mouseX > zone.x1 && mouseX < zone.x2 && mouseY > zone.y1 && mouseY < zone.y2){
        zone.in = true
        const newo = new o()
        newo.drawLight(ctx, zone.cx, zone.cy)
    }
    else zone.in = false
}

function checkZones(ctx){
    for(const zone of zonearr){
        inZone(ctx, zone)
    }
}

export const player = {
    turn: true,

    draw(ctx, zone){
        if(zone.draw.o){
            const newo = new o()
            newo.draw(ctx, zone.cx, zone.cy)
            zone.placed = true
            this.turn = false
        }
        else this.turn = true
    },

    checkDraw(ctx){
        checkZones(ctx)
        if(this.turn && click){
            for(const zone of zonearr){
                if(zone.in && !zone.placed) zone.draw.o = true
            }
        }
        for(const zone of zonearr){
            if(this.turn){
                this.draw(ctx, zone)
            }
        }
    }
}