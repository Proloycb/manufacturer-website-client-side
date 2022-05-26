import React from 'react';

const About = () => {
    return (
        <div class="hero bg-base-200 py-16 my-16">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-3xl text-secondary font-bold">About Us</h1>
                    <p class="py-6">MANUFACTURER COMPUTER PARTS INDUSTRIES is an well established company manufacturing Computer hardware parts, we also manufacture special parts .</p>
                    <div className='grid grid-cols-2 gap-y-5 text-slate-500'>
                        <div class="form-control">
                            <label class="flex">
                                <input type="checkbox" checked="checked" class="checkbox lg:mr-4 mr-1" readOnly />
                                <span class="label-text">ISO Certified Company</span>
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="flex">
                                <input type="checkbox" checked="checked" class="checkbox lg:mr-4 mr-1" readOnly/>
                                <span class="label-text">Manufacturer & Exporter</span>
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="flex">
                                <input type="checkbox" checked="checked" class="checkbox lg:mr-4 mr-1" readOnly/>
                                <span class="label-text">Provide Quality Products</span>
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="flex">
                                <input type="checkbox" checked="checked" class="checkbox lg:mr-4 mr-1" readOnly/>
                                <span class="label-text">Customer Relationship</span>
                            </label>
                        </div>
                    </div>
                    <button class="btn btn-primary mt-5">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default About;