import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('http://localhost:5000/review', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    })
        .then(res => res.json())
    );

    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <h4 className='text-2xl text-secondary text-center font-bold mt-5 mb-5'>Reviews</h4>
            <h4 className='text-xl text-center font-bold'>What our Customers say</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {
                    reviews?.slice(0, 6).map(review => <Review
                        key={review._id}
                        review={review}
                    />)
                }
            </div>
        </div>
    );
};

export default Reviews;