//variable to hold the items in cart.
var cart=[];

//object constructor
var Item = function(id, name, price, count){
    this.id= id;
    this.name = name;
    this.price = price;
    this.count = count;
}

//this function add a click event to a addToCart Btn
function addToCartBtn(){
    event.preventDefault();
    var btns = document.getElementsByClassName('addToCartBtn');
    //loop through the addToCartBtn to add a click event to each btn
    for (var i = 0; i < btns.length; i++){
        btns[i].addEventListener('click', function(){
            var idNo= this.getAttribute('dataId');
            var name= this.getAttribute('dataName');
            var price= this.getAttribute('dataPrice');
            addItemToCart(idNo,name,price,1);
            console.log(cart);   
        })
    } 
      
}

//function add Item to cart
function addItemToCart(id, name, price, count){
    for(var i in cart){
        if(cart[i].id === id){
            cart[i].count +=count;
            saveCart();
            return;            
        }
    }
    var item = new Item(id, name, price, count);
    cart.push(item);  
    saveCart(); 
}

//function to count how many items in cart --> return total items count
function countCart(){
    //then count the item in local storage
    var totalCount= 0;
    for(var i in cart){
        totalCount += cart[i].count;
    }
    return totalCount;
}

//
function displayCountCart(){
    
    //when the item is added, show how many items in basket
    document.getElementById('cartIcon').innerHTML=countCart();
}

//listCart()--> create a copy of cart
function listCart(){
    var cartCopy =JSON.parse(JSON.stringify(cart));
    return cartCopy;
}
var array = listCart()
console.log(array);
//save the cart into local storage
function saveCart(){
    //shoppingCart is the data name in local storage
    localStorage.setItem('shoppingCart',JSON.stringify(cart));
}

//get the cart out from local storage
function loadCart(){
    cart=JSON.parse(localStorage.getItem('shoppingCart'))
}