import { Result } from "../../../Practica Orientado a aspectos/helpers/Result";
import { Subscriber } from "./Subscriber";

export interface Subject <T,E> {
    subscribe(subscriber:Subscriber<T>):void
    unsubscribe(subscriber:Subscriber<T>):void
    notify():Result<E>
}