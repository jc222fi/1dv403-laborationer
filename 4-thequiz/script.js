"use strict";

var MyForm = {
    
    nextURL: "http://vhost3.lnu.se:20080/question/1",
    counterArray: [],
    question: "",
    init: function(){
        
        MyForm.createForm();
        MyForm.getData();
        
    },
    
    //skapar formuläret för applikationen
    createForm: function(){
        var div = document.getElementById("container");
        var input = document.createElement("input");
        input.setAttribute("id", "answer");
        
        var button = document.createElement("button");
        button.setAttribute("id", "submit");
        button.innerHTML = "Skicka";
        
        var pText = document.createElement("p");
        pText.setAttribute("id", "text");
        
        div.appendChild(pText);
        div.appendChild(input);
        div.appendChild(button);
        
    },
    
    //funktionalitet för att ta emot data
    getData: function(){
        var xhr = new XMLHttpRequest();
        var pQuestion = document.getElementById("text");
        var data = "";
            
        xhr.onreadystatechange = function(){
            
            if(xhr.readyState === 4){
                //om allt är ok och vi kommunicerar med servern hanterar vi datan vi får
                if(xhr.status === 200||xhr.status === 304){
                    data = JSON.parse(xhr.responseText);
                    MyForm.question = data.question;
                    pQuestion.innerHTML = MyForm.question;
                    MyForm.nextURL = data.nextURL;
                    MyForm.sendData();
                    
                }
                //annars kollar vi om det är slut på frågor eller om nåt gått fel
                else{
                    //om frågorna är slut är quizet slut, statistik om antal gissningar per fråga presenteras
                    if(MyForm.nextURL === undefined){
                        console.log("Spelet slut");
                        for(var i=0; i<MyForm.counterArray.length;i++){
                            var pResult = document.createElement("p");
                            document.getElementById("container").appendChild(pResult);
                            pResult.innerHTML = "På fråga "+(i+1)+" krävdes "+MyForm.counterArray[i]+" försök.";
                        }
                    }
                    //annars är något fel
                    else{
                        console.log("FEL GET");
                    }
                }
            }
        };
        
        xhr.open("GET", MyForm.nextURL, true);
        xhr.send(null);
    },
    
    //funktionalitet för att skicka data
    sendData: function(){
        var xhr = new XMLHttpRequest();
        var answer = document.getElementById("answer");
        var submit = document.getElementById("submit");
        var text = document.getElementById("text");
        var data = "";
        var counter = 0;
        
        //skicka data först när användaren klickar på knappen
        submit.onclick = function(){
            xhr.onreadystatechange = function(){
              
                if(xhr.readyState === 4){
                    counter +=1;
                    console.log(counter);
                    data = JSON.parse(xhr.responseText);
                    //om användaren svarar rätt vill vi ha fram nästa fråga
                    if(xhr.status === 200||xhr.status === 304){
                        MyForm.counterArray.push(counter);
                        text.innerHTML = data.message;
                        MyForm.nextURL = data.nextURL;
                        setTimeout(function(){
                            MyForm.getData();
                        }, 1000);
                    }
                    //annars är det fel och vi vill ha samma fråga igen
                    else{
                        text.innerHTML = data.message;
                        setTimeout(function(){
                            text.innerHTML = MyForm.question;
                        }, 1000);
                    }
                }
            };
            xhr.open("POST", MyForm.nextURL, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            var returnData = {
                "answer": answer.value
            }; 
            xhr.send(JSON.stringify(returnData));
        };
    }
};
window.onload = MyForm.init;