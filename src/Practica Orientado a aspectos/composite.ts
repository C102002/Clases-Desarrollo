abstract class component{


    calcular():number{
        return (0)
    }
}

class elemento extends component {
    calcular(): number {
        return(1);
    }
    constructor(){
        super();
    }
}

class Compuesto extends component{

    comonents: component[]=[]

    calcular(): number {
        let num=0
        this.comonents.forEach(component => {
            num+=component.calcular();
        });
        return(num)
    }

    add(componente:component):void{
        this.comonents.push(componente)
    }

    constructor(componente: component)
    {
        super();
        this.comonents.push(componente);
    }
}
let p1:Compuesto;
let example:string='e'
for (let i=0; i<100;i++){
    let example= new elemento();
    if (i===0)  p1=new Compuesto(example)
    else p1.add(example)
}


console.log(p1.calcular());
