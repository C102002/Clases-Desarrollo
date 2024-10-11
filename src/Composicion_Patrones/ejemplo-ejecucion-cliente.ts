import { listagregate } from "./iterator-clase";

let iterator=listagregate.getListIterator()

while(iterator.hasnext()){
    console.log(iterator.next().getValue());
}
//esperando
// 4
// 5
// 6