import { zonearr } from "./zones.js"
import { x } from "./shapes.js"
import { player } from "./player.js"

export const comp = {
    checkDraw(zone){
        if(!zone.placed && !player.turn){
            zone.draw.x = true
        }    
    },

    draw(ctx){
        for(const zone of zonearr){
            this.checkDraw(zone)
            if(zone.draw.x){
                const newx = new x()
                newx.draw(ctx, zone.cx, zone.cy)
                zone.placed = true
                player.turn = true
            }
            else player.turn = false
        }
    }
}