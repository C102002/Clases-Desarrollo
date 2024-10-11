var ContextStrategy = /** @class */ (function () {
    function ContextStrategy() {
    }
    ContextStrategy.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    ContextStrategy.prototype.do = function (data) {
        console.log('Context Do something');
        this.strategy.execute(data);
    };
    return ContextStrategy;
}());
var LowercaseStrategy = /** @class */ (function () {
    function LowercaseStrategy() {
    }
    LowercaseStrategy.prototype.execute = function (data) {
        data = data.toLowerCase();
        console.log(data);
    };
    return LowercaseStrategy;
}());
var UppercaseStrategy = /** @class */ (function () {
    function UppercaseStrategy() {
    }
    UppercaseStrategy.prototype.execute = function (data) {
        data = data.toUpperCase();
        console.log(data);
    };
    return UppercaseStrategy;
}());
var lower = new LowercaseStrategy();
var upper = new UppercaseStrategy();
var contextStrategy = new ContextStrategy();
contextStrategy.setStrategy(lower);
contextStrategy.do('HoLa soy Sergio');
contextStrategy.setStrategy(upper);
contextStrategy.do('HoLa soy Sergio');
