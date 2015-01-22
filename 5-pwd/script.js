"use strict";
//Bilder från pixabay.com

var MyDesktop = {
    
    windowCounter:0,
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
            
            if(MyDesktop.windowCounter === 0){
                MyDesktop.openWindow();
            }
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
        var loadingIcon = document.createElement("img");
        var a = document.createElement("a");
        
        a.href ="#";
        closeIcon.src = "pics/cancel.png";
        headerIcon.src = "pics/desktopicon.png";
        loadingIcon.src = "pics/ajax-loader.gif";
        statusLine.setAttribute("id", "status");
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
        statusLine.appendChild(loadingIcon);
        windowFooter.appendChild(statusLine);
        windowDiv.appendChild(windowHeader);
        windowDiv.appendChild(windowBody);
        windowDiv.appendChild(windowFooter);
        containerDiv.appendChild(windowDiv);
        
        windowHeadline.innerHTML = "Image Viewer";
        
        MyDesktop.windowCounter = 1;
        
        a.onclick = function(){
            containerDiv.innerHTML = "";
            MyDesktop.windowCounter = 0;
            MyDesktop.openDesktop();
        };
        
        MyDesktop.loadingPictures();
    },
    
    loadingPictures: function(){
        
        var xhr = new XMLHttpRequest();
        var data = "";
        var statusLine = document.getElementById("status");
        
        xhr.onreadystatechange = function(){
          
            if(xhr.readyState === 4){
              if(xhr.status === 200){
                  statusLine.innerHTML = "";
                  data = JSON.parse(xhr.responseText);
                  console.log(data);
              }
              else{
                  console.log("Nåt är fel");
              }
            }
            
        };
        xhr.open("GET","http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
    }
    
};

window.onload = MyDesktop.init;