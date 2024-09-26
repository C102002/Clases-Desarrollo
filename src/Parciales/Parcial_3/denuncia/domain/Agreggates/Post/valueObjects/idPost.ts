import { ValueObject } from '../../../../../shared/domain/ValueObject';
export class IdPost implements ValueObject<IdPost>{

    public idPost:number

    equals(valueObject: IdPost): boolean {
        if (this.idPost==valueObject.idPost) return true
        return false
    }

    static create(id:number){
        return new IdPost(id)
    }

    private constructor(id:number){
        this.idPost=id
    }

    get getPostId(){ return this.idPost}

}