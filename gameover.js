import { zonearr } from "./zones.js"
import { o, x } from "./shapes.js"

export let end = false

export function gameOver(winner, ctx){
    end = true

    if(winner == 0){
        ctx.font = `${canvas.height / 2.5}px Arial`
        ctx.globalAlpha = 1
        ctx.fillText("It's a Tie!", canvas.width / 20, canvas.height / 1.75)
    }

    else if(winner == 1){
        const newO = new o()
        newO.size = canvas.height / 2.5
        newO.x = canvas.width / 4
        newO.y = canvas.height / 2
        newO.draw(ctx)
        ctx.font = `${canvas.height / 2.5}px Arial`
        ctx.globalAlpha = 1
        ctx.fillText("Wins!", canvas.width / 2, canvas.height / 1.5)
    }

    else if(winner == 2){
        const newX = new x()
        newX.size = canvas.height
        newX.x = canvas.width / 3
        newX.y = canvas.height / 2
        newX.draw(ctx)
        ctx.font = `${canvas.height / 2.5}px Arial`
        ctx.globalAlpha = 1
        ctx.fillText("Wins!", canvas.width / 2, canvas.height / 1.5)
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
            if(zones[i] && zones[i + 1] && zones[i + 2]){
                winner = 1
                break
            }
            else if(zones[i] == false && zones[i + 1] == false && zones[i + 2] == false ){
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