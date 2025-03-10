// Problema: Seguimiento de Libros

/*
Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

Instrucciones para resolver el problema:
Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído. */

let librosLeidos=[];

function agregarLibro(titulo){
    return librosLeidos.push(titulo);
}

function mostrarLibrosLeidos(){
    for (let i=0; i<librosLeidos.length; i++){
        console.log(librosLeidos[i]);
    }
}

agregarLibro("Calculus on manifolds");
agregarLibro("Integers, polynomials and rings");
agregarLibro("Linear algebra done right");
agregarLibro("A taste of topology");
mostrarLibrosLeidos();