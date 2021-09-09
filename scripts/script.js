/*
Student Name: Laura Ristoff
File Name: script.js
Date: 05/11/2021
*/



//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

//Image Slideshow on Projects page: Canvas One
    var imagePathsOne = [
        "images/forward-fitness.png", "images/wild-rescues.png", "images/forward-fitness1.png", "images/portfolio.png",  "images/design-portfolio.png", "images/pasa.png", "images/strike-a-chord.png", "images/ptc-work.png",
    ];
    var showCanvas = null;
    var showCanvasCtx = null;
    var img = document.createElement("img");
    var currentImage = 0;
    var revealTimer;
    var gAlpha = 0.1;
    var now = null;
    var FADE_DELAY = 50; // ms to delay for each alpha increment
    var IMAGE_DELAY = 3000; // ms to show each image for
 
    function init() {
        // get a reference to the canvas and drawing context
        showCanvas = document.getElementById('canvasOne');
        showCanvasCtx = showCanvas.getContext('2d');
    
        // set the width and height of the img element to match image dimensions
        img.setAttribute('width', '400');
        img.setAttribute('height', '300');
    
        // show the initial image
        switchImage();
    
        // start the animation
        setInterval(switchImage, IMAGE_DELAY);
    }
    
    function switchImage() {
        // get the next image in the array
        img.setAttribute('src', imagePathsOne[currentImage++]);
        if (currentImage >= imagePathsOne.length) {
            currentImage = 0;
        }
    
        // reset the global alpha and slowly ramp it up
        gAlpha = 0.0;
        requestAnimationFrame(revealImage);
    }
    
    function revealImage(timestamp) {
        if (!now) {
            now = timestamp;
        }
    
        if ((timestamp - now) > FADE_DELAY) {
            gAlpha += 0.01;
            showCanvasCtx.globalAlpha = gAlpha;
            showCanvasCtx.drawImage(img, 0, 0, 400, 300);
            now = timestamp;
        }
        if (gAlpha < 1.0) {
            requestAnimationFrame(revealImage);
        }
    } 



//Image Slideshow on Projects page: Canvas Two
    var imagePathsTwo = [
        "images/tindog.png", "images/drum-kit.png", "images/chore-door.png", "images/about-me.png",  
    ];
    var showCanvas = null;
    var showCanvasCtx = null;
    var img = document.createElement("img");
    var currentImage = 0;
    var revealTimer;
    var gAlpha = 0.1;
    var now = null;
    var FADE_DELAY = 50; // ms to delay for each alpha increment
    var IMAGE_DELAY = 3000; // ms to show each image for
    
    function init() {
        // get a reference to the canvas and drawing context
        showCanvas = document.getElementById('canvasTwo');
        showCanvasCtx = showCanvas.getContext('2d');
    
        // set the width and height of the img element to match image dimensions
        img.setAttribute('width', '400');
        img.setAttribute('height', '300');
    
        // show the initial image
        switchImage();
    
        // start the animation
        setInterval(switchImage, IMAGE_DELAY);
    }
    
    function switchImage2() {
        // get the next image in the array
        img.setAttribute('src', imagePathsTwo[currentImage++]);
        if (currentImage >= imagePathsTwo.length) {
            currentImage = 0;
        }
    
        // reset the global alpha and slowly ramp it up
        gAlpha = 0.0;
        requestAnimationFrame(revealImage);
    }
    
    function revealImage(timestamp) {
        if (!now) {
            now = timestamp;
        }
    
        if ((timestamp - now) > FADE_DELAY) {
            gAlpha += 0.01;
            showCanvasCtx.globalAlpha = gAlpha;
            showCanvasCtx.drawImage(img, 0, 0, 400, 300);
            now = timestamp;
        }
        if (gAlpha < 1.0) {
            requestAnimationFrame(revealImage);
        }
    }

