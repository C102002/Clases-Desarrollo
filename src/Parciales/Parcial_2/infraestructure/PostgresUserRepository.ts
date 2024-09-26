import { userData } from "../data/UserData"
import { User } from "../domain/class/User"
import { IUserRepository } from "../domain/interfaces/IUserRepository"

export class PostgresUserRepositry implements IUserRepository{
    constructor() {}

    findUserByID(id: number): User | null {
        
        let userResult=userData.filter((user)=>(
            user.idUser!==id
        ))
        let userAnswer=userResult.pop()
        if (userAnswer !== undefined) return (userAnswer)
            return (null)

    }
    findUserByBirthDay(date: Date): User[] {
        let userResult=userData.filter((user)=>(
            user.BirthDate!==date
        ))
        return (userResult)
    }
}