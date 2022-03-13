navbar = document.querySelector('.navbar')
menu =document.querySelector('.menus')
burger = document.querySelector('.burger')
cancel = document.querySelector('.cancel')



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
/* [document.querySelector('.burger'), document.querySelector('.cancel')].forEach(item => {
   item.addEventListener('click', function (event){
      if(event.target == burger){
         menu.classList.add('active')
         burger.classList.add('none')
         cancel.classList.add('active')
      }else if(event.target == cancel){
         menu.classList.add('none')
         burger.classList.add('active')
         cancel.classList.add('none')
      }
   })
})
 */
   

burger.addEventListener('click', function (event){
   menu.classList.toggle('active')
})  

function changeSpink(){
   document.querySelector('.pink-shirt').src="./images/Tshirt2.png";
   
}
function changeSgrey(){
   document.querySelector('.pink-shirt').src="./images/Tshirt1.png";
   document.querySelector('.grey-shirt').classList.add('none');
}
//note: In the functions below, the grey bottle is mistaken for the pink
function changeBpink(){
   document.querySelector('.grey-bottle').src="./images/Bottle2.png";
   document.querySelector('.pink-bottle').classList.add('none');
}
function changeBgrey(){
   document.querySelector('.grey-bottle').src="./images/Bottle1.png";
}

let products = [
   {
      name:"t shirt",
      description:"gucci brand",
      color:"pink"
   },
   {
      name:"t shirt",
      description:"gucci brand",
      color:"grey"
   },
   {
      name:"bottle",
      description:"resistant premium water flask",
      color:"pink"
   },
   {
      name:"bottle",
      description:"resistant premium water flask",
      color:"grey"
   }
]



