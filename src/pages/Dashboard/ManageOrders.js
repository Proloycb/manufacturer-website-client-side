import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import OrderCancelConfirm from './OrderCancelConfirm';

const ManageOrders = () => {
    const [cancelOrder, setCancelOrder] = useState(null);
    const { data: orders, isLoading, refetch } = useQuery('orders' , () => fetch(`http://localhost:5000/orders`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    );

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-2xl'>Manage All Orders: {orders?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Info</th>
                            <th>Product</th>
                            <th>Amount</th>
                            <th>Payment Status</th>
                            <th>Order Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>OrderId: {order._id}</td>
                                <td>{order.product}</td>
                                <td>{order.price}</td>
                                <td>{order.paymentStatus}</td>
                                <td>{order.orderStatus}</td>
                                <td>
                                    {order.orderStatus === "placed" ? <button className='btn btn-xs btn-primary'>Shipped</button> : <button className='btn btn-xs disabled'>Shipped</button>}
                                    {!order.paid ? <label onClick={() => setCancelOrder(order)} htmlFor="cancel-confirm-modal" className='btn btn-xs btn-error'>Cancel</label> : <button className='btn btn-xs' disabled>Cancel</button>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                cancelOrder && <OrderCancelConfirm 
                    cancelOrder={cancelOrder}
                    setCancelOrder={setCancelOrder}
                    refetch={refetch}
                />
            }
        </div>
    );
};

export default ManageOrders;