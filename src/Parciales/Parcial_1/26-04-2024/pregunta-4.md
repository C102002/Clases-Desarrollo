## Pregunta 4

Usted debe modelar el siguiente problema, usando sus conocimientos de Programacion Orientada a Objetos,
Genericos y Patrones de Diseño.

Considere que usted dispone de una abstraccion Box, que representa una caja que puede contener dentro
un valor de cualquier tipo (NO puede modelar con any ni con unknow). Adicionalmente, tiene otra
abstraccion que representa un contenedor de cajas (BoxContainer) que posee la responsabilidad de agregar
una caja (arrangeBox) al contenedor. Por ultimo, definiremos un contrato o interface que llamaremos
BoxArranger que se encarga de modelar la manera como se agrega una caja. Por ejemplo, una manera de
agregar una caja es colocandola de primero en el contenedor, o colocandola de ultima.

Usted debe construir su diseño teniendo en cuenta que la solucion correcta se modela con uno, y solo uno, de
los siguientes patrones: Iterator, Bridge o Decorator. Su respuesta debe presentarla en un Diagrama
de Clases UML mostrando el codigo de los metodos principales. Tambien, es importante tener presente
que si no se colocan los tipos de los parametros y el tipo del valor de retorno de los metodos, se considera
que su dise~no es deficiente o incompleto. Si selecciona el patron incorrecto para modelar este problema, la
calicacion sera cero.