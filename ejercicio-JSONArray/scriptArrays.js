//GARCIA RAVLIC, Ignacio Agustin
/**
Se trata de conseguir transformaciones de este Array 
usando EXCLUSIVAMENTE composición de funciones que 
vayan produciendo la transformación buscada.

Este ejercicio implica un trabajo de ejercitación y 
de investigación sobre la manipulación de Arrays.

Obtener un array NODES el cual contenga varios id
los cuales no se repiten y representan a las empresas
que se encuentren aqui
**/
/*
Array.from()
Array.flatMap()
Set()
*/
const LINKS = [
 { source: 'Microsoft', target:'Amazon', type: 'licensing'},
 { source: 'Microsoft',  target:  'HTC', type: 'licensing'},
 { source: 'Samsung',target:  'Apple',   type: 'suit'},
 { source: 'Motorola',   target:  'Apple',   type: 'suit'},
 { source: 'Nokia',  target:  'Apple',   type: 'resolved'},
 { source: 'HTC',    target:  'Apple',   type: 'suit'},
 { source: 'Kodak',  target:  'Apple',   type: 'suit'},
 { source: 'Microsoft',target:'Barnes & Noble',type: 'suit'},
 { source: 'Microsoft',  target:  'Foxconn', type: 'suit'},
 { source: 'Oracle', target:  'Google',  type: 'suit'},
 { source: 'Apple',  target:  'HTC', type: 'suit'},
 { source: 'Microsoft',  target:  'Inventec',  type: 'suit'},
 { source: 'Samsung',target:  'Kodak',   type: 'resolved'},
 { source: 'LG',     target:  'Kodak',   type: 'resolved'},
 { source: 'RIM',    target:  'Kodak',   type: 'suit'},
 { source: 'Sony',   target:  'LG',  type: 'suit'},
 { source: 'Kodak',  target:  'LG',  type: 'resolved'},
 { source: 'Apple',  target:  'Nokia',   type: 'resolved'},
 { source: 'Qualcomm',  target:  'Nokia',   type: 'resolved'},
 { source: 'Apple',  target:  'Motorola',  type: 'suit'},
 { source: 'Microsoft',  target:  'Motorola',  type: 'suit'},
 { source: 'Motorola',   target:  'Microsoft', type: 'suit'},
 { source: 'Huawei', target:  'ZTE',  type: 'suit'},
 { source: 'Ericsson',   target:  'ZTE',  type: 'suit'},
 { source: 'Kodak',  target:  'Samsung',  type: 'resolved'},
 { source: 'Apple',  target:  'Samsung',  type: 'suit'},
 { source: 'Kodak',  target:  'RIM',  type: 'suit'},
 { source: 'Nokia',  target:  'Qualcomm', type: 'suit'},
]

var parcial1= LINKS.flatMap((x)=> x.source);
var parcial2= LINKS.flatMap((x)=> x.target);
//Extraer los nombres de companias

const sinDuplicados= new Set(parcial1);//Eliminar duplicados

parcial2.forEach((element) => sinDuplicados.add(element));
//agregar los elementos target en set de source(sin contar duplicados)

var final=Array.from(sinDuplicados);//Convertir en array
final.sort();//Ordenar alfabeticamente

final= final.flatMap((x)=> {
  let obj={ id: x };
  return obj;
});//Convertir cada elemento en el id de un objeto

const NODES= new Set(final);//Convertir en set y mostrar
NODES.forEach((x)=> console6.log(x));