// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) Los nombres de todos las pizzas.
// d) Los precios de las pizzas.
// e) El nombre de cada pizza con su respectivo precio.

// Cada respuesta debe ser, como siempre, usuario friendly. 
// Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
// Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

// Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸

const mostrarDiv = document.querySelector('.mostrar');
const btnPar = document.querySelector('#par');
const btnMenor = document.querySelector('#menor');
const btnPizzas = document.querySelector('#nombrePizzas');
const btnPrice = document.querySelector('#precio');
const mostrarPizzasDiv = document.querySelector('.mostrar-pizzas');

document.addEventListener('DOMContentLoaded', () =>{
    const url = 'pizzas.json';

    fetch(url) 
        .then( resp => {
            return resp.json();
        })
        .then( resp => {
            limpiarHTML()
            mostrarHTML(resp);
        })
});

function mostrarHTML(pizza) {

    //Boton para mostrar los id impar
    btnPar.addEventListener('click', () =>{
        limpiarHTML();

        pizza.map( piz => {
            const {id, nombre, ingredientes, precio} = piz;
            if( (id % 2 ) !== 0) {
                const idP = document.createElement('p');
                const nombreP = document.createElement('p');
                const ingreP = document.createElement('p');
                const precioP = document.createElement('p');
                const resultadoDiv = document.createElement('div')
                resultadoDiv.classList.add('nombres-pizzas')


                idP.textContent = `Id: ${id}`;
                nombreP.textContent = `Nombre: ${nombre}`;
                ingreP.textContent = `Ingredientes: ${ingredientes}`
                precioP.textContent = `Precio: $${precio}`;

                resultadoDiv.appendChild(idP);
                resultadoDiv.appendChild(nombreP);
                resultadoDiv.appendChild(ingreP);
                resultadoDiv.appendChild(precioP);

                mostrarDiv.appendChild(resultadoDiv)
            }
        })
    });


    //Boton para mostrar las pizzas con un precio menor a $600
    btnMenor.addEventListener('click', () =>{
        limpiarHTML()

        pizza.map (piz => {
            const {id, nombre, ingredientes, precio} = piz;
            if( precio <= 600) {
                const idP = document.createElement('p');
                const nombreP = document.createElement('p');
                const ingreP = document.createElement('p');
                const precioP = document.createElement('p');
                const resultadoDiv = document.createElement('div')
                resultadoDiv.classList.add('nombres-pizzas')


                idP.textContent = `Id: ${id}`;
                nombreP.textContent = `Nombre: ${nombre}`;
                ingreP.textContent = `Ingredientes: ${ingredientes}`
                precioP.textContent = `Precio: $${precio}`;

                resultadoDiv.appendChild(idP);
                resultadoDiv.appendChild(nombreP);
                resultadoDiv.appendChild(ingreP);
                resultadoDiv.appendChild(precioP);

                mostrarDiv.appendChild(resultadoDiv)

            };
        });
    });

    //Boton para mostrar todos los nombres de las pizzas
    btnPizzas.addEventListener('click', () => {

        limpiarHTML()

        pizza.map (piz => {
            const {id, nombre, ingredientes, precio} = piz;
            const nombrePizza = document.createElement('p');
            nombrePizza.textContent = `Pizza: ${nombre}`;
            nombrePizza.classList.add('nombres-pizzas')
            const resultadoDiv = document.createElement('div');
            resultadoDiv.classList.add('nombres-pizzas')
            resultadoDiv.appendChild(nombrePizza);
            mostrarDiv.appendChild(resultadoDiv)
        });
    });

    //Boton para mostrar el precio de todas las pizzas
    btnPrice.addEventListener('click', () => {
        limpiarHTML()
        pizza.map (piz => {
            const {id, nombre, ingredientes, precio} = piz;
            const nombrePizzas = document.createElement('p');
            const precioPizzas = document.createElement('p');
            nombrePizzas.textContent = `Nombre: ${nombre}`;
            precioPizzas.textContent = `Precio: $${precio }`;
            const resultadoDiv = document.createElement('div');
            resultadoDiv.classList.add('nombres-pizzas');
            resultadoDiv.appendChild(nombrePizzas);
            resultadoDiv.appendChild(precioPizzas);
            mostrarDiv.appendChild(resultadoDiv)
            
        });
    })


}

function limpiarHTML() {
    while(mostrarDiv.firstChild) {
        mostrarDiv.removeChild(mostrarDiv.firstChild);
    }
}