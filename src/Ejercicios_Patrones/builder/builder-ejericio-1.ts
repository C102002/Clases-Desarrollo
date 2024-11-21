import { Optional } from "../../helpers/Optional"

// Imagine a frontend developer tasked with creating a complex dashboard for a web application. The challenge is to allow users to customize their dashboard with various widgets such as charts, tables, and notifications. Each widget needs different settings such as data sources, display options, and refresh intervals. Managing all these options through a single constructor or multiple setters can become cumbersome and prone to mistakes.

// The Builder Pattern provides an elegant solution by using a DashboardBuilder class, developers can chain method calls to set properties for each widget, ensuring that all necessary configurations are applied before the dashboard is built. This approach not only makes the code more readable and maintainable but also allows for flexibility in creating different types of dashboards with varying complexities.

interface Widget {
    avaleable:boolean
}

class Chart implements Widget{
    elements:Widget[]=[]
    constructor(
    public avaleable: boolean
    ){}
    addWidget(w:Widget){
        this.elements.push(w)
    }
}

class Table implements Widget{
    elements:Widget[]=[]
    constructor(
    public avaleable: boolean
    ){}
    addWidget(w:Widget){
        this.elements.push(w)
    }
}

class Notification implements Widget{
    constructor(
    public avaleable: boolean
    ){}
}

class DashBoard implements Widget{

    //! No me gusta tener un arreglo de cada tipo pero sin esto no funciona agregar elementos a las tables o los charts
    
    charts:Map<string,Chart>=new Map<string,Chart>()
    tables:Map<string,Chart>=new Map<string,Table>()

    constructor(
        public avaleable: boolean
    ){}

    addChartToTable(idChart:string,idTable:string):void{
        let chart=this.charts.get(idChart)
        let table=this.tables.get(idTable)

        if(!chart || !table) 
            return

        chart.addWidget(table)
    }

    addChartToDashBoard(id:string,element:Chart){
        this.charts.set(id,element)
    }

    addTableToDashBoard(id:string,element:Table){
        this.tables.set(id,element)
    }

    findChartById(id:string):Optional<Widget>{
        return new Optional(this.charts.get(id))
    }

    findTablesById(id:string):Optional<Widget>{
        return new Optional(this.tables.get(id))
    }
}

//Builder

interface Builder <T>{
    element:T
    clear():void
    getResult():T
}

class DashBoardBuilder implements Builder <DashBoard>{
    element: DashBoard
    constructor(){
        this.element=new DashBoard(true)
    }
    clear(): void {
        this.element=new DashBoard(true)
    }
    getResult(): DashBoard {
        let result=this.element
        this.clear()
        return result
    }
    addChartToDashBoard(id:string):DashBoardBuilder{
        this.element.addChartToDashBoard(id,new Chart(true))
        return this
    }
    addTableToDashBoard(id:string):DashBoardBuilder{
        this.element.addTableToDashBoard(id,new Table(true))
        return this
    }
    addChartToTable(idtable:string, idchart:string):DashBoardBuilder{
        this.element.addChartToTable(idchart,idtable)
        return this
    }
}

//implementacion

let dashboard=new DashBoardBuilder()
    .addChartToDashBoard('1')
    .addChartToDashBoard('2')
    .addChartToDashBoard('3')
    .addChartToDashBoard('4')
    .addTableToDashBoard('1')
    .addChartToTable('1','1')
    .getResult()

console.log(dashboard)