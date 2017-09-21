class Particle{
    constructor(canvas){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.w = Math.random() * 5 + 5;
        this.h = Math.random() * 5 + 5;
        this.speedX = Math.random() > 0.5 ? Math.random() : -Math.random();
        this.speedY = Math.random() > 0.5 ? Math.random() : -Math.random();
        this.angleX = Math.random() > 0.5 ? Math.random() : -Math.random();
        this.angleY = Math.random() > 0.5 ? Math.random() : -Math.random();
    }

    update(canvas){
        this.x += this.speedX + this.angleX;
        this.y += this.speedY + this.angleY;

        if(this.x < 0 || this.x > canvas.width){
            let sign = this.x < 0 ? 1 : -1;
            this.angleX = Math.random() * 2 * sign;
            this.speedX = -this.speedX;
        } 
        if(this.y < 0 || this.y > canvas.height){
            let sign = this.y < 0 ? 1 : -1;
            this.angleY = Math.random() * 2 * sign;
            this.speedY = -this.speedY;
        } 
    }

    draw(ctx){
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }
}

export default Particle;