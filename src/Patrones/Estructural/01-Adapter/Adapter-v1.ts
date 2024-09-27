//Estructura
interface Sumar{
    method(elemento1:number,elemento2:number):number
}

interface SumaEspecialDTO{
    elemento1:number
    elemento2:number
}

class SumaEspecialService{
    constructor(){}
    serviceMethod(specialData:SumaEspecialDTO):number{
        const suma= (specialData.elemento1+specialData.elemento2)*2
        return suma
    }
}

class Adapter implements Sumar{
    constructor(private adapter:SumaEspecialService){}
    method(elemento1: number, elemento2: number): number {
        const specialData:SumaEspecialDTO={
            elemento1,
            elemento2
        }
        return this.adapter.serviceMethod(specialData)
    }
}

//Implementacion 
const sumaService= new SumaEspecialService()
const adapter= new Adapter(sumaService)
const number= adapter.method(4,6)
console.log(number);
