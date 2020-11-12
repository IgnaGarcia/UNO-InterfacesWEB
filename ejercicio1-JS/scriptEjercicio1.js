/***********
 Nociones del lenguaje JS
**********/

/**EJ-01
  Crear una función que sume
  dos objetos:
  a) si son números, que aplique
     la función SUMA de álgebra.
  b) si son strings, que concatene 
     dichas cadenas
  c) si son arrays, que devuelva 
     un NUEVO array con la suma de
     los elementos de ambas cadenas.
     a = [a,b,c]
     b = [x, y, j]
     a + b = [a, b, c, x, y, j]   
**/
//---------------EJ-01---------------
var suma = function(a, b){
  if(typeof a=== 'number' && typeof b=== 'number'){
    return a+b;
  } else if(typeof a=== 'string' && typeof b=== 'string'){
    return a+b;
  } else if(Array.isArray(a) && Array.isArray(a)){
    return sumaArray(a,b);
  } else {
    console.log("datos erroneos");
    return undefined;
  }
};

function sumaArray(a,b){
  for(var element in b){
    a.push(b[element]);
  }
  return a;
}

//**Area de pruebas EJ-01
function pruebaEj1(){
  var n1= 7;
  var n2= 9;
  var s1= "10";
  var s2= "hola";
  var a1= ['7',5,'hola'];
  var a2= ['chau', 2, 3, 4];

  console.log("dos numeros: "+suma(n1,n2));
  console.log("dos strings: "+suma(s1,s2));
  console.log("dos array: "+suma(a1,a2));
  console.log("1 num 1 string: "+suma(n1,s2));
  console.log("1 num 1 array: "+suma(n1,a2));
  console.log("1 string 1 array: "+suma(s1,a2));  
}
pruebaEj1();
//--------------Fin EJ-01-------------

/**EJ-02
  Crear una función que reciba un
  string como argumento y lo devuelva
  con las siguientes modificaciones:
  a) Que le quite espacios en blanco
     a derecha e izquierda
  b) Que convierta en minuscual 
     (lower-case) a todos sus 
     caracteres.
  c) Que reemplaze las vocales
     acentuadas por las vocales
     sin acento
  Ejemplo: '  Imagen acústica '
  debe convertirse en:
  'imagen acustica'
     
**/
//---------------EJ-02---------------
var modificarCadena = function(cadena){
  cadena= quitarEspacios(cadena).toLowerCase();
  return normalizar(cadena);
}

function quitarEspacios(cadena){
  return cadena.trim();
}

function normalizar(cadena){
  return cadena.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2");
}

//**Area de pruebas EJ-02
function pruebaEj2(){
  var cadena= "   HÓLÁ mÚndÓ téNGO muCHOSs éSSSPáciññós      ";
  console.log(modificarCadena(cadena));
}
pruebaEj2();
//--------------Fin EJ-02-------------

/** EJ-03
  Crear una función que cumpla los 
  mismos objetivos que los indicados
  en EJ-02, pero que devuelva un
  array de strings, con las sub-partes
  del string recibido, separando en 
  'palabras', o sea tomando como 
  caracter de separación el espacio en
  blanco, la compa, el punto, el 
  punto-y-coma.
**/
//---------------EJ-03---------------
var modificarCadena2 = function(cadena){
  cadena= modificarCadena(cadena);
  return divisor(cadena);
}

function divisor(cadena){
  var cadenaDividida= cadena.split(/\s|\.|,|;/);
  return cadenaDividida;
}

//**Area de pruebas EJ-03
function pruebaEj3(){
  var cadena= "   HÓ;L;Á mÚ,ndÓ téNG.O muCH;OSs éSSSP,áaciññ.ós      ";
  console.log(modificarCadena2(cadena));
}
pruebaEj3();
//--------------Fin EJ-03-------------

/** EJ-04
  Crear una función que haga lo mismo
  que EJ-03, pero que devuelva el largo
  del array de strings que produce el
  'split' en sub-partes.
  (devuelve array.length)
**/
//---------------EJ-04--------------
var largoDeCadena = function(cadena){
  cadena= modificarCadena2(cadena);
  return cadena.length;
}

//**Area de pruebas EJ-04
function pruebaEj4(){
  var cadena= "   HÓ;L;Á mÚ,ndÓ téNG.O muCH;OSs éSSSP,áaci.ós      ";
  console.log(largoDeCadena(cadena));  
}
pruebaEj4();
//--------------Fin EJ-04-------------

/** EJ-05
  Proponer un objeto 'utils' que 
  contenga como métodos a todas las 
  funciones propuestas en los ejercicios
  01 a 04 de modo que las cuatro funciones
  precedentes queden reunidas en un
  único objeto
  Analizar el impacto de transformar
  funciones en métodos de un objeto
**/
//---------------EJ-05--------------
function utilFactory(){
  let obj= {};
  obj.suma= suma;
  obj.modificarCadena= modificarCadena;
  obj.modificarCadena2= modificarCadena2;
  obj.largoDeCadena= largoDeCadena;
  return obj;
}

function pruebaEj5(){
  var utils = utilFactory();
  console.log(utils);  
}
pruebaEj5();
//--------------Fin EJ-05-------------