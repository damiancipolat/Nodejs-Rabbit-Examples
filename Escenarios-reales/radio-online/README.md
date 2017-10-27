# RADIO ONLINE "Musica electronica"

![N|Solid](http://damiancipolat.com/webFiles/radio.png)

> Diseño de una arquitectura del proceso de obtención de los programas de una radio que hace streaming online, en el cual usa una cola de mensajes para comunicarse con las productoras que distribuyen los programas de sus clientes (en este caso djs) a las diferentes estaciones que emiten ese programa en diferentes lugares del mundo atravez de internet.

### Flujo de trabajo:
1) Las productoras terminan de publicar el programa de radio de algunos de sus clientes "djs" a las emisoras con las que tienen contrato.

2) Envian a la cola que tienen para transmitir mensajes, la sig estructura en json:

{
  "title"      : "Carl Cox - global radio",
  "programCode": "CCXGR",
  "date"       : "2017-10-01",  
  "urlApi"     : "http://ibizaOneRadio/programs/download/01210aadsdex/CCXGR_20170110.mp3"
}

@TODO: terminar de agregar proyecto en nodejs
