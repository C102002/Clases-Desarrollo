import { Result } from "../../../../Practica Orientado a aspectos/helpers/Result";

export interface IEmailSender <T>{
    send(email:string,message:string):Result<T>
}