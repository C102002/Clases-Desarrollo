var Service = /** @class */ (function () {
    function Service(name) {
        this.name = name;
    }
    Service.prototype.operation = function () {
        console.log("Service ".concat(this.name));
    };
    return Service;
}());
var Proxy = /** @class */ (function () {
    function Proxy() {
    }
    Proxy.prototype.Proxy = function (s) {
        this.realService = s;
    };
    Proxy.prototype.checkAccess = function (user) {
        if (user.name === 'alfredo')
            return (true);
        else
            return false;
    };
    Proxy.prototype.operation = function (user) {
        if (this.checkAccess(user))
            this.realService.operation();
        else
            console.log('Acces Denied');
        return;
    };
    return Proxy;
}());
var user = {
    name: 'pepe',
    username: ''
};
var Googleservice = new Service('Google');
var proxy = new Proxy();
proxy.Proxy(Googleservice);
proxy.operation(user);
