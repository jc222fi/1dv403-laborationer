"use strict";

var MyForm = {
    
    nextURL: "http://vhost3.lnu.se:20080/question/1",
    counter: 0,
    question: "",
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
                    MyForm.question = data.question;
                    pQuestion.innerHTML = MyForm.question;
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
    },
    
    sendData: function(){
        var xhr = new XMLHttpRequest();
        var answer = document.getElementById("answer");
        var submit = document.getElementById("submit");
        var data = "";
        
        submit.onclick = function(){
            xhr.onreadystatechange = function(){
              
                if(xhr.readyState === 4){
                    MyForm.counter +=1;
                    console.log(MyForm.counter);
                    data = JSON.parse(xhr.responseText);
                    if(xhr.status === 200||xhr.status === 304){
                        
                        console.log(data.message);
                        MyForm.nextURL = data.nextURL;
                        MyForm.getData();
                    }
                    else{
                        var question = document.getElementById("question");
                        question.innerHTML = data.message;
                        setTimeout(function(){
                            question.innerHTML = MyForm.question;
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