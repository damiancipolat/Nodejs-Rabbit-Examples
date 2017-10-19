const amqp = require('amqplib/callback_api');

//Creo el canal.
const createChannel = (err,ch)=>{

	const qName = 'hello';

	console.log(" [*] Waiting for messages in CHANEL %s. To exit press CTRL+C", qName);

	ch.consume(qName, (msg)=>{
		console.log(" [x] Received %s", msg.content.toString());
	}, {noAck: true});

}

// Me conecto al server.
amqp.connect('amqp://localhost', (err, conn)=>{

	if (err)
		console.log('error al conectar',err);
	else
  	conn.createChannel(createChannel);
});