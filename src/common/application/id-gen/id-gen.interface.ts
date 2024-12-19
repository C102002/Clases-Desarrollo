export interface IIdGen <T> {
    genId(): Promise<T>;
}