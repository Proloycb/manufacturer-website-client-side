import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const { data: product, isLoading, refetch } = useQuery(['parts', id], () => fetch(`http://localhost:5000/parts/${id}`)
        .then(res => res.json())
    );
    const quantityRef = useRef('');
    const [disable, setDisable] = useState(false);
    const [orderQuantity, setOrderQuantity] = useState();

    if (isLoading) {
        return <Loading />
    }

    const { img, name, description, minimumOrderQuantity, availableQuantity, price } = product;



    const handleQuantity = (event) => {
        event.preventDefault();
        const userQuantity = quantityRef.current.value;

        const newQuantity = parseInt(userQuantity);
        const minQuantity = parseInt(minimumOrderQuantity);
        const quantity = parseInt(availableQuantity);

        if (newQuantity < minQuantity) {
            toast.error('Your quantity lower than minimum quantity');
            event.target.reset();
            setDisable(true);
            return;
        }
        else if (newQuantity > quantity) {
            toast.error('Your quantity higher than available quantity');
            event.target.reset();
            setDisable(true);
            return;
        }
        else if (isNaN(newQuantity)) {
            toast.error('Please enter valid number');
            event.target.reset();
            setDisable(true);
            return;
        }
        else {
            setOrderQuantity(newQuantity);
            setDisable(false);
            toast.success('Added your quantity');
            event.target.reset();
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const newPrice = parseInt(price);
        const totalPrice = newPrice * orderQuantity;
        const quantity = parseInt(availableQuantity);
        const updatedQuantity = quantity - orderQuantity

        const orders = {
            productId: id,
            userName: user.displayName,
            userEmail: user.email,
            phone: phone,
            address: address,
            price: totalPrice,
            orderQuantity: orderQuantity,
        }

        // update quantity 
        // const url = `http://localhost:5000/updateQuantity/${id}`;
        // fetch(url, {
        //     method: "PUT",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify({ updatedQuantity }),
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         refetch();
        //     });


        // booking order
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Your order is successfully completed')
                event.target.reset()
            })
    };


    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className='grid justify-items-center'>
                <h2 className='text-3xl text-secondary text-center mb-5'>Purchase please</h2>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure><img src={img} alt="" className='w-1/2 h-52' /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{name}</h2>
                        <p>{description}</p>
                        <p><small>Available Quantity: {availableQuantity}</small></p>
                        <p><small>Minimum Order Quantity: {minimumOrderQuantity}</small></p>
                        <p><small>Price: ${price}<span class="badge badge-sm ml-1">Per One</span></small></p>
                        <div className='flex items-center'>Order Quantity:
                            <form onSubmit={handleQuantity}>
                                <input type="text" ref={quantityRef} className="border border-solid text-center w-8 h-5 mr-2 ml-2" />
                                <button type='submit' className='btn btn-primary btn-sm ml-2'>Add Quantity</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text-2xl text-secondary text-center mb-5'>Customer Info</h3>
                <form onSubmit={handleSubmit} className='grid gird-cols-1 gap-3 justify-items-center mt-2'>
                    <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                    <button type='submit' className='btn btn-primary text-white w-1/2 mx-auto' disabled={disable}>Order Now</button>
                </form>
            </div>
        </div>
    );
};

export default Purchase;