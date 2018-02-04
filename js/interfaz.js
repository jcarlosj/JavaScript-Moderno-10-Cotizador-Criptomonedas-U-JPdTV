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
        cotizador .obtenerMonedasAPI()                                                  // 'Promise'
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

    // Muestra mensaje en el DOM
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

    // Muestra la la cotización en el DOM
    mostrarResultado( idMoneda, cotizacion ) {
        const etiquetaMoneda = `price_${ idMoneda }`,                                   // Construir nombre de la variable precio según la moneda 
                                                                                        // (es la única variable que cambia de nombre en el objeto)
              valor = cotizacion[ etiquetaMoneda ];                                     // Obtiene el valor de la moneda de acuerdo a la etiqueta                                           
        let templateHTML = '';                                                          // Inicializa un Template vacío

        /* Eliminar Resultado de Cotización Previa */
        const resultadoCotizacion = document .querySelector( '#resultado > div' );      // Selecciona el elemento donde se despliega el resultado de cada cotización
        // Valida si existe cotización previa
        if( resultadoCotizacion ) {
            resultadoCotizacion .remove();                                              // Si exite resultado de cotización anterior lo elimina del DOM
        }

        this .mostrarSpinner();                                                         // Despliega el Spinner (Simulación de búsqueda)

        console .log( `Valor de 1 ${ cotizacion .name } en ${ idMoneda .toUpperCase() } = ${ valor }` ); 
        
        // Obtenemos la última actualización
        const fecha = new Date( cotizacion .last_updated * 1000 );                      // Convierte Hora 'Unix TimeStamp' a Fecha y hora estándar (CST – Central Standard Time)
        console .log( fecha );

        // Construir el Template (Agrega los valores al template)
        templateHTML = `
            <div class="card cyan darken-3">
                <div class="card-content white-text">
                    <span class="card-title">El precio de ${ cotizacion .name } a moneda ${ idMoneda .toUpperCase() } es de: ${ valor } </span>
                    <hr />
                    <p><b>Última hora: </b>${ cotizacion .percent_change_1h } </p>
                    <p><b>Último día: </b>${ cotizacion .percent_change_24h } </p>
                    <p><b>Últimos 7 días: </b>${ cotizacion .percent_change_7d } </p>
                    <p><b>Última actualización: </b> ${ fecha .getHours() }:${ fecha .getMinutes() } horas</p>
                </div>
            </div>
        `;

        // Oculta el Spinner y Muestra el resultado de la cotización
        setTimeout( () => {
            document .querySelector( '.spinner img' ) .remove();                            // Oculta el Spinner
            document .querySelector( '#resultado' ) .innerHTML = templateHTML;              // Agrega el Template al DOM   
        }, 3000 );      // 3 segundos
        
    }

    // Muestra un Spinner cuando se realiza la cotización (Simula búsqueda)
    mostrarSpinner() {
        const spinner = document .createElement( 'img' );                               // Crea un elemento 'img'

        spinner .src = 'img/spinner.gif';                                               // Agrega la propiedad 'src' y su valor al elemento 'img'
        document .querySelector( '.spinner' ) .appendChild( spinner );                  // Agrega el elemento 'img' al elemento con la clase 'spinner' en el DOM   
    }


}