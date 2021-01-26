import { zonearr } from "./zones.js"
import { x } from "./shapes.js"
import { player } from "./player.js"

export const comp = {
    turn: false,

    isTurn(){
        if(player.turn) this.turn = false
        else if(!player.turn) this.turn = true
    },

    checkPlaced(zone){
        if(!zone.placed){
            zone.draw.x = true
        }
    },

    checkDraw(ctx, zone){
        this.checkPlaced(zone)
        if(zone.draw.x){
            x.draw(ctx, zone.cx, zone.cy)
            zone.placed = true
            player.turn = true
        }
        else player.turn = false
    },

    draw(ctx){
        for(const zone of zonearr){
            this.isTurn()
            if(this.turn) this.checkDraw(ctx, zone)
            
        }
    }
}