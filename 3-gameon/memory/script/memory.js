"use strict";
var MemoryGame = {
    
    memoryBoard: [],
    
    init: function(){
        
        //MemoryGame.memoryBoard = new RandomGenerator.getPictureArray(4, 2); //Genererar 4 rader i 2 kolumner
        
        MemoryGame.createGameBoard();
        
    },
    
    createGameBoard: function(){
        
        var gameBoard = document.getElementById("memorygame");
        var rows = 4;
        var cols = 2;
        var rowCount = "";
        var cellCount = "";
        var tableRow = "";
        var tableCell = "";
        MemoryGame.memoryBoard = new RandomGenerator.getPictureArray(rows, cols); //Genererar 4 rader i 2 kolumner
        
        for(rowCount=0; rowCount<rows; rowCount++){
            tableRow = document.createElement("TR");
            gameBoard.appendChild(tableRow);
            for(cellCount=0; cellCount<cols; cellCount++){
                tableCell = document.createElement("TD");
                tableRow.appendChild(tableCell);
                tableCell.innerHTML = MemoryGame.memoryBoard(rowCount, cellCount);
            }
        }
        
        console.log(rowCount);
    },
};

window.onload = MemoryGame.init;