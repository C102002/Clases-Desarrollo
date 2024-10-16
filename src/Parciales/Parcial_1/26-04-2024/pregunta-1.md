## Pregunta 1

1. (Seleccion Simple) Usted esta desarrollando un framework de cotizacion de acciones. Alguna de las
aplicaciones que utilizan este framework querran cotizaciones de acciones para mostrarse en una pantalla
cuando esten disponibles; otras aplicaciones querran que nuevas cotizaciones activen ciertas aplicaciones
financieras. Sin embargo, es posible que otras aplicaciones quieran ambos de los anteriores. ¿ Cual patron
se debe usar de modo que varias piezas diferentes del codigo de la aplicacion puede reaccionar a su manera
a la llegada de nuevas cotizaciones?

- Command
- Chain of responsability
- Observer
- Decorator

```bash
# En mi opinion (OJO PALABRA CLAVE REACCIONAR)
Observer 
```

2. (Seleccion Simple) Tu programa manipula imagenes que ocupan mucho espacio en memoria. ¿Cual patron debes usar en tu programa para que las imagenes solo esten en la memoria cuando son necesarias, y en caso contrario, solo se puede encontrar en archivos?

- Decorator
- Memento
- Proxy
- State

```bash
# En mi opinion (OJO PALABRA CLAVE EN MEMORIA)
# A mi me genera muchas dudas para mi suena mas a memento :(
# PD: Si es el del control de acceso a memoria ahi si compro la idea de Proxy :)
Proxy
```

3. Marque cuales de las siguientes son ventajas del patron Decorador:

- Los decoradores son componentes reutilizables Puede crear una libreria de clases de decorador y aplicarlas a diferentes objetos y clases segun sea necesario, reduciendo la duplicacion de codigo.

- Los decoradores usan el principio de favorecer la composicion sobre herencia: a diferencia de la herencia tradicional, que puede conducir a una jerarquia de clases profunda e inflexible, el patron decorador utiliza la composicion. Puede componer objetos con diferentes decoradores para lograr la funcionalidad deseada, evitando los inconvenientes de la herencia, como el acoplamiento fuerte y las jerarquias rigidas.

- El orden en que se aplican los decoradores no afecta el comportamiento final del objeto. Gestionar el orden de los decoradores no representa un problema. 

- Debido a que es facil agregar decoradores a los objetos, existe el riesgo de usar en exceso el patron Decorador, lo que hace que el codigo base sea innecesariamente complejo.

```bash
# En mi opinion 
# primera y segunda
# PD: Duda de la cuarta ????
```

4. (Seleccion Multiple) Marque en cuales de los siguientes casos de uso se puede usar el patron Memento:

- Cuando necesita implementar una funcion de deshacer (undo) en su aplicacion que permita a los usuarios revertir los cambios realizados en el estado de un objeto.
- Cuando necesita guardar el estado de un objeto en varios momentos para admitir funciones como control de versiones.
- Cuando el estado del objeto es inmutable, hay benecios al usar el patron Memento para capturar y
restaurar su estado.
- Cuando necesita revertir cambios en el estado de un objeto en caso de errores o excepciones, como en transacciones de bases de datos.
- Cuando desea almacenar en cache el estado de un objeto para mejorar el rendimiento.
```bash
# En mi opinion
# primera , segunda
# OJO quinta no porque guarda al objeto completo, con TODOS SUS DATOS, si hay muchos mementos consume muchos datos
```