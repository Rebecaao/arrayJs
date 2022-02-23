'use strict'

//array no js nao podem ser criados puros, e recebem qualquer tipo de informaçao

const numeros = [20, 130, 70, 279, 320]

// acrescentar 100 a cada elemento

//soluçao iperativa
//const limite = numeros.length
//let numeros100 = []
//for(let i=0; i<=limite ; i++){
  //  numeros100[i] = numeros[i] + 100*
//}

//soluçao declarativa
//map percorre o array podendo modificar ou noa e retornando um novo array de mesmo tamanho
//log- motra o codigo no browser 
//1 elemento
//2 indice
//

const adicionar100 = (numero) => (numeros + 10) /2
const numeros100 = numeros.map(adicionar100)

console.log("numeros: ", numeros)
console.log("numeros mais cem: ", numeros100)

//PROBLEMA -- criar um novo array com os numeros menores que 100
//const limite = numeros.length
//let menorQueCem = []
  //  for( i=0; i<=limite; i++){
    //   if(numeros[i] <100){
      //  menorQueCem[limite] = numeros[i]
       // limite++
       //}

    //}


    // filter percorre todo o array dependendo de uma condiçao, e retorna um array domesmo tamanho ou menor
    //1elemento
    //2indice
    //3array
const ehMenor= (numero) => numero < 100
const numeros100 = numeros.filter(ehMenor)

console.log(numeros100)

//Problema somar todos os valores(elementos)

const somarArray
let arraysomados


//reduce 
const somarArray = (a, b) => a+b
const arraysomados = numeros.reduce(somarArray, 0)

