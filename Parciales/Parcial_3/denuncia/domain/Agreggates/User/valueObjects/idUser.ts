import { ValueObject } from "../../../../../shared/domain/ValueObject"

export class IdUser implements ValueObject<IdUser>{
    idUser:number
    
    private constructor(id:number){
        this.idUser=id
    }
    equals(valueObject: IdUser): boolean {
        if (this.getValue===valueObject.getValue) return true
        return false
    }

    static create(id:number){
        return new IdUser(id)
    }

    get getValue(){return this.idUser}
}