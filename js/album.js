var slideIndex =1;
showSlide(slideIndex);

function plusSlide(n){
    showSlide(slideIndex+=n)
}
function dotSlide(n){
    showSlide(slideIndex = n);
}

function showSlide(n){
    var i ;
    var slides = document.getElementsByClassName('album-item');
    var dots = document.getElementsByClassName('dot');
    if(n> slides.length){
        slideIndex =1;
    }
    if(n<1){
        slideIndex = slides.length;
    }
    for(i =0;i<slides.length;i++){
        slides[i].style.display = 'none';
    }
    for(i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className +=" active";
}
setInterval(function(){ plusSlide(1)},2000)