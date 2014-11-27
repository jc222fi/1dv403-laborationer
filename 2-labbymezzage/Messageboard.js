"use strict";

var MessageBoard = {
    messages: [],
    
    init: function(){
        var mess = new Message("Testmeddelande", new Date());
        MessageBoard.messages.push(mess);
        var mess2 = new Message("En annan text", new Date());
        MessageBoard.messages.push(mess2);
        var mess3 = new Message("Ytterligare en text", new Date());
        MessageBoard.messages.push(mess3);
        alert(MessageBoard.messages[1].getText());
    }
    
};


window.onload = MessageBoard.init;