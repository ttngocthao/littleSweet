$(document).ready(function(){
   var prevScrollpos= 0;

$(window).scroll(function(event){
   var currentScrollpos =$(window).scrollTop();
   var headerHeight = $('header').height();
   
   if (currentScrollpos>headerHeight&&prevScrollpos<currentScrollpos){
      $('header').addClass('scrollUp');
   }else{
      $('header').removeClass('scrollUp');
   }
   prevScrollpos = currentScrollpos;
})




})