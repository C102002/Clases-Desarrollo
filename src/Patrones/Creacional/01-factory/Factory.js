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
var concreteProductA = /** @class */ (function () {
    function concreteProductA() {
        this.doStuff();
    }
    concreteProductA.prototype.doStuff = function () {
        console.log('Se hizo un producto concreto A');
    };
    return concreteProductA;
}());
var concreteProductB = /** @class */ (function () {
    function concreteProductB() {
        this.doStuff();
    }
    concreteProductB.prototype.doStuff = function () {
        console.log('Se hizo un producto concreto B');
    };
    return concreteProductB;
}());
var Dialog = /** @class */ (function () {
    function Dialog(id) {
        this.id = id;
        this.id = id;
    }
    Dialog.prototype.createButton = function () {
        var button = new concreteProductA();
        return button;
    };
    return Dialog;
}());
var WindowsDialog = /** @class */ (function (_super) {
    __extends(WindowsDialog, _super);
    function WindowsDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowsDialog.prototype.createButton = function () {
        var button = new concreteProductA();
        return button;
    };
    return WindowsDialog;
}(Dialog));
var WebDialog = /** @class */ (function (_super) {
    __extends(WebDialog, _super);
    function WebDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebDialog.prototype.createButton = function () {
        var button = new concreteProductB();
        return button;
    };
    return WebDialog;
}(Dialog));
///Boton tipo A
var button = new Dialog('1234654');
var a = button.createButton();
console.log(a.doStuff());
var button2 = new WebDialog('133');
var b = button2.createButton();
console.log(b.doStuff());
