'use strict'

 const numeros = [20, 131, 70, 279, 320]


 const multiplicar = (numero) => numero * numero
 const valoresAoQuadado = numeros.map(multiplicar)

 console.log(valoresAoQuadado)

 const pares = (numero) => numero % 2 == 0
 const valoresPares = numeros.filter(pares)

 console.log(valoresPares)

 const media = [8, 9, 6, 10] 
 const soma = (a,b) => a + b / media.length
 const calcularMedia = media.reduce(soma,0)

 console.log(calcularMedia)

 const imparesSoma = (numero) => numero %2 == 1
 const calcularSomaImpar = numeros.reduce(imparesSoma)
 console.log(calcularSomaImpar)

 const calcularDesconto = (numero) => numero * 0.2
 const descontoDoValor = (calcularDesconto, numeros) => numeros - calcularDesconto
 const valorFinal = descontoDoValor.media(descontoDoValor)
 console.log(valorFinal)