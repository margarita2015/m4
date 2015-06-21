var express = require ('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
//creamos el Middleware Static
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
//carga los dos formularios en página1
app.get('/m4', function(req, res){
res.send('<html><head><title>MODULO-4</title></head>'
+ '<body>'
+ '<form method="get" action="/respuesta">'
+ '<input type="hidden" name="id1" value="1"/><br>'
+ '<h1>M&oacutedulo-4-P2P-Obligatorio: </h1><br>'
+ '<br>'
+ '<h2>&iquestQui&eacuten descubri&oacute Am&eacuterica?: </h2><br>'
+ '<input type="text" name="preg1" /><br>'
+ '<input type="submit" value="Enviar" />'
+ '</form></br>'
+ '<form method="get" action="/respuesta">'
+ '<input type="hidden" name="id2" value="2"/><br>'
+ '<h2>&iquestCu&aacutel es la capital de Portugal?: </h2><br>'
+ '<input type="text" name="preg2" /><br>'
+ '<input type="submit" value="Enviar" />'
+ '<br>'
+ '<br>'
+ 'Escribir con acentos.<br>'
+ 'Escribir iniciales con mayúsculas.'
+ '</form>'
+ '</body></html>');
});
//Muestra el resultado en la página2
app.get('/respuesta', function(req, res){
if (req.query.id1==1){
if(req.query.preg1 =="Cristóbal Colón"){
res.send('Sí. La respuesta '+req.query.preg1+' es correcta.'+ "<br><br><a href='/m4'>Volver a la p&aacutegina inicial</a>");
}else{
res.send('Ohhh! La respuesta '+req.query.preg1+' no es correcta.'+"<br><br>  Crist&oacutebal Col&oacuten fue quien descubri&oacute Am&eacuterica. <br><br><a href='/m4'>Volver a la p&aacutegina inicial</a>");
}
}
if (req.query.id2==2){
if(req.query.preg2=="Lisboa"){
res.send('Sí. La respuesta '+req.query.preg2+' es correcta.'+ "<br><br><a href='/m4'>Volver a la p&aacutegina inicial</a>");
}else{
res.send('Ohhh! La respuesta '+req.query.preg2+' no es correcta.'+"<br><br>  La capital de Portugal es Lisboa. <br><br><a href='/m4'>Volver a la p&aacutegina inicial</a>");
}
}
});
app.listen(8000);
/*Construir una aplicación de servidor con express que tenga 2 páginas diferentes, 
  enlazadas entre sí con el siguiente comportamiento:

Página 1: Será la página de entrada de la aplicación y tendrá un título y dos preguntas:
 ¿Quién descubrió América? y ¿Capital de Potugal?. 
Cada pregunta tendrá un formnulario asociado, con un cajetín de entrada y un botón de envío, 
 que permita enviar la respuesta a esa pregunta en particular (es decir, habrá dos formularios en la página).
 Cada formulario tendrá además un parámetro oculto que envíe un valor diferente que indique al servidor
 a que pregunta está contestando el cliente.

 La página 1 estará asociada a la transacción HTTP: GET /preguntas

Página 2: Será la página que muestre la respuesta a la que está contestando el cliente,
 e indicará si ha contestado correctamente o no con una frase correctamente construida.
 En caso de contestar incorrectamente, te indicará además cuál es la respuesta correcta. 
 La página incluirá además un enlace asociado al texto Volver a la página inicial.

 La página 2 estará asociada a la transacción HTTP: GET /respuesta.

 La aplicación debe utilizar solo el paquete express (no utilizar express-generator).&nbsp;
 Entregar en un fichero adjunto en la entrega el programa con el código del programa solicitado.

 El evaluador debe descargarlo, en un directorio con express instalado 
 y comprobar con un navegador que funciona correctamente.*/