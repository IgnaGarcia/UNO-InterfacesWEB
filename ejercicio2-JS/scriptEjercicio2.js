/***GARCIA RAVLIC, Ignacio Agustin- Tarea 2 JS***/
/** Extendiendo funcionalidad ***/
var ver = '1.0';

/** EJ-01
  Crear una función 'extender' que reciba un objeto
  como argumento y a dicho objeto le agregue la capacidad
  de 'loggear' novedades'
  
  El objeto retornado tendrá dos nuevos métodos:
  log(mensaje)
  loglist()
  
  donde:
  log: recibe un string con el mensaje y lo agrega a una
  'registry' (registro) de mensajes recibidos en modo PILA, 
  guardando el mensaje y la fecha-hora (time-stamp) del
  momento en que se ejecutó log().
  
  loglist(): lista la PILA de mensajes acumulados en forma
  anticronológica. Lista fecha-hora: mensaje-recibido.

*********/

//Funcion Extender
function extenderLog(obj){
  //Crear registry para guardar mensajes
  if(!obj.registry)obj.registry= []; 
  
  function log(mensaje){
    //Guardar en el registry un array con el mensaje y la fecha
    obj.registry.unshift(fechaAhora()+": "+mensaje);
  }
  
  function loglist(){
    //For in del registry para mostrar los elemento
    for(let element in obj.registry){
      console.log(obj.registry[element]);
    }
  }
  
  obj.log= log;
  obj.loglist= loglist;
  return obj;
}

//Funcion para hacer el 'time-stamp'
var fechaAhora= function calcFecha(){
  let ahora= new Date();
  let cadena= ahora.getHours()+":"+ahora.getMinutes()+":"+ahora.getSeconds()+" "+ahora.getDate()+"/"+(ahora.getMonth()+1)+"/"+ahora.getFullYear();
  return cadena;
}

//------------Area de pruebas:
function pruebaEj1(){
  var miObjeto= {};
  miObjeto= extenderLog(miObjeto);

  console.log(miObjeto);
  miObjeto.log("Hola profe");
  miObjeto.log("Esta es una prueba");
  miObjeto.log("Juegue desde la consola");

  miObjeto.loglist();
}
//pruebaEj1();


/** EJ-02
  Sea un objeto que representa un cierto 'posteo' de un BLOG.
  Este objeto tiene tres propiedades sustantivas:
  fecha, asunto, contenido
  que describen una cierta entrada al BLOG de noticias.
  
  Se quiere desarrollar una función extender, que reciba
  como argumento al objeto 'post', descripto arriba, y 
  le agregue la capacidad para guardar el historial de 
  ediciones sobre el contenido.
  
  El objeto extendido tendrá los siguientes nuevos métodos:
  editarPosteo(asunto, contenido)
  listarAuditoria()
  
  editarPosteo recibe como argumento el nuevo
  asunto y contenido pero debe prever de guardar en 
  una registry los valores anteriores antes de asignar
  las respectivas variables con los nuevos datos.
  
  listarAuditoria() listará el detalle de modificaciones
  que sufrió el 'post' desde su creación hasta el momento
  actual, mostrando fecha-de-modificación, asunto, contenido
  previo a cada modificación.

*********/
function postFactory(asunto, contenido){
  let nuevo_post = {
    fecha: fechaAhora(),//se llama a la funcion previamente desarrollada
    asunto: asunto,
    contenido: contenido
  };
  return nuevo_post;
}

function extenderPost(post){
  //Creo array con las ediciones del posteo
  if(!post.registry) post.registry= [];
  
  function editarPosteo(asunto1, contenido1){
    //Se guardan los contenidos en el registro
    let edicion= [post.fecha, post.asunto, post.contenido];
    post.registry.push(edicion);
    
    //Se actualiza el post
    post.asunto= asunto1;
    post.contenido= contenido1
    post.fecha= fechaAhora();    
  }
  
  function listarAuditoria(){
    //For in para cada elemento del registro
    for(let element in post.registry){
      console.log(post.registry[element]);
    }
  }
  
  post.editarPosteo= editarPosteo;
  post.listarAuditoria= listarAuditoria;
  return post;
}

