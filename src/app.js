import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");


const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

const numeroAleatorio = (arr) => {
  return Math.floor(Math.random()* arr.length)
}
 
const asignar =(arr,index)=>{
   return arr[index]
}

const encadenar = (fraseUno,fraseDos,fraseTres,fraseCuatro) => {
  return `${fraseUno} ${fraseDos} ${fraseTres} ${fraseCuatro}`

}

document.getElementById("excuse").innerHTML= encadenar(asignar(who,numeroAleatorio(who)),asignar(action,numeroAleatorio(action)),asignar(what,numeroAleatorio(what)),asignar(when,numeroAleatorio(when)));
};