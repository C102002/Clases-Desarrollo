var Originator = /** @class */ (function () {
    function Originator() {
        this.state = null;
    }
    Originator.prototype.setState = function (state) {
        this.state = state;
    };
    Originator.prototype.save = function () {
        return new ConcreteMemento(this.state);
    };
    Originator.prototype.restore = function (m) {
        this.state = m.getState();
        console.log('Se restauro');
    };
    return Originator;
}());
var ConcreteMemento = /** @class */ (function () {
    function ConcreteMemento(state) {
        this.state = state;
    }
    ConcreteMemento.prototype.concreteMemento = function (state) {
        this.state = state;
    };
    ConcreteMemento.prototype.getState = function () {
        return this.state;
    };
    ConcreteMemento.prototype.do = function () {
    };
    return ConcreteMemento;
}());
var Caretaker = /** @class */ (function () {
    function Caretaker(originator) {
        this.history = [];
        this.originator = originator;
        this.save(originator);
    }
    Caretaker.prototype.undo = function () {
        if (this.history.length < 0)
            return;
        var memento = this.history.pop();
        console.log('Restoring ', memento.getState());
        this.originator.restore(memento);
    };
    Caretaker.prototype.save = function (originator) {
        var memento = new ConcreteMemento(originator.state);
        this.history.push(memento);
    };
    return Caretaker;
}());
var game = new Originator();
var historyGame = new Caretaker(game);
game.setState('guardado 1');
historyGame.save(game);
for (var i = 0; i < 100; i++) {
    var game_i = new Originator();
    game.setState(i.toString());
    historyGame.save(game);
}
historyGame.undo();
console.log(historyGame.originator);
