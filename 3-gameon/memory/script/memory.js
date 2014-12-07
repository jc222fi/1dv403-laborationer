"use strict";
var MemoryGame = {
    
    memoryBoard: [],
    
    init: function(){
        
        MemoryGame.createGameBoard(4,4);
        
    },
    
    createGameBoard: function(rows, cols){
        
        var clicks = 0;
        var clickedTiles = [];
        var body = "";
        var p = "";
        var tds = "";
        var td = "";
        var divBack = "";
        var divFront ="";
        var a = "";
        var imgFront = "";
        var i = 0;
        var numberOfGuesses = 0;
        MemoryGame.memoryBoard = new RandomGenerator.getPictureArray(rows, cols); //Genererar ett antal rader i ett antal kolumner
        var arrayOfTiles = MemoryGame.memoryBoard;
        console.log(arrayOfTiles);
        body = document.querySelector("BODY");
        p = document.createElement("P");
        body.appendChild(p);
        p.innerHTML = "Antal gissningar: "+numberOfGuesses;
        
        MemoryGame.createBoard(rows, cols);
        
        //Plockar ut alla td element och skjuter in en bild
        tds = document.querySelectorAll("#memorygame td");
        for(i=0; i<tds.length; i++){
            td = tds[i];
            
            divBack = document.createElement("DIV");
            divFront = document.createElement("DIV");
            a = document.createElement("A");
            a.href = "#";
            imgFront = document.createElement("IMG");
            imgFront.src = "pics/"+arrayOfTiles[i]+".png";
            divFront.appendChild(imgFront);
            a.appendChild(divBack);
            a.appendChild(divFront);
            td.appendChild(a);
            
            a.onclick = function(event){
                //p.innerHTML = "Antal gissningar: "+numberOfGuesses;
                //console.log("antal gissningar"+numberOfGuesses);
                //var e = event.target;
                //console.log(e);
                
                if(event.target.nodeName === "DIV" && clicks<2){
                    console.log("Du har klickat på div");
                    event.target.parentNode.querySelector(".faceup").classList.toggle("faceup");
                    event.target.parentNode.firstChild.classList.toggle("facedown");
                    clickedTiles.push(event.target);
                    console.log(clickedTiles.length);
                    console.log(clickedTiles);
                    
                    clicks++;
                    if(clicks === 2 && clickedTiles[0].nextSibling.firstChild.getAttribute("src") === clickedTiles[1].nextSibling.firstChild.getAttribute("src")){
                        console.log("Grattis du har hittat ett par");
                        clickedTiles.length = 0;
                        clicks = 0;
                        numberOfGuesses++;
                    }
                    else if(clicks === 2 && clickedTiles[0].nextSibling.firstChild.getAttribute("src") != clickedTiles[1].nextSibling.firstChild.getAttribute("src")){
                        console.log("Inget par");
                        numberOfGuesses++;
                        
                        setTimeout(function() {
                            clickedTiles[0].parentNode.querySelector(".facedown").classList.toggle("facedown");
                            clickedTiles[1].parentNode.querySelector(".facedown").classList.toggle("facedown");
                            clickedTiles[0].parentNode.firstChild.nextSibling.classList.toggle("faceup");
                            clickedTiles[1].parentNode.firstChild.nextSibling.classList.toggle("faceup");
                            clicks = 0;
                            clickedTiles.length = 0;
                        }, 500);
                    }
                    p.innerHTML = "Antal gissningar: "+numberOfGuesses;
                }
                else{
                    console.log("Du har redan klickat på den här");
                }
                //p.innerHTML = "Antal gissningar: "+numberOfGuesses;
                return false;
            };
            divFront.setAttribute("class", "faceup");
        }  
    },
    
    createBoard: function(rows, cols){
        
        var gameBoard = document.getElementById("memorygame");
        var rowCount = 0;
        var cellCount = 0;
        var tableHead = document.createElement("THEAD");
        var tableFoot = document.createElement("TFOOT");
        var tableRow = document.createElement("TR");
        var tableCell = document.createElement("TD");
        var i = 0;
        
        gameBoard.appendChild(tableHead);
        tableHead.appendChild(tableRow);
        gameBoard.appendChild(tableFoot);
        
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
        
    }
};

window.onload = MemoryGame.init;