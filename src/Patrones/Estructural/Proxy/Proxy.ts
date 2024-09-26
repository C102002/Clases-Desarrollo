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

class Proxy{
    realService:Service
    Proxy(s:Service){
        this.realService=s
    }
    checkAccess(user:User):boolean{
        if (user.name==='alfredo') return (true)
            else return false
    }
    operation(user:User){
        if(this.checkAccess(user)) this.realService.operation()
            else console.log('Acces Denied');
            
        return
    }
}

const user={
    name:'pepe',
    username:''
}

let Googleservice = new Service('Google')
let proxy= new Proxy();
proxy.Proxy(Googleservice);

proxy.operation(user)
