interface Silla{
    patas:number
    // desing:string
    test():void;
}

interface Mesa{
    patas:number
    estilo:string
    test():void;
}


class SillaMadera implements Silla{
    patas:number;
    desing: string;

    test():void{
        console.log('silla madera');
    }
    constructor(){
        this.test()
        this.patas=2;
    }
}

class SillaPlastico implements Silla{
    patas:number;
    desing: string;

    test():void{
        console.log('silla plastico');
    }
    constructor(){
        this.test()
        this.patas=2;
    }
}

class MesaMadera implements Mesa{
    patas:number;
    estilo: string;
    test():void{
        console.log('Mesa madera');
    }
    constructor(){
        this.test()
        this.patas=4;
    }
}

class MesaPlastico implements Mesa{
    patas:number;
    estilo: string;

    test():void{
        console.log('Mesa plastico');
    }
    constructor(){
        this.test()
        this.patas=4;
    }
}


interface AbstractFactory{
    createProductA():Silla
    createProductB():Mesa
}

class FabricaMadera implements AbstractFactory{
    createProductA(): Silla {
        return new SillaMadera()
    }

    createProductB(): Mesa {
        return new MesaMadera()
    }
}

class FabricaPlastico implements AbstractFactory{
    //NT: Porque aca permite que se pueda hacer una mesa si deberia dar un tipo silla? es por el polimorfismo
    //Solucion: Porque cumplia con los traibutos y metodos de la interfaz, al agregar otro atributo distinto da error
    //
    // antes silla { patas: number y test()void} mesa{ patas:number, test()void y estilo:string}
    // createProductA(): Silla {                      
    //     return new MesaPlastico()           NT: Cumple la interfaz
    // }

    createProductA(): Silla {
        return new MesaPlastico()
    }

    createProductB(): Mesa {
        return new MesaPlastico()
    }
}

let fabricaMadera= new FabricaMadera();
console.log('Espera silla madera:'+fabricaMadera.createProductA().patas);
console.log('Espera mesa madera:'+fabricaMadera.createProductB().patas);

let fabricaPlastico= new FabricaPlastico()
console.log('Espera silla plastico:'+fabricaPlastico.createProductA().patas);
console.log('Espera mesa plastic:'+fabricaPlastico.createProductB().patas);
