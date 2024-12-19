import { ValueObject } from '../../../../../../common/domain/value-object/value-object';
import { UserStates } from './enum/user.states';


export class UserState implements ValueObject<UserState> {
    private readonly state: UserStates;

    equals(valueObject: UserState): boolean {
        return this.Value === valueObject.Value;
    }

    get Value() {
        return this.state;
    }

    static createActive(): UserState {
        return new UserState(UserStates.active);
    }

    static createWarned(): UserState {
        return new UserState(UserStates.warned);
    }

    static createSuspended(): UserState {
        return new UserState(UserStates.suspended);
    }

    isActive():boolean{
        return this.Value===UserStates.active
    }

    
    isSuspended():boolean{
        return this.Value===UserStates.suspended
    }

    
    isWarned():boolean{
        return this.Value===UserStates.warned
    }

    private constructor(state: UserStates) {
        this.state = state;
    }
}
