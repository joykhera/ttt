import { zonearr } from "./zones.js"
import { o } from "./shapes.js"
import { checkZones } from "./player.js"

export const drawO = []
export const drawX = []

export function draw(ctx){
    drawO.forEach(element => element.draw(ctx))
    drawX.forEach(element => element.draw(ctx))

    for(const zone of zonearr){
        checkZones()
        if(zone.in && !zone.placed){
            const newO = new o()
            newO.drawLight(ctx, zone.cx, zone.cy)
        }
    }
}