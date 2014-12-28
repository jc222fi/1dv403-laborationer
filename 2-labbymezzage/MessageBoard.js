"use strict";

var MessageBoard = {
    
    messages: [],
    init: function(){
        
        var textArea = document.getElementById("textruta");
        var send = document.getElementById("skickaknapp");
        
        send.onclick = MessageBoard.addMessage;
        
        textArea.onkeypress = function(e){
            if(!e){
                e = window.event;
            }
            if(e.keyCode === 13){
                MessageBoard.addMessage();
                return false;
            }
        };
    },
    
    addMessage: function(){
        var textArea = document.getElementById("textruta");
        var allMessages = MessageBoard.messages;
        var mess = new Message(textArea.value, new Date());
        
        allMessages += MessageBoard.messages.push(mess);
        MessageBoard.renderMessages();
    },
    
    renderMessage: function(messageID){
        var messageDiv = document.getElementById("messages");
        var div = document.createElement("div");
        var imgClose = document.createElement("img");
        var imgTime = document.createElement("img");
        var text = document.createElement("p");
        var time = document.createElement("p");
        
        time.innerHTML = MessageBoard.messages[messageID].getDateText();
        text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        
        div.appendChild(imgClose);
        div.appendChild(imgTime);
        div.appendChild(text);
        div.appendChild(time);
        
        imgClose.setAttribute("src", "pics/cancel.png");
        imgClose.alt="Close";
        imgTime.setAttribute("src", "pics/clock.png");
        imgTime.alt="Time";
        div.setAttribute("class", "message");
        time.setAttribute("class", "small");
        messageDiv.appendChild(div);
        
        imgClose.onclick = function(){
            MessageBoard.removeMessage(messageID);
        };
        
        imgTime.onclick = function(){
            alert("Det här inlägget skapades den "+MessageBoard.messages[messageID].getFormattedDateStamp());
        };
        
    },
    
    renderMessages: function(){
        document.getElementById("messages").innerHTML = "";
        var counter = document.createElement("p");
        counter.innerHTML = "";
        
        var i;
        for(i = 0; i<MessageBoard.messages.length; i++){
            MessageBoard.renderMessage(i);
        }
        
        document.getElementById("messages").appendChild(counter);
        counter.setAttribute("class", "small");
        counter.innerHTML = "Antal meddelanden: "+MessageBoard.messages.length;
    },
    
    removeMessage: function(messageID){
        MessageBoard.messages.splice(messageID, 1);
        MessageBoard.renderMessages();
    }
    
};

window.onload = MessageBoard.init;