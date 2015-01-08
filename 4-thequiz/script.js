"use strict";

var MyForm = {
    
    nextURL: "http://vhost3.lnu.se:20080/question/1",
    counterArray: [],
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
                    if(MyForm.nextURL === undefined){
                        console.log("Spelet slut");
                        for(var i=0; i<MyForm.counterArray.length;i++){
                            var pResult = document.createElement("p");
                            document.getElementById("container").appendChild(pResult);
                            pResult.innerHTML = "På fråga "+(i+1)+" krävdes "+MyForm.counterArray[i]+" försök.";
                        }
                    }
                    else{
                        console.log("FEL GET");
                    }
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
        var counter = 0;
        
        submit.onclick = function(){
            xhr.onreadystatechange = function(){
              
                if(xhr.readyState === 4){
                    counter +=1;
                    console.log(counter);
                    data = JSON.parse(xhr.responseText);
                    if(xhr.status === 200||xhr.status === 304){
                        MyForm.counterArray.push(counter);
                        console.log(data.message);
                        console.log(MyForm.counterArray);
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