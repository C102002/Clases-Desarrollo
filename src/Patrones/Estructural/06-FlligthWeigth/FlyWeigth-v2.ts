
// Inmutable
class Sprite {
    constructor(
        private sprite:string,
        private color:string
    ){}
}

// Flyweigth Inmutable
class FlyweightSprite {
    constructor(
        private sprite:Sprite
    ){}
    render(h:Hammer){
        console.log(`sprite: ${this.sprite}`);
        console.log(`hammer: ${h}`);
    }
    get Sprite(){return this.sprite}
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
class SpriteFlyweigthFactory{
    //! OJO con ese string es que se mapea para el flyweigth del estado intrincico y busca ese valor de sus atributos
    private cache:Map<string,FlyweightSprite>= new Map<string,FlyweightSprite>()

    constructor(){}

    getFlyweigth(sprite:string, color:string):FlyweightSprite{
        let flyweigth=this.cache.get(color)
        
        if(!flyweigth){
            let flyweigth=new FlyweightSprite(new Sprite(color,sprite))
            this.cache.set(color,flyweigth)
            return flyweigth
        }
        return flyweigth
    }

    getKeys(){return this.cache.keys()}
}

let factory= new SpriteFlyweigthFactory()

let flrojo=factory.getFlyweigth('rojo-sprite','rojo')
let flazul=factory.getFlyweigth('azul-sprite','azul')
let flverde=factory.getFlyweigth('verde-sprite','verde')
let flverde2=factory.getFlyweigth('verde-sprite','verde')

let redhammer=new Hammer(0,0,flrojo.Sprite)
let bluehammer=new Hammer(1,3,flazul.Sprite)
let greenhammer=new Hammer(2,8,flverde.Sprite)
let greenhammer2=new Hammer(4,8,flverde.Sprite)

redhammer.draw()
bluehammer.draw()
greenhammer.draw()

console.log('------------------------------------------------------------');
//NT Esperando que solo hayan 3 estados intrincicos que son los sprites rojo azul y verde
console.log(factory.getKeys())