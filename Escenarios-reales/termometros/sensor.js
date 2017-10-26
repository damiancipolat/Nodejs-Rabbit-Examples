//Incluyo el modulo de rabbitmq.
const amqp   = require('amqplib/callback_api');
let   conn   = null;

//Hace random entre dos rangos.
const randomize  = (min,max)=>{
  return Math.random()*(max-min)+min;
}

//Cuando se crea el canal.
const createChannel = (err,ch)=>{

  if (err)
    console.log("Hubo un erro al crear un nuevo canal.");
  else{

      const ex  = 'ex';
      //Creo el exchange.
      ch.assertExchange(ex, 'direct', {durable: false});

      //Inicio un ciclo de revisión y envio de datos cada x tiempo.
      setInterval(()=>{
       
        //Actualizo la info. del sensor.
        sensor.temp = Math.round(randomize(10,30));

        //Armo el mensaje.
        let msg = "SensID: "+sensor.id.toString()+" / "+sensor.temp.toString()+" °C";

        //Publico al exchange.
        ch.publish(ex, 'temp_data', new Buffer(msg));

        console.log("> Send: "+msg);

      }, 5000);

  }

}

//Información del sensor.
const sensor = {id : Math.round(randomize(1000,2000)), temp: Math.round(randomize(10,30)) };

//Cuando me conecto a rabbitmq.
amqp.connect('amqp://localhost', (err, connection)=>{

  if (err)
    console.log("> No se pudo conectar a la cola");
  else{

    conn = connection;  
    conn.createChannel(createChannel);

  }
  
});


//Inicio.
console.log("----------------------------");
console.log(" SENSOR N°: "+sensor.id);
console.log("----------------------------");
console.log("- Haciendo lecturas cada 5 segundos.")
console.log("");