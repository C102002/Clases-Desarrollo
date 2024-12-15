import { ILogger } from "../../application/logger/logger.interface";

export class NativeLogger implements ILogger{

    prettierServiceName(serviceName:string):string{
        return `\x1b[33m${serviceName}:\x1b[0m`
    }    
    
    logPerformance(serviceName: string, message: string, time: string): void {
        const prttierTime = `\x1b[33m${'+'+time+'ms'}\x1b[0m`

        console.log(`${this.prettierServiceName(serviceName)} message:${message} ${prttierTime}`);
    }
    errorLog(serviceName: string, message: string, input: string): void {
        console.log(`${this.prettierServiceName(serviceName)} message:${message} input:${input} `);
    }
    successLog(serviceName: string, message: string, input: string): void {
        console.log(`${this.prettierServiceName(serviceName)} message:${message} input:${input} `);
    }
}