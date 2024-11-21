import {v4 as uuidv4} from 'uuid';

interface Component <T>{
    state:T
    build(state:T):Component<T>
}

class Button <T> implements Component<T>{
    constructor(
        public state: T
    ){}
    build(state: T): Component<T> {
        return new Button(state)
    }

}

class CheckBox <T> implements Component<T>{
    constructor(
        public state: T
    ){}

    build(state: T): Component<T> {
        return new CheckBox(state)
    }
}


class ComplexComponent <T> implements Component <T>{

    components:Map<string,Component<T>>=new Map<string,Component<T>>()

    constructor(
        public state: T
    ){}

    build(state: T): Component<T> {
        return new ComplexComponent(state)
    }
    addComponent(id:string,c:Component<T>){
        this.components.set(id,c)
    }
    relateComponents(id1:string,id2:string):void{
        let element1=this.components.get(id1)
        let element2=this.components.get(id2)
        console.log(element1)
        console.log(element2)
        //TODO Falta relacionar
    }
}

class ComplexFooter<T> extends ComplexComponent<T>{}

//Builder

interface Builder <T>{
    element:T
    getResult():T
}

class UIComponentBuilder <T> implements Builder <Component<T>>{

    element: ComplexComponent<T>

    constructor(state:T){
        this.element=new ComplexComponent(state)
    }

    clear(state:T):void{
        this.element= new ComplexComponent(state)
    }

    getResult(): Component<T> {
        let result=this.element
        return result
    }

    addButton(id:string,state:T):UIComponentBuilder<T>{
        this.element.addComponent(id,new Button(state))
        return this
    }
    addCheckBox(id:string, state:T):UIComponentBuilder<T>{
        this.element.addComponent(id,new CheckBox(state))
        return this
    }
    addFooter(id:string, state:T):UIComponentBuilder<T>{
        this.element.addComponent(id,new ComplexFooter(state))
        return this
    }
    addButtonToFooter(idFooter:string,idBooton:string):UIComponentBuilder<T>{
        //TODO Hacerlo mejor
        this.element.relateComponents(idFooter,idBooton)
        return this
    }
}

//implementacion

interface UIState{
    active:boolean
}

let builder= new UIComponentBuilder<UIState>({active:false})

let elemet=builder.addButton('id-1',{active:false})
    .addCheckBox('id-2',{active:false})
    .addFooter('id-3',{active:false})
    .addButtonToFooter('id-3','id-1')
console.log(elemet)
