//Cargo la lib. de ampq.
const amqp 	   = require('amqplib/callback_api');
const readline = require('readline');

//Interfaz para trabajar con la consola.
const rl 	= readline.createInterface(process.stdin, process.stdout);

//Referencia al canal.
let channel = null;

//Traigo el timestamp.
const timeStamp = ()=>{
	return Math.round(+new Date()/1000);
}

//Crear un canal.
const createChannel = (err,ch)=>{

	if (err)
		console.log('No se pudo crear el canal',err);
	else {
	
		console.log("Canal creado con exito!");
		channel = ch;
	
	}
	
}

//Envio un mensaje a la cola.
const sendMesage = (ch)=>{

	let q   = 'task_queue';
	let msg = "Hello World!";

	ch.assertQueue(q, {durable: true});
	ch.sendToQueue(q, new Buffer(msg), {persistent: true});
	console.log(" [x] Sent ok! '%s'", msg);
	
}

// Me conecto al server de colas, si lo logro creo un canal.
amqp.connect('amqp://localhost', (err, conn)=>{

	//Si hubo un error salgo de la app.
	if (err){
		console.log('Hubo un error al conectar al server rabbit',err);
		process.exit(0);
	}
	else	
		conn.createChannel(createChannel);

});

//Inicio de la app.
console.log("* NODE & RabbitMQ Test!");
console.log("- Escriba 'work' para enviar un mensaje a la cola.");

rl.setPrompt('work>');
rl.prompt();

rl.on('line', function(line) 
{
	if (line === "work")
		sendMesage(channel);
	else
		console.log('comando incorrecto, escriba work');
	
    rl.prompt();
	
}).on('close',function(){
    process.exit(0);
});