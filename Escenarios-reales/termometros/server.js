const amqp = require('amqplib/callback_api');


amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var ex = 'ex';

    ch.assertExchange(ex, 'direct', {durable: false});

    ch.assertQueue('', {exclusive: true}, function(err, q) {
      console.log(' [*] Esperando datos de sensores');

      
      ch.bindQueue(q.queue, ex, "temp_data");
      

      ch.consume(q.queue, function(msg) {
        console.log(" [x] %s: '%s'", msg.fields.routingKey, msg.content.toString());
      }, {noAck: true});
    });
  });
});