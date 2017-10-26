# Termometros

![N|Solid](http://damiancipolat.com/webFiles/sensores.png)

> El sistema consiste en ser un escenario de distribución de info de sensores de temperaturas a un concentrador de datos, que recibe atravez de una cola
lecturas de temperatura de los dif sensores y en caso de problemas enviar a una cola de mantenimiento el id de sensor que falla.

## Para instalar:

```sh
$ npm install
```

## Ejecutar:

```sh
Iniciar servidor:
$ node server.js

Iniciar sensores, abrir en dif. consolas:
$ node sensor.js
```
