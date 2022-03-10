navbar = document.querySelector('.navbar')

window.addEventListener('scroll', function(e){
    if (window.scrollY >= 200 ) {
        navbar.classList.add("nav-colored");
        navbar.classList.remove("nav-transparent");
     } 
     else {
        navbar.classList.add("nav-transparent");
        navbar.classList.remove("nav-colored");
     }
})
   

console.log(navbar)