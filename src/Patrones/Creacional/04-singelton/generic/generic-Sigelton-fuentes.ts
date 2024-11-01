
//! No creo DUDO MUCHISIMO que sea esto en el parcial 
class Singleton {
    private static factories: Record<string, { new(): object}> = {}

    private static instances: Record<string, object> = {}

    static addFactory<T extends object>(name: string, factory: { new(): T }) {
        if (!Singleton.factories[name])
            Singleton.factories[name] = factory
    }

    static getInstance<T extends object>(name: string): T {
        const instace = Singleton.instances[name]
        const factory = Singleton.factories[name]
        if (!factory)
            throw new Error('Constructor not found')
        if (!instace) {
            const newInstance = new factory()
            Singleton.instances[name] = newInstance
            return newInstance as T
        }
        return instace as T
    }
}