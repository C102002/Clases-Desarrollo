// estructura

export interface IPoliticBridge{
    calcular(data:DTOCompra):number
}

export interface DTOCompra{
    edad:number
    venta:number
    fecha:Date
    productos:string[]
    precio:number
}

interface Compra{
    id:string
    monto:number
}

export class ServiceCompra {
    private businesspolitic:IPoliticBridge
    constructor(p?:IPoliticBridge){
        if (!p) this.businesspolitic=new CachitosPolitc()
        else this.businesspolitic=p
    }
    setBusinessPolitic(businessPolitic:IPoliticBridge){
        this.businesspolitic=businessPolitic
    }
    compra(data:DTOCompra):Compra{
        let descuento=this.businesspolitic.calcular(data)
        let compra:Compra={
            id:'123',
            monto:descuento
        }
        return compra
    }
}

export class CachitosPolitc implements IPoliticBridge{
    calcular(data:DTOCompra): number {
        let find=data.productos.find((producto)=>producto=='cachito')
        if (find) return 0.10*data.precio
        return 0
    }
}

export class ViejitosPolitic implements IPoliticBridge{
    calcular(data:DTOCompra): number {
        if (data.edad>=60) return 0.50*data.precio
        return 0
    }
}

export class CachitosHigherPricePolitc implements IPoliticBridge{
    calcular(data:DTOCompra): number {
        let find=data.productos.find((producto)=>producto=='cachito')
        if (find) return 2*data.precio
        return 0
    }
}

export class ViejitosHigherPricePolitic implements IPoliticBridge{
    calcular(data:DTOCompra): number {
        if (data.edad>=60) return 6*data.precio
        return 0
    }
}

abstract class PolitcComplex implements  IPoliticBridge{
    private politics:IPoliticBridge[]=[]
    calcular(data: DTOCompra): number {
        let value=0
        this.politics.forEach((politic)=>{
            value+=politic.calcular(data)            
        })
        return value
    }
    addPolit(p:IPoliticBridge){
        this.politics.push(p)
    }
}

class LomejorClientePolict extends PolitcComplex{
    constructor(){
        super()
    }
}

class LoMasCaroClientePolict extends PolitcComplex{
    constructor(){
        super()
    }
}

// implementacion
let lomascaro= new LoMasCaroClientePolict()
lomascaro.addPolit(new ViejitosHigherPricePolitic())
lomascaro.addPolit(new CachitosHigherPricePolitc())

let compra= new ServiceCompra(lomascaro)
let compraDATA:DTOCompra={
    edad:60,
    venta:789,
    fecha:new Date(),
    productos:['cachito'],
    precio:500
}

let data=compra.compra(compraDATA)
//esperando un precio de 500*6+500*2=3000+1000=4000
console.log(data);
