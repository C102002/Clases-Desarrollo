import { listproxy } from "./iterator-proxy";

let iterator=listproxy.getListIterator()

while(iterator.hasnext()){
    console.log(iterator.next().getValue());
}
//esperando
// 4
// 5
// 6