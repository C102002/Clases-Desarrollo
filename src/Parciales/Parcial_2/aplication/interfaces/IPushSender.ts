import { Result } from "../../../../Practica Orientado a aspectos/helpers/Result";

export interface IPushSender <T>{
    send(token:string,message:string):Result<T>
}