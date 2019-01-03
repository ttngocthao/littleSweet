

//clb -> celebration, ch -> children
//get data from json file.
var xhr = new XMLHttpRequest();

xhr.open('GET','./api/cakes.json',true);
xhr.responseType='text';

xhr.onload = function(){
    if(xhr.status===200){
        var cakes= JSON.parse(xhr.responseText);
        console.log(cakes);
        var showCake= document.getElementById('showCake');
        var choice = document.getElementById('cakeList');

        choice.addEventListener('change',function(){
            var cakeArray=null;
            //get a right object from json base on the value of the selected option
            //index=0 : celebration
            switch(choice.value){
                case "celebrationList":
                cakeArray= cakes[0]
                break;
                
                case "childrenList":
                cakeArray= cakes[1]
                break;

                case "dessertList":
                cakeArray =  cakes[2]
                break;

                case "savouryList":
                cakeArray = cakes[3]
                break;

                case "cupcakeList":
                cakeArray =cakes[4]
                break;

                case "muffinList":
                cakeArray = cakes[5]
                break;

                case "macaronList":
                cakeArray = cakes[6]
                break;

                case "cateringList":
                cakeArray = cakes[7]
                break;
            }
            
            //Ensure that sth was selected
            //so that cakeArray.map does not crash us
            if(cakeArray == null){
                cakeArray = cakes[0];
            }            
            
            //loop through an array to print out all items
            showCake.innerHTML = `
                <h2>${choice.options[choice.selectedIndex].text}</h2>
                ${cakeArray.map(cakeTemplate).join('')}   
            `
            //add the click event to each Info button
            clickInfoBtn();

            addToCartBtn();

            document.getElementById('searchInput').addEventListener('keyup',searchCake);
            
            //display the rating stars.
            showRatingStar(cakeArray); 
           
            //show rating stars in info box
            showInfoRatingStar(cakeArray);
        })
    }
}

xhr.send();

//this function shows the rating stars of each product
function showRatingStar(cakeChoice){
    var starsInner = document.getElementsByClassName('starsInner')
    function convertToPercentage(starRating){
       return (Math.round(starRating *20/10)*10).toString() +'%';
    }
    for (var i =0; i< starsInner.length;i++){
        starsInner[i].style.width = convertToPercentage(cakeChoice[i].starRating);
    }
}
//this function shows the rating stars in the information box of each product
function showInfoRatingStar(cakeChoice){
    var starsInner = document.getElementsByClassName('infoStarsInner')
    function convertToPercentage(starRating){
       return (Math.round(starRating *20/10)*10).toString() +'%';
    }
    for (var i =0; i< starsInner.length;i++){
        starsInner[i].style.width = convertToPercentage(cakeChoice[i].starRating);
    }
}

//this function creates a template for each product
function cakeTemplate(cakeChoice){
    return  `<div class='item'>
                <h3 class='flag cakeName'>${cakeChoice.name}</h3>
                <div class='wrapper'>
                    <div class='cakeImg'><img src='${cakeChoice.imageUrl}'></div>
                    <div class='starsOuter'><div class='starsInner'></div></div>
                    <h5>Price: £${cakeChoice.price}</h5>
                    <div class='infoBtn' id='infoBtn${cakeChoice.itemId}'><i class="fas fa-question"></i></div>
                    <div class='addToCartBtn' dataId='${cakeChoice.itemId}' dataName='${cakeChoice.name}'  dataPrice='${cakeChoice.price}' dataImg='${cakeChoice.imageUrl}'><i class="fas fa-cart-plus"></i></div> 
                </div>
                <div id='infoBox${cakeChoice.itemId}' class='infoBox'>
                    <div class='infoContent'>
                        <span class="closeBtn" id='closeBtn${cakeChoice.itemId}'>&times;</span>
                        <h3>${cakeChoice.name}</h3>
                        <div class='cakeImg'><img src='${cakeChoice.imageUrl}'></div>
                        <div class='infoStarsOuter'><div class='infoStarsInner'></div></div>
                        <h5>Price: £${cakeChoice.price}</h5>
                        <p>${cakeChoice.info}</p>
                    </div>
                </div>
            </div> `
}


//this function add a click event to a InfoBtn which is clicked by users
function clickInfoBtn(){
    //figure out which infoBtn is clicked
    //add click event to that Info btn        
    var infoBtns = document.getElementsByClassName("infoBtn");      
    for (var i = 0; i <infoBtns.length; i++) {
        infoBtns[i].addEventListener('click',renderInfoBox)
    }    
}
//this function add a click event to a closeBtn which is clicked by users
function closeInfoBtn(){
    var closeBtns= document.getElementsByClassName('closeBtn');
    for(var i=0;i<closeBtns.length;i++){
        closeBtns[i].addEventListener('click',closeInfoBox);
    }
}
//close the information of the product
function closeInfoBox(){    
    var infoBoxes = document.getElementsByClassName('infoBox');       
        for(var i = 0; i < infoBoxes.length;i++){
            infoBoxes[i].style.display='none';
        }
    
    
}

//show the information of the product
function renderInfoBox(){  
    var idBtn, idBox, idClose;  
    idBtn=this.id ;
    //figure out the id of the information box base on the id of the clicked information btn
    idBox= idBtn.replace('infoBtn','infoBox')
   //open the information box
   var infoBox=document.getElementById(idBox); 
   infoBox.style.display='block';
   //figure out which close-btn is shown
    idClose=idBtn.replace('infoBtn','closeBtn');
   //add the click event on that close-btn
   var closeBtn = document.getElementById(idClose);
    closeBtn.addEventListener('click', function(){
        infoBox.style.display='none';
    })
    
}

//search Cake
function searchCake(){
    var input = document.getElementById("searchInput");
     //get the value from the input element, capitalise that
 var filter = input.value.toUpperCase();
 var listItem= document.getElementById('showCake');
 var items= listItem.getElementsByClassName('item')
 for (var i=0; i<items.length;i++){
   var names = items[i].getElementsByClassName('cakeName');
   for (var j=0; j<names.length;j++){
     var name=names[j].innerText
     //indexOf returns a number, representing the position where the specified searchvalue occurs for the first time, or -1 if it never occurs
     if(name.toUpperCase().indexOf(filter) > -1){
       // names[j].style.display='';
       items[i].style.display='';
     }else{
       items[i].style.display='none';
       // names[j].style.display='none';
     }
   }
   
   
 }
  }












