"use strict";
//Bilder från pixabay.com

var MyDesktop = {
    
    imgArray:[],
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
        
        statusLine.appendChild(loadingIcon);
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
        var statusLine = document.getElementById("status");
        
        xhr.onreadystatechange = function(){
          
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    statusLine.innerHTML = "";
                    MyDesktop.imgArray = JSON.parse(xhr.responseText);
                    console.log(MyDesktop.imgArray);
                    MyDesktop.displayImages();
                }
                else{
                    console.log("Nåt är fel");
                }
            }
            
        };
        xhr.open("GET","http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
    },
    
    displayImages: function(){
        
        var imgDiv = "";
        var imgTag = "";
        var aTag = "";
        var imgURL = "";
        var maxWidth = 0;
        var maxHeight = 0;
        var i = 0;
        var windowBody = document.querySelector(".windowBody");
        
        //console.log(MyDesktop.imgArray.thumbWidth);
        
        for(i=0;i<MyDesktop.imgArray.length;i++){
            
            if(MyDesktop.imgArray[i].thumbWidth>maxWidth){
                maxWidth = MyDesktop.imgArray[i].thumbWidth;
            }
            if(MyDesktop.imgArray[i].thumbHeight>maxHeight){
                maxHeight = MyDesktop.imgArray[i].thumbHeight;
            }
            
            imgDiv = document.createElement("div");
            aTag = document.createElement("a");
            imgTag = document.createElement("img");
            
            aTag.href = "#";
            imgTag.src = MyDesktop.imgArray[i].thumbURL;
            imgDiv.setAttribute("id", "thumbImg");
            
            aTag.appendChild(imgTag);
            imgDiv.appendChild(aTag);
            windowBody.appendChild(imgDiv);
            imgURL = MyDesktop.imgArray[i].URL;
            //console.log(imgURL);
            imgDiv.style.width = maxWidth+"px";
            imgDiv.style.height = maxHeight+"px";
            
            MyDesktop.changeBackground(imgURL, aTag);
        }
        
    },
    
    changeBackground: function(imgURL, aTag){
        
        aTag.onclick = function(){
                //var container = document.getElementById("container");
                //console.log(container);
                document.getElementById("container").style.background = "url('"+imgURL+"') repeat";
                //container.style.background = "url('"+MyDesktop.imgArray[i].URL+"')";
        };
    }
    
};

window.onload = MyDesktop.init;