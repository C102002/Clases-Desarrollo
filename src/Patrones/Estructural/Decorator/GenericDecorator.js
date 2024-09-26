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
var FileDataSource = /** @class */ (function () {
    function FileDataSource(filename) {
        this.filename = filename;
    }
    FileDataSource.prototype.writeData = function (Data) {
        console.log('FileData source');
    };
    FileDataSource.prototype.readData = function () {
        console.log('ReadData File');
    };
    return FileDataSource;
}());
var DataSourceDecorator = /** @class */ (function () {
    function DataSourceDecorator(decorator) {
        this.DataSourceDecorator(decorator);
    }
    DataSourceDecorator.prototype.writeData = function (Data) {
        console.log('DataSourceDecorator source');
    };
    DataSourceDecorator.prototype.readData = function () {
        console.log('ReadData DataSource');
    };
    DataSourceDecorator.prototype.DataSourceDecorator = function (decorator) {
        this.wrapper = decorator;
    };
    return DataSourceDecorator;
}());
var EncryptionDecorator = /** @class */ (function (_super) {
    __extends(EncryptionDecorator, _super);
    function EncryptionDecorator(decorator) {
        return _super.call(this, decorator) || this;
    }
    EncryptionDecorator.prototype.writeData = function (Data) {
        _super.prototype.writeData.call(this, Data);
        console.log('EncryptionDecorator source');
    };
    EncryptionDecorator.prototype.readData = function () {
        _super.prototype.readData.call(this);
        console.log('EncryptionDecorator Data');
    };
    return EncryptionDecorator;
}(DataSourceDecorator));
var file = new FileDataSource(123);
var datasource = new DataSourceDecorator(file);
datasource.readData();
datasource.wrapper.readData();
console.log('');
var encription = new EncryptionDecorator(datasource);
encription.readData();
encription.wrapper.readData();
