const amqp = require('amqplib/callback_api');
const args = process.argv.slice(2);
let   conn = null;

if (args.length == 0) {
  console.log("Usage: rpc_client.js num");
  process.exit(1);
}

//Cuando creo el canal.
const createChannel = (err,ch)=>{

    ch.assertQueue('', {exclusive: true}, (err, q)=> {

      let corr = generateUuid();
      let num = parseInt(args[0]);

      console.log(' [x] Requesting fib(%d)', num);

      ch.consume(q.queue, (msg)=>{
        if (msg.properties.correlationId == corr) {
          console.log(' [.] Got %s', msg.content.toString());
          setTimeout(()=>{ conn.close(); process.exit(0) }, 500);
        }
      }, {noAck: true});

      ch.sendToQueue('rpc_queue',new Buffer(num.toString()),{ correlationId: corr, replyTo: q.queue });

    });

}

//Cuando me conecto al server de rabbit.
amqp.connect('amqp://localhost', (err, connTmp)=> {
  connTmp.createChannel(createChannel);
  conn = connTmp;
});

const generateUuid = ()=>{
  return Math.random().toString() +
         Math.random().toString() +
         Math.random().toString();
}
