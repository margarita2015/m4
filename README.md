# m4

 Para llamarlo desde node:      node m4.js
 
 Para llamrlo desde Firefox:    localhost:8000/m4

P2P Obligatorio Módulo 4-MOOC-2

MOOC-2- Desarrollo de servicios en la nube con HTML5, Javascript y node.js


Modulo 4. Introducción a HTTP y a los Servidores Web; Introducción a express y al Middleware Static; Introducción a REST; Aplicaciones express.js y Composición de Middlewares; Formularios GET y POST; Parámetros Ocultos

Construir una aplicaciónn de servidor con express que tenga 2 páginas diferentes, enlazadas entre sí con el siguiente comportamiento:
 
Página 1: Será la página de entrada de la aplicación y tendrá un título y 2 preguntas:
¿Quién descubrió América? y ¿Capital de Portugal?. Cada pregunta tendrá un formulario asociado, con un cajetín de entrada y un botón de envío, que permitirá enviar la respuesta a esa pregunta en particular (es decir habrá 2 formularios en la página). Cada formulario tendrá además un parámetro oculto que envíe un valor diferente que indique al servidor a que pregunta está contestando el cliente;
 
La página 1 estará asociada a la transacción HTTP: GET /preguntas
 
Página 2: Será la página que muestre la respuesta a la que está contestando el cliente , e indicará si ha contestado correctamente o no con una frase correctamente construida. En caso de contestar incorrectamente, le indicará además cual es la respuesta correcta. La página incluirá además un enlace asociado al texto Volver a la página inicial
 
La página 2 estará asociada a la transacción HTTP: GET /respuesta
 
La aplicación debe utilizar solo el paquete express (no utilizar express-generator).&nbsp;Entregar en un fichero adjunto en la entrega el programa con el código del programa solicitado.
 
El evaluador debe descargarlo, en un direcorion con express instalado y comprobar con un navegador que funciona correctamente.
