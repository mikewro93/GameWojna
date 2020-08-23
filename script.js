
const colors = ['C', 'H', 'S', 'D'];
let deckCards = [];
let indicator = "?";


const player0 = {
    currentCard: {
        name: 'gray_back',
    },
    score: 0,
    indicator: '>'
};

const player1 = {
    currentCard: {
        name: 'gray_back',
    },
    score: 0,
    indicator: '<'
};

var init = function () {
    deckCards = [];
    colors.forEach(color => {
        const baseCards = [{ name: `2${color}`, value: 2 }, { name: `3${color}`, value: 3 }, { name: `4${color}`, value: 4 }, { name: `5${color}`, value: 5 }, { name: `6${color}`, value: 6 }, { name: `7${color}`, value: 7 }, { name: `8${color}`, value: 8 }, { name: `9${color}`, value: 9 }, { name: `10${color}`, value: 10 }, { name: `J${color}`, value: 11 }, { name: `Q${color}`, value: 12 }, { name: `K${color}`, value: 13 }, { name: `A${color}`, value: 14 }];
        deckCards.push(...baseCards);
        //...Pushuje kazdy element z osobna 
    })

    player0.score = 0;
    player0.currentCard = {
        name: 'gray_back'
    };

    player1.score = 0;
    player1.currentCard = {
        name: 'gray_back'
    };

    indicator = '?';

    drawElements();
    drawShuffleButton();
}

const getCard = () => {
    const index = Math.floor(Math.random() * deckCards.length);
    const tempCard = deckCards[index];
    deckCards.splice(index, 1); // Remove the item from the array
    return tempCard;
}

const drawShuffleButton = () => {
    const hasCards = deckCards.length !== 0
    const shuffleButton = $('#button-shuffle');
    shuffleButton.text(hasCards ? 'Deal!' : 'GAME OVER');
    shuffleButton.attr('disabled', !hasCards);
}

const drawElements = () => {
    $('#img-0').attr('src', `PNG\\${player0.currentCard.name}.png`);
    $('#img-1').attr('src', `PNG\\${player1.currentCard.name}.png`);
    $('#player-0-score').text(player0.score);
    $('#player-1-score').text(player1.score);
    $('#round-winner-indicator').text(indicator);
    $('#card-counter').text(deckCards.length);
}

const getWinner = () => {
    if (player0.currentCard.value > player1.currentCard.value) {
        return player0;
    }
    if (player0.currentCard.value < player1.currentCard.value) {
        return player1;
    }
    return null;
}

const adjustScores = () => {
    const winner = getWinner();
    if (!winner) {
        player0.score += 1;
        player1.score += 1;
        indicator = "=";
        return;
    }
    winner.score += 2;
    indicator = winner.indicator;
}

$(document).ready(function () {
    init();

    $('#button-new-game').click(function () {
        $("#card-counter").slideDown();
        init();
    })

    $('#button-shuffle').click(function () {
        player0.currentCard = getCard();
        player1.currentCard = getCard();

        adjustScores();
        drawElements();
        drawShuffleButton();
    })
});


console.log('a');


var acb = [ 33, 2 ,2 , 13];


function mult (a){

    return a*10;
}


var codes = [1 , 2 , 3 , 5];
console.log(codes);

// function appendCodes(users) {

//     codes = users.map(function (user) {
//         return user.code;
//     })
// }

// var tom = {
//     code: 'tommmy'    

// }

// appendCodes([
//     {
//         code:6
//     },
//     tom ={
//         code: 15,
//     },
//     john = {
//         code: 20
//     }
// ])

console.log(codes);

codes = [
    {
        val:4
    },
    {
        val:5
    },
    {
        val:19
    }
]

function getMax(array){

    var max = -Infinity;

    array.forEach(function(numberxx){
        max = Math.max(numberxx.val, max);
    })
    return max;
}

var xxx = getMax(codes);

console.log(xxx);


