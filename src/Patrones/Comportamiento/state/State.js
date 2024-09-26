var Context = /** @class */ (function () {
    function Context(state) {
        this.changeState(state);
    }
    Context.prototype.context = function (initialState) {
        this.state = this.state;
    };
    Context.prototype.changeState = function (nextState) {
        this.state = nextState;
    };
    Context.prototype.doTHis = function () {
        this.state.doTHis();
    };
    Context.prototype.doThat = function () {
        this.state.doThat();
    };
    return Context;
}());
var ConcreteStateA = /** @class */ (function () {
    function ConcreteStateA() {
    }
    ConcreteStateA.prototype.setContext = function (context) {
        this.context = context;
    };
    ConcreteStateA.prototype.doTHis = function () {
        console.log('Hacer doThis de la clase concretaA');
    };
    ConcreteStateA.prototype.doThat = function () {
        console.log('Hacer doThat de la clase concretaA');
    };
    return ConcreteStateA;
}());
var ConcreteStateB = /** @class */ (function () {
    function ConcreteStateB() {
    }
    ConcreteStateB.prototype.setContext = function (context) {
        this.context = context;
    };
    ConcreteStateB.prototype.doTHis = function () {
        console.log('Hacer doThis de la clase concretaB');
    };
    ConcreteStateB.prototype.doThat = function () {
        console.log('Hacer doThat de la clase concretaB');
    };
    return ConcreteStateB;
}());
var contextState = new Context(new ConcreteStateA());
contextState.doTHis();
contextState.changeState(new ConcreteStateB());
contextState.doTHis();
