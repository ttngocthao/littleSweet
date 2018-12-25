$(document).on('scroll',function(){
    if($(document).scrollTop()>100){
       $('#logo img').addClass('shrinkLogo');
    }else{
       $('#logo img').removeClass('shrinkLogo');
    }
})