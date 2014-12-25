"use strict";

var MessageBoard = {
    
    messages: [],
    init: function(){
        
        var send = document.getElementById("skickaknapp");
        
        send.onclick = MessageBoard.addMessage;
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
        var text = document.createElement("p");
        var time = document.createElement("p");
        
        time.innerHTML = MessageBoard.messages[messageID].getDateText();
        text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        div.appendChild(text);
        div.appendChild(time);
        div.setAttribute("class", "message");
        time.setAttribute("class", "small");
        messageDiv.appendChild(div);
        
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
    
    
};

window.onload = MessageBoard.init;