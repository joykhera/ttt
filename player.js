import { zonearr } from "./zones.js"
import { mouseX, mouseY } from "./input.js"
import { o } from "./shapes.js"
import { drawO } from "./draw.js"
import { getWinner } from "./gameover.js"

export function checkZones(){
    for(const zone of zonearr){
        if(mouseX > zone.x1 && mouseX < zone.x2 && mouseY > zone.y1 && mouseY < zone.y2) zone.in = true
        else zone.in = false
    }
}

export const player = {
    turn: true,

    push(ctx){
        checkZones()
        if(this.turn){
            for(const zone of zonearr){
                if(zone.in && !zone.placed){
                    const newO = new o()
                    newO.x = zone.cx
                    newO.y = zone.cy
                    drawO.push(newO)
                    zone.placed = true
                    zone.draw.o = true
                    this.turn = false
                }
                else if(!player.turn) break
            }
        } 
        getWinner(ctx)
    },
}