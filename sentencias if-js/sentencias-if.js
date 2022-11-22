/*calcular el salario de un empleado 
->si el salario es menos de 150000 el descuento 
en salud es de 5% y pension el 5%
->si el salario es entre 1500000 a 2000000 el descuento
en salud es de 7% y pension del 10%
->si el salario es mayor a 2000000 el descuento en
salud es de 10% y pension 12%
*/
/*
var salario = parseInt(prompt("ingrese su salario"));
//calculos 
if(salario <= 1500000){
    var salud = salario * 0.05;
    var pension = salario * 0.05;
    var sueldoPagar = salario-(salud+pension);
    document.write("Su salario es: "+salario+ "<br>");
    document.write("Su descuento en salud es: "+salud+ "<br>");
    document.write("Su descuento en pension es: "+pension+ "<br>");
    document.write("Sueldo a pagar es: "+sueldoPagar+ "<br>");

}else if (salario>=1500000 && salario < 2000000){
   var salud = salario * 0.07;
   var pension= salario * 0.1;
   var sueldoPagar = salario-(salud+pension);
   document.write("Su salario es: "+salario+ "<br>");
    document.write("Su descuento en salud es: "+salud+ "<br>");
    document.write("Su descuento en pension es: "+pension+ "<br>");
    document.write("Sueldo a pagar es: "+sueldoPagar+ "<br>");
}else{
    var salud = salario * 0.1;
    var pension= salario * 0.12;
    var sueldoPagar = salario-(salud+pension);
    document.write("Su salario es: "+salario+ "<br>");
     document.write("Su descuento en salud es: "+salud+ "<br>");
     document.write("Su descuento en pension es: "+pension+ "<br>");
     document.write("Sueldo a pagar es: "+sueldoPagar+ "<br>");

}*/
// if compuesto
/*
if((numero%2)==0 &&numero>0){
    document.write("El " + numero+ " es par y positivo");

}else if((numero%2)==0 && numero<0){
    document.write("El " + numero+ " es par y negativo");

}else if((numero%2)!=0 && numero>0){
    document.write("El " + numero+ " es impar y positivo");
}else if((numero%2)!=0 && numero<0){
    document.write("El " + numero+ " es impar y negativo");
} else{
    document.write("El " +numero+ " es par y neutro");
}*/
//ejercicio 
/*
var numero1 =parseInt(prompt("ingrese el primer numero porfavor"));
var numero2 =parseInt(prompt("Ingrese el segundo numero porfavor"));
if(numero1>numero2){
    document.write(+ numero1+ " es mayor que "+numero2 +"<br>");
    document.write(+numero2+ " es menor que " +numero1 +"<br>");
}else{
    document.write(+ numero2+ " es mayor que "+numero1+"<br>");
    document.write(+numero1+ " es menor que " +numero2+"<br>");
}*/
//ejercicio 10
/*
var diasemana = parseInt(prompt("ingrese un numero de 1 a 7"));
if(diasemana==1){
    document.write("El dia "+diasemana+" de la semana es Lunes" )

}else if(diasemana==2){
    document.write("El dia "+diasemana+" de la semana es Martes" )
}else if(diasemana==3){
    document.write("El dia "+diasemana+" de la semana es Miercoles" )
}else if(diasemana==4){
    document.write("El dia "+diasemana+" de la semana es Jueves" )
}else if(diasemana==5){
    document.write("El dia "+diasemana+" de la semana es Viernes" )
}else if(diasemana==6){
    document.write("El dia "+diasemana+" de la semana es Sabado" )
}else {
    document.write("El dia "+diasemana+" de la semana es Domingo" )
}*/
//ejercicio 11
/*
var edad =parseInt(prompt("ingrese su edad en numeros porfavor"));
if (edad<=12){
    document.write("su edad es " +edad+ "y es Infante" );
}
else if((edad>12)&&(edad<18)){
    document.write("su edad es " +edad+ "y es adolescente" );

}else if((edad>=18)&&(edad<=28)){
    document.write("su edad es " +edad+ "y es adulto adolescente" );
}else if((edad>=29)&&(edad<=49)){
    document.write("su edad es " +edad+ "y es Adulto" );
}else{
    document.write("su edad es " +edad+ "y es Adulto Mayor" );
}*/

//ejercicio 14
  var nacimiento = parseInt(prompt("digite su año de nacimiento"));
  var mesNacimiento=parseInt(prompt("digite su mes de nacimiento"));
  var dianacimiento=parseInt(prompt("digite su dia de nacimiento"));
  var anoaTual=new Date();
  var edad = anoaTual.getFullYear()-nacimiento; 
  var mesATual =anoaTual.getMonth()+1;
  var diaATUAL=anoaTual.getDay();
  if(mesNacimiento>=mesATual && dianacimiento > diaATUAL){
    document.write("usted tiene"+(edad-1)+"años");
  }else{
    document.write("usted tiene"+edad+"años");
  }





