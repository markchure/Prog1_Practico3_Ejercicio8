/*Obtener el dígito y mostrarlo, quitarle el dígito al número inicial 
y repetir el procedimiento para el número que me queda.*/
let num = parseInt(prompt("Ingrese un número entero de varios digitos: "));

while (num>0) {
  let digito = num % 10;
  console.log(digito);

  num = (num - digito) / 10;
}

