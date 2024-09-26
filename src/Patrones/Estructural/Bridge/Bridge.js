var Telefono = /** @class */ (function () {
    function Telefono() {
    }
    Telefono.prototype.increase = function () {
        this.signal();
        console.log('Increase telefono');
    };
    Telefono.prototype.decrease = function () {
        this.signal();
        console.log('Decreace telefono');
    };
    Telefono.prototype.signal = function () {
        console.log('Signal telefono');
    };
    return Telefono;
}());
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.increase = function () {
        this.signal();
        console.log('Increase controller');
    };
    Controller.prototype.decrease = function () {
        this.signal();
        console.log('Decreace controller');
    };
    Controller.prototype.signal = function () {
        console.log('Signal controller');
    };
    return Controller;
}());
var Abstraction = /** @class */ (function () {
    function Abstraction() {
    }
    Abstraction.prototype.increseFeature = function () {
        this.i.increase();
    };
    Abstraction.prototype.decreaseFeature = function () {
        this.i.decrease();
    };
    Abstraction.prototype.signalFeature = function () {
        this.i.signal();
    };
    Abstraction.prototype.setImplentation = function (i) {
        this.i = i;
    };
    return Abstraction;
}());
var abstratiction = new Abstraction();
var controll = new Controller();
var telefono = new Telefono();
abstratiction.setImplentation(controll);
abstratiction.increseFeature();
abstratiction.setImplentation(telefono);
abstratiction.increseFeature();
