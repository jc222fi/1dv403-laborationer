"use strict";
//Bilder från pixabay.com

var MyDesktop = {
    
    init: function(){
        
        MyDesktop.openDesktop();
    },
    
    openDesktop: function(){
        
        var button = document.createElement("a");
        var buttonImage = document.createElement("img");
        var footer = document.createElement("footer");
        var container = document.getElementById("container");
        
        button.href = "#";
        buttonImage.src = "pics/desktopicon.png";
        container.appendChild(footer);
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
        var statusLine = document.createElement("p");
        var headerIcon = document.createElement("img");
        var closeIcon = document.createElement("img");
        var a = document.createElement("a");
        
        a.href ="#";
        closeIcon.src = "pics/cancel.png";
        headerIcon.src = "pics/desktopicon.png";
        headerIcon.setAttribute("class", "headerIcon");
        a.setAttribute("class", "close");
        windowDiv.setAttribute("class", "imageViewer");
        windowBody.setAttribute("class", "windowBody");
        windowHeader.setAttribute("class", "windowHeader");
        windowFooter.setAttribute("class", "windowFooter");
        
        a.appendChild(closeIcon);
        windowHeader.appendChild(headerIcon);
        windowHeader.appendChild(a);
        windowHeader.appendChild(windowHeadline);
        windowFooter.appendChild(statusLine);
        windowDiv.appendChild(windowHeader);
        windowDiv.appendChild(windowBody);
        windowDiv.appendChild(windowFooter);
        containerDiv.appendChild(windowDiv);
        
        windowHeadline.innerHTML = "Image Viewer";
        statusLine.innerHTML = "Status..."
        
        a.onclick = function(){
            containerDiv.innerHTML = "";
            MyDesktop.openDesktop();
        }
    }
    
};

window.onload = MyDesktop.init;