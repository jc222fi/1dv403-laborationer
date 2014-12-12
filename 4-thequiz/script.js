"use strict";

window.onload = function(){
    
    var xhr = new XMLHttpRequest();
    var questionArray = [];
        
    xhr.onreadystatechange = function(){
      
        if(xhr.readyState === 4 && xhr.status === 200){
            
            var data = JSON.parse(xhr.responseText);
            questionArray.push(data.question);
            console.log(data);
            var pTag = document.createElement("P");
            pTag.innerHTML = data.question;
            var div = document.getElementById("message");
            div.appendChild(pTag);
        
        };
      
    };
    
    xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
    xhr.send(null);
    
    
};