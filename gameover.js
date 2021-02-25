import { zonearr } from "./zones.js"
import { o } from "./shapes.js"
import { x } from "./shapes.js"

export let end = false

export function gameOver(winner, ctx){
    end = true
    
    if(winner == 0){
        ctx.font = "100px Arial"
        ctx.fillText("It's a Tie!", 10, 50)
    }

    else if(winner == 1){
        const newO = new o()
        newO.size = 100
        newO.draw(ctx)
        ctx.font = "100px Arial"
        ctx.fillText("Wins!", 10, 50)
    }

    else if(winner == 2){
        const newX = new x()
        newX.size = 100
        newX.draw(ctx)
        ctx.font = "100px Arial"
        ctx.fillText("Wins!", 10, 50)
    }

    console.log(winner)
}

export function getWinner(ctx){
    let winner = 0
    let zones = []

    for(const zone of zonearr){
        if(zone.draw.o) zones.push(true)
        else if(zone.draw.x) zones.push(false)
    }

    for(let i = 1; i < zonearr.length; i++){
        if(i % 3 == 0){
            if(zonearr[i] && zonearr[i + 1] && zonearr[i + 2]){
                winner = 1
                gameOver(winner, ctx)
                return winner
            }
            else if(!zonearr[i] && !zonearr[i + 1] && !zonearr[i + 2]){
                winner = 2
                gameOver(winner, ctx)
                return winner
            }
        }

        if(i < 3){
            if(zonearr[i] && zonearr[i + 3] && zonearr[i + 6]){
                winner = 1
                return winner
            }
            if(!zonearr[i] && !zonearr[i + 3] && !zonearr[i + 6]){
                winner = 2
                gameOver(winner, ctx)
                return winner
            }
        }

        if(i == 0){
            if(zonearr[i] && zonearr[i + 4] && zonearr[i + 8]){
                winner = 1
                gameOver(winner, ctx)
                return winner
            }
            if(!zonearr[i] && !zonearr[i + 4] && !zonearr[i + 8]){
                winner = 2
                gameOver(winner, ctx)
                return winner
            }
        }

        if(i == 2){
            if(zonearr[i] && zonearr[i + 2] && zonearr[i + 4]){
                winner = 1
                gameOver(winner, ctx)
                return winner
            }
            if(!zonearr[i] && !zonearr[i + 2] && !zonearr[i + 4]){
                winner = 2
                gameOver(winner, ctx)
                return winner
            }
        }
    }
}