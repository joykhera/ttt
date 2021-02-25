import { zones } from "./zones.js"
import { o } from "./shapes.js"

export const drawO = []
export const drawX = []

export function draw(ctx){
    drawO.forEach(element => element.draw(ctx))
    drawX.forEach(element => element.draw(ctx))

    // for(const zone of zonearr){
    //     // console.log(zone.in)
    //     if(zone.in){
    //         const newO = new o()
    //         newO.drawLight(ctx, zone.cx, zone.cy)
    //     }
    // }
}


