import React from 'react';
import { FaUsers, FaTools } from 'react-icons/fa';
import { RiExchangeDollarFill } from 'react-icons/ri';
import { MdReviews } from 'react-icons/md';

const BusinessSummary = () => {
    return (
        <div>
            <h2 className='text-2xl text-secondary text-center font-bold mt-8 mb-5'>Business Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px-20 text-center">
                <div className="stat">
                    <div className="text-primary">
                    <FaUsers className="inline-block w-8 h-8 stroke-current"/>
                    </div>
                    <div className="stat-value text-primary">100+</div>
                    <div className="stat-title">We Served Customers</div>
                </div>

                <div className="stat">
                    <div className="text-secondary">
                    <RiExchangeDollarFill className="inline-block w-8 h-8 stroke-current"/>
                    </div>
                    <div className="stat-value text-secondary">120M+</div>
                    <div className="stat-title">Annual Revenue</div>
                </div>

                <div className="stat">
                    <div className="text-primary">
                        <MdReviews className="inline-block w-8 h-8 stroke-current"/>
                    </div>
                    <div className="stat-value text-primary">33K+</div>
                    <div className="stat-title">Reviews</div>
                </div>

                <div className="stat">
                    <div className="text-secondary">
                    <FaTools className="inline-block w-8 h-8 stroke-current"/>
                    </div>
                    <div className="stat-value text-secondary">50+</div>
                    <div className="stat-title">Tools</div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;