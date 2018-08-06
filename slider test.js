
var slide_index = 1;  

displaySlides(slide_index);  
  
function nextSlide(n) {  
     displaySlides(slide_index += n);  
}  
function currentSlide(n) {  
    displaySlides(slide_index = n);  
}  
  
function displaySlides(n) {  
            
    var i;  
    var slides = document.getElementsByClassName("showSlide");  
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slide_index = 1 }  
        if (n < 1) { slide_index = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
        slides[slide_index - 1].style.display = "block";  
        
        }  




var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("showSlide");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
Get();
function Get(){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET","https://demo6835492.mockable.io/getPageInfo",false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

var json_obj = JSON.parse(Get("https://demo6835492.mockable.io/getPageInfo"));console.log(json_obj);
var images= [];
images=json_obj.images;

document.getElementById("img1").src=images[0];
document.getElementById("img2").src=images[1];
document.getElementById("img3").src=images[2];




