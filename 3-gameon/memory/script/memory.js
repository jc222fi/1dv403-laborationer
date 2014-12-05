"use strict";
var MemoryGame = {
    
    memoryBoard: [],
    
    init: function(){
        
        MemoryGame.memoryBoard = new RandomGenerator.getPictureArray(4, 2); //Genererar 4 rader i 2 kolumner
        console.log(MemoryGame.memoryBoard);
    },
};

window.onload = MemoryGame.init;