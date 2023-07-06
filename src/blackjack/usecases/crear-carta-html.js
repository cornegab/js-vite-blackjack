/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} retorna imagen de la carta
 */
export const crearCartaHTML = ( carta ) => {


    if(!carta) throw new Error('LA carta es un arguemnto obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}