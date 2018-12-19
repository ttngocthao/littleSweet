
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
//btn has id= infoBtn.... (itemId) and infomation box has id= inforBox....(itemId)
//this function add a click event to a InfoBtn which is clicked by users
function clickInfoBtn(){
    var infoBtns = document.getElementsByClassName("infoBtn");
    //figure out which infoBtn is clicked
    //add click event to the Info btn which is clicked        
    for (var i = 0; i <infoBtns.length; i++) {
        var infoBtn=infoBtns[i];
        infoBtn.addEventListener('click', renderInfoBox);
    }    
}

//this function add a click event to a addToCart Btn
function addToCartBtn(){
    var btns = document.getElementsByClassName('addToCartBtn');
    //loop through the addToCartBtn to add a click event to each btn
    for (var i = 0; i < btns.length; i++){
        btns[i].addEventListener('click', function(){
            var idNo= this.getAttribute('dataId');
            var name= this.getAttribute('dataName');
            var price= this.getAttribute('dataPrice');
            addItemToCart(idNo,name,price,1);

            //when the item is added, show how many items in basket
            document.getElementById('cartIcon').innerHTML=countCart();
        })
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
// var searchBar = document.forms['searchCake'].querySelector('input');
// searchBar.addEventListener('keyup',function(e){
//     var term = e.target.value.toLowerCase();
//     var items = document.getElementsByClassName('item');
// })



//object constructor
var Item = function(id, name, price, count){
    this.id= id;
    this.name = name;
    this.price = price;
    this.count = count;
}

//variable to hold the items in cart.
var cart=[];

//function add Item to cart
function addItemToCart(id, name, price, count){
    //if there is the same product in the basket,
    //increase the count.
    for(var i in cart){
        if(cart[i].id === id){
            cart[i].count +=count;
            return;            
        }
    }
    var item = new Item(id, name, price, count);
    cart.push(item);   
}

//function to count how many items in cart --> return total items count
function countCart(){
    var totalCount= 0;
    for(var i in cart){
        totalCount += cart[i].count;
    }
    return totalCount;
}




