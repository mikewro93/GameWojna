

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
fillArray();

var scores = [0, 0];
var activePlayer, isPlaying;
var actualCard = ['red_back', 'red_back'];


var drawCardDisp = function(array){
        var index = Math.floor(Math.random() * array.length);
        console.log(array[index]); // Log the item

        var tempCard = array[index];
        array.splice(index, 1); // Remove the item from the array
        console.log(array);

        return tempCard;
}


var dealCards = function(){

    var playerOneCard, playerTwoCard;

    playerOneCard = drawCardDisp(deckOfCards);
    playerTwoCard = drawCardDisp(deckOfCards);

}


drawCardDisp(deckCards);



document.querySelector('#button-shuffle').addEventListener('click', function(){

    //IF DECK empty - WATCH for it

    if(deckCards.length !== 0 ){
        var tempCard = drawCardDisp(deckCards);

        //check
        console.log(tempCard.name);
    
        document.querySelector('#img-0').src = 'PNG' + '\\' + tempCard.name + '.png';
    
    }else{
        document.querySelector('#button-shuffle').textContent = 'GAME OVER';
    }
})


var cardDOM = 

cardDOM