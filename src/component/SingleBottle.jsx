const SingleBottle = ({bottle,handleAddCart}) => {
    // console.log(bottle)
    const {name,img,price} = bottle;

    return (
        <div className="singleBottle">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>Price: {price}</h3>
            <button onClick={() => handleAddCart(bottle)}>Add Cart</button>
        </div>
    );
};

export default SingleBottle;