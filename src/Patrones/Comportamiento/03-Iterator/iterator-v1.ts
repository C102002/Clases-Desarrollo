//Estrcutura
interface IIterator <T>{
    getNext():T
    current():T
    haMore():boolean
    rewind():void
}

interface IIterableCollection <T>{
    createIterator():IIterator<T>
}

class WordsIterator implements IIterator <WordsCollection>{
    private collection: WordsCollection[]=[]
    private position=0

    getNext(): WordsCollection {
        this.position=++this.position
        return this.collection[this.position+1]
    }
    current(): WordsCollection {
        return this.collection[this.position]
    }
    haMore(): boolean {
        return (this.position+1<=this.collection.length)
    }
    rewind(): void {
        this.position=0;
    }
    constructor(c:WordsCollection[]){
        this.collection=c
    }
}


class WordsCollection implements IIterableCollection <WordsCollection>{
    private colection: WordsCollection[]=[]
    createIterator(): IIterator<WordsCollection> {
        return new WordsIterator(this.colection)
    }
    addElement(w:WordsCollection){
        this.colection.push(w)
    }
    deleteElement(w:WordsCollection){
        this.colection=this.colection.filter(colection=>colection!==w)
    }
    constructor(private readonly name:string){}
    get Name(){return this.name}
}

//Implementacion

function obtenerLetraDeNumero(numero: number): string {
    const abecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numero < 1 || numero > 26) {
        throw new Error('El número debe estar entre 1 y 26');
    }
    return abecedario[numero - 1];
}

let base=new WordsCollection('base')
for (let i=1; i<=10;i++){
    base.addElement(new WordsCollection(`${obtenerLetraDeNumero(i)}`));
}

let iterator=base.createIterator()

while(iterator.haMore()){
    console.log(iterator.current().Name);
    iterator.getNext()
}

//Esperado
// A
// B
// C
// D
// E
// F
// G
// H
// I
// J
