import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Part from './Part';

const Parts = () => {
    const { data: products, isLoading } = useQuery('parts', () => fetch('http://localhost:5000/parts')
        .then(res => res.json())
    )

    if(isLoading){
        return <Loading/>
    }

    return (
        <div className='mt-5'>
            <h4 className='text-2xl text-secondary text-center font-bold mb-8'>Available Parts</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products?.slice(0,6).map(product => <Part 
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default Parts;