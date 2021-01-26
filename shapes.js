export class x {
    constructor(){
        this.size = 200
        this.color = "blue"
        this.lw = 10
    }

    draw(ctx, x, y){
        ctx.beginPath();
        ctx.moveTo(x - this.size / 2, y - this.size / 2);
        ctx.lineTo(x + this.size / 2, y + this.size / 2);
        ctx.lineWidth = this.lw
        ctx.strokeStyle = this.color
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + this.size / 2, y - this.size / 2);
        ctx.lineTo(x - this.size / 2, y + this.size / 2);
        ctx.lineWidth = this.lw
        ctx.strokeStyle = this.color
        ctx.stroke();
    }
}

export const o = {
    size: 100,
    color: "red",
    lw: 10,
    light: false,
    ga: 1,

    draw(ctx, x, y){
        if(this.light) this.ga = 0.2
        else this.ga = 1
        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, 2 * Math.PI);
        ctx.lineWidth = this.lw
        ctx.globalAlpha = this.ga
        ctx.strokeStyle = this.color
        ctx.stroke();
    }
}