import userEvent from '@testing-library/user-event';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Rate from '../../hooks/Rate';

const Review = ({ review }) => {
    const [user] = useAuthState(auth);

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <Rate rate={review?.rating} />
                <p>{review.description}</p>
                <div className="flex items-center">
                    <div class="avatar placeholder">
                        <div class="bg-neutral-focus text-neutral-content rounded-full w-8 mr-3">
                            <span class="text-xl">{review?.name.slice(0, 1)}</span>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;