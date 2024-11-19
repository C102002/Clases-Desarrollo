abstract class Unidad{
    abstract suprimir(unidad:Unidad):Unidad
    abstract recorrer():void
}

class Soldado extends Unidad{
    recorrer(): void {
        console.log(`${JSON.stringify(this.constructor.name)}`)
    }
    suprimir(unidad: Unidad): Unidad {
        return this
    }
}

class Complemento extends Unidad{
    recorrer(): void {
        console.log(`${JSON.stringify(this.constructor.name)}`)
        this.unidad.recorrer()
    }

    constructor(public unidad:Unidad){
        super()
    }

    suprimir(unidad: Unidad): Unidad {
        let deletedunidad=this.unidad.suprimir(unidad)
        this.unidad=deletedunidad
        if(this==unidad)
            return deletedunidad
        return this
    }
}

class Escudo extends Complemento{}

class Espada extends Complemento{}

class Martillo extends Complemento{}

class Arco extends Complemento{}



//implementacion

let soldado=new Soldado()
let escudo=new Escudo(soldado)
let espada= new Espada(escudo)
let arco= new Arco(espada)
let martillo= new Martillo(arco)

console.log(`El elemento completo es:`)
espada.recorrer()

console.log('-----------------------------')
let unidad= arco.suprimir(arco)
unidad.recorrer()

