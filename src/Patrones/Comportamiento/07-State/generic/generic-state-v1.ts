import { Optional } from '../../../../helpers/Optional';
interface ILoggerState<T>{
    logData(data:T):void
    logError(data:T):void
    setLogger(logger:Optional<Logger<T>>):void
}

class Logger <T>{
    constructor(
    public state:ILoggerState<T>
    ){}
    changeLogger(logger:ILoggerState<T>){
        this.state=logger
        logger.setLogger(new Optional(this))
    }
    logData(data:T){
        this.state.logData(data)
    }
    logError(data:T){
        this.state.logError(data)
    }
}

class NormalLoggerState <T> implements ILoggerState<T>{
    direction:string='c:app/normal-log'
    logger:Optional<Logger<T>>=new Optional()
    logData(data: T): void {
        console.log(`Im logging data in ${this.direction}`);
        console.log(data);
    }
    logError(data: T): void {
        console.log(`Im logging data in ${this.direction}`);
        console.error(data)
        if (this.logger.hasValue())
            this.logger.getValue().changeLogger(new ExeptionalLoggerState())
        this.logger=new Optional()
    }
    setLogger(logger:Optional<Logger<T>>){
        this.logger=logger
    }
}

class ExeptionalLoggerState <T> implements ILoggerState<T>{
    direction:string='c:app/expetional-log'
    logger:Optional<Logger<T>>=new Optional()

    logData(data: T): void {
        console.log(`Im logging data in ${this.direction}`);
        console.log(`exptional log warning: Data ${JSON.stringify(data)}`);
        if (this.logger.hasValue())
            this.logger.getValue().changeLogger(new NormalLoggerState())
    }
    logError(data: T): void {
        console.log(`Im logging data in ${this.direction}`);
        console.error(`exptional log warning: Error data ${JSON.stringify(data)}`);
    }
    setLogger(logger: Optional<Logger<T>>): void {
        this.logger=logger
    }
}


//implementacion

let state= new NormalLoggerState()
let logger= new Logger(state)
state.setLogger(new Optional(logger))

let data={
    id:'12345649-pepe',
    name:'pepe'
}
let error={
    id:'12345649-jose',
    name:'jose',
    error:'404-not foud'
}
let error2={
    id:'12345649-pedro',
    name:'pedro',
    error:'500-internal-server-error'
}
logger.logData(data)
logger.logError(error)
console.log('-----------------------------');

//esperando que cambie a c:app/expetional-log
logger.logError(error2)
logger.logData(data)
//esperando que cambie a c:app/normal-log
console.log('-----------------------------');
logger.logData(data)

