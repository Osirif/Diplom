let header = document.querySelector(".header")
let header__burger = document.querySelector(".header__burger")
    window.onscroll = function(){
        
if(window.scrollY > 100){
    header.style.background = "#0E0E0E"
    header__burger.style.background = "#0E0E0E"
    header__burger.style.position = "fixed"
    header.style.position = "fixed"
    
}
else{
    header.style.background = "transparent" 
    header__burger.style.background = "transparent"
    header__burger.style.position = "relative"
    header.style.position = "relative"
}
}