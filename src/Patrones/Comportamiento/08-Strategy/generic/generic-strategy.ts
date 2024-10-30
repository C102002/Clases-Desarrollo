interface MarketStrategy<T>{
    execute(buy:T):number
}

interface Order{
    id:string
    name:string
    valueWithoutDiscount:number
    discount:number
    totalPrice:number
}

interface DTOCompra{
    name:string
    montoTotal:number
    edad:number
    dia:Date
}

class CompraService {
    constructor(
        private marketstrategy:MarketStrategy<DTOCompra>
    ){}
    setMarketStrategy(
        market:MarketStrategy<DTOCompra>
    ){
        this.marketstrategy=market
    }
    execute(data:DTOCompra):Order{
        let discount= this.marketstrategy.execute(data)
        let order:Order={
            id:'1234568',
            name:data.name,
            valueWithoutDiscount:data.montoTotal,
            discount:discount,
            totalPrice:data.montoTotal-discount
        }
        return order
    }
    changeMarketStrategy(m:MarketStrategy<DTOCompra>){
        this.marketstrategy=m
    }
}

class BlackFridayMarketStartegy implements MarketStrategy <DTOCompra>{
    execute(buy: DTOCompra): number {
        const blackfriday=new Date(new Date().setFullYear(buy.dia.getFullYear(),11,29))
        let amount=0        
        if (buy.dia.getDate()===blackfriday.getDate()){
            amount=buy.montoTotal*0.1            
        }
        return amount
    }    
}

class EarlyTwentysMarketStartegy implements MarketStrategy <DTOCompra>{
    execute(buy: DTOCompra): number {
        let amount=0
        if (buy.edad<=25){
            amount=buy.montoTotal*0.1
        }
        return amount
    }    
}

abstract class ComplexMarketStrategy <T> implements MarketStrategy<T>{
    
    private strategies:MarketStrategy<T>[]=[]
    constructor(){}
    execute(buy: T): number {
        let discount=0
        this.strategies.forEach(s=>{
            discount+=s.execute(buy)            
        })
        return discount
    }
    addMarketStrategy(m:MarketStrategy<T>){
        this.strategies.push(m)
    }
}

class BestForClientComplexStrategy  extends ComplexMarketStrategy<DTOCompra>{
    constructor(){
        super()
        this.addMarketStrategy(new EarlyTwentysMarketStartegy())
        this.addMarketStrategy(new BlackFridayMarketStartegy())
    }
}

//Implementacion
let compraservice= new CompraService(
    new EarlyTwentysMarketStartegy()
)

let data:DTOCompra={
    name:'Alfredo Fung',
    montoTotal:2000,
    edad:22,
    dia:new Date()
}
let order=compraservice.execute(data)

console.log(order);

let data2:DTOCompra={
    name:'Pedro Perez',
    montoTotal:2000,
    edad:22,
    dia:new Date(new Date().setFullYear(2024,11,29))
}

compraservice.changeMarketStrategy(
    new BestForClientComplexStrategy()
)

let order2= compraservice.execute(data2)

console.log(order2);
