
// Inmutable
class Sprite {
    constructor(
        private sprite:string,
        private color:string
    ){}
}

abstract class GenericFlyweigth <T>{
    constructor(
        private intrincic:T
    ){}
    get Intrincic(){return this.intrincic}
}

// Flyweigth Inmutable
class FlyweightSprite extends GenericFlyweigth <Sprite>{
    constructor(sprite:Sprite){
        super(sprite)
    }
    render(h:Hammer){
        console.log(`sprite: ${this.Intrincic}`);
        console.log(`hammer: ${h}`);
    }
}

// Mutable
class Hammer {
    constructor(
        private x:number,
        private y:number,
        private image:Sprite
    ){}

    get Coords(){ return `${this.x},${this.y}`}
    draw(){console.log(`${this.x},${this.y} image:${JSON.stringify(this.image)}`);}
}

// Factory
abstract class AbstractFlyweigthFactory <T>{
    //! OJO con ese string es que se mapea para el flyweigth del estado intrincico y busca ese valor de sus atributos
    public cache:Map<T,GenericFlyweigth <T>>= new Map<T,GenericFlyweigth <T>>()
    
    constructor(){}

    abstract getFlyweigth(data:T):GenericFlyweigth<T>
    
    getKeys(){return this.cache.keys()}
}

class SpriteFlyweigthFactory extends AbstractFlyweigthFactory <Sprite>{
    getFlyweigth(data: Sprite): GenericFlyweigth<Sprite> {
        let flyweigth=this.cache.get(data)
        if (flyweigth) return flyweigth
        let otherflyweigth=new FlyweightSprite(data)
        this.cache.set(data,otherflyweigth)
        return otherflyweigth
    }
}

let factory= new SpriteFlyweigthFactory()
let spriterojo=new Sprite('rojo-sprite','rojo')
let spriteazul=new Sprite('azul-sprite','azul')
let spriteverde=new Sprite('verde-sprite','verde')

let flrojo=factory.getFlyweigth(spriterojo)
let flazul=factory.getFlyweigth(spriteazul)
let flverde=factory.getFlyweigth(spriteverde)
let flverde2=factory.getFlyweigth(spriteverde)

let redhammer=new Hammer(0,0,flrojo.Intrincic)
let bluehammer=new Hammer(1,3,flazul.Intrincic)
let greenhammer=new Hammer(2,8,flverde.Intrincic)
let greenhammer2=new Hammer(4,8,flverde.Intrincic)

redhammer.draw()
bluehammer.draw()
greenhammer.draw()

console.log('--------------------');
//NT Esperando que solo hayan 3 estados intrincicos que son los sprites rojo azul y verde
console.log(factory.getKeys())