interface MarketStrategy<T>{
    execute(buy:T):Order
}

interface Order{
    id:string
    name:string
    value:number
}

class CompraService <T>{
    constructor(
        private marketstrategy:MarketStrategy<T>
    ){}
    setMarketStrategy(
        market:MarketStrategy<T>
    ){
        this.marketstrategy=market
    }
    execute(data:T):Order{
        return this.marketstrategy.execute(data)
    }
}