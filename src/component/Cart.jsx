
const Cart = ({cartItem, handleRemove}) => {
    const {img,id} = cartItem;
    return (
        
            <div onClick={()=> handleRemove(id)} className="img">
                <img src={img} alt="" />
            </div>
        
    );
};

export default Cart;