interface Component{
    exceute():void
}

class Leaf implements Component{
    exceute(): void {
        console.log(`Execution of ${this.constructor.name}`);
    }
    constructor(){}
}

class Composite implements Component{
    private children:Component[]=[]

    add(c:Component){
        this.children.push(c)
    }
    remove(c:Component){
        this.children=this.children.filter(c=>c!==c)
    }
    get Children(){return this.children}
    exceute(): void {

        console.log(`Execution of Father ${this.constructor.name}`);

        for( const element of this.Children){
            element.exceute()
        }

    }
    constructor(){}
}

//Implementacion

let composite= new Composite()

for (let i=0;i<=4;i++){
    if(i%2==0){
        let leaf= new Leaf()
        composite.add(leaf)
    }
    else{
        let auxComposite= new Composite()

        for (let j=0;j<=4;j++){
            let auxleaf=new Leaf()
            auxComposite.add(auxleaf)
        }
        composite.add(auxComposite)

    }
}

composite.exceute()
//Esperado 3 execuciones de composite y 13 de leaf