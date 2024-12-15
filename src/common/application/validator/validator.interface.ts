export interface Validator<T,E>{
    validate(data:T):boolean
    getErrors(data:T):E[]
}