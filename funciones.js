// Problema: Seguimiento de Libros

/*
Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

Instrucciones para resolver el problema:
Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído. */

let arrayLibros=[];

function agregarLibro(titulo){
    return arrayLibros.push(titulo);
}

function mostrarLibrosLeidos(){
    for (let i=0; i<arrayLibros.length; i++){
        console.log(arrayLibros[i]);
    }
}

agregarLibro("Calculus on manifolds");
agregarLibro("Integers, polynomials and rings");
agregarLibro("Linear algebra done right");
agregarLibro("A taste of topology");
mostrarLibrosLeidos();