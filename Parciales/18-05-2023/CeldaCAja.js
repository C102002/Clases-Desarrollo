"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Celda = /** @class */ (function () {
    function Celda(number) {
        this.valor = number;
    }
    Celda.prototype.reducir = function (f, predicado) {
        if (predicado(this.valor)) {
            return (this.valor);
        }
        // this.reducir(f,predicado)
        return (0);
    };
    Celda.prototype.recorrer = function () {
        console.log('Soy una celda (valor):', this.valor);
    };
    return Celda;
}());
var Caja = /** @class */ (function (_super) {
    __extends(Caja, _super);
    function Caja(number) {
        var _this = _super.call(this, number) || this;
        _this.elementos = [];
        return _this;
    }
    Caja.prototype.reducir = function (f, predicado) {
        if (this.elementos.length >= 2) {
            var first = this.elementos[0].reducir(f, predicado);
            var second = this.elementos[1].reducir(f, predicado);
            var result_1 = f(first, second);
            if (this.elementos) {
                this.elementos.forEach(function (elemento) {
                    var son = elemento.reducir(f, predicado);
                    result_1 = f(result_1, son);
                });
            }
            return result_1;
        }
    };
    //
    Caja.prototype.recorrer = function () {
        console.log('Soy una caja (valor):', this.valor);
        if (this.elementos) {
            this.elementos.forEach(function (elemento) {
                elemento.recorrer();
            });
        }
    };
    Caja.prototype.add = function (celda) {
        this.elementos.push(celda);
    };
    return Caja;
}(Celda));
var caja = new Caja(12);
for (var i = 0; i < 11; i++) {
    var celda = new Celda(i);
    caja.add(celda);
}
function f(a, b) {
    console.log('sumo:', a, '+', b);
    return (a + b);
}
function predicado(a) {
    if (a % 2 == 0) {
        // console.log('hola');
        return (true);
    }
    return (false);
}
var prueba = caja.reducir(f, predicado);
console.log('tamano:', caja.elementos.length);
caja.recorrer();
console.log('final:' + prueba);
