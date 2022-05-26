import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { data: users, isLoading, refetch } = useQuery(['users', user], () => fetch(`https://secure-wildwood-96014.herokuapp.com/user?email=${user?.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let education;
        let phone;
        let address;
        if (event.target.education.value === '') {

        }
        else {
            education = event.target.education.value;
        }
        if (event.target.phone.value === '') {

        }
        else {
            phone = event.target.phone.value;
        }
        if (event.target.address.value === '') {

        }
        else {
            address = event.target.address.value;
        }
        const users = {
            name: user?.displayName,
            education: education,
            phone: phone,
            address: address
        }

        fetch(`https://secure-wildwood-96014.herokuapp.com/user/${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('save information successfully');
                refetch();
                event.target.reset();
            })
    }
    return (
        <div className='lg:flex justify-around'>
            <div>
                <h3 className='text-2xl mb-5'>My Profile</h3>
                {
                    users?.map(user => <div key={user._id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Name: {user.name}</h2>
                            <p>Email: {user.email}</p>
                            <p>Education: {user.education}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Address: {user.address}</p>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <h3 className='text-2xl mt-3 mb-5'>Update Information</h3>
                <form onSubmit={handleSubmit} className='grid gird-cols-1 gap-3 mt-2'>
                    <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='education' placeholder="Education" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                    <button type='submit' className='btn btn-primary text-white w-full max-w-xs'>Save</button>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;