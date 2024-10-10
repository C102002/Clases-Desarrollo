## Pregunta 2
Explique con un ejemplo claro y concreto, por que el patron de diseno Estado favorece el
cumplimiento del Principio Abierto-Cerrado (OCP) de SOLID. Tambien debe explicar
por que este patron hace uso de la composicion con delegacion.

![topic page 1](../../../../public/Parciales/Parcial-1/09-05-2023/Screenshot%202024-10-10%20112510.png)

### Respuesta
```bash
# Porque el contexto no sabe de la implementacion de los estados concretos, el delega esas funcionalidades al estado concreto y como funciona a traves de una interfaz que en este caso es el State, termina dependiendo de la capa de acoplamiento asbtracto y no de clases concretas, permitiendo que se puedan integrar nuevos estados concretos sin tener que modificar el codigo anterior (abierto para la extension, cerrado para la modificacion).
# Un ejemplo si el contexto es el juego y los estados concretos los estados del jugador al hacerlo, el sabe que va a tener un jugador, pero el como ataca, como se cura, como se mueve, esta solamente en el estado del jugador respectivo que puede ser sano, critico, cansado....etc.
```