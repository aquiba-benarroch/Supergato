//Funcion para crear un supergato de 9x9
//Utilizamos window.onload para asegurarnos de que el DOM esté completamente cargado antes de ejecutar el código
window.onload = function () {
    function createSupergato(rows, columns) {
        const supergato = document.getElementById("supergato");
        for (let i = 0; i < rows; i++) { // Crear cada celda del supergato
            const gato = document.createElement("div");
            gato.className = "gato";
            for (let j = 0; j < columns; j++) { // Crear cada celda del gato interior
                const minigato = document.createElement("div");
                minigato.className = "minigato";
                gato.appendChild(minigato); 
            }
            supergato.appendChild(gato); // Añadir el gato a la cuadrícula
        }
    }

    // Crear dinámicamente una cuadrícula de 9x9
    createSupergato(9, 9);
};