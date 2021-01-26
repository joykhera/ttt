export const x = {
    size: 200,
    color: "blue",
    lw: 10,

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

    draw(ctx, x, y){
        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, 2 * Math.PI);
        ctx.lineWidth = this.lw
        ctx.strokeStyle = this.color
        ctx.stroke();
    }
}