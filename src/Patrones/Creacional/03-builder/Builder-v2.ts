// Estructura
class CarV2{
    seats:number
    enginePower:number
    tripComputer?:boolean
    gps?:boolean
    constructor(){
        this.seats=0
        this.enginePower=0
    }
    setSeats(seats:number){this.seats=seats}
    setEnginePower(enginePower:number){this.enginePower=enginePower}
    setTripComputer(){this.tripComputer=true}
    setGps(){this.gps=true}
}

class ManualV2{
    seats?:number
    enginePower?:number
    tripComputer?:boolean
    gps?:boolean
    constructor(private readonly id:string){}

    setSeats(seats:number){this.seats=seats}
    setEnginePower(enginePower:number){this.enginePower=enginePower}
    setTripComputer(){this.tripComputer=true}
    setGps(){this.gps=true}
}
//TODO Se puede mejorar el diseño con programacion generica haciendo getResult():T en el builder
interface IBuilder <T>{
    reset():void
    setSeats(number:number):void
    setEngine(power:number):void
    setTripComputer():void
    setGPS():void
    getResult():T
}

class DirectorV2 <T,E> {
    constructor(private builder:IBuilder<T|E>){}
    makeSUV(){
        this.builder.reset()
        this.builder.setEngine(500)
        this.builder.setSeats(4)
        this.builder.setTripComputer()
        this.builder.setGPS()        
    }
    makeSports(){
        this.builder.reset()
        this.builder.setEngine(5000)
        this.builder.setSeats(2)
        this.builder.setTripComputer()
    }
    changeBuilder(builder:IBuilder<E>) {this.builder=builder}
    get Builder() {return this.builder}
}

class CarBuilderV2 implements IBuilder<CarV2>{
    constructor(private car:CarV2){}
    reset(): void {
        this.car= new CarV2()
    }
    setSeats(number: number): void {
        this.car.setSeats(number)
    }
    setEngine(power: number): void {
        this.car.setEnginePower(power)
    }
    setTripComputer(): void {
        this.car.setTripComputer()
    }
    setGPS(): void {
        this.car.setGps()
    }
    getResult():CarV2{
        return this.car
    }
}

class CarManualBuilderV2 implements IBuilder<ManualV2>{
    constructor(private manual:ManualV2){}
    reset(): void {
        this.manual= new ManualV2("uuid")
    }
    setSeats(number: number): void {
        this.manual.setSeats(number)
    }
    setEngine(power: number): void {
        this.manual.setEnginePower(power)
    }
    setTripComputer(): void {
        this.manual.setTripComputer()
    }
    setGPS(): void {
        this.manual.setGps()
    }
    getResult():ManualV2{
        return this.manual
    }
}

//Implementacion

let carBuilderV2= new CarBuilderV2(new CarV2())

let directorV2= new DirectorV2<CarV2,ManualV2>(carBuilderV2)

directorV2.makeSUV()
const suvCarV2=carBuilderV2.getResult()
directorV2.makeSports()
const sportsCarV2=carBuilderV2.getResult()


let carManualBuilderV2= new CarManualBuilderV2(new ManualV2("454464"))
directorV2.changeBuilder(carManualBuilderV2)

directorV2.makeSUV()
const suvCarManualV2=carManualBuilderV2.getResult()
directorV2.makeSports()
const sportCarManualV2=carManualBuilderV2.getResult()

console.log("Sports Car:",sportsCarV2)
console.log("Sports Manual:",sportCarManualV2)
console.log("Suv Car:",suvCarV2)
console.log("Suv Manual:",suvCarManualV2)
