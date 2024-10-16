## Pregunta 2

Jacinto Chapuza es un joven programador latinoamericano reconocido por su ignorancia de las mejores
practicas de programacion, ni hablar del uso de los principios SOLID, tal como se evidencia en el siguiente
codigo. Jacinto desarrollo una clase que se encarga de autenticar las credenciales de un usuario contra una
base de datos. Ni siquiera se le paso por la mente, que en el futuro de puede validar contra otro sistema, por
ejemplo un servidor LDAP u otro sistema externo.

```bash 
class Authentication {
private connection;
    public constructor (connection: Connection){
    this.connection = connection;
    }
    checkCredentials(username: string, password: string): void {
    let user = this.connection.fetchQuery('SELECT * FROM users WHERE username = ?', username);
    if (user === null) { throw new InvalidCredentialsException('User not found'); }
    // validate password
    }
}
```

Evidentemente se trata de un diseño deficiente y usted debe mejorarlo para que cumpla con los siguientes
principios SOLID: SRP, OCP y DIP. En particular, debe poder cumplir a cabalidad el principio de inversion
de dependencias, para que a futuro la responsabilidad de autenticacion se haga no contra una base de datos,
sino contra un archivo de texto, un servidor LDAP u otro medio. Debe mostrar su diseño en un Diagrama
de Clases UML con todos los detalles necesarios para corroborar que cumple con los Principios SOLID
requeridos.

