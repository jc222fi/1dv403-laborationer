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
        var a = "";
        var imgFront = "";
        var imgBack = "";
        var i = 0;
        var numberOfGuesses = 0;
        var matches = 0;
        MemoryGame.memoryBoard = new RandomGenerator.getPictureArray(rows, cols); //Genererar ett antal rader i ett antal kolumner
        var arrayOfTiles = MemoryGame.memoryBoard;
        console.log(arrayOfTiles);
        
        body = document.querySelector("BODY");
        p = document.createElement("P");
        body.appendChild(p);
        
        //Skapa brädet
        MemoryGame.createBoard(rows, cols);
        
        //Plockar ut alla td element och skjuter in en bild
        tds = document.querySelectorAll("#memorygame td");
        for(i=0; i<tds.length; i++){
            td = tds[i];
            
            a = document.createElement("A");
            a.href = "#";
            imgFront = document.createElement("IMG");
            imgBack = document.createElement("IMG");
            imgBack.src = "pics/0.png";
            imgFront.src = "pics/"+arrayOfTiles[i]+".png";
            a.appendChild(imgBack);
            a.appendChild(imgFront);
            td.appendChild(a);
            
            var myEvent = function(){
                var clickedTag = "";
                
                if(event.target.nodeName === "A"){
                    clickedTag = event.target.firstChild;
                }
                else{
                    clickedTag = event.target;
                }
                
                //Om du klickar på en ej uppvänd bricka
                if(clickedTag.getAttribute("SRC") ==="pics/0.png" && clicks<2){
                    clickedTag.parentNode.querySelector(".faceup").classList.toggle("faceup");
                    clickedTag.classList.toggle("facedown");
                    clickedTiles.push(clickedTag);
                    console.log(clickedTiles);
                    clicks++;
                    
                    //Kolla så att det inte är en tredje bricka som vänds upp, och om de matchar
                    if(clicks === 2 && clickedTiles[0].nextSibling.getAttribute("src") === clickedTiles[1].nextSibling.getAttribute("src")){
                        console.log("Grattis du har hittat ett par");
                        clickedTiles.length = 0;
                        clicks = 0;
                        numberOfGuesses++;
                        matches++;
                        //Har du hittat alla par har du vunnit
                        if(matches === (rows*cols)/2){
                            p.innerHTML = "GRATTIS! Du klarade det på "+numberOfGuesses+" gissningar";
                        }
                    }
                    //Om inget par, vänd tillbaka med en halv sekunds fördröjning
                    else if(clicks === 2 && clickedTiles[0].nextSibling.getAttribute("src") != clickedTiles[1].nextSibling.getAttribute("src")){
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
                }
                //Om du försöker vända en tredje bricka eller en som redan är uppvänd
                else{
                    console.log("Du kan inte klicka på den här");
                }
                return false;
            };
            a.addEventListener("click", myEvent);
            a.addEventListener("onkeydown", myEvent);
            imgFront.setAttribute("class", "faceup");
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