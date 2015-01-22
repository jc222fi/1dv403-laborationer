"use strict";
//Bilder från pixabay.com

var MyDesktop = {
    
    init: function(){
        
        var button = document.createElement("img");
        var footer = document.querySelector("footer");
        
        button.src = "pics/desktopicon.png";
        footer.appendChild(button);
        
        button.onclick = function(){
            
            //Do something
        }
        
    }
    
};

window.onload = MyDesktop.init;