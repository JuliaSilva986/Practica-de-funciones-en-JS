// Ejercicios leccion "Funciones en JavaScript"

// Calculadora simple: 

/* Descripción: Crea una calculadora simple que permita realizar operaciones matemáticas básicas: 
suma, resta, multiplicación y división.

Requisitos:
Define cuatro funciones: sumar, restar, multiplicar, y dividir, cada una de las cuales toma dos parámetros y devuelve el resultado de la operación correspondiente.
En el programa principal, llama a cada función con diferentes pares de números y muestra el resultado en la consola. */

let calculadora={
    "suma": function sumar(a,b){
        return a+b;
    },
    "resta": function resta(a,b){
        return a-b;
    },
    "multiplicacion": function mult(a,b){
        return a*b;
    },
    "dividir": function div(a,b){
        if (b===0){
            return "No se puede dividir entre 0";
        } else {
            return a/b;
        }
    }
}

console.log(calculadora.suma(3,2))
console.log(calculadora.resta(6,5))
console.log(calculadora.multiplicacion(7,8))
console.log(calculadora.dividir(4,0))

// Conversor de Temperaturas

/* Descripción: Crea una función que convierta temperaturas entre grados Celsius y Fahrenheit.

Requisitos:
Define dos funciones: celsiusAFahrenheit y fahrenheitACelsius.
celsiusAFahrenheit debe tomar una temperatura en Celsius y devolver la temperatura equivalente en Fahrenheit.
fahrenheitACelsius debe tomar una temperatura en Fahrenheit y devolver la temperatura equivalente en Celsius.
En el programa principal, llama a ambas funciones con ejemplos de temperaturas y muestra los resultados en la consola.*/

function celsiusAFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}

function fahrenheitACelsius(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}

console.log( "30° Celsius equivale a " + celsiusAFahrenheit(30) + " Fahrenheit");
console.log("100° Fahrenheit equivale a " + fahrenheitACelsius(100) + " Celcius");