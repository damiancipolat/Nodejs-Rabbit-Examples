# Nodejs-Rabbit-Test
![N|Solid](https://www.rabbitmq.com/img/tutorials/exchanges.png)

> Este repositorio es una colección de pruebas para trabajar con Nodejs y RabbitMQ, ademas de las pruebas que se encuentran en el sitio oficial de Rabbit habran algunas otras, en las que planteo escenarios reales de usar Nodejs y un sistema de colas.

## RabbitMQ-Tutorial:
Demos del sitio: https://www.rabbitmq.com/getstarted.html adaptados a ES6 y con algunos ligeros cambios.

## RabbitMQ-Escenarios-reales:

### - Termometros:
Ejemplo de app de IOT que envia datos de temperatura de un sensor a un concentrador de datos atravez de una cola.

### - Emergencias:
Arquitectura de comunicación usando colas de mensajes entre centros de emergencias.

### - Turismo:
Arquitectura de comunicación usando colas de mensajes, pensado para ser aplicado a una empresa turismo que comunica las ventas de las distintas agencias a los sectores de cada producto vendido.

### - RADIO ONLINE:
Diseño de una arquitectura del proceso de obtención de los programas de una radio que hace streaming online, en el cual usa una cola de mensajes para comunicarse con las productoras que distribuyen los programas de sus clientes (en este caso djs) a las diferentes estaciones que emiten ese programa en diferentes lugares del mundo atravez de internet.
