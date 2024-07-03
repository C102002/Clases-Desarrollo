export abstract class InfraestructureError extends Error {
    constructor(message:string) {
        super(message) 
    }
}