import { ITimer } from "../../application/timer/timer.interface";
const now = require('nano-time');


export class NativeTimer implements ITimer {
    getTime():number{
        return Number(now.micro())
    }
}
