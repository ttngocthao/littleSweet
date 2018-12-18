
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
            //render the information box
            clickInfoBtn();
           
        })
    }
}

xhr.send();



//this function creates a template for each product
function cakeTemplate(cakeChoice){
    return  `<div class='item'>
                <h3>${cakeChoice.name}</h3>
                <h5>${cakeChoice.price}</h5>
                <button class='infoBtn' id='infoBtn${cakeChoice.itemId}'>More Info</button>              
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
//btn has id= infoBtn.... (itemId) and infomation box has id= inforBox....(itemId)
//figure out which infoBtn is clicked
function clickInfoBtn(){
    var infoBtns = document.getElementsByClassName("infoBtn");
    
    //add click event to the Info btn which is clicked        
    for (var i = 0; i <infoBtns.length; i++) {
        var infoBtn=infoBtns[i];
        infoBtn.addEventListener('click', renderInfoBox);
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
var searchBar = document.forms['searchCake'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
    var term = e.target.value.toLowerCase();
    var items = document.getElementsByClassName('item');
})
