function createCard(face, suit) {
    const validFaces =['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const suitToString = {
        'S': '\u2660', 
        'H': '\u2663', 
        'D': '\u2666', 
        'C': '\u2665', 
    };

    if(validFaces.includes(face) == false) {
        throw new Error('Invalid face');
    } else if (Object.keys(suitToString).includes(suit) == false) {
        throw new Error('Invalid suit');
    }

    return{
        face,
        suit,
        toString(){
            return `${face}${suitToString[suit]}`;
        }
    };
}

// createCard('A', 'Y');
// createCard('11', 'Y');
console.log(''+createCard('A', 'S'));