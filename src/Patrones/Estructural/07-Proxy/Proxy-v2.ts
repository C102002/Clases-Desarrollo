//Estructura
interface ServiceV2Interface{
    operation():void
}

interface User{
    name:string;
    username:string;
}

class ServiceV2{
    name:string
    operation(){
        console.log(`ServiceV2 ${this.name}`);
    }
    constructor(name:string){
        this.name=name;
    }
}

class PublicProxyV2{
    realServiceV2:ServiceV2
    Proxy(s:ServiceV2){
        this.realServiceV2=s
    }
    checkAccess(user:User):boolean{
        return (user.name==='alfredo')
    }
    operation(user:User){
        if(this.checkAccess(user)) this.realServiceV2.operation()
            else console.log('Acces Denied');
    }
    constructor(serviceV2:ServiceV2){this.realServiceV2=serviceV2}
}
///Implementacion 
let userV2:User={
    name:'pepe',
    username:''
}

let GoogleserviceV2 = new ServiceV2('Google')
let proxyV2= new PublicProxyV2(GoogleserviceV2)
proxy.Proxy(GoogleserviceV2);

proxy.operation(userV2)

let user2V2:User={
    name:'alfredo',
    username:''
}
//  Esperando
// Acces Denied
