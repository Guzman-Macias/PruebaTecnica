/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true
  // Tu código:
  var numeroStrin=num.toString();
  var busArr=numeroStrin.split("");
  var cont=0;
  for(var i = 0; i<busArr.length; i++){
    if(busArr[i]==busArr[busArr.length-i-1]){
      cont++;
    }
  }

  if(cont===busArr.length){
    return true;
  }
  else return false;
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico