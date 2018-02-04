/* Clase Cotizador */
class Cotizador {

    /* Método Asíncrono: Obtiene JSON con las Criptomonedas */
    async obtenerMonedasAPI() {
        // FecthAPI usando Promises (Se conecta a los datos)
        const urlObtenerMonedas = await fetch( 'https://api.coinmarketcap.com/v1/ticker/' );    
        
        // Respuesta JSON de todas las monedas (Convierte JSON en un 'Array')
        const monedas = await urlObtenerMonedas .json();                                       

        // Retorna un 'Array' de todas las monedas 
        return {                                                                                    
            monedas
        }
        
    }
    
}