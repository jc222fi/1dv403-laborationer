"use strict";
var MemoryGame = {
    
    memoryBoard: [],
    
    init: function(){
        
        MemoryGame.createGameBoard(4,2);
        
    },
    
    createGameBoard: function(rows, cols){
        
        var gameBoard = document.getElementById("memorygame");
        var rowCount = "";
        var cellCount = "";
        var tableRow = "";
        var tableCell = "";
        var a = "";
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
                tile = arrayOfTiles[i];
                
                a = document.createElement("A");
                var img = document.createElement("IMG");
                img.src = "pics/"+tile+".png";
                a.appendChild(img);
                tableCell.appendChild(a);
                console.log(tableCell);
                i++;
            }
        }
        a.onclick = MemoryGame.switchTile();
        
    },
    
    switchTile: function(){
        
        //Här ska det hända nåt
    }
    
};

window.onload = MemoryGame.init;