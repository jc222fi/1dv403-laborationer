"use strict";

var MyForm = {
    
    init: function(){
        MyForm.getData();
        MyForm.sendData();
    },
    
    message: function(){
      
      //Här ska det hända lite grejer
      
        
    },
    
    getData: function(){
        var xhr = new XMLHttpRequest();
        var currentQuestion = "";
            
        xhr.onreadystatechange = function(){
          
            if(xhr.readyState === 4){
                if(xhr.status === 200||xhr.status === 304){
                    var data = JSON.parse(xhr.responseText);
                    currentQuestion = data.question;
                    console.log(data);
                    var pTag = document.createElement("P");
                    pTag.innerHTML = currentQuestion;
                    var div = document.getElementById("message");
                    div.appendChild(pTag);
                }
                else{
                    console.log("FEL");
                }
            }
        };
        
        xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
        xhr.send(null);
    },
    
    sendData: function(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
          
            if(xhr.readyState === 4){
                if(xhr.status === 200||xhr.status === 304){
                
                    var data = JSON.parse(xhr.responseText);
                    console.log(data);
                    var pTag = document.createElement("P");
                    pTag.innerHTML = "";
                    var div = document.getElementById("message");
                    div.appendChild(pTag);
                }
                else{
                    console.log("FEL");
                }
            }
        };
        xhr.open("POST", "http://vhost3.lnu.se:20080/answer/1", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        var answer = {
            answer:2
        }; 
        xhr.send(JSON.stringify(answer));
    }
};
window.onload = MyForm.init;