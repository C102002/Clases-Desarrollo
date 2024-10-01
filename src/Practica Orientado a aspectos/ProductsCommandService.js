var ProductsCommandServices = /** @class */ (function () {
    function ProductsCommandServices(pepe) {
        this.pepe = pepe;
    }
    ProductsCommandServices.prototype.adjustInventory = function () {
        console.log('Adjust');
    };
    ProductsCommandServices.prototype.DeleteInventory = function () {
        console.log('Delete');
    };
    ProductsCommandServices.prototype.InsertInventory = function () {
        console.log('Insert');
    };
    return ProductsCommandServices;
}());
var adjustInventory = /** @class */ (function () {
    function adjustInventory() {
    }
    adjustInventory.prototype.adjustInventory = function () {
        console.log('Adjust');
    };
    return adjustInventory;
}());
var DeleteInventory = /** @class */ (function () {
    function DeleteInventory(id) {
        this.id = id;
        this.id = id;
    }
    DeleteInventory.prototype.adjustInventory = function () {
        this.DeleteInventory();
    };
    DeleteInventory.prototype.DeleteInventory = function () {
        console.log('Delete');
    };
    return DeleteInventory;
}());
console.log('Hola');
var service = new ProductsCommandServices(123);
service.adjustInventory();
