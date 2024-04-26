var GenericBackup = /** @class */ (function () {
    function GenericBackup(state) {
        this.concreteMemento(state);
    }
    GenericBackup.prototype.concreteMemento = function (state) {
        this.state = state;
    };
    GenericBackup.prototype.getState = function () {
        return this.state;
    };
    return GenericBackup;
}());
var GenericOriginator = /** @class */ (function () {
    function GenericOriginator(state) {
        this.state = state;
    }
    GenericOriginator.prototype.save = function () {
        return new GenericBackup(this.state);
    };
    GenericOriginator.prototype.restore = function (m) {
        this.state = m.getState();
    };
    return GenericOriginator;
}());
var Historial = /** @class */ (function () {
    function Historial(originator) {
        this.history = [];
        this.originator = originator;
    }
    Historial.prototype.save = function (originator) {
        this.history.push(originator.save());
    };
    Historial.prototype.allHistory = function () {
        this.history.forEach(function (history) {
            console.log(history);
        });
    };
    Historial.prototype.undo = function () {
        var memento = this.history.pop();
        this.originator.restore(memento);
    };
    return Historial;
}());
var Video = /** @class */ (function () {
    function Video(minuto, name) {
        this.minuto = minuto;
        this.name = name;
    }
    Video.prototype.changeMinute = function (minuto) {
        this.minuto = minuto;
    };
    return Video;
}());
var video = new Video(0, 'planeta vegetta');
var Reproducer = new GenericOriginator(video);
var historialVideos = new Historial(Reproducer);
console.log('Creado el reproducer');
console.log(historialVideos.originator.state);
for (var i = 0; i <= 100; i++) {
    var newvideo = new Video(i, 'planeta vegetta');
    var Reproducer_1 = new GenericOriginator(newvideo);
    historialVideos.save(Reproducer_1);
}
console.log(historialVideos.history.length);
console.log('Despues');
console.log(historialVideos.originator.state);
historialVideos.undo();
console.log('Ultimo momento del video');
console.log(historialVideos.originator.state);
