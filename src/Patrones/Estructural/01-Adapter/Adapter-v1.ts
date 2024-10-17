//Estructura
interface Sumar{
    method(elemento1:number,elemento2:number):number
}

interface SumaEspecialDTO{
    elemento1:number
    elemento2:number
}
//NT: Suma trabaja en decimal
class SumaService{
    constructor(){}
    serviceMethod(specialData:SumaEspecialDTO):number{
        const suma= (specialData.elemento1+specialData.elemento2)
        return suma
    }
}

class Adapter implements Sumar{
    constructor(private adapter:SumaService){}

    private transformBinaryToDecimal(data:number):number{
        let dataDecimal=this.numberToArray(data)
        let numberDecimal=0
        let baseTwo=2
        dataDecimal.forEach((element,index)=>{
            numberDecimal+=element*Math.pow(baseTwo,dataDecimal.length-1-index)           
        })
        return numberDecimal
    }
    
    private transformDecimalToBinary(data:number):number{
        let number= data.toString(2);
        return parseInt(number)
    }

    private numberToArray(num: number): number[] {
        const numStr = num.toString();      
        const numArray = numStr.split('').map(char => parseInt(char, 10));
        return numArray;
      }

    method(elemento1: number, elemento2: number): number {
        const specialData:SumaEspecialDTO={
            elemento1:this.transformBinaryToDecimal(elemento1),
            elemento2:this.transformBinaryToDecimal(elemento2)
        }
        let resultDecimal=this.adapter.serviceMethod(specialData)
        return this.transformDecimalToBinary(resultDecimal)
    }
}

//Implementacion 
//NT cliente trabaja en binario
const sumaService= new SumaService()
const adapter= new Adapter(sumaService)
//suma dos numeros en binario
//11 (3) + 1 (1)=100 (4)
const number= adapter.method(11,1)
console.log(number);
