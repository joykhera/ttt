import { zonearr } from "./zones.js"
import { x } from "./shapes.js"
import { player } from "./player.js"

export const comp = {
    turn: false,
    drawZone: 0,

    isTurn(){
        if(player.turn) this.turn = false
        else if(!player.turn) this.turn = true
    },

    checkPlaced(zone){
        if(!zone.placed){
            this.drawZone = zone
            zone.placed = true
        }
    },

    checkDraw(ctx, zone){
        this.checkPlaced(zone)
        if(this.drawZone = zone){
            const newX = new x()
            newX.draw(ctx, zone.cx, zone.cy)
        }
    },

    draw(ctx){
        this.isTurn()
        if(this.turn){
            for(const zone of zonearr){
                this.checkDraw(ctx, zone)
            }    
            player.turn = true
        }
    }
}