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
        var divBack = "";
        var divFront ="";
        var a = "";
        var imgFront = "";
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
            
            divBack = document.createElement("DIV");
            //a = document.createElement("A");
            /*a.href = "#";
            imgBack = document.createElement("IMG");
            imgBack.src = "pics/0.png";
            a.appendChild(imgBack);
            divBack.appendChild(a);
            td.appendChild(divBack);*/
            
            divFront = document.createElement("DIV");
            a = document.createElement("A");
            a.href = "#";
            imgFront = document.createElement("IMG");
            imgFront.src = "pics/"+arrayOfTiles[i]+".png";
            divFront.appendChild(imgFront);
            a.appendChild(divBack);
            a.appendChild(divFront);
            td.appendChild(a);
            
            //divFront.setAttribute("class", "faceup");
            //divBack.setAttribute("class", "facedown");
            
            a.onclick = function(){
                
                // var e = event.target;
                // console.log(e);
                
                // if(e.nodeName === "DIV"){
                //     console.log("Du har klickat på div");
                //     console.log(e.parentNode);
                //     e.parentNode.querySelector(".faceup").classList.toggle("faceup");
                //     e.parentNode.firstChild.classList.toggle("facedown");
                // }
                // else if(e.nodeName === "IMG"){
                //     console.log("Du har klickat på img");
                //     e.parentNode.firstChild.setAttribute("class", "facedown");
                // }
                MemoryGame.switchTile();
                return false;
            };
            divFront.setAttribute("class", "faceup");
            
        }
        
    },
    
    switchTile: function(){
        
        var e = event.target;
        console.log(e);
                
        if(e.nodeName === "DIV"){
            console.log("Du har klickat på div");
            console.log(e.parentNode);
            e.parentNode.querySelector(".faceup").classList.toggle("faceup");
            e.parentNode.firstChild.classList.toggle("facedown");
        }
        else if(e.nodeName === "IMG"){
            console.log("Du har klickat på img");
            e.parentNode.parentNode.firstChild.nextSibling.classList.toggle("faceup");
            e.parentNode.parentNode.firstChild.classList.toggle("facedown");
        }
    }
    
};

window.onload = MemoryGame.init;