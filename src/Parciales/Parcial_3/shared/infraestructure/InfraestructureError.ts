export abstract class InfraestructureError extends Error {
    constructor(message:string) {
        super(message) 
        // Object.setPrototypeOf(this, InfraestructureError.prototype)
    }
}