//----------------Area de pruebas
function pruebaEj2(){
  var miPost= postFactory("Original", "Blablabla");
  miPost= extenderPost(miPost);

  console.log(miPost);
  miPost.editarPosteo("Primera edicion!!", "Bla bla bla");
  miPost.editarPosteo("Segunda edicion!!", "Bla bla bla!");
  miPost.editarPosteo("Tercera edicion!!", "¡Bla bla bla!");
  miPost.listarAuditoria();
  console.log(miPost);  
}
//pruebaEj2();


/** Usando 'prototype' **/
/** EJ-03
  Crear una función CONSTRUCTOR que prevea
  ser usada con el operador 'new' para crear
  prototipos (versión JS de herencia) de Figura,
  Rectangulo y Cuadrado.
  
  Por diseño se asume que toda figura tiene dos 
  coordenadas x,y que representan el vértice superior
  izquierdo de la figura, a partir de la cual se puede
  aplicar el método 'mover' que desplazará la ubicación 
  de la misma en un cierto Delta-X y Delta-y.
  
  Rectángulo y cuadrado comparten la fórmula de 
  perímetro y área, Cuadrado es un caso particular
  de rectángulo
  
  Proponer la estructura de objetos para que se 
  cumpla la regla:
    ['escribir-una-sola-vez -y- en-un-solo-lugar]
  Es decir, lograr una estructura de colaboración entre los 
  objetos de tipo Figura, rectángulo y cuadrado que 
  muestre la creciente 'especialización' de su funcionalidad.

**/

function Figura(x, y, b, h){
  let obj= this;
  obj.x= x;
  obj.y= y;
  obj.b= b;
  obj.h= h;
  obj.mover= function(deltaX, deltaY){
      obj.x+= deltaX;
      obj.y+= deltaY;
   }
  obj.toString= function(){
    console.log("Figura: x: "+obj.x+"; y: "+obj.y+"; b: "+obj.b+"; h: "+obj.h+";");
  }
}

function Rectangulo(x, y, b, h){
  let obj= this;
  obj= new Figura(x, y, b, h);
  obj.calcPerimetro= function(){
    return 2*(obj.b + obj.h);
  }
  obj.calcArea= function(){
    return obj.b * obj.h;
  }
  obj.toString= function(){
    console.log("Rectangulo: x: "+obj.x+"; y: "+obj.y+"; b: "+obj.b+"; h: "+obj.h+";");
  }
  return obj;
}

function Cuadrado(x, y, b){
  let obj= this;
  obj= new Rectangulo(x, y, b, b);
  obj.mover= function(deltaX){
      obj.x+= deltaX;
      obj.y+= deltaX;
  }
  obj.toString= function(){
    console.log("Cuadrado: x: "+obj.x+"; y: "+obj.y+"; b: "+obj.b+";");
  }
  return obj;
}

//--------- Area de pruebas
function pruebaEj3(){
  console.log("---------FIGURA:--------");
  var figura= new Figura(0, 0, 7, 2);
  figura.toString();
  console.log("Mover...");
  figura.mover(3, 4);
  console.log("Despues de mover:");
  figura.toString();
  console.log('\n\n');
  
  console.log("---------RECTANGULO:--------");
  var rectangulo= new Rectangulo(0, 0, 2, 3);
  rectangulo.toString();
  console.log("Perimetro de Rectangulo: "+rectangulo.calcPerimetro());
  console.log("Area de Rectangulo: "+rectangulo.calcArea());
  console.log("Mover...");
  rectangulo.mover(1, 4);
  console.log("Despues de mover:");
  rectangulo.toString();
  console.log('\n\n');
  
  console.log("---------CUADRADO:--------");
  var cuadrado= new Cuadrado(0, 0, 2);
  cuadrado.toString();
  console.log("Perimetro de Cuadrado: "+cuadrado.calcPerimetro());
  console.log("Area de Cuadrado: "+cuadrado.calcArea());
  console.log("Mover...");
  cuadrado.mover(7);
  console.log("Despues de mover:");
  cuadrado.toString();
  
}
//pruebaEj3();


/** Usando funciones 'extender' **/
/** EJ-04
   Tomando el mismo caso del ejercicio precedente, EJ-03,
   diseñar funciones constructoras con capacidad para 
   'extender' funcionalidad de objetos que permitan
   lograr el mismo concepto de 'extensión' pero 
   sin usar el operador 'new'.
   Buscar que estas funciones 'extender' utilicen el 
   mecanismo de 'closure' para diferenciar la API 
   pública de Figura, Rectángulo y Cuadrado
   de toda implementación interna.
 
**/
function inicializar(x, y, b, h=b){
  let obj= this;
  obj.x= x;
  obj.y= y;
  obj.b= b;
  obj.h= h;
  return obj;
}

