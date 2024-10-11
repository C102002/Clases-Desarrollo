var SillaMadera = /** @class */ (function () {
    function SillaMadera() {
        this.test();
        this.patas = 2;
    }
    SillaMadera.prototype.test = function () {
        console.log('silla madera');
    };
    return SillaMadera;
}());
var SillaPlastico = /** @class */ (function () {
    function SillaPlastico() {
        this.test();
        this.patas = 2;
    }
    SillaPlastico.prototype.test = function () {
        console.log('silla plastico');
    };
    return SillaPlastico;
}());
var MesaMadera = /** @class */ (function () {
    function MesaMadera() {
        this.test();
        this.patas = 4;
    }
    MesaMadera.prototype.test = function () {
        console.log('Mesa madera');
    };
    return MesaMadera;
}());
var MesaPlastico = /** @class */ (function () {
    function MesaPlastico() {
        this.test();
        this.patas = 4;
    }
    MesaPlastico.prototype.test = function () {
        console.log('Mesa plastico');
    };
    return MesaPlastico;
}());
var FabricaMadera = /** @class */ (function () {
    function FabricaMadera() {
    }
    FabricaMadera.prototype.createProductA = function () {
        return new SillaMadera();
    };
    FabricaMadera.prototype.createProductB = function () {
        return new MesaMadera();
    };
    return FabricaMadera;
}());
var FabricaPlastico = /** @class */ (function () {
    function FabricaPlastico() {
    }
    //NT: Porque aca permite que se pueda hacer una mesa si deberia dar un tipo silla? es por el polimorfismo
    FabricaPlastico.prototype.createProductA = function () {
        return new MesaPlastico();
    };
    FabricaPlastico.prototype.createProductB = function () {
        return new MesaPlastico();
    };
    return FabricaPlastico;
}());
var fabricaMadera = new FabricaMadera();
console.log('Espera silla madera:' + fabricaMadera.createProductA().patas);
console.log('Espera mesa madera:' + fabricaMadera.createProductB().patas);
var fabricaPlastico = new FabricaPlastico();
console.log('Espera silla plastico:' + fabricaPlastico.createProductA().patas);
console.log('Espera mesa plastic:' + fabricaPlastico.createProductB().patas);
