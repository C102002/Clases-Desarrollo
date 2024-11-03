//Quiero hacer un memento de videos combinaods con el patron flyweigth
interface Memento <T>{
    state:T
    getState():T
}

//concrete Memento

class CompleteVideoMemento implements  Memento<CompleteVideo>{
    constructor(
        public state: CompleteVideo
    ){}
    getState(): CompleteVideo {
        return this.state
    }
}

class Historial <T>{
    private history:Memento<T>[]=[]
    constructor(
        private completevideo:GenericOriginator<T>
    ){}
    undo():void{
        let last=this.history.pop()
        if(last)
            this.completevideo.restore(last)
    }
    add(m:Memento<T>){
        this.history.push(m)        
    }
    all(){
        this.history.forEach(h=>console.log(h)
        )
    }
    get currentVideo(){return this.completevideo}
}

interface GenericOriginator <T>{
    save():Memento<T>
    restore(m:Memento<T>):void
}


// Inmutable
class Video {
    constructor(
        private url:string,
    ){}
}

abstract class GenericFlyweigth <T>{
    constructor(
        private intrincic:T
    ){}
    get Intrincic(){return this.intrincic}
}

// Flyweigth Inmutable
class FlyweightVideo extends GenericFlyweigth <Video>{
    constructor(video:Video){
        super(video)
    }
    render(completeVideo:CompleteVideo){
        console.log(`minutes: ${this.Intrincic}`);
        console.log(`completeVideo: ${completeVideo}`);
    }
}

// Mutable (Flyweigth)
// Originator (Memento)
class CompleteVideo  implements GenericOriginator <CompleteVideo>{
    constructor(
        private minute:number,
        private video:Video
    ){}

    save(): Memento<CompleteVideo> {
        //! OJO con esta linea porque sin esto ahi ya no va a funcionar porque todos tendrian el mismo objeto compartido
        return new CompleteVideoMemento(new CompleteVideo(this.minute,this.video))
    }
    restore(m: Memento<CompleteVideo>): void {
        let savedmemento=m.getState()
        this.minute=savedmemento.minute
    }

    changeMinute(m:number){
        this.minute=m
    }

    get Minute(){ return `${this.minute}`}
    render(){console.log(`minute:${this.minute} video:${JSON.stringify(this.video)}`);}

}

// Factory
abstract class AbstractFlyweigthFactory <T>{
    //! OJO con ese string es que se mapea para el flyweigth del estado intrincico y busca ese valor de sus atributos
    public cache:Map<T,GenericFlyweigth <T>>= new Map<T,GenericFlyweigth <T>>()
    
    constructor(){}

    abstract getFlyweigth(data:T):GenericFlyweigth<T>
    
    getKeys(){return this.cache.keys()}
}

class VideoFlyweigthFactory extends AbstractFlyweigthFactory <Video>{
    getFlyweigth(data: Video): GenericFlyweigth<Video> {
        let flyweigth=this.cache.get(data)
        if (flyweigth) return flyweigth
        let otherflyweigth=new FlyweightVideo(data)
        this.cache.set(data,otherflyweigth)
        return otherflyweigth
    }
}

//implementacion

let factory= new VideoFlyweigthFactory()

let video= new Video('https://www.youtube.com/watch?v=sWtEYPva4A0')
let fl=factory.getFlyweigth(video)
let complexVideo= new CompleteVideo(0,video)
let otherVideo= new CompleteVideo(0,video)

let historial= new Historial(complexVideo)

for (let i=0;i<=100;i++){
    complexVideo.changeMinute(i)
    historial.add(complexVideo.save())
}

//actualmente el video esta en el minuto 100
complexVideo.render()

//Cambio el video al minuto 0
complexVideo.changeMinute(45)

complexVideo.render()

//recupero el ultimo guardado

historial.undo()

let lastsaved=historial.currentVideo

//Recupero el minuto 100

console.log(lastsaved);

