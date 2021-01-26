export const board = {
    size: 250,
    color: "black",
    lw: 20,

    draw(ctx){
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 - this.size / 2, canvas.height / 2 - this.size * 1.5);
        ctx.lineTo(canvas.width / 2 - this.size / 2, canvas.height / 2 + this.size * 1.5);
        ctx.lineWidth = this.lw
        ctx.strokeStyle = this.color
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 + this.size / 2, canvas.height / 2 - this.size * 1.5);
        ctx.lineTo(canvas.width / 2 + this.size / 2, canvas.height / 2 + this.size * 1.5);
        ctx.lineWidth = this.lw
        ctx.strokeStyle = this.color
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 - this.size * 1.5, canvas.height / 2 - this.size / 2);
        ctx.lineTo(canvas.width / 2 + this.size * 1.5, canvas.height / 2 - this.size / 2);
        ctx.lineWidth = this.lw
        ctx.strokeStyle = this.color
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 - this.size * 1.5, canvas.height / 2 + this.size / 2);
        ctx.lineTo(canvas.width / 2 + this.size * 1.5, canvas.height / 2 + this.size / 2);
        ctx.lineWidth = this.lw
        ctx.strokeStyle = this.color
        ctx.stroke();
        console.log(ctx.lineWidth, ctx.strokeStyle)
    }

}