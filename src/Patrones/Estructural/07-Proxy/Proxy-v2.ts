//Estructura
interface IDataBase{
    saveUser(user:UserV2):void
}
enum Role{
    privigilated,
    common,
    admin
}
interface UserV2{
    name:string;
    username:string;
    role:Role
}

class PostgresDataBase implements IDataBase{
    saveUser(user: UserV2): void {
        console.log(`Save user with data: ${JSON.stringify(user)}`);
    }
    constructor(){}
}

class PostgresDataBaseProxy implements IDataBase{
    constructor(private readonly service:IDataBase) {}
    saveUser(user: UserV2): void {
        if (this.checkAccess(user))
            this.service.saveUser(user)
    }
    checkAccess(user:UserV2){
        if (user.role===Role.common){
            throw new Error(`User role invalid, with data:${JSON.stringify(user)}`)
        }
        else return true
    }
}

//Implementacion

let postgresDB= new PostgresDataBase()
let postgresDBProxy= new PostgresDataBaseProxy (postgresDB)

let userV2:UserV2={
    username:"test",
    name:"pedro",
    role:Role.common
}
let user2V2:UserV2={
    username:"test",
    name:"jose",
    role:Role.admin
}

// postgresDBProxy.saveUser(userV2)
//Esperado
//Error: User role invalid, with data:{"username":"test","name":"pedro","role":1}

postgresDBProxy.saveUser(user2V2)
//Esperado
// Save user with data: {"username":"test","name":"jose","role":2}