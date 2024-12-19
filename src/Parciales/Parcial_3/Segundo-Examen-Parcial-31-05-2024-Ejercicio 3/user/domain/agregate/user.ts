import { AggregateRoot } from "../../../../../../common/domain/aggregate-root/aggregate-root";
import { DomainEvent } from "../../../../../../common/domain/domain-event/domain-event";
import { InvalidUserException } from "../domain-exception/invalid-user-exception";
import { Email } from "../value-objetcs/email";
import { Name } from "../value-objetcs/name";
import { UserId } from "../value-objetcs/user-id";
import { UserState } from "../value-objetcs/user-state";

export class User extends AggregateRoot<UserId>{
    protected when(event: DomainEvent): void {
        throw new Error('Method not implemented.');
    }
    protected validateState(): void {
        if (! this.getId() ||
            ! this.email ||
            ! this.name ||
            ! this.userState
        )
            throw new InvalidUserException()
    }

    constructor(
        userId:UserId,
        private readonly email:Email,
        private readonly name:Name,
        private readonly userState:UserState
    ){
        super(userId)
    }

    static create(
        userId:UserId,
        email:Email,
        name:Name,
        userState:UserState
    ){
        return new User(userId,email,name,userState)
    }

    get Email():Email{return this.email}
    get Name():Name{return this.name}
    get UserState():UserState{return this.userState}

}