'use client';

import { useRouter } from "next/navigation"
import "./Header.css"
const Header = () => {

    const router = useRouter();

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="logo" onClick={() => router.push('/')}>Foodies</div>
                <ul className="nav-links">
                    <li><a onClick={() => router.push('/')}>Home</a></li>
                    {/* <li><a href="#">Order</a></li> */}
                    <li><a onClick={() => router.push('/user/restaurant')}>Restaurants</a></li>
                    {
                        sessionStorage.getItem('token') ?
                            <li><a onClick={() => router.push('/user/order-history')} ><i class="fa-solid fa-user"></i></a></li> :
                            <li><a onClick={() => router.push('/login')} >Login</a></li>
                    }
                </ul>
            </div>
        </nav>
    )

}

export default Header