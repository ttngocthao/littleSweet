$(document).ready(function(){
   //click menuIcon, show the menulist(navBar)
 $('.menuIcon').click(function(){
    $('.navBar').toggleClass('showNavBar');
     //rotate icon everyClick
   $('.menuIcon').toggleClass('rotateIcon')
 })

   //click menulist(navBar), close the menu
 $('.navBar').click(function(){
   $('.navBar').toggleClass('showNavBar');
    //rotate icon everyClick
   $('.menuIcon').toggleClass('rotateIcon')
 })
 
  
});