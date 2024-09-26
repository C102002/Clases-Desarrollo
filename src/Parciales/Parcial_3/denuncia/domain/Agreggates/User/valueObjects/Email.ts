import { ValueObject } from "../../../../../shared/domain/ValueObject"

export class Email implements ValueObject<Email>{
    email:string
    
    private constructor(email:string){
        this.email=email
    }
    equals(valueObject: Email): boolean {
        if (this.getValue===valueObject.getValue) return true
        return false
    }

    static create(email:string){
        return new Email(email)
    }

    get getValue(){return this.email}
}