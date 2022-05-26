import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-4xl text-center'>Question answer</h1>
            <div className='mx-auto lg:w-1/2'>
                <div tabIndex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                    <div class="collapse-title text-xl font-medium">
                        1.  How will you improve the performance of a React Application?
                    </div>
                    <div class="collapse-content">
                        <p>React performance improve with keeping component state local where if necessary.Memorizing React components to prevent unnecessary re-renders to improve react perform. One more way to react perform improve code-splitting in React using dynamic import. Windowing or list virtualization in React improve performance.React App performance improve of lazy loading images in React.</p>
                    </div>
                </div>
                <div tabIndex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                    <div class="collapse-title text-xl font-medium">
                        2. What are the different ways to manage a state in a React application?
                    </div>
                    <div class="collapse-content">
                        <p>Many different ways to manage a state on React Application. There are four main types of state  need to properly manage in your React apps. Such as Local state, Global state, Server state, URL state. Local state is most often managed in React app using the useState hook. Global state is data we manage across multiple components is necessary we want to get and update. Server state is a simple way data that comes from an external server that must be integrated with our UI state. URL state is often missing as a category of state, but it is an important way manage state in react application. </p>
                    </div>
                </div>
                <div tabIndex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                    <div class="collapse-title text-xl font-medium">
                        3. How does prototypical inheritance work?
                    </div>
                    <div class="collapse-content">
                        <p>Prototypical inheritance works for a feature in object for inherit. And these is the way of read a property from object in prototype. It methods using for inherit an object properties and methods of another object. Prototypical inheritance works these way get an order and set prototype of an object. So we will say prototype of object call prototypical inheritance. </p>
                    </div>
                </div>
                <div tabIndex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                    <div class="collapse-title text-xl font-medium">
                       4. Why you do not set the state directly in React?
                    </div>
                    <div class="collapse-content">
                        <p>State do not set directly in React because should never update the state. These is for following reasons do not change state immediately. Instead, the state creates a pending state transition, and accessing it after calling this method will only return the present value. State across all components of the state lose control. We do not update the state.</p>
                    </div>
                </div>
                <div tabIndex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                    <div class="collapse-title text-xl font-medium">
                        5. What is a unit test? Why should write unit tests?
                    </div>
                    <div class="collapse-content">
                        <p>Unit tests are automated typically test written and run by software developers to ensure this. Unit test ensure that a section of an application meets its design and behaves as intended. In procedural programming of unit test could be entire module. But it is more commonly and individual function. Unit test saves huge of time.Over the development life cycle. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;