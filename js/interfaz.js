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

    /* Construye un elemento select apartir de datos (Monedas) */
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
                    select .appendChild( option );                                      // Agrega el elemento 'option' dentro del 'select' en el DOM   
                });
            });
    }

    // Mostrar mensaje
    mostrarMensaje( clases, mensaje ) {
        // Crear un elemento DIV
        const div = document .createElement( 'div' ),                                   // Crea un elemento 'div'
              mensajes = document .querySelector( '.mensajes' );                        // Obtiene el elemento con la clase 'mensajes' en el DOM

        div .className = clases;                                                        // Agrega las clases (Material Design) a la propiedad class del elemento 'div'
        div .appendChild( document .createTextNode( mensaje ) );                        // Agrega un nodo de texto al elemento 'div'
        mensajes .appendChild( div );                                                   // Agrega el elemento 'div' dentro del 'div' con la clase 'mensajes' en el DOM   

        // Eliminar mensaje pasados 3 segundos
        setTimeout( () => {
            document .querySelector( '.mensajes div' ) .remove();                       // Elimina el elemento del DOM
        }, 3000 );      // 3seg
    }

}