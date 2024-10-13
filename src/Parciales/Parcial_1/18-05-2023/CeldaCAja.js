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
var Optional_1 = require("../../Practica Orientado a aspectos/Optional");
// class Celda <T>{
//     valor: T;
//     reducir(f:(e1:T,e2:T)=>T, predicado:(e:T)=>boolean):T{
//         if (predicado(this.valor)){
//             return <T>(this.valor);
//         }
//         return
//     }
//     recorrer():void{
//         console.log('Soy una celda (valor):',this.valor);
//     }
//     constructor(number:T) {
//         this.valor=number;
//     }
// }
// class Caja <T> extends Celda <T>{
//     valor: T;
//     elementos: Celda<T>[]=[];
//     reducir(f:(e1:T,e2:T)=>T, predicado:(e:T)=>boolean):T{
//             let first=this.elementos[0].reducir(f,predicado);
//             let second=this.elementos[1].reducir(f,predicado);
//             let result=f(first,second);
//             if (this.elementos.length > 2){
//                 for (let i=2;i<this.elementos.length;i++){
//                     let son=this.elementos[i].reducir(f,predicado)
//                     result=f(son,result)
//                 }
//             }
//             let me=super.reducir(f,predicado)
//             result=f(result,me)
//             return result
//     }
//     //
//     recorrer():void{
//         console.log('Soy una caja (valor):',this.valor);
//         if (this.elementos){
//             this.elementos.forEach((elemento)=>{
//                 elemento.recorrer();
//             })
//         }
//     }
//     add(celda:Celda<T>):void{
//         this.elementos.push(celda);
//     }
//     constructor(number: T) {
//         super(number)
//     }
// }
var Celda = /** @class */ (function () {
    function Celda(number) {
        this.valor = number;
    }
    Celda.prototype.reducir = function (f, predicado) {
        if (predicado(this.valor)) {
            return new Optional_1.Optional(this.valor);
        }
        return new Optional_1.Optional(undefined);
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
        var first = this.elementos[0].reducir(f, predicado);
        var second = this.elementos[1].reducir(f, predicado);
        var result;
        console.log(first.hasValue());
        console.log(second.hasValue());
        if (first.hasValue() && second.hasValue()) {
            // console.log('Llego');
            result = f(first.getValue(), second.getValue());
        }
        else {
            if (first.hasValue())
                result = first.getValue();
            else if (second.hasValue())
                result = second.getValue();
        }
        if (this.elementos.length > 2) {
            for (var i = 2; i < this.elementos.length; i++) {
                var son = this.elementos[i].reducir(f, predicado);
                if (son.hasValue()) {
                    result = f(son.getValue(), result);
                }
            }
        }
        var me = _super.prototype.reducir.call(this, f, predicado);
        if (me.hasValue()) {
            result = f(result, me.getValue());
        }
        return new Optional_1.Optional(result);
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
        return (true);
    }
    return (false);
    // return true
}
var prueba = caja.reducir(f, predicado);
console.log('tamano:', caja.elementos.length);
caja.recorrer();
console.log('final:' + prueba.getValue());
