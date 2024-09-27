// Estructura
class Car{
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

class Manual{
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
interface Builder{
    reset():void
    setSeats(number:number):void
    setEngine(power:number):void
    setTripComputer():void
    setGPS():void
}

class Director {
    constructor(private builder:Builder){}
    makeSUV(){
        this.builder.reset()
        this.builder.setEngine(500)
        this.builder.setSeats(4)
        this.builder.setTripComputer()
        this.builder.setGPS()
        console.log(this.builder);
        
    }
    makeSports(){
        this.builder.reset()
        this.builder.setEngine(5000)
        this.builder.setSeats(2)
        this.builder.setTripComputer()
        console.log(this.builder);
    }
    get Builder() {return this.builder}
}

class CarBuilder implements Builder{
    constructor(private car:Car){}
    reset(): void {
        this.car= new Car()
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
    getResult():Car{
        return this.car
    }
}

class CarManualBuilder implements Builder{
    constructor(private manual:Manual){}
    reset(): void {
        this.manual= new Manual("uuid")
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
    getResult():Manual{
        this.reset()
        return this.manual
    }
}

//Implementacion

let carBuilder= new CarBuilder(new Car())

let director= new Director(carBuilder)
director.makeSUV()
const suvCar=carBuilder.getResult()
director.makeSports()
