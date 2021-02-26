import { zonearr } from "./zones.js"
import { o, x } from "./shapes.js"

export let end = false

export function gameOver(winner, ctx){
    end = true

    if(winner == 0){
        ctx.font = "300px Arial"
        ctx.globalAlpha = 1
        ctx.fillText("It's a Tie!", 100, 450)
    }

    else if(winner == 1){
        const newO = new o()
        newO.size = 300
        newO.x = 325
        newO.y = 375
        newO.draw(ctx)
        ctx.font = "300px Arial"
        ctx.globalAlpha = 1
        ctx.fillText("Wins!", 650, 450)
    }

    else if(winner == 2){
        const newX = new x()
        newX.size = 700
        newX.x = 375
        newX.y = 375
        newX.draw(ctx)
        ctx.font = "300px Arial"
        ctx.globalAlpha = 1
        ctx.fillText("Wins!", 550, 450)
    }
}

export function getWinner(ctx){
    let winner = 0
    let zones = []

    for(const zone of zonearr){
        if(zone.draw.o) zones.push(true)
        else if(zone.draw.x) zones.push(false)
        else zones.push(undefined)
    }

    for(let i = 0; i < zones.length; i++){
        if(i % 3 == 0){
            console.log(i, zones[i], zones[i + 1], zones[i + 2], winner)
            if(zones[i] && zones[i + 1] && zones[i + 2]){
                console.log("o")
                winner = 1
                break
            }
            else if(zones[i] == false && zones[i + 1] == false && zones[i + 2] == false ){
                console.log("x")
                winner = 2
                break
            }
        }

        if(i < 3){
            if(zones[i] && zones[i + 3] && zones[i + 6]){
                winner = 1
                break
            }
            else if(zones[i] == false && zones[i + 3] == false && zones[i + 6] == false){
                winner = 2
                break
            }
        }

        if(i == 0){
            if(zones[i] && zones[i + 4] && zones[i + 8]){
                winner = 1
                break
            }
            else if(zones[i] == false && zones[i + 4] == false && zones[i + 8] == false){
                winner = 2
                break
            }
        }

        if(i == 2){
            if(zones[i] && zones[i + 2] && zones[i + 4]){
                winner = 1
                break
            }
            else if(zones[i] == false && zones[i + 2] == false && zones[i + 4] == false){
                winner = 2
                break
            }
        }
    }

    if(winner == 1 || winner == 2) gameOver(winner, ctx)
}