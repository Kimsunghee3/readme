import { GlowParticle } from './particle.js';

const COLORS = [
    {r: 209, g: 237, b: 225},
    {r: 150, g: 221, b: 219},
    {r: 133, g: 184, b: 203},
    {r:20, g: 176, b: 155},
    {r:235, g: 229, b: 217},
    {r: 204, g: 138, b: 86},
    {r:145, g: 212, b:194}

    
]

class App {
    constructor(){
        this.canvas = document.createElement('canvas')
        document.body.appendChild(this.canvas)
        this.ctx = this.canvas.getContext('2d')

        this.pixelRatio = (window.devicePixelRatio > 1) ? 2: 1;

        // 공갯수
        this.totalParticles = 20;
        this.particles = []
        this.maxRaddius = 600;
        this.minRadius = 600;

        window.addEventListener('resize', this.resize.bind(this), false)
        this.resize()

        window.requestAnimationFrame(this.animate.bind(this))
        
    }

    resize() {
        this.stageWidth = document.body.clientWidth
        this.stageHeight = document.body.clientHeight
    
        this.canvas.width = this.stageWidth * this.pixelRatio
        this.canvas.height = this.stageHeight * this.pixelRatio
        this.ctx.scale(this.pixelRatio, this.pixelRatio)
    
        this.createParticles()
    }
    
    createParticles() {
        let curColor = 0
        this.particles = []
    
        for(let i = 0; i < this.totalParticles; i++){
            const item = new GlowParticle(
                Math.random() * this.stageWidth,
                Math.random() * this.stageHeight,
                Math.random() * (this.maxRaddius - this.minRadius) + this.minRadius,
                COLORS[curColor]
            )
    
            if (++curColor >= COLORS.length) {
                curColor = 0
            }
    
            this.particles[i] = item
        }
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this))
    
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)
    
        for (let i = 0; i < this.totalParticles; i++) {
            const item = this.particles[i]
            item.animate(this.ctx, this.stageWidth, this.stageHeight)
        }
    }
}


window.onload = () => {
    new App()
}