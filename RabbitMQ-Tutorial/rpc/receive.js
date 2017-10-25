//RabbitMQ API
const amqp    = require('amqplib/callback_api');
const channel = null;

//Manejo el crear el canal.
const createChannel = (err,ch)=>{

    let q = 'rpc_queue';

    ch.assertQueue(q, {durable: false});
    ch.prefetch(1);

    console.log(' [x] Awaiting RPC requests');

    ch.consume(q,(msg)=>{

      var n = parseInt(msg.content.toString());

      console.log(" [resp] -> fib(%d)", n);

      var r = fibonacci(n);

      ch.sendToQueue(msg.properties.replyTo,new Buffer(r.toString()),{correlationId: msg.properties.correlationId});

      ch.ack(msg);

    });

}

amqp.connect('amqp://localhost', (err, conn)=>{

  conn.createChannel(createChannel);

});

const fibonacci = (n)=>{
  if (n == 0 || n == 1)
    return n;
  else
    return fibonacci(n - 1) + fibonacci(n - 2);
}