function extendFigura(obj){
  obj.x= obj.x;
  obj.y= obj.y;
  obj.b= obj.b;
  obj.h= obj.h;
  obj.inicializar= inicializar;
  obj.mover= function(deltaX, deltaY){
      obj.x+= deltaX;
      obj.y+= deltaY;
   }
  obj.toString= function(){
    console.log("Figura: x: "+obj.x+"; y: "+obj.y+"; b: "+obj.b+"; h: "+obj.h+";");
  }
  return obj;
}

function extendRectangulo(obj){
  obj= extendFigura(obj);
  obj.calcPerimetro= function(){
    return 2*(obj.b + obj.h);
  }
  obj.calcArea= function(){
    return obj.b * obj.h;
  }
  obj.toString= function(){
    console.log("Rectangulo: x: "+obj.x+"; y: "+obj.y+"; b: "+obj.b+"; h: "+obj.h+";");
  }
  return obj;
}

function extendCuadrado(obj){
  obj= extendRectangulo(obj);
  obj.mover= function(deltaX){
      obj.x+= deltaX;
      obj.y+= deltaX;
  }
  obj.toString= function(){
    console.log("Cuadrado: x: "+obj.x+"; y: "+obj.y+"; b: "+obj.b+";");
  }
  
  return obj;
}


//--------- Area de pruebas
function pruebaEj4(){
  console.log("---------FIGURA:--------");
  var figura1= {};
  figura1= extendFigura(figura1);
  figura1.toString();
  figura1.inicializar(0, 0, 2, 7);
  figura1.toString();
  console.log("Mover...");
  figura1.mover(7);
  console.log("Despues de mover:");
  figura1.toString();
  
  console.log("---------RECTANGULO:--------");
  var rectangulo1= {};
  rectangulo1= extendRectangulo(rectangulo1);
  rectangulo1.toString();
  rectangulo1.inicializar(0, 0, 10, 10);
  rectangulo1.toString();
  console.log("Perimetro de Rectangulo: "+rectangulo1.calcPerimetro());
  console.log("Area de Rectangulo: "+rectangulo1.calcArea());
  console.log("Mover...");
  rectangulo1.mover(7);
  console.log("Despues de mover:");
  rectangulo1.toString();
  
  console.log("---------CUADRADO:--------");
  var cuadrado1= {};
  cuadrado1= extendCuadrado(cuadrado1);
  cuadrado1.toString();
  cuadrado1.inicializar(0, 0, 2);
  cuadrado1.toString();
  console.log("Perimetro de Cuadrado: "+cuadrado1.calcPerimetro());
  console.log("Area de Cuadrado: "+cuadrado1.calcArea());
  console.log("Mover...");
  cuadrado1.mover(7);
  console.log("Despues de mover:");
  cuadrado1.toString();
}
pruebaEj4();

/***
 REFERENCIAS:
 Funciones constructor-extender:
 http://masuno.digital/iutw/publicaciones/es6-intro/5ab51d59e841cf635bcaf37d
 
 Mecanismo Closure:
 http://masuno.digital/iutw/publicaciones/es6-intro/5ab6ae3ee841cf635bcb29ef
 
 Extensión de funcionalidad: comparación con Java/C++
 http://masuno.digital/iutw/publicaciones/es6-intro/5ab6d022e841cf635bcb3197
 
 Modos de invocación de funciones en JS
 http://masuno.digital/iutw/publicaciones/es6-intro/5ab7d828e841cf635bcb347e
 
 Objeto Array:
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 
 Para los ejercicios propuestos será necesario utilizar
 algunos métodos de Array, tales como:
 var arr = []; // crea un array vacío
 
 arr.push(obj) // agrega el elemento obj al final de arr
 arr.unshift(obj) // agrega el elemento obj al comienzo
                     de arr
                     
arr.forEach(cb)// itera por todos los elementos del Array arr,
invocando la función callback 'cb', pasando como argumento
el elemento iésimo del array.

Por ejemplo para mostrar por consola los elementos de arr:
arr.forEach(item => {console.log(item);});
(nótese la notación 'fat-arrow' para describir la función)

***/

