'use client'

import { useEffect, useState } from "react";
import FloatingCart from "../component/FloartingCart/FloatingCart";
import Header from "../component/Header/Header";

export default function UserboardLayout({ children }) {

    const [token, setToken] = useState('');

    useEffect(() => {
        const storedToken = sessionStorage.getItem('token');
        setToken(storedToken);
    }, []);

    console.log(token, "TOEKN")

    return (
        <div className="flex">
            <Header />
            {children}
            {
                token && <FloatingCart />

            }

        </div>
    );
}