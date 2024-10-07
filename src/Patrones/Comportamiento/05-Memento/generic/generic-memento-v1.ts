import { Result } from '../../../../helpers/Result';
//estructura
interface IMemento <S,T,E>{
    execute(data:T):Result<E>
    getState():S
    getDate():Date
}


abstract class GenericOriginator <S,T,E> { //Originator
    constructor(
        private state:S
    ){}
    abstract save(data:S):IMemento<S,T,E>
    restore(m:IMemento<S,T,E>){
        this.changeCurrentState(m.getState())
    }
    changeCurrentState(state:S){
        this.state=state
    }
    currentState(){return this.state}
}

abstract class GenericMemento <S,T,E> implements IMemento<S,T,E>{
    private date:Date
    abstract execute(data: T):Result<E>
    getState() {
        return this.state
    }
    getDate(): Date {
        return this.date
    }
    constructor(private state:S){
        this.date=new Date()
    }
}

abstract class GenericCaretaker <S,T,E>{
    originator:GenericOriginator<S,T,E>
    history: IMemento<S,T,E>[]=[]

    undo():void{
        if (this.history.length<0) return
        const memento=this.history.pop();
        if (!memento) return
        this.originator.restore(memento)
    }
    abstract save(originator:GenericOriginator<S,T,E>):void
    constructor (originator:GenericOriginator<S,T,E>){
        this.originator=originator;
        this.save(originator)
    }
    showHistory():void{
        console.log("\x1b[33m%s\x1b[0m","Todos los mementos actuales")
        for (const memento of this.history){
            console.log(JSON.stringify(memento));
        }
    }
    getMemento(state:S):IMemento<S,T,E>[]{
        let mementos=this.history.filter(memento=>{
            memento.getState()===state
        })
        return mementos
    }

    getLastMemento():IMemento<S,T,E>{
        let last= this.history[this.history.length-1];
        if(last) return last
        else throw new Error('index not found')
    }
}

//Implementacion

interface UserData{
    name:string
    password:string
    profile:string
}

interface UserDataDTO{
    name?:string
    password?:string
    profile?:string
}

class UserDataMemento extends GenericMemento <UserData,UserDataDTO,string>{
    execute(data: UserDataDTO): Result<string> {
        let s=""
        if (data.name) s.concat(data.name) 
        if (data.password) s.concat(data.password)
        if (data.profile) s.concat(data.profile)
        return Result.makeResult(s)
    }

}

class UserOriginator extends GenericOriginator <UserData,UserDataDTO,string>{
    save(data:UserData): IMemento<UserData, UserDataDTO, string> {
        return new UserDataMemento(data)
    }
    
}

class UserDataCaretaker extends GenericCaretaker <UserData,UserDataDTO,string>{
    save(originator: GenericOriginator<UserData, UserDataDTO, string>): void {
        let memento= new UserDataMemento(originator.currentState())
        this.history.push(memento)
    }
}

let initialUserdata:UserData={
    name:"alfredo",
    password:"123456",
    profile:"https://image.com"
}

let originator= new UserOriginator(initialUserdata)
let caretaker= new UserDataCaretaker(originator)

originator.changeCurrentState({
    name:"alfredo",
    password:"123456",
    profile:"https://image-url-test-1.com"
})
caretaker.save(originator)

originator.changeCurrentState({
    name:"alfredo fung",
    password:"no me gusto la contraseña",
    profile:"https://image-url-test-1.com"
})


console.log("Current user data",originator.currentState());
console.log("last user data saved",caretaker.getLastMemento());
caretaker.undo()
let lastData=caretaker.originator

console.log('current game state after undo:',lastData.currentState());
//Esperando
// Current user data {
//     name: 'alfredo fung',
//     password: 'no me gusto la contraseña',
//     profile: 'https://image-url-test-1.com'
//   }
//   last user data saved UserDataMemento {
//     state: {
//       name: 'alfredo',
//       password: '123456',
//       profile: 'https://image-url-test-1.com'
//     },
//     date: current Time
//   }
//   current game state after undo: {
//     name: 'alfredo',
//     password: '123456',
//     profile: 'https://image-url-test-1.com'
//   }
