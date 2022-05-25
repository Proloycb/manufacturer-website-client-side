import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const handleSubmit = (event) => {
        event.preventDefault();

        const education = event.target.education.value;
        const phone = event.target.phone.value;
        const address = event.target.address.value;

        const users = {
            name: user?.displayName,
            education: education,
            phone: phone,
            address: address
        }

        fetch(`http://localhost:5000/user/${user?.email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('save information successfully')
                event.target.reset();
            })
    }
    return (
        <div>
            <h3 className='text-2xl mb-5'>My Profile</h3>
            <form onSubmit={handleSubmit} className='grid gird-cols-1 gap-3 mt-2'>
                <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                <input type="text" name='education' placeholder="Education" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                <button type='submit' className='btn btn-primary text-white w-full max-w-xs'>Save</button>
            </form>
        </div>
    );
};

export default MyProfile;