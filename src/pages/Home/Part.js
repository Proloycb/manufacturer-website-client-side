import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({product}) => {
    const {_id, img, name, availableQuantity, minimumOrderQuantity, price, description} = product;
    const navigate = useNavigate();
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt="" className='w-1/2 h-52' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p><small>Available Quantity: {availableQuantity}</small></p>
                <p><small>Minimum Order Quantity: {minimumOrderQuantity}</small></p>
                <p><small>Price: ${price}<span className="badge badge-sm ml-1">Per One</span></small></p>
                <div className="card-actions justify-end">
                    <button onClick={() => navigate(`/purchase/${_id}`)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;