navbar = document.querySelector('.navbar')
menu =document.querySelector('.menus')
navbar = document.querySelector('.burger')

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
   

navbar.addEventListener('click', showMenu=(e)=>{
   if(e.currentTarget.id == navbar){
   menu.classList.add('active')
   navbar.classList.add('none')
}else{
   menu.classList.remove('active')
   navbar.classList.remove('none')
}
})
