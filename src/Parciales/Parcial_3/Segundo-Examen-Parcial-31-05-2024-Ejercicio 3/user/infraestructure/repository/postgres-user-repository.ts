import { Either } from "../../../../../../helpers/Either";
import { User } from "../../domain/agregate/user";
import {IUserRepository} from "../../domain/repository/user.repository"
import { UserId } from "../../domain/value-objetcs/user-id";
import { UserData } from "../data/user.data";
export class PostgresUserRepository implements IUserRepository{

    findUserById(id: UserId): Either<Error, User> {
        const user= UserData.find(user=>user.getId().equals(id))
        if (!user)
            return Either.makeLeft(new Error(`User with id ${id} not found`))
        return Either.makeRight(user)
    }

}