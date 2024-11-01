import { Optional } from './../../../../helpers/Optional';
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

interface WidgetBuilder <T>{
    widget:T
    addFooter():WidgetBuilder<T>
    addHeader():WidgetBuilder<T>,
    addCombo(number:number):WidgetBuilder<T>
    build():T
}

class BuilderWidget implements WidgetBuilder <Widget>{
    constructor(){
        this.widget=new Widget()
    }
    widget:Widget;
    addFooter(): WidgetBuilder<Widget> {
        this.widget.footer=true
        return this
    }
    addHeader(): WidgetBuilder<Widget> {
        this.widget.header=true
        return this    
    }
    addCombo(number: number): WidgetBuilder<Widget> {
        for (let i=0;i<=number;i++){
            this.widget.combo.push(`combo ${number}`)
        }
        return this
    }
    build(): Widget {
        let result=this.widget
        this.widget=new Widget()
        return result
    }
}

let builder= new BuilderWidget()

let widget=builder.addCombo(1).addFooter().addHeader().build()
let anotherwidget=builder.addCombo(3).addHeader().build()
console.log(widget);
console.log(anotherwidget);
