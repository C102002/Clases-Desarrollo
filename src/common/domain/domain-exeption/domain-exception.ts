

export abstract class DomainException extends Error {
    constructor(msg: string) {
        super(msg);
    }
}