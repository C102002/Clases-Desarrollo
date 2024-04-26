interface State{
    doTHis():void
    doThat():void
}

class Context implements State{
    private state:State

    context(initialState:State){
        this.state=this.state
    }

    changeState(nextState:State){
        this.state=nextState
    }

    doTHis(): void {
        this.state.doTHis()
    }
    doThat(): void {
        this.state.doThat();
    }
    constructor(state:State) {
        this.changeState(state);
    }
}

class ConcreteStateA implements State{
    private context: Context
    setContext(context:Context){
        this.context=context;
    }
    doTHis(): void {
        console.log('Hacer doThis de la clase concretaA');
    }
    doThat(): void {
        console.log('Hacer doThat de la clase concretaA');
    }
}

class ConcreteStateB implements State{
    private context: Context
    setContext(context:Context){
        this.context=context;
    }
    doTHis(): void {
        console.log('Hacer doThis de la clase concretaB');
    }
    doThat(): void {
        console.log('Hacer doThat de la clase concretaB');
    }
}

let contextState= new Context(new ConcreteStateA());
contextState.doTHis()

contextState.changeState(new ConcreteStateB())
contextState.doTHis()
