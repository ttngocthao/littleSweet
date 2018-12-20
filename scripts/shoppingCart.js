//variable to hold the items in cart.
var cart=[];

//object constructor
var Item = function(id, name, price, count){
    this.id= id;
    this.name = name;
    this.price = price;
    this.count = count;
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

//function increase the amount of item by one
function increaseAmountByOne(id){
    for(var i in cart){
        if(cart[i].id === id){
            cart[i].count ++;
            saveCart();
        }
    }
}

//function decrease the amount of item by one
function decreaseAmountByOne(id){
    for(var i in cart){
        if(cart[i].id === id){
            if(cart[i].count === 1){
                removeItem(id)
                saveCart();
            } else{
                cart[i].count --;
                saveCart();
            }
            return
        }

    }
}


//function to count how many items in cart --> return total items count
function countCart(){
    //then count the item in local storage
    var count= 0;
    for(var i in cart){
        count += cart[i].count;
    }
    return count;
}

//function returns the total cost of the items in cart
function totalCost(){
    var totalCost=0;
    for(var i in cart){
        totalCost += cart[i].price * cart[i].count
    }
    //toFixed(2) round the answer to 2dp
    return totalCost.toFixed(2);
}

//function clear the cart
function clearCart(){
    cart=[];
    saveCart()
}

//function delete a whole item in the cart
function removeItem(id){
    for(var i in cart){
        if(cart[i].id === id){
            cart.splice(i,1);
            saveCart();
            break;
        }
    }
    saveCart();
}

//listCart()--> create a copy of cart
function listCart(){
    var cartCopy =JSON.parse(JSON.stringify(cart));
    for ( var i in cartCopy){
        cartCopy[i].total= (cartCopy[i].price*cartCopy[i].count).toFixed(2);
    }
    return cartCopy;
}

//save the cart into local storage
function saveCart(){
    //shoppingCart is the data name in local storage
    localStorage.setItem('shoppingCart',JSON.stringify(cart));
}

//get the cart out from local storage
function loadCart(){
    cart=JSON.parse(localStorage.getItem('shoppingCart'))
}

//**************************************//
loadCart();
displayCart();
displayCountCart();

//this function add a click event to a addToCart Btn
function addToCartBtn(){    
    var btns = document.getElementsByClassName('addToCartBtn');
    //loop through the addToCartBtn to add a click event to each btn
    for (var i = 0; i < btns.length; i++){
        btns[i].addEventListener('click', function(){
            event.preventDefault();
            var idNo= this.getAttribute('dataId');
            var name= this.getAttribute('dataName');
            var price= Number(this.getAttribute('dataPrice'));
            addItemToCart(idNo,name,price,1);
            //update showing cart list
            displayCart();
            //update showing item number in cart
            displayCountCart(); 

        })
    }   
}


function displayCart(){
    //using a copy of the cart to display
    var cartArray = listCart();
    var output='';
    for(var i in cartArray){
        output +='<div>'
        +cartArray[i].name 
        + '  <button class="subBtn" dataId="'+ cartArray[i].id +'">-</button>'
        +' <button class="addBtn" dataId="'+ cartArray[i].id +'">+</button> '
        + cartArray[i].count 
        + ' x '+ cartArray[i].price 
        +' = '+ cartArray[i].total+ ' '
        + '<button class="deleteItemBtn" dataId="'+cartArray[i].id+'">X</button>'
        +'</div>'
    }
    document.getElementById('cartList').innerHTML= output;
    document.getElementById('cartTotal').innerHTML =  totalCost();
    //for delete Item btn
    deleteItemBtn();
    //for '+' btn
    addBtn();
    //for '-' btb
    subBtn();

}

//increase the amount of item by one
function addBtn(){
    var addBtns = document.getElementsByClassName('addBtn');
    for (var i=0; i< addBtns.length; i++){
        addBtns[i].addEventListener('click',function(){
            // alert(this.getAttribute('dataId'));
            var itemId=this.getAttribute('dataId');
            increaseAmountByOne(itemId);
            //update list and basket
            displayCart();
            displayCountCart();
        })
    }
}

function subBtn(){
    var subBtns = document.getElementsByClassName('subBtn');
    for(var i=0; i <subBtns.length;i++){
        subBtns[i].addEventListener('click',function(){
            var itemId=this.getAttribute('dataId')
            decreaseAmountByOne(itemId);
            displayCart();
            displayCountCart();
        })
    }
}


//add click event on deleteItemBtn which is clicked
function deleteItemBtn(){     
    var deleteItemBtns = document.getElementsByClassName('deleteItemBtn');
    for ( var i=0; i < deleteItemBtns.length;i++){
        deleteItemBtns[i].addEventListener('click', function(){
            var itemId=this.getAttribute('dataId');
            removeItem(itemId);
            //showing in list that one item is removed from cart
            displayCart();
            //showing in basket that one item is removed
            displayCountCart();
        })
    } 
}

function displayCountCart(){
    document.getElementById('cartCount').innerHTML=countCart();
}

//add event to clear cart btn
var clearCartBtn = document.getElementById('clearCartBtn')
clearCartBtn.addEventListener('click',function(){
    clearCart();
    displayCart();
    displayCountCart();
});
