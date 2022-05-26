import React from 'react';
import { FiPhone, FiClock} from 'react-icons/fi';
import { GoLocation} from 'react-icons/go';


const Contact = () => {
    return (
        <div class="min-h-screen bg-base-200">
            <div class="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center lg:gap-5">
                <div class="text-center lg:text-left">
                    <h1 class="text-3xl font-bold mt-3">Call Us or Fill the Form</h1>
                    <div className='flex items-center mt-5'>
                        <FiPhone className='w-6 h-6 lg:mr-3 mr-0 ml-6'/>
                        <span className='w-80'>
                            <b>987-589-2515</b>
                            <br />
                            Don't hesitate to contact us
                        </span>
                    </div>
                    <div className='flex items-center mt-5'>
                        <FiClock className='w-6 h-6 lg:mr-3 mr-0 ml-6'/>
                        <span className='w-80'>
                            <b>9.00 am - 4.00 pm</b>
                            <br />
                            Open our office at this time
                        </span>
                    </div>
                    <div className='flex items-center mt-5'>
                        <GoLocation className='w-6 h-6 lg:mr-3 mr-0 ml-6'/>
                        <span className='w-80'>
                            <b>Office Address </b>
                            <br />
                            5055 Forest Avenue
                            <br />
                            New York , 10015 
                        </span>
                    </div>
                </div>
                <div class="card  w-full mt-5">
                    <div class="card-body">
                        <div class="grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" class="text-center input input-bordered w-full" />
                            </div>
                            <div>
                                <label class="label">
                                    <span class="label-text">Company</span>
                                </label>
                                <input type="text" placeholder="Company" class="text-center input input-bordered w-full" />
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email Address" class="text-center input input-bordered w-full" />
                            </div>
                            <div>
                                <label class="label">
                                    <span class="label-text">Phone</span>
                                </label>
                                <input type="text" placeholder="Phone" class="text-center input input-bordered w-full" />
                            </div>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Description</span>
                            </label>
                            <textarea type="text" placeholder="How can I help you ?" class="text-center textarea textarea-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;