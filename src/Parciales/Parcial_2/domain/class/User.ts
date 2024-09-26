export class User {
    idUser:number
    name:string
    BirthDate:Date
    email:string
    token?:string
    constructor (
        idUser:number,
        name:string,
        birthDate:Date,
        email:string,
        token:string
    ){
        this.idUser=idUser
        this.name=name
        this.BirthDate=birthDate
        this.email=email
        this.token=token
    }

    getToken():string|undefined {
        return this.token
    }
    getEmail():string{
        return this.email
    }
    getBirthDate():Date{
        return this.BirthDate
    }
}

