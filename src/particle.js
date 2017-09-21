let _size = 5;
class Particle{

    static get size() { 
        return _size; 
    }

    static set size(value) { 
        _size = value; 
    }

    constructor(canvas){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
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

    toCenter(point){
        const pX = point.x;
        const pY = point.y;

        this.x += this.speedX + this.angleX;
        this.y += this.speedY + this.angleY;

        if(this.x > pX){
            this.angleX = -Math.random() * 10 ;
        }else{
            this.angleX = Math.random() * 10;
        }

        if(this.y > pY){
            this.angleY = -Math.random() * 10;
        }else{
            this.angleY = Math.random() * 10;
        }
    }

    draw(ctx){
        ctx.fillRect(this.x,this.y,Particle.size,Particle.size);
    }
}

export default Particle;