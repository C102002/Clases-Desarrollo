import { AggregateRoot } from "../../../../../../common/domain/aggregate-root/aggregate-root";
import { DomainEvent } from "../../../../../../common/domain/domain-event/domain-event";
import { PostId } from "../../../post/domain/value-objects/post-id";
import { UserId } from "../../../user/domain/value-objetcs/user-id";
import { InvalidDenunciaException } from "../domain-exception/invalid-denuncia-exception";
import { Category } from "../value-objects/category";
import { DenunciaId } from "../value-objects/denuncia-id";
import { Text } from "../value-objects/text";


export class Denuncia extends AggregateRoot<DenunciaId>{
    protected when(event: DomainEvent): void {
        throw new Error('Method not implemented.');
    }
    protected validateState(): void {
        if (! this.getId() ||
            ! this.idUserDenunciante ||
            ! this.idPost ||
            ! this.idUserOwner ||
            ! this.text
        )
            throw new InvalidDenunciaException()
    }

    constructor(
        denuncia:DenunciaId,
        private readonly idUserOwner:UserId,
        private readonly idPost:PostId,
        private readonly idUserDenunciante:UserId,
        private readonly text:Text,
        private readonly category:Category
    ){
        super(denuncia)
    }

    static create(
        denunciaId:DenunciaId,
        idUserOwner:UserId,
        idPost:PostId,
        idUserDenunciante:UserId,
        text:Text,
        category:Category
    ){
        return new Denuncia(
        denunciaId,
        idUserOwner,
        idPost,
        idUserDenunciante,
        text,
        category
        )
    }

    get IdUserOwner():UserId{return this.idUserOwner}
    get IdPost():PostId{return this.idPost}
    get IdUserDenunciante():UserId{return this.idUserDenunciante}
    get Text():Text{ return this.text}
    get Category():Category{ return this.category}

}