"use strict";

function Message(message, date){
    
    this.getText = function(){return message;};
    this.setText = function(_text){message = _text;};
    
    this.getDate = function(){return date;};
    this.setDate = function(_date){date = _date};
    
    this.setText(message);
    this.setDate(date);
    
}

Message.prototype.toString = function(){
    return this.getText()+" ("+this.getDate().toLocaleString()+")";
};

Message.prototype.getHTMLText = function(){
    
};