/* Clase Interfaz */
class Interfaz {
    
    /* Constructor */
    constructor() {
        this .init();
    }

    /* Creamos un método init() al Estilo Angular para no sobre cargar el constructor */
    init() {
        this .construirSelect();
    }

    /* Contruye un elemento select apartir de datos (Monedas) */
    construirSelect() {
        // Obtiene un 'Array' de monedas de la API 
        cotizador .obtenerMonedasAPI()
            .then( data => {
                console .log( data );
            });
    }

}