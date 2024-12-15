export interface ILogger{
    errorLog (serviceName: string, message: string, input: string): void;
    successLog (serviceName: string, message: string, input: string): void;
    logPerformance(serviceName: string, message: string, time: string):void
}