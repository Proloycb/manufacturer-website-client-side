import React from 'react';
import { FaUsers, FaTools } from 'react-icons/fa';
import { RiExchangeDollarFill } from 'react-icons/ri';
import { MdReviews } from 'react-icons/md';

const BusinessSummary = () => {
    return (
        <div>
            <h2 className='text-2xl text-secondary text-center font-bold mt-8 mb-5'>Business Summary</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px-20 text-center">
                <div class="stat">
                    <div class="text-primary">
                    <FaUsers class="inline-block w-8 h-8 stroke-current"/>
                    </div>
                    <div class="stat-value text-primary">100+</div>
                    <div class="stat-title">We Served Customers</div>
                </div>

                <div class="stat">
                    <div class="text-secondary">
                    <RiExchangeDollarFill class="inline-block w-8 h-8 stroke-current"/>
                    </div>
                    <div class="stat-value text-secondary">120M+</div>
                    <div class="stat-title">Annual Revenue</div>
                </div>

                <div class="stat">
                    <div class="text-primary">
                        <MdReviews class="inline-block w-8 h-8 stroke-current"/>
                    </div>
                    <div class="stat-value text-primary">33K+</div>
                    <div class="stat-title">Reviews</div>
                </div>

                <div class="stat">
                    <div class="text-secondary">
                    <FaTools class="inline-block w-8 h-8 stroke-current"/>
                    </div>
                    <div class="stat-value text-secondary">50+</div>
                    <div class="stat-title">Tools</div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;