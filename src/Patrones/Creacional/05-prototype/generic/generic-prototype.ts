interface Prototype <T>{
    clone():T
}

class Printer implements Prototype<Printer>{
    constructor(
        private name:string,
        private status:string,
        private active:boolean,
        private cola:string[]
    ){}
    clone(): Printer {
        return new Printer(this.name,this.status,this.active,this.cola)
    }
    changeStatus(s:string){this.status=s}
}

let printer=new Printer('impreso HP-DESJECT','inactivo',true,['acrhivo1', 'acrhivo2'])
let printercopy=printer.clone()
printercopy.changeStatus('warning')

console.log(printer);
console.log(printercopy);
