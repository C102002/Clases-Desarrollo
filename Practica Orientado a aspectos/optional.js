"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Optional = void 0;
var Optional = /** @class */ (function () {
    function Optional(value) {
        this.value = value;
        if (value)
            this.assigned = true;
        else
            this.assigned = false;
    }
    Optional.prototype.hasValue = function () {
        if (this.value !== undefined) {
            return this.assigned = true;
        }
        else
            return this.assigned = false;
    };
    Optional.prototype.getValue = function () {
        if (this.hasValue())
            return this.value;
        else
            throw new Error('Error el tipo de dato es undefiend');
    };
    return Optional;
}());
exports.Optional = Optional;
// let optional=new Optional<string>(undefined)
// let optional=new Optional<string>('hola')
// console.log(optional.hasValue());
// console.log(optional.getValue());
