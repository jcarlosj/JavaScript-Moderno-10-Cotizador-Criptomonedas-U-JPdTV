/* Clase Interfaz */
class Interfaz {
    
    /* Constructor */
    constructor() {
        this .init();
    }

    /* Creamos un método init() al Estilo Angular para no sobre cargar el constructor */
    init() {
        this .construirSelectCriptomonedas();
    }

    /* Contruye un elemento select apartir de datos (Monedas) */
    construirSelectCriptomonedas() {
        // Obtiene un 'Array' de monedas de la API 
        cotizador .obtenerMonedasAPI()
            .then( data => {
                console .log( data );                                                   // Objeto con un 'Array' monedas
                // Crear un elemento SELECT
                const monedas = data .monedas,                                          // 'Array' de Objetos con cada moneda
                      select = document .getElementById( 'criptomoneda' );              // Obtiene el elemento select del DOM
            
                // Recorre y construye SELECT con los datos de la REST API
                monedas .forEach( moneda => {
                    // Agrega ID
                    const option = document .createElement( 'option' );                 // Crea un elemento 'option'
                    
                    option .value = moneda .id;                                         // Agrega la propiedad 'value' al elemento 'option'
                    option .appendChild( document .createTextNode( moneda .name ) );    // Agrega un nodo de texto al elemento 'option'
                    select .appendChild( option );                                      // Agrega el elemento 'option' dentro del 'select'    
                });
            });
    }

}