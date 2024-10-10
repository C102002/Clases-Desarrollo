//estructura

abstract class Elemento {
    private padre?: Elemento
    constructor(public name:string) {}
    setPadre(padre:Elemento){
        this.padre=padre
    }
    cumple(f:(e:string)=>boolean):boolean{
        return f(this.name)
    }
    abstract buscar(f:(e:string)=>boolean):Elemento[]
}

class Archivo extends Elemento{
    buscar(f: (e: string) => boolean): Elemento[] {
        let elementos:Elemento[]=[]
        if (this.cumple(f)) elementos.push(this) 
        return elementos
    }
}

class Carpeta extends Elemento {
    elementos:Elemento[]=[]
    addelemento(e:Elemento){
        this.elementos.push(e)
        e.setPadre(this)
    }
    buscar(f: (e: string) => boolean): Elemento[] {
        let elementos:Elemento[]=[]
        if (super.cumple(f)) elementos.push(this)
        for( const elemento of this.elementos){
            if (elemento.cumple(f)) elementos.push(elemento)
        }
        return elementos
    }
}

//implementacion

let carpeta= new Carpeta('soy la carpeta padre')
for (let i=0; i<=10;i++){
    if (i%2==0) carpeta.addelemento(new Carpeta('soy'))
    else carpeta.addelemento(new Archivo('carpeta'))
}

function elementosSoy (s:string):boolean{
    return (s.includes('soy'))
}
let elementos=carpeta.buscar(elementosSoy)
console.log(`Elementos encontrados:`,elementos.length);
//esperando 
//1 carpeta que tiene (soy la carpeta padre) y 6 carpetas con soy