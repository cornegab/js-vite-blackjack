/**
 * Esta función sirve para tomar una carta del Deck.
 * @param {Array<string>} deck Ejemplo: ['2C','10D','AC'].. 
 * @returns {string} retorna una carta del Deck y lo borra del arreglo.
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}