import { UserId } from "../value-objetcs/user-id";
import { User } from "../agregate/user";
import { Either } from '../../../../../../helpers/Either';

export interface IUserRepository{
    findUserById(id:UserId):Either<Error,User>
}