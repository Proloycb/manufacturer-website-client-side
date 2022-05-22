import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({product}) => {
    const {img, name, availableQuantity, minimumOrderQuantity, price, description} = product;
    const navigate = useNavigate();
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt="" className='w-1/2 h-52' /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p><small>Available Quantity: {availableQuantity}</small></p>
                <p><small>Minimum Order Quantity: {minimumOrderQuantity}</small></p>
                <p><small>Price: ${minimumOrderQuantity * price}</small></p>
                <div class="card-actions justify-end">
                    <button onClick={() => navigate('/purchase')} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;