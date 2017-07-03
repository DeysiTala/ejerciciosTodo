//Ejercicio 1

/*Dado 3 números(N1,N2,N3) calcular el Máximo y Mínimo. Sin usar for​.​

	Entrada	 : N1 = 10, N2 = 30, N3 = 5
	Salida	 : Máximo = 30, Mínimo = 5



console.log("Maximo = " + Math.max(10,30,5) + "  Minimo = " + Math.min(10,30,5));
/*


//Ejercicio 2
  /*Dado un arreglo A de números, imprimir los elementos con índice par e impar por separado. Hint : usar el operador​	 ​ módulo(%).​


Entrada
: A = [15,  29, 78, 29, 40, 20, 18, 100, 78, 68]
Salida
: Elementos de posición par : 15 78 40 18 78
  Elementos de posición impar : 29 29 20 100 68 */

/*var a = [15,  29, 78, 29, 40, 20, 18, 100, 78, 68] ;






};*/


//Ejercicio 3
/*Dado un arreglo A, cómo invertiría su orden?.
	Entrada	: A = [1 2 3 4 5 6 7 8 9 0]
	Salida	: 0 9 8 7  6 5 4 3 2 1 */

/*var a = [1,2, 3, 4, 5, 6, 7, 8, 9, 0] ;

console.log(a.reverse().toString().replace(/[^a-zA-Z 0-9.]+/g,' '));*/

/*4.  Una  función  Dibuja,  que  teniendo  como  parámetro  un  entero  positivo  (N)  nos imprima en la consola un rombo, tal como se aprecia en el ejemplo adjunto.

Ejemplo:
Si el número fuese 5 se imprime:*/
function espacio(n){

  var s = "";
  for(var i = 0; i<n; i++){
   s+=" ";
   return s;
}

for (var j = 0; j <i + 1 ; j++){

  console.log(sp + (j + 1));
}
