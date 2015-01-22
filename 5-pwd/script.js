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
        var windowHeader = document.createElement("div");
        var windowBody = document.createElement("div");
        var windowFooter = document.createElement("div");
        var windowHeadline = document.createElement("p");
        //var statusLine = document.createElement("p");
        var headerIcon = document.createElement("img");
        
        headerIcon.src = "pics/desktopicon.png";
        windowDiv.setAttribute("class", "imageViewer");
        windowBody.setAttribute("class", "windowBody");
        windowHeader.setAttribute("class", "windowHeader");
        windowFooter.setAttribute("class", "windowFooter");
        
        windowHeader.appendChild(headerIcon);
        windowHeader.appendChild(windowHeadline);
        //windowFooter.appendChild(statusLine);
        windowDiv.appendChild(windowHeader);
        windowDiv.appendChild(windowBody);
        windowDiv.appendChild(windowFooter);
        containerDiv.appendChild(windowDiv);
        
        windowHeadline.innerHTML = "Image Viewer";
        //console.log(divContainer);
    }
    
};

window.onload = MyDesktop.init;