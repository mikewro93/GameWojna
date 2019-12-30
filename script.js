

//Workout the mechanism behind the game

//1. Set up score holder, active player, isPlaying

// var deckOfCards = ['2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD'];


 var cardClubs = ['2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC'];
 var cardHearts = ['2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH'];
 var cardSpades = ['2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS'];
 var cardDiamonds = ['2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD'];


// Constructor of card Object
function Card(name, value) { 
    this.name = name; 
    this.value = value; 
} 



var scores = [0, 0];
var activePlayer, isGamePlaying;
var actualCard = ['red_back', 'red_back'];

var deckCards = [];

var fillArray = function(){
    for(i=0; i<cardClubs.length ; i++){
        deckCards.push(new Card(cardClubs[i] , i+2 ));
    }
    for(i=0; i<cardHearts.length ; i++){
        deckCards.push(new Card(cardHearts[i] , i+2 ));
    }
    for(i=0; i<cardSpades.length ; i++){
        deckCards.push(new Card(cardSpades[i] , i+2 ));
    }
    for(i=0; i<cardDiamonds.length ; i++){
        deckCards.push(new Card(cardDiamonds[i] , i+2 ));
    }
}


var init = function(){

    deckCards = [];
    fillArray();


    //
    document.querySelector('#button-shuffle').textContent = 'Deal!';
    //Set up counter
    
    document.querySelector('#card-counter').textContent = deckCards.length;
    //Reset Scores

    scores = [0, 0];


    document.querySelector('#img-0').src = 'PNG' + '\\' + 'gray_back.png';
    document.querySelector('#img-1').src = 'PNG' + '\\' + 'gray_back.png';
    

    document.querySelector('#round-winner-indicator').textContent = '?';

    document.querySelector('#player-0-score').textContent = scores[0];
    document.querySelector('#player-1-score').textContent = scores[1];


    //
}



var drawCardDisp = function(array){
        var index = Math.floor(Math.random() * array.length);
        console.log(array[index]); // Log the item

        var tempCard = array[index];
        array.splice(index, 1); // Remove the item from the array
        console.log(array);

        return tempCard;
}



var shuffleBtnDOM = document.querySelector('#button-shuffle');
var newGameBtnDOM = document.querySelector('#button-new-game');


shuffleBtnDOM.addEventListener('click', function(){


    gameGamePlaying = 1;

    //IF DECK empty - WATCH for it



    if(deckCards.length !== 0 ){
        var tempCardFir = drawCardDisp(deckCards);

        //check
        console.log(tempCardFir.name);
    
        document.querySelector('#img-0').src = 'PNG' + '\\' + tempCardFir.name + '.png';

        var tempCardSec = drawCardDisp(deckCards);

        //check
        console.log(tempCardSec.name);
    
        document.querySelector('#img-1').src = 'PNG' + '\\' + tempCardSec.name + '.png';


        //Compare two 
        if(tempCardFir.value > tempCardSec.value) {
            scores[0] += 2;
            document.querySelector('#round-winner-indicator').textContent = '>';

            document.querySelector('#player-0-score').textContent = scores[0];
        }
        else if(tempCardFir.value === tempCardSec.value){
            scores[0] += 1;
            scores[1] += 1;
            document.querySelector('#round-winner-indicator').textContent = '=';

            document.querySelector('#player-0-score').textContent = scores[0];
            document.querySelector('#player-1-score').textContent = scores[1];
        }
        else{
            scores[1] += 2;
            document.querySelector('#round-winner-indicator').textContent = '<';

            document.querySelector('#player-1-score').textContent = scores[1];
        }

        //Delete 2 from counter 


        document.querySelector('#card-counter').textContent -= 2;










    }else{
        document.querySelector('#button-shuffle').textContent = 'GAME OVER';
    }
})



newGameBtnDOM.addEventListener('click', function(){
    init();

})



init();

