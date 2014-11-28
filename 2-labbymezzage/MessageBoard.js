"use strict";
"use strict";

var MessageBoard = {
    
    messages: [],
    init: function(){
        var send = document.getElementById("skickaknapp");
        
        send.onclick = MessageBoard.addMessage;
    },
    
    addMessage: function(){
        var textArea = document.getElementById("textruta");
        var mess = new Message(textArea.value, new Date()).toString();
        
        MessageBoard.messages += MessageBoard.messages.push(mess);
        alert(MessageBoard.messages);
    }
    
};


window.onload = MessageBoard.init;