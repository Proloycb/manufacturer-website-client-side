import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/s1CtnyX/banner1.jpg" className="xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Welcome to <span className='text-primary'>ComTech Parts</span></h1>
                    <p className="py-6">There are all parts of computer is here.You will need to this parts to build your computers.We provide best products.</p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;