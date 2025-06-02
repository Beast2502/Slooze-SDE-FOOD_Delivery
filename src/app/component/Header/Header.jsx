'use client';

import { useRouter } from "next/navigation"
import "./Header.css"
import { useEffect, useState } from "react";
import axios from "axios";
const Header = () => {

    const router = useRouter();
    const [token, setToken] = useState('');

    useEffect(() => {
        const storedToken = sessionStorage.getItem('token');
        setToken(storedToken);
    }, []);

    const handleLogOut = () => {
        axios.get('/api/auth/logout').then(res => {
            sessionStorage.clear('')
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            router.push('/login')
        })


    }

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="logo" onClick={() => router.push('/')}>Foodies</div>
                <ul className="nav-links">
                    <li><a onClick={() => router.push('/')}>Home</a></li>
                    {/* <li><a href="#">Order</a></li> */}
                    <li><a onClick={() => router.push('/user/restaurant')}>Restaurants</a></li>
                    {
                        token ?
                            <>
                                <li><a onClick={() => router.push('/user/order-history')} >Order History</a></li>
                                <li><a onClick={() => router.push('/user/order-history')} ><i className="fa-solid fa-user"></i></a></li>
                                <li><a onClick={handleLogOut} >Log Out</a></li>


                            </> :
                            <li><a onClick={() => router.push('/login')} >Login</a></li>
                    }
                </ul>
            </div>
        </nav>
    )

}

export default Header