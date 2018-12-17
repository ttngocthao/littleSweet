var cart=[];
var Item =function(name, price, count){
    this.name = name;
    this.price =price;
    this.count = count;
}
//addItemToCart(name,price,count)
function addItemToCart(name,price,count){
   for(var i in cart){
       if(cart[i].name === name){
           cart[i].count += count;
           return;
       }
   }
   var item = new Item(name,price,count);
   cart.push(item);
}
addItemToCart('Apple',1.87,1);
addItemToCart('Pear', 1.5, 3);
addItemToCart('Apple',1.87,3);
addItemToCart('Orange',1,1);
addItemToCart('Apple',1.87,1);
addItemToCart('Pear',1.5,5);



//removeItemFromCart(name) //remove one amount of the particular item only
function removeItemFromCart(name){
   for(var i in cart){
       if(cart[i].name === name){
           cart[i].count --;
           if(cart[i].count == 0){
               removeItemFromCartAll(name);
           }
           break;
       }
   }
}


//removeItemFromCartAll(name)  //removes all item name
function removeItemFromCartAll(name) {
    for(var i in cart){
        if(cart[i].name === name){
            cart.splice(i,1);
            break;
        }
    }
}

//clearCart()
function clearCart(){
    cart = [];
}    

//countCart() -> return total count
function countCart(){
   var totalCount=0;
   for(var i in cart){
       totalCount += cart[i].count;
   }
   return totalCount;
}
console.log(cart)
console.log(countCart());

//totalCost() -> return total cost
function totalCost(){
   var totalCost = 0;
   for(var i in cart){
       totalCost += cart[i].price* cart[i].count
   }
   return totalCost
}
console.log(totalCost());
//listCart() -> return array of Item
function listCart(){
   //I stop here...
}
//saveCart() -> use local storage to store

//loadCart()






