
// 1st check the cart has item or not // get items 
const getStoredCart = () =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}

//add to cart item

const SaveToLs = cart =>{
    const cartStingified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStingified);
}

const AddToLs = id =>{
    const cart = getStoredCart();
    cart.push(id);
    SaveToLs(cart)
}

// remove 
const RemoveToLs = id =>{
    const cart = getStoredCart();
    const remining = cart.filter(idx => idx !== id);
    SaveToLs(remining)
}

export { AddToLs , getStoredCart,RemoveToLs }





