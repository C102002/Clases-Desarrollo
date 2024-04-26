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
var BaseHandler = /** @class */ (function () {
    function BaseHandler(name) {
        this.name = name;
    }
    BaseHandler.prototype.setNext = function (h) {
        this.next = h;
    };
    BaseHandler.prototype.handle = function (request) {
        if (this.next != null)
            this.next.handle(request);
        else
            console.log('No se manejo', request);
    };
    BaseHandler.prototype.getname = function () {
        return this.name;
    };
    return BaseHandler;
}());
var ConcreteHandler = /** @class */ (function (_super) {
    __extends(ConcreteHandler, _super);
    function ConcreteHandler(name) {
        return _super.call(this, name) || this;
    }
    ConcreteHandler.prototype.handle = function (request) {
        if (this.canHandle(request))
            console.log('Se manejo aca', this.getname());
        else {
            _super.prototype.handle.call(this, request);
        }
    };
    ConcreteHandler.prototype.setNext = function (h) {
        _super.prototype.setNext.call(this, h);
    };
    ConcreteHandler.prototype.canHandle = function (request) {
        if (request == _super.prototype.getname.call(this))
            return true;
        else
            return false;
    };
    return ConcreteHandler;
}(BaseHandler));
var h1 = new ConcreteHandler('hola');
var h2 = new ConcreteHandler('prueba');
var h3 = new ConcreteHandler('12346');
h1.setNext(h2);
h2.setNext(h3);
h1.handle('prueba');
h1.handle('hola');
h1.handle('12346');
h1.handle('');
