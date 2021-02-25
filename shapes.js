export class x {
    constructor(){
        this.x = 0
        this.y = 0
        this.size = 200
        this.color = "blue"
        this.lw = 10
    }

    draw(ctx){
        ctx.beginPath();
        ctx.moveTo(this.x - this.size / 2, this.y - this.size / 2);
        ctx.lineTo(this.x + this.size / 2, this.y + this.size / 2);
        ctx.lineWidth = this.lw
        ctx.globalAlpha = 1
        ctx.strokeStyle = this.color
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.x + this.size / 2, this.y - this.size / 2);
        ctx.lineTo(this.x - this.size / 2, this.y + this.size / 2);
        ctx.lineWidth = this.lw
        ctx.globalAlpha = 1
        ctx.strokeStyle = this.color
        ctx.stroke();
    }
}

export class o {
    constructor(){
        this.x = 0
        this.y = 0
        this.size = 100
        this.color = "red"
        this.lw = 10
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.lineWidth = this.lw
        ctx.globalAlpha = 1
        ctx.strokeStyle = this.color
        ctx.stroke();
    }

    drawLight(ctx, x, y){
        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, 2 * Math.PI);
        ctx.lineWidth = this.lw
        ctx.globalAlpha = 0.2
        ctx.strokeStyle = this.color
        ctx.stroke();
    }
}