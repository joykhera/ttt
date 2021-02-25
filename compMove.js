import { zonearr } from "./zones.js"

export function compMove(zones){
    for(let i = 1; i < zones.length; i++){
        if(zones[i] - zones[i - 1] == 1){
            if((zones[i] % 3) - 1 == 0 && !zonearr[zones[i] + 1].placed) return zonearr[zones[i] + 1]
            else if((zones[i] % 3) + 1 == 3 && !zonearr[zones[i] - 2].placed) return zonearr[zones[i] - 2]
        }

        else if(zones[i] - zones[i - 1] == 2){
            if(zones[i] % 3 == 2 && !zonearr[zones[i] - 1].placed) return zonearr[zones[i] - 1]
            else if(zones[i] == 6 && !zonearr[zones[i] - 4].placed) return zonearr[zones[i] - 4]
            else if(zones[i] == 4 && !zonearr[zones[i] + 2].placed) return zonearr[zones[i] + 2]
            console.log("2")
        }

        else if(zones[i] - zones[i - 1] == 3){
            if(zones[i] < 6 && !zonearr[zones[i] + 3].placed) return zonearr[zones[i] + 3]
            else if(zones[i] > 6 && !zonearr[zones[i] - 6].placed) return zonearr[zones[i] - 6]
            console.log("3")
        }

        else if(zones[i] - zones[i - 1] == 4){
            if(zones[i] == 4 && !zonearr[zones[i] + 4].placed) return zonearr[zones[i] + 4]
            else if(zones[i] == 6 && !zonearr[zones[i] - 2].placed) return zonearr[zones[i] - 2]
            else if(zones[i] == 8 && !zonearr[zones[i] - 8].placed) return zonearr[zones[i] - 8]
            console.log("4")
        }
    }
}