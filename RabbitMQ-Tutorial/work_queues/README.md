## work_queues
> Demos del sitio: https://www.rabbitmq.com/tutorials/tutorial-two-javascript.html

Este ejemplo fue adaptado por mi agregando una interaz de linea de comando, para enviar mensajes a las colas cuando sea necesario,
se muestra el funcionamiento de RabbitMQ teniendo un unico productor y N consumidores, el sistema de colas distribuye los mensajes
a los consumidores de forma round robint uno a la vez.

Para ejecutar:
```sh
$ npm install
$ node new_task.js
$ node worker.js
$ node worker.js
$ node worker.js
```