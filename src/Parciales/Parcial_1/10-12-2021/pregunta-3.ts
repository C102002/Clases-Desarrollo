import { Result } from '../../../helpers/Result';
interface IAction <T,V>{
    execute(data:T):Result<V>
}

interface UserDataDTO{
    user:string
}

class PostPhotoService implements IAction<UserDataDTO,boolean>{
    execute(data: UserDataDTO): Result<boolean> {
        console.log(`Hago un post a una foto`);
        return Result.makeResult(true)
    }
    constructor(){}
}

class LikePhotoService implements IAction<UserDataDTO,boolean>{
    execute(data: UserDataDTO): Result<boolean> {
        console.log(`Hago un like a una foto`);
        return Result.makeError(new Error('error en el servicio de likes'))
    }
    constructor(){}
}

class CompartirPhotoService implements IAction<UserDataDTO,boolean>{
    execute(data: UserDataDTO): Result<boolean> {
        console.log(`Compartir una foto`);
        return Result.makeResult(true)
    }
    constructor(){}
}

class BaseDecorator <T,V> implements IAction<T,V>{
    constructor(
        private readonly wrappe: IAction<T,V>
    ){}
    execute(data: T): Result<V> {
        return this.wrappe.execute(data)
    }
}

interface IPushSender{
    send(data:string):void
}

class FirebasePushSender implements IPushSender{
    send(data: string): void {
        console.log(`log data enviada por firebase`);
    }

}
class NotificationDecorator <T,V> extends BaseDecorator <T,V>{
    constructor(
        wrappe: IAction<T,V>,
        private readonly push:IPushSender
    ){
        super(wrappe)
    }
    execute(data: T): Result<V> {
        let result=super.execute(data)
        if (!result.isError()) this.push.send(JSON.stringify(data))
        return result
    }
}

interface ILogger{
    logData(data:string):void
    logError(data:string):void
}

class Logger implements ILogger{
    logData(data: string): void {
        console.log("\x1b[33m%s\x1b[0m",`Exitoso`)
        console.log(`la data correcta es ${data}`);
    }
    logError(data: string): void {
        console.log("\x1b[31m%s\x1b[0m",`Error`)
        console.log(`la data erronea es ${data}`);
    }
}

class TrazabilityDecorator <T,V> extends BaseDecorator <T,V>{
    constructor(
        wrappe: IAction<T,V>,
        private readonly logger:ILogger
    ){
        super(wrappe)
    }
    execute(data: T): Result<V> {
        let result=super.execute(data)
        if (result.isError()) this.logger.logError(JSON.stringify(data))
        else this.logger.logData(JSON.stringify(data))
        return result
    }
}

//implementacion
let service= new TrazabilityDecorator(
    new NotificationDecorator(
        new PostPhotoService(),
        new FirebasePushSender()
    ),new Logger()
)

let service2= new NotificationDecorator(
    new TrazabilityDecorator(
        new LikePhotoService(),
        new Logger()
    ),new FirebasePushSender()
)

let service3= new NotificationDecorator(
    new TrazabilityDecorator(
        new CompartirPhotoService(),
        new Logger()
    ),new FirebasePushSender()
)

service.execute({user:'alfredo'})
// esperando 
// Hago un post a una foto
// log data enviada por firebase
// Exitoso
// la data correcta es {"user":"alfredo"}
console.log('-----------------------------------');
service2.execute({user:'jose'})
// esperando
// Hago un like a una foto
// Error
// la data erronea es {"user":"jose"}
console.log('-----------------------------------');
service3.execute({user:'juan'})
// Compartir una foto
// Exitoso
// la data correcta es {"user":"juan"}
// log data enviada por firebase