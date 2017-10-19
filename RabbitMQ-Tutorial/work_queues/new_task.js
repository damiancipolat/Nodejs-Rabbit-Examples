//Cargo la lib. de ampq.
const amqp = require('amqplib/callback_api');

// Traigo el timestamp.
const timeStamp = ()=>{

	return Math.round(+new Date()/1000);

}

// Crear un canal.
const createChannel = (err,ch)=>{

	if (err)
		console.log('No se pudo crear el canal',err);
	else {

		let q   = 'task_queue';
		let msg = process.argv.slice(2).join(' ') || "Hello World!";

		ch.assertQueue(q, {durable: true});
		ch.sendToQueue(q, new Buffer(msg), {persistent: true});
		console.log(" [x] Sent '%s'", msg);

	}

}

// Me conecto al server de colas, si lo logro creo un canal.
amqp.connect('amqp://localhost', (err, conn)=>{

	//Si hubo un error.
	if (err)
		console.log('Hubo un error al conectar al server rabbit',err);
	else	
		conn.createChannel(createChannel);

});