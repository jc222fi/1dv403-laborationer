"use strict";
//Bilder från pixabay.com

var MyDesktop = {
    
    init: function(){
        
        var button = document.createElement("a");
        var buttonImage = document.createElement("img");
        var footer = document.querySelector("footer");
        
        button.href = "#";
        buttonImage.src = "pics/desktopicon.png";
        footer.appendChild(button);
        button.appendChild(buttonImage);
        
        button.onclick = function(){
            
            MyDesktop.openWindow();
        };
        
    },
    
    openWindow: function(){
        
        var containerDiv = document.getElementById("container");
        var windowDiv = document.createElement("div");
        var windowHeader = document.createElement("p");
        
        windowDiv.setAttribute("class", "imageViewer");
        windowDiv.appendChild(windowHeader);
        containerDiv.appendChild(windowDiv);
        
        windowHeader.innerHTML = "Image Viewer";
        //console.log(divContainer);
    }
    
};

window.onload = MyDesktop.init;