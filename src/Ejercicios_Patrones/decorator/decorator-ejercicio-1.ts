// Volvemos sobre el problema de las cuentas bancarias visto en el apunte “Problemas resueltos
// – Diseño”. Consideramos el caso en que tenemos dos tipos de cuentas bancarias: cajas de ahorros
// y cuentas corrientes. Además consideramos el requisito que impide hacer extracciones de más
// de 10000 pesos de cajas de ahorros (lo tome como transacciones a cuentas bancarias NO solo ahorro).

//1. NO se pueden hacer mas de 3 extracciones al mes
//2. Se debe informar depositos mayores a 50.000
//3. No se puede extraer 10.000 o mas en un solo retiro

interface ICuentaBancaria{
    extraer(monto:number):number
    depositar(monto:number):void
}

class CuentaBancaria implements ICuentaBancaria{
    constructor(private monto:number){}
    depositar(monto:number):void{
        this.monto+=monto
    }
    extraer(monto:number):number{
        return this.monto-monto
    }
    saldo():number{
        return this.monto
    }
}

class CuentaCorriente extends CuentaBancaria{}
class CuentaAhorro extends CuentaBancaria{}

abstract class CuentaBancariaBaseDecorator implements ICuentaBancaria{
    constructor(public wrapper:ICuentaBancaria) {}
    depositar(monto: number): void {
        return this.wrapper.depositar(monto)
    }
    extraer(monto: number): number {
        return this.wrapper.extraer(monto)
    }
}

class ValidarMontoDeExtraccionesDecorator extends CuentaBancariaBaseDecorator{
    extraer(monto: number): number {
        if(monto>=10000)
            throw new Error('La cantidad es mayor a 10.000 no es valido para cuentas bancarias')
        let result=this.wrapper.extraer(monto)
        return result
    }
}


class ValidarCantidadExtraccionesDecorator extends CuentaBancariaBaseDecorator{
    constructor(w:ICuentaBancaria,public cantidadmensual:number){
        super(w)
    }
    extraer(monto: number): number {
        if(this.cantidadmensual==0)
            throw new Error('La cantidad extraida este mes es mayor a 4 no es valido su retiro')
        let result=this.wrapper.extraer(monto)
        this.cantidadmensual--
        return result
    }
}

interface ILogger{
    logdata(data:string):void
}

class NativeLogger implements ILogger{
    public YELLOW = `\x1b[33m \x1b[0m`
    logdata(data: string): void {
        console.log(`Se hizo una extraccion con la siguiente informacion\x1b[33m ${data}\x1b[0m`)
    }
}

class InformarDepositosDecorator extends CuentaBancariaBaseDecorator{
    constructor(e:ICuentaBancaria,public logger:ILogger){
        super(e)
    }
    depositar(monto: number):void {
        this.wrapper.depositar(monto)
        if (monto>=50000)
            this.logger.logdata(JSON.stringify(monto))
    }
}

//implementacion

let cuenta=new InformarDepositosDecorator(
    new ValidarCantidadExtraccionesDecorator(
            new ValidarMontoDeExtraccionesDecorator(
                new CuentaBancaria(500000)
            ),3
        )
    ,new NativeLogger()
)

// cuenta.extraer(65000)
// esperando
// throw new Error('La cantidad es mayor a 10.000 no es valido para cuentas bancarias')

cuenta.depositar(50500)
let valor1=cuenta.extraer(500)
console.log(`extraccion 1 ${valor1}`)
let valor2=cuenta.extraer(500)
console.log(`extraccion 2 ${valor2}`)
let valor3=cuenta.extraer(500)
console.log(`extraccion 3 ${valor3}`)

cuenta.extraer(65)
// esperando
// Error: La cantidad extraida este mes es mayor a 4 no es valido su retiro




