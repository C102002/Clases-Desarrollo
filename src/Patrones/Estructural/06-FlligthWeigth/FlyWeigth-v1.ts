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
//Intrinsic Object Inmutable compartido
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
    private particle:Particle
    constructor(particle:Particle){
        this.particle=particle
    }
    move(movingParticle:MovingParticle){
        console.log(`soy una particula que se mueve ${movingParticle}`);
        console.log(`soy una particula mi valor es: ${this.Particle}`);
    }
    get Particle(){return this.particle}
}
//FlywigthFactory Singelton
class FlyweightFactory{
    private cache: Map<Particle,Flyweight>=new Map<Particle,Flyweight>()
    
    constructor(){}

    getFlyweigth(particle:Particle):Flyweight{
        let flyweigth=this.cache.get(particle)
        console.log(this.cache)
        
        if(!flyweigth){
            let flyweigth=new Flyweight(particle)
            this.cache.set(particle,flyweigth)
            return flyweigth
        }
        return flyweigth
    }

    getKeys(){return this.cache.keys()}
}
//Context
class Game{
    private particle:Particle
    private flyweigth:Flyweight
    constructor( particle:Particle, flyweigth:Flyweight){
        this.particle=particle
        this.flyweigth=flyweigth
    }
    move(coords:Coords){
        this.particle.move(coords,5,1)
    }
    get Flyweigth(){return this.flyweigth}
}

//Implementacion
const factory = new FlyweightFactory();

let flyweigth1=factory.getFlyweigth(new Particle('azul','sprite-azul'))
let flyweigth2=factory.getFlyweigth(new Particle('azul','sprite-azul'))
let flyweigth3=factory.getFlyweigth(new Particle('azul','sprite-azul'))
let flyweigth4=factory.getFlyweigth(new Particle('azul','sprite-azul'))


const movingParticle1 = new MovingParticle(flyweigth1.Particle, { x: 10, y: 20 }, 1, 5);
const movingParticle2 = new MovingParticle(flyweigth2.Particle, { x: 15, y: 25 }, 2, 6);
const movingParticle3 = new MovingParticle(flyweigth3.Particle, { x: 20, y: 30 }, 3, 7);

movingParticle1.draw();
movingParticle2.draw();
movingParticle3.draw();

console.log(factory.getKeys()); // Muestra las claves de las partículas creadas en la fábrica