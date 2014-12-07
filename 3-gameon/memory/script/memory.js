"use strict";
var MemoryGame = {
    
    memoryBoard: [],
    
    init: function(){
        
        MemoryGame.createGameBoard(4,2);
        
    },
    
    createGameBoard: function(rows, cols){
        
        var clicks = 0;
        var clickedTiles = [];
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
            
            a.onclick = function(e){
        
                var numberOfGuesses = 0;
                e = event.target;
                console.log(e);
                
                if(e.nodeName === "DIV"){
                    console.log("Du har klickat på div");
                    e.parentNode.querySelector(".faceup").classList.toggle("faceup");
                    e.parentNode.firstChild.classList.toggle("facedown");
                    clickedTiles.push(e);
                    console.log(clickedTiles.length);
                    console.log(clickedTiles);
                    clicks++;
                    if(clicks === 2 && clickedTiles[0].nextSibling.firstChild.getAttribute("src") === clickedTiles[1].nextSibling.firstChild.getAttribute("src")){
                        console.log("Grattis du har hittat ett par");
                        clickedTiles.length = 0;
                        clicks = 0;
                    }
                    else if(clicks === 2 && clickedTiles[0].nextSibling.firstChild.getAttribute("src") != clickedTiles[1].nextSibling.firstChild.getAttribute("src")){
                        console.log("Inget par");
                        
                        setTimeout(function() {
                            clickedTiles[0].parentNode.querySelector(".facedown").classList.toggle("facedown");
                            clickedTiles[1].parentNode.querySelector(".facedown").classList.toggle("facedown");
                            clickedTiles[0].parentNode.firstChild.nextSibling.classList.toggle("faceup");
                            clickedTiles[1].parentNode.firstChild.nextSibling.classList.toggle("faceup");
                            clicks = 0;
                            clickedTiles.length = 0;
                        }, 1000);
                    }
                }
                else if(e.nodeName === "IMG"){
                    console.log("Du har redan klickat på den här");
                }
                return false;
            };
            divFront.setAttribute("class", "faceup");
        }  
    },
};

window.onload = MemoryGame.init;