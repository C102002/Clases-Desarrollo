import { User } from "../class/User"

export interface IUserRepository{
    findUserByID(id:number):User | null
    findUserByBirthDay(date:Date):User [] | null
}