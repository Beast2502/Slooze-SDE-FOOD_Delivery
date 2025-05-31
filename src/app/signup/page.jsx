'use client';
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import './signup.css'

export default function SignUpPage() {

    const router = useRouter();


    const [user, setUser] = useState({
        email: "",
        password: "",
        userName: "",
        confirmPass: ""
    })


    const onSignUp = async () => {
        console.log(user)
    }

    return <>
        <div className="signup-main-container">
            <div className="signup-container">
                <div className="signup-card">
                    <h2>Create Account 🎉</h2>
                    <p className="subtitle">Join Foodies today</p>

                    <form action="#">
                        <label>Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            required
                            onChange={(e) => { setUser({ ...user, userName: e.target.value }) }}
                        />

                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            required
                            onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
                        />

                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            required
                            onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
                        />

                        <label>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            required
                            onChange={(e) => { setUser({ ...user, confirmPass: e.target.value }) }}

                        />

                        <button type="submit">Sign Up</button>

                        <p className="login-link" onClick={onSignUp}>Already have an account? <a onClick={()=> router.push('/login')}>Login</a></p>
                    </form>
                </div>
            </div>
        </div>

    </>
}