import { DomainEvent } from "../../../../../shared/domain/DomainEvent";
import { Email } from '../valueObjects/Email';
import { UserName } from "../valueObjects/UserName";
import { IdUser } from "../valueObjects/idUser";

export class UserUpdatedEmail extends DomainEvent{
    private constructor(
        public id:IdUser,
        public email:Email,
    ){
        super('UserUpdatedEmail');
    }
    static create(
        id:IdUser,
        email:Email){
            return new UserUpdatedEmail(id,email)
        }
}