import React from 'react';
import proloy from '../../image/PROLOY.jpg';

const Portfolio = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={proloy} class="max-w-sm rounded-lg shadow-2xl" alt='Proloy' />
                    <div>
                        <h1 class="text-3xl text-secondary font-bold">Hello, I am Proloy Chacroborty</h1>
                        <p class="py-2">Email: proloychacroborty@gmail.com</p>
                        <p class="py-2">I am a web developer</p>
                        <p class="py-2">I am studied from diploma engineering at Habiganj Polytechnic Institute department of computer. </p>
                    </div>
                </div>
            </div>
            <div className='lg:pl-20 pl-5 mt-5'>
                <h3 className='text-3xl font-bold'>My skills or technology list</h3>
                <div className='grid'>
                    <span><progress class="progress progress-primary w-56" value="90" max="100"></progress> HTML</span>
                    <span><progress class="progress progress-secondary w-56" value="80" max="100"></progress> CSS</span>
                    <span><progress class="progress progress-accent w-56" value="80" max="100"></progress> Bootstrap</span>
                    <span><progress class="progress progress-success w-56" value="75" max="100"></progress> TailwindCSS</span>
                    <span><progress class="progress progress-warning w-56" value="65" max="100"></progress> Javascript</span>
                    <span><progress class="progress progress-error w-56" value="75" max="100"></progress> ReactJS</span>
                </div>
            </div>
            <div className='lg:pl-20 pl-5'>
                <h3 className='text-3xl font-bold my-8'><span className='text-secondary'>Some</span> Of my work</h3>
                <ol className='list-decimal'>
                    <li><a href="https://gym-equipment-warehouse-7ae7e.web.app/">Gym Equipment Warehouse: https://gym-equipment-warehouse-7ae7e.web.app/</a></li>
                    <li><a href="https://independent-service-prov-c505a.web.app/">Personal Gym Trainer: https://independent-service-prov-c505a.web.app/</a></li>
                    <li><a href="https://glowing-custard-005f4e.netlify.app/">Cannon 1500D review: https://glowing-custard-005f4e.netlify.app/</a></li>
                </ol>
            </div>
        </div>
    );
};

export default Portfolio;