/* Cotizador de Criptomonedas al Instante */
const cotizador = new Cotizador();                                  // Instancia la clase 'Cotizador'
      ui = new Interfaz(),                                          // Instancia la Clase 'Interfaz'
      formulario = document .getElementById( 'formulario' );        // Obtiene el elemento 'form' 

// Evento 'submit' cuando se envian los datos del formulario
formulario .addEventListener( 'submit', e => {
    e .preventDefault();                                            // Previene la ejecución del 'action' por defecto del elemento 'form' en el DOM

    // Obtener la moneda FIAT selecionada 
    const moneda = document .getElementById( 'moneda' ),                            // Obtiene el elemento con el ID 'moneda'
          monedaSeleccionada = moneda .options[ moneda .selectedIndex ] .value,     // Obtiene el valor seleccionado del elemento ID 'moneda'
    // Obtener la Criptomoneda selecionada 
    criptomoneda = document .getElementById( 'criptomoneda' ),                                  // Obtiene el elemento con el ID 'moneda'
    criptomonedaSeleccionada = criptomoneda .options[ criptomoneda .selectedIndex ] .value;     // Obtiene el valor seleccionado del elemento ID 'moneda'
    
    // TO-DEBUG
    console .group( 'Valores seleccionados' );
        console .log( 'Moneda FIAT', monedaSeleccionada );      
        console .log( 'Criptomoneda ', criptomonedaSeleccionada );      
    console .groupEnd();

    // Valida que todos los campos del formulario han sido seleccionados
    if( monedaSeleccionada === '' || criptomonedaSeleccionada === '' ) {
        console .log( 'ERROR', 'Faltan datos...' );
    }
    else {
        console .log( 'Ok!', 'Cotizar' );
    }
});