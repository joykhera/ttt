import { zonearr } from "./zones.js"
import { x } from "./shapes.js"
import { player } from "./player.js"
import { drawX } from "./draw.js"
import { gameOver, getWinner } from "./gameover.js"
import { compMove } from "./compMove.js"

export const comp = {

    findZone(ctx){
        let zonesO = []
        let zonesX = []

        for(const zone of zonearr){
            const index = zonearr.indexOf(zone)
            if(zone.draw.o) zonesO.push(index)
            else if(zone.draw.x) zonesX.push(index)
        }

        compMove(zonesO)
        compMove(zonesX)

        if(compMove(zonesO) == undefined && compMove(zonesX) == undefined){
            if(!zonearr[4].placed) return zonearr[4]
            else for(const zone of zonearr) if(!zone.placed) return zone
            gameOver(0, ctx)

        }
        
    },
    
    push(ctx){
        let zone = this.findZone(ctx)
        // console.log(zone)
        if(zone !== undefined)
            if(!zone.placed && !player.turn){
                const newX = new x()
                newX.x = zone.cx
                newX.y = zone.cy
                drawX.push(newX)
                zone.placed = true
                zone.draw.x = true
                player.turn = true
                this.i++
            }

        // getWinner(ctx); console.log("w")
    }
}