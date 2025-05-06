import React from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { useNavigate } from 'react-router-dom';

function Account() {
    const navigate =useNavigate();
    const handleLogout = async() => {
        await axios.get(`${backendUrl}/api/user/logout`, { withCredentials: true })
            .then(() => {
                navigate('/')
                window.location.reload();
            })
    }
    return (
        <div>
            <h1>Account</h1>
            <br />
            <button onClick={() => { handleLogout() }}>Logout</button>
        </div>
    )
}

export default Account
