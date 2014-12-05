"use strict";
var MemoryGame = {
    
    memoryBoard: [],
    
    init: function(){
        
        //MemoryGame.memoryBoard = new RandomGenerator.getPictureArray(4, 2); //Genererar 4 rader i 2 kolumner
        
        MemoryGame.createGameBoard();
        
    },
    
    createGameBoard: function(rows, cols){
        
        var gameBoard = document.getElementById("memorygame");
        rows = 4;
        cols = 2;
        var rowCount = "";
        var cellCount = "";
        var tableRow = "";
        var tableCell = "";
        var tile = "";
        var i = 0;
        MemoryGame.memoryBoard = new RandomGenerator.getPictureArray(rows, cols); //Genererar ett antal rader i ett antal kolumner
        var arrayOfTiles = MemoryGame.memoryBoard;
        console.log(arrayOfTiles);
        
        for(rowCount=0; rowCount<rows; rowCount++){
            tableRow = document.createElement("TR");
            gameBoard.appendChild(tableRow);
            for(cellCount=0; cellCount<cols; cellCount++){
                tableCell = document.createElement("TD");
                tableRow.appendChild(tableCell);
                
                var text = document.createElement("p");
                tile = arrayOfTiles[i];
                text.innerHTML =""+tile;
                tableCell.appendChild(text);
                console.log(tableCell);
                i++;
            }
        }
        
    },
};

window.onload = MemoryGame.init;