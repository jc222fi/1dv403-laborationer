"use strict";

var MyForm = {
    
    nextURL: "http://vhost3.lnu.se:20080/question/1",
    init: function(){
        
        MyForm.createForm();
        MyForm.getData();
        
    },
    
    createForm: function(){
        var div = document.getElementById("container");
        var input = document.createElement("input");
        input.setAttribute("id", "answer");
        var button = document.createElement("button");
        button.setAttribute("id", "submit");
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
        var data = "";
            
        xhr.onreadystatechange = function(){
          
            if(xhr.readyState === 4){
                if(xhr.status === 200||xhr.status === 304){
                    data = JSON.parse(xhr.responseText);
                    pQuestion.innerHTML = data.question;
                    console.log(data);
                    MyForm.nextURL = data.nextURL;
                    MyForm.sendData();
                    
                }
                else{
                    console.log("FEL GET");
                }
            }
        };
        
        xhr.open("GET", MyForm.nextURL, true);
        xhr.send(null);
        //MyForm.nextURL = data.nextURL;
        //console.log(MyForm.nextURL);
    },
    
    sendData: function(){
        var xhr = new XMLHttpRequest();
        var answer = document.getElementById("answer");
        var submit = document.getElementById("submit");
        var data = "";
        
        submit.onclick = function(){
            xhr.onreadystatechange = function(){
              
                if(xhr.readyState === 4){
                    if(xhr.status === 200||xhr.status === 304){
                    
                        data = JSON.parse(xhr.responseText);
                        console.log(data);
                        MyForm.nextURL = data.nextURL;
                        MyForm.getData();
                        
                    }
                    else{
                        console.log("FEL POST");
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