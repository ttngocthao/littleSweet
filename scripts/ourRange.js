

//clb -> celebration, ch -> children
//get data from json file.
var xhr = new XMLHttpRequest();

xhr.open('GET','./api/cakes.json',true);
xhr.responseType='text';

xhr.onload = function(){
    if(xhr.status===200){
        var cakes= JSON.parse(xhr.responseText);
        var showCake= document.getElementById('showCake');
        var choice = document.getElementById('cakeList');

        choice.addEventListener('change',function(){
            var cakeArray;
            //get a right object from json base on the value of the selected option
            //index=0 : celebration
            switch(choice.value){
                case "celebrationList":
                cakeArray= cakes[0]
                break;
                
                case "childrenList":
                cakeArray= cakes[1]
                break;
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

         
           
        })
    }
}

xhr.send();



//this function creates a template for each product
function cakeTemplate(cakeChoice){
    return  `<div class='item'>
                <h3 class='cakeName'>${cakeChoice.name}</h3>
                <h5>${cakeChoice.price}</h5>
                <button class='infoBtn' id='infoBtn${cakeChoice.itemId}'>More Info</button>
                <button class='addToCartBtn' dataId='${cakeChoice.itemId}' dataName='${cakeChoice.name}'  dataPrice='${cakeChoice.price}'>Add to basket</button>              
                <div id='infoBox${cakeChoice.itemId}' class='infoBox'>
                    <div class='infoContent'>
                        <span class="closeBtn" id='closeBtn${cakeChoice.itemId}'>&times;</span>
                        <h3>${cakeChoice.name}</h3>
                        <h5>${cakeChoice.price}</h5>
                        <p>${cakeChoice.info}</p>
                    </div>
                </div>
            </div> `
}


//this function add a click event to a InfoBtn which is clicked by users
function clickInfoBtn(){
    var infoBtns = document.getElementsByClassName("infoBtn");
    //figure out which infoBtn is clicked
    //add click event to that Info btn        
    var infoBtns = document.getElementsByClassName("infoBtn");      
    for (var i = 0; i <infoBtns.length; i++) {
        var infoBtn=infoBtns[i];
        infoBtn.addEventListener('click', renderInfoBox);
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
function renderInfoBox(index){  
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












