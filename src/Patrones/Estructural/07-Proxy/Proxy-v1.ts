//Estructura
interface ServiceInterface{
    operation():void
}

interface User{
    name:string;
    username:string;
}

class Service{
    name:string
    operation(){
        console.log(`Service ${this.name}`);
    }
    constructor(name:string){
        this.name=name;
    }
}

class PublicProxy{
    realService:Service
    Proxy(s:Service){
        this.realService=s
    }
    checkAccess(user:User):boolean{
        return (user.name==='alfredo')
    }
    operation(user:User){
        if(this.checkAccess(user)) this.realService.operation()
            else console.log('Acces Denied');
    }
    constructor(service:Service){this.realService=service}
}
///Implementacion 
const user={
    name:'pepe',
    username:''
}

let Googleservice = new Service('Google')
let proxy= new PublicProxy(Googleservice)
proxy.Proxy(Googleservice);

proxy.operation(user)

//  Esperando
// Acces Denied