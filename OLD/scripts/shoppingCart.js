//variable to hold the items in cart.
var cart=[];

//object constructor
var Item = function(id, name, price, count, imageUrl){
    this.id= id;
    this.name = name;
    this.price = price;
    this.count = count;
    this.imageUrl = imageUrl;
}

//function add Item to cart
function addItemToCart(id, name, price, count, imageUrl){
    for(var i in cart){
        if(cart[i].id === id){
            cart[i].count +=count;
            saveCart();
            return;            
        }
    }
    var item = new Item(id, name, price, count, imageUrl);
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
    //toFixed(2) round the number to 2dp
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

//listCart()--> create a copy of cart to show
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
   var aCart =JSON.parse(localStorage.getItem('shoppingCart'));
    if(isValid(aCart)){
        cart=aCart;
    }
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
            var image=this.getAttribute('dataimg');
            addItemToCart(idNo,name,price,1,image);
            //show message 'added to basket'
            popUpMsg('Added to The Basket');
            //update showing cart list
            displayCart();
            //update showing item number in cart
            displayCountCart(); 

        })
    }   
}

//show message when user has added item into a basket
function popUpMsg(stringMsg){
   var popUpMsg = document.getElementById('popUpMsg');
    popUpMsg.innerHTML = stringMsg;
    // Add the "appear" class to popUpMsg
       popUpMsg.className ='appear';
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ popUpMsg.className = popUpMsg.className.replace("appear", ""); }, 3000);
    
  }
//template to be used for display shopping basket
function displayCartTemplate(list){
    return `
        <tr>
            <td><img src='${list.imageUrl}'></td>
            <td>${list.name}</td>
            <td>${list.count}</td>
            <td><div class="subBtn" dataId="${list.id}"><i class="fas fa-minus"></i></div></td>
            <td><div class="addBtn" dataId="${list.id}"><i class="fas fa-plus"></div></td>            
            <td>£ ${(list.price).toFixed(2)}</td>
            <td>£ ${(list.price * list.count).toFixed(2)}</td>
            <td><div class="deleteItemBtn" dataId="${list.id}"><i class="fas fa-times"></i></div></td>
        </tr>
    
    `
}
//show the shopping basket
function displayCart(){
    //using a copy of the cart to display
    var cartArray = listCart();
    document.getElementById('tableContent').innerHTML= `${cartArray.map(displayCartTemplate).join('')}`;
    document.getElementById('cartTotal').innerHTML = '£'+ totalCost();
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
//decrease the amount of item by one
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

//close the list of items when click back icon
document.getElementById('backToShop').addEventListener('click',function(){
    document.getElementById('showCart').style.display='none';
})

//show the list of items when click basket icon
document.getElementById('cartIcon').addEventListener('click', function(){
    document.getElementById('showCart').style.display='block'
})
//confirmBTN in display cart
//show the message 'Thank you for your order'
//clear the basket
//close the cart list
document.getElementById('confirmBtn').addEventListener('click',function(){
    document.getElementById('showCart').style.display='none';
    clearCart();
    displayCart();
    displayCountCart();
    popUpMsg('Thank you for your order');

})