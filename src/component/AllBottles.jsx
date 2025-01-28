import React, { useEffect, useState } from 'react';
import SingleBottle from './SingleBottle';
import Cart from './Cart';
import { AddToLs, getStoredCart, RemoveToLs } from '../utilities/localStorage';

const bottles = () => {
    const [bottles,setBottles] = useState([])
    useEffect(()=>{
        fetch('../../public/dist/bottles.json')
        .then(res => res.json())
        .then(data =>setBottles(data))
    },[])

    //add handle and show cart items
    const [cart,setCart] = useState([])
    const handleAddCart = bottle => {
        const newCart = [...cart,bottle]
        setCart(newCart);
        AddToLs(bottle.id)
    }

    // Show cart value in GUI 
    useEffect(() =>{
        console.log('useEffect', bottles.length)
        const storeCard = getStoredCart();
        // console.log(storeCard);
        if(bottles.length > 0){
            // console.log(storeCard);
            const savecard = [];
            for (const id of storeCard){
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    savecard.push(bottle)
                }
            }
            setCart(savecard)
        }

    },[bottles])

    // remove handle 
    const handleRemove = id =>{
        RemoveToLs(id);
        const updateCart = cart.filter((bottle) => bottle.id !== id);
        setCart(updateCart)
    }

    return (
        <div className='Bottles-container'>

            <div className="cart-added">
                <h1>Cart Length: {cart.length}</h1>
                <div className="all-img-cart">
                {
                    cart.map(cartItem => 
                        <Cart key={cartItem.id} handleRemove={handleRemove} cartItem={cartItem}></Cart>
                    )
                }
                </div>
            </div>

            <h2>Bottles : {bottles.length} </h2>
            <div className='all-bottles'>
                {
                    bottles.map(bottle =>
                        <SingleBottle key={bottle.id} bottle={bottle} handleAddCart={handleAddCart}></SingleBottle>
                    )
                }
            </div>
        </div>
    );
};

export default bottles;