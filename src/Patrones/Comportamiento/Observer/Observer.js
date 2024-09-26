var Publisher = /** @class */ (function () {
    function Publisher() {
        this.subscribers = [];
    }
    Publisher.prototype.find = function (s) {
        this.subscribers.map(function (subs) {
            if (subs == s)
                return true;
        });
        return false;
    };
    Publisher.prototype.subscribe = function (s) {
        if (this.find(s))
            return;
        this.subscribers.push(s);
    };
    Publisher.prototype.unsubscribe = function (s) {
        this.subscribers = this.subscribers.filter(function (elemento) { return elemento !== s; });
    };
    Publisher.prototype.notifySubscribers = function () {
        this.subscribers.forEach(function (subscriber) {
            subscriber.update();
        });
    };
    Publisher.prototype.mainBuisnessLogic = function (newState) {
        this.mainState = newState;
        this.notifySubscribers();
    };
    return Publisher;
}());
var ConcreteSubscribers = /** @class */ (function () {
    function ConcreteSubscribers(name) {
        this.name = name;
    }
    ConcreteSubscribers.prototype.update = function () {
        console.log('Cambio de estado');
    };
    return ConcreteSubscribers;
}());
var subject = new ConcreteSubscribers('hola');
var subject1 = new ConcreteSubscribers('pepe');
var subject2 = new ConcreteSubscribers('prueba');
var observer = new Publisher();
observer.subscribe(subject);
observer.subscribe(subject1);
console.log(observer.subscribers.length);
observer.subscribe(subject1);
console.log(observer.subscribers.length);
observer.mainBuisnessLogic('cambio');
