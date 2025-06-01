'use client';
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./login.css"
import toast from "react-hot-toast";

export default function LoginPage() {

    const router = useRouter();

    const [user, setUser] = useState({
        email: "",
        password: "",
    })


    const onSignUp = async (e) => {
        e.preventDefault();
        if (!user.email) return toast.error("Please enter email!");
        if (!user.password) return toast.error("Please enter password!")

        axios.post('/api/auth/login', user).then((res) => {
            console.log(res.data.token, "login done")
            sessionStorage.setItem('token' , res.data.token)
            toast.success("Hi you are logged in");
            router.push("/")

        }).catch(err => {
            console.log(err.response.data.error, "error");
            toast.error(err.response.data.error);

        }
        )
    }

    return <>

        <div className="login-main-container">
            <div className="login-container">
                <div className="login-card">
                    <h2>Welcome Back 👋</h2>
                    <p className="subtitle">Login to your account</p>

                    <form>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
                            required />

                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
                            required />

                        <button onClick={onSignUp}>Login</button>

                        <p className="signup-link">Don't have an account? <a onClick={()=>router.push('/signup')}>Sign Up</a></p>
                    </form>
                </div>
            </div>
        </div>

    </>
}