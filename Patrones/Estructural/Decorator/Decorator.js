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
var ConcreteComponent = /** @class */ (function () {
    function ConcreteComponent(name) {
        this.name = name;
    }
    ConcreteComponent.prototype.execute = function () {
        console.log('Execute de componente concreto');
    };
    return ConcreteComponent;
}());
var BaseDecorator = /** @class */ (function () {
    function BaseDecorator(component) {
        this.wraperr = component;
    }
    BaseDecorator.prototype.BaseDecorator = function (c) {
        this.wraperr = c;
    };
    BaseDecorator.prototype.execute = function () {
        console.log('Execute de componente decorador base');
    };
    return BaseDecorator;
}());
var ConcreteDecoratorA = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorA, _super);
    function ConcreteDecoratorA(component) {
        return _super.call(this, component) || this;
    }
    ConcreteDecoratorA.prototype.execute = function () {
        console.log('Execute de componente decorador concreto A');
        _super.prototype.execute.call(this);
        this.extra();
    };
    ConcreteDecoratorA.prototype.extra = function () {
        console.log('Funcionalidad extra A1');
    };
    return ConcreteDecoratorA;
}(BaseDecorator));
var ConcreteDecoratorB = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorB, _super);
    function ConcreteDecoratorB(component) {
        return _super.call(this, component) || this;
    }
    ConcreteDecoratorB.prototype.execute = function () {
        console.log('Execute de componente decorador concreto B');
        _super.prototype.execute.call(this);
        this.extra();
    };
    ConcreteDecoratorB.prototype.extra = function () {
        console.log('Funcionalidad extra B1');
    };
    return ConcreteDecoratorB;
}(BaseDecorator));
var concreteComponent = new ConcreteComponent('componente 1');
concreteComponent.execute();
var decorator = new BaseDecorator(concreteComponent);
decorator.execute();
console.log('---------------');
var concreteComponentA = new ConcreteDecoratorA(concreteComponent);
concreteComponentA.execute();
console.log('---------------');
var concreteComponentB = new ConcreteDecoratorB(concreteComponentA);
console.log('Decorando B sobre A');
concreteComponentB.execute();
