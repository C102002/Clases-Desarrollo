var Optional = /** @class */ (function () {
    function Optional(value) {
        this.value = value;
        if (value)
            this.assigned = true;
        else
            this.assigned = false;
    }
    Optional.prototype.hasValue = function () {
        if (this.value)
            return this.assigned = true;
        else
            return this.assigned = false;
    };
    Optional.prototype.getValue = function () {
        if (this.hasValue())
            return this.value;
        else
            throw new DOMException;
    };
    return Optional;
}());
// let optional=new Optional<string>(undefined)
var optional = new Optional('hola');
console.log(optional.hasValue());
console.log(optional.getValue());
