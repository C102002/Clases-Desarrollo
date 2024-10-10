## Pregunta 1

1. Los Agregados (Aggregates) en Domain-driven Design (DDD) comparten el mismo
comportamiento que las composiciones de clases en UML, en las que el objeto principal
consiste o posee todos los objetos secundarios, y cuando el objeto principal se elimina,
todos los objetos secundarios tambien deben eliminarse, porque ya no tiene sentido
que esos objetos existan. El objeto padre de un agregado se llama Aggregate Root.

```bash
#(Aunque tengo duda  porque tambien si el V.O muere, tambien deberia de morir el Agregado cosa que no es cierto)
Verdadero 
```

2. Las Entidades en DDD se encargan de validar que nuestro modelo sea consistente
y se cumplan las invariantes. Pero, por otro lado, los Value Objects solo permiten
encapsular el uso de tipos primitivos y no validan correctitud del modelo de dominio.

```bash
# (Los V.O se encargan tambien de encapsular las invariantes de clases de cada uno de sus atributos)
Falso
```

3. Los Comandos y los Eventos de Dominio no estan ligados a ningun lenguaje de programacion 
o tecnologıa. Tambien describen muy bien el comportamiento del sistema,
utilizando el Lenguaje Ubicuo y expresando la intencion de los usuarios del sistema.

```bash
# (Me genera mas duda la parte de la intencion de los usuarios en el sistema, es mas bien una accion que hizo el usuario en el sistema)
???
```

4. Los servicios de dominio en DDD se encargan de lidiar con los detalles de implementacion,
 como por ejemplo el acceso a Base de datos, aplicando el Principio de
Inversion de Dependencias de SOLID.

```bash
# (Ellos se encargan de un calculo, pago de impuestos, servicio de notificaciones, calculo de tasas...etc segun el seeman)
Falso
```
