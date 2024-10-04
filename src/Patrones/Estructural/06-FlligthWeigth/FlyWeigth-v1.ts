//Estructura"
interface Coords{
    x:number,
    y:number
}
//Estado Extrincico Object mutable unico
class MovingParticle{
    constructor(
        private particle:Particle,
        private coords:Coords,
        private vector:number,
        private speed:number
    ){}
    move(particle:Particle){
        this.particle=particle
    }
    draw(){
        console.log(`dibujo de ${this.Particle.Sprite}, en ${JSON.stringify(this.Coords)}`);
    }
    get Particle(){ return this.particle}
    get Coords(){ return this.coords}
    get Vector(){ return this.vector}
    get Speed(){ return this.speed}

}
//Intrinsic Object Inmutable variable
class Particle{

    constructor(private color:string,private sprite:string){}

    draw(canvas:string, coords:Coords){
        console.log(`Canvas ${canvas}, to coords: ${JSON.stringify(coords)}`);
    }

    move(coords:Coords,vector:number,speed:number){}

    get Color(){return this.color}
    get Sprite(){return this.sprite}
}

class Flyweight{
    private movingParticle:MovingParticle
    constructor(movingParticle:MovingParticle){
        this.movingParticle=movingParticle
    }
    move(particle:Particle){
        this.movingParticle.move(particle)
        const s = JSON.stringify(this.movingParticle);
        const u = JSON.stringify(particle);
        console.log(`Flyweight: Displaying shared (${s}) and unique (${u}) state.`);
        
    }
    get MovingParticle(){return this.movingParticle}
}
//FlywigthFactory Singelton
class FlyweightFactory{
    private cache: Map<MovingParticle,Flyweight>=new Map<MovingParticle,Flyweight>()
    
    constructor(){}

    getFlyweigth(movingParticle:MovingParticle):Flyweight{
        let flyweigth=this.cache.get(movingParticle)
        if(!flyweigth){
            let flyweigth=new Flyweight(movingParticle)
            this.cache.set(movingParticle,flyweigth)
            return flyweigth
        }
        return flyweigth
    }

    getKeys(){return this.cache.keys()}
}
class Game{
    private particle:Particle
    private flyweigth:Flyweight
    constructor( particle:Particle, movingParticle:MovingParticle){
        this.particle=particle
        let flygthweigthFactory= new FlyweightFactory()
        this.flyweigth=flygthweigthFactory.getFlyweigth(movingParticle)
    }
    move(coords:Coords){
        this.particle.move(coords,5,1)
    }
    get Flyweigth(){return this.flyweigth}
}

//Implementacion
let particle= new Particle("azul","sprite azul")
let coords:Coords={
    x:0,
    y:0
}
let movingParticle= new MovingParticle(particle,coords,0,0)
let game= new Game(particle,movingParticle)

let coords1:Coords={
    x:0,
    y:0
}
game.move(coords1)
const flyweigth=game.Flyweigth
console.log(flyweigth)