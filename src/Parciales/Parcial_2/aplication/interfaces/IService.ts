import { Result } from "../../../../Practica Orientado a aspectos/helpers/Result";

export interface IService <T,E>{
    execute(params:T):Result<E>
}