import { Optional } from '../../../../helpers/Optional';
interface IWidget {
    footer:boolean
    header:boolean
    combo:string[]
}
//! Builder de acuerdo a Alonzo

class Widget implements IWidget{
    footer: boolean=false
    header: boolean=false
    combo: string[]=[]
    constructor(){}
}

interface GenericBuilder <T>{
    build():T
    reset():void
}

interface IWidgetBuilder <T> extends GenericBuilder <T>{
    addFooter():IWidgetBuilder<T>
    addHeader():IWidgetBuilder<T>,
    addCombo(number:number):IWidgetBuilder<T>
    build():T
}

class BuilderWidget implements IWidgetBuilder <Widget>{
    constructor(){
        this.widget=new Widget()
    }
    reset(): void {
        this.widget=new Widget()
    }
    widget:Widget;
    addFooter(): IWidgetBuilder<Widget> {
        this.widget.footer=true
        return this
    }
    addHeader(): IWidgetBuilder<Widget> {
        this.widget.header=true
        return this    
    }
    addCombo(number: number):IWidgetBuilder<Widget> {
        for (let i=0;i<=number;i++){
            this.widget.combo.push(`combo ${i}`)
        }
        return this
    }
    build(): Widget {
        let result=this.widget
        this.reset()
        return result
    }
}

let builder= new BuilderWidget()

let widget=builder.addCombo(1).addFooter().addHeader().build()
let anotherwidget=builder.addCombo(2).addHeader().build()
console.log(widget);
console.log(anotherwidget);
