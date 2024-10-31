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

class BuilderWidget{
    constructor(
        private widget:Widget
    ){}
    addFooter():BuilderWidget{
        this.widget.footer=true
        return this
    }
    addHeader():BuilderWidget{
        this.widget.header=true
        return this
    }
    addCombo(number:number):BuilderWidget{
        for (let i=0;i<number;i++){
            this.widget.combo.push(`combo ${i}`)
        }
        return this
    }
    build():Widget{
        let w=this.widget
        this.widget= new Widget
        return w
    }
}

let builder= new BuilderWidget(new Widget())

let widget=builder.addCombo(4).addFooter().addHeader().build()
let anotherwidget=builder.addCombo(4).addHeader().build()
console.log(widget);
console.log(anotherwidget);
