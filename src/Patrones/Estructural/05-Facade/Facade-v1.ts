//Estructura
class PostgresDB{
    saveUser(user:User):void{
        console.log(`User saved sucssefully in ${this.constructor.name}`);
    }
    deleteUser(user:User):void{
        console.log(`User deleted sucssefully in ${this.constructor.name}`);
    }
    constructor(){}
}

class MongoDB{
    saveUser(user:User):void{
        console.log(`User saved sucssefully in MongoDB`)
        console.log(`with data ${JSON.stringify(user)}`)
    }
    deleteUser(user:User):void{
        console.log(`User deleted sucssefully in MongoDB`)
        console.log(`with data ${JSON.stringify(user)}`)
    }
    constructor(){}
}

interface User{
    username:string
    password:string
    email:string
}

class DataBaseFacade{
    private postgres?:PostgresDB
    private mongo?:MongoDB

    constructor(postgres?:PostgresDB,mongo?:MongoDB){
        if(postgres) this.postgres=postgres
        if(mongo) this.mongo=mongo
    }
    public saveUser(user:User){
        if(this.postgres) this.postgres.saveUser(user)
        if(this.mongo) this.mongo.saveUser(user)
    }
    public deleteUser(user:User){
        if(this.postgres) this.postgres.deleteUser(user)
        if(this.mongo) this.mongo.deleteUser(user)
    }
}

//Implementacion

let user:User={
    username:"C102002",
    password:"Password",
    email:"c102002@github.com"
}
let postgres= new PostgresDB()
let mongo= new MongoDB()
let DBfacade= new DataBaseFacade(postgres,mongo)

DBfacade.saveUser(user)
DBfacade.deleteUser(user)

//Esperado
// User saved sucssefully in PostgresDB
// User saved sucssefully in MongoDB
// with data {"username":"C102002","password":"Password","email":"c102002@github.com"}
// User deleted sucssefully in PostgresDB
// User deleted sucssefully in MongoDB
// with data {"username":"C102002","password":"Password","email":"c102002@github.com"}