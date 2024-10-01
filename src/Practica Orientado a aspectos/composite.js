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
var component = /** @class */ (function () {
    function component() {
    }
    component.prototype.calcular = function () {
        return (0);
    };
    return component;
}());
var elemento = /** @class */ (function (_super) {
    __extends(elemento, _super);
    function elemento() {
        return _super.call(this) || this;
    }
    elemento.prototype.calcular = function () {
        return (1);
    };
    return elemento;
}(component));
var Compuesto = /** @class */ (function (_super) {
    __extends(Compuesto, _super);
    function Compuesto(componente) {
        var _this = _super.call(this) || this;
        _this.comonents = [];
        _this.comonents.push(componente);
        return _this;
    }
    Compuesto.prototype.calcular = function () {
        var num = 0;
        this.comonents.forEach(function (component) {
            num += component.calcular();
        });
        return (num);
    };
    Compuesto.prototype.add = function (componente) {
        this.comonents.push(componente);
    };
    return Compuesto;
}(component));
var p1;
var e = 'e';
for (var i = 0; i < 100; i++) {
    var e_1 = new elemento();
    if (i === 0)
        p1 = new Compuesto(e_1);
    else
        p1.add(e_1);
}
console.log(p1.calcular());
