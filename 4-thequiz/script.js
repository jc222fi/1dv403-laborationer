"use strict";

var MyForm = {
    
    init: function(){
        MyForm.createForm();
        MyForm.getData();
        MyForm.sendData();
    },
    
    message: function(){
      
      //Här ska det hända lite grejer
      
        
    },
    
    createForm: function(){
        var div = document.getElementById("container");
        var input = document.createElement("input");
        input.setAttribute("id", "answer");
        var button = document.createElement("button");
        button.setAttribute("id", "submit")
        button.innerHTML = "Skicka";
        var pQuestion = document.createElement("p");
        pQuestion.setAttribute("id", "question");
        
        div.appendChild(pQuestion);
        div.appendChild(input);
        div.appendChild(button);
        
    },
    
    getData: function(){
        var xhr = new XMLHttpRequest();
        var pQuestion = document.getElementById("question");
        
            
        xhr.onreadystatechange = function(){
          
            if(xhr.readyState === 4){
                if(xhr.status === 200||xhr.status === 304){
                    var data = JSON.parse(xhr.responseText);
                    pQuestion.innerHTML = data.question;
                    console.log(data);
                    
                }
                else{
                    console.log("FEL GET");
                }
            }
        };
        
        xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
        xhr.send(null);
    },
    
    sendData: function(){
        var xhr = new XMLHttpRequest();
        var answer = document.getElementById("answer");
        var submit = document.getElementById("submit");
        
        submit.onclick = function(){
            xhr.onreadystatechange = function(){
              
                if(xhr.readyState === 4){
                    if(xhr.status === 200||xhr.status === 304){
                    
                        var data = JSON.parse(xhr.responseText);
                        console.log(data);
                        var pTag = document.createElement("P");
                        pTag.innerHTML = "";
                        var div = document.createElement("DIV");
                        div.appendChild(pTag);
                    }
                    else{
                        console.log("FEL POST");
                    }
                }
            };
            xhr.open("POST", "http://vhost3.lnu.se:20080/answer/1", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            var returnData = {
                "answer": answer.value
            }; 
            xhr.send(JSON.stringify(returnData));
        }
    }
};
window.onload = MyForm.init;