import React from 'react';
import './Item.css'

const Item = (props) => {
    // console.log(props)

    const { name, img, info, time } = props.item;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h3>{name} </h3>
            <p>{info} </p>
            <h5>Time required :{time} s </h5>
            <button onClick={() => props.handleAddToLIst(props.item)} className='btn-cart'>
                <h5 className='btn-text'>Add To Cart</h5>

            </button>
        </div>

    );
};

export default Item;