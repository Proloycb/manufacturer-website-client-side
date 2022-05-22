import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
            <h2 className='text-2xl text-secondary text-center font-bold mt-8 mb-5'>Business Summary</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px-20 text-center">
                <div class="stat">
                    <div class="text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div class="stat-value text-primary">100+</div>
                    <div class="stat-title">We Served Customers</div>
                </div>

                <div class="stat">
                    <div class="text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div class="stat-value text-secondary">120M+</div>
                    <div class="stat-title">Annual Revenue</div>
                </div>

                <div class="stat">
                    <div class="text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div class="stat-value text-primary">33K+</div>
                    <div class="stat-title">Reviews</div>
                </div>

                <div class="stat">
                    <div class="text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div class="stat-value text-secondary">50+</div>
                    <div class="stat-title">Tools</div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;