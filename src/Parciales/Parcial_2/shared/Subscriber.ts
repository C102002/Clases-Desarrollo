import { Result } from "../../../Practica Orientado a aspectos/helpers/Result";

export interface Subscriber <T>{
    update(context: T):Result<boolean>
}