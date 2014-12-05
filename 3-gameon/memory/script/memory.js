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
        var tds = "";
        var td = "";
        var a = "";
        var img = "";
        var i = 0;
        MemoryGame.memoryBoard = new RandomGenerator.getPictureArray(rows, cols); //Genererar ett antal rader i ett antal kolumner
        var arrayOfTiles = MemoryGame.memoryBoard;
        console.log(arrayOfTiles);
        
        //Skapar tabellen
        for(rowCount=0; rowCount<rows; rowCount++){
            tableRow = document.createElement("TR");
            gameBoard.appendChild(tableRow);
            for(cellCount=0; cellCount<cols; cellCount++){
                tableCell = document.createElement("TD");
                tableRow.appendChild(tableCell);
                i++;
            }
        }
        //Plockar ut alla td element och skjuter in en bild
        tds = document.querySelectorAll("#memorygame td");
        for(i=0; i<tds.length; i++){
            td = tds[i];
            
            a = document.createElement("A");
            a.href = "#";
            img = document.createElement("IMG");
            img.src = "pics/"+arrayOfTiles[i]+".png";
            a.appendChild(img);
            td.appendChild(a);
            console.log(td);
            a.onclick = function(){
            
            console.log("Klickar lite");
            return false;
        }
            
        }
        
        
    },
    
    switchTile: function(){
        
        //Här ska det hända nåt
    }
    
};

window.onload = MemoryGame.init;