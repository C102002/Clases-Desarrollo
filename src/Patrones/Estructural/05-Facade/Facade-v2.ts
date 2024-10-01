//Estructura

interface User{
    username:string
    password:string
    email:string
}

interface IDataBase{
    saveUser(user:User):void
    deleteUser(user:User):void
}

class PostgresDBV2 implements IDataBase{
    saveUser(user:User):void{
        console.log(`User saved sucssefully in ${this.constructor.name}`);
    }
    deleteUser(user:User):void{
        console.log(`User deleted sucssefully in ${this.constructor.name}`);
    }
    constructor(){}
}

class MongoDBV2 implements IDataBase{
    saveUser(user:User):void{
        console.log(`User saved sucssefully in MongoDBV2`)
        console.log(`with data ${JSON.stringify(user)}`)
    }
    deleteUser(user:User):void{
        console.log(`User deleted sucssefully in MongoDBV2`)
        console.log(`with data ${JSON.stringify(user)}`)
    }
    constructor(){}
}

class DataBaseFacadeV2{
    
    constructor( private db:IDataBase){}

    public saveUser(user:User){
        this.db.saveUser(user)
    }
    public deleteUser(user:User){
        this.db.deleteUser(user)
    }
    chageDb(db:IDataBase){this.db=db}
}

//Implementacion

let user2:User={
    username:"C102002",
    password:"Password",
    email:"c102002@github.com"
}
let postgres2= new PostgresDBV2()
let mongo2= new MongoDBV2()
let DBfacade2= new DataBaseFacadeV2(postgres2)

DBfacade2.saveUser(user2)
DBfacade2.deleteUser(user2)

DBfacade2.chageDb(mongo2)

DBfacade2.saveUser(user2)
DBfacade2.deleteUser(user2)

//Esperado
// User saved sucssefully in PostgresDBV2
// User saved sucssefully in PostgresDBV2
// User deleted sucssefully in PostgresDBV2
//
// User saved sucssefully in MongoDBV2
// with data {"username":"C102002","password":"Password","email":"c102002@github.com"}
// User deleted sucssefully in MongoDBV2
// with data {"username":"C102002","password":"Password","email":"c102002@github.com"}