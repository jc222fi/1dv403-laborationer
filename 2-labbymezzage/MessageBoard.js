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
        console.log(allMessages);
        MessageBoard.renderMessages();
    },
    
    renderMessage: function(messageID){
        var messageDiv = document.getElementById("messages");
        var div = document.createElement("div");
        var text = document.createElement("p");
        text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        div.appendChild(text);
        console.log(messageDiv);
        messageDiv.appendChild(div);
        
    },
    
    renderMessages: function(){
        document.getElementById("messages").innerHTML = "";
        var i;
        for(i = 0; i<MessageBoard.messages.length; i++){
            MessageBoard.renderMessage(i);
        }
    }
    
};


window.onload = MessageBoard.init;