'use client';
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import './signup.css'
import { rolesList } from "../api/common/adminRoles";
import toast from "react-hot-toast";
import { countriesList } from "../api/common/countries";

export default function SignUpPage() {

    const router = useRouter();


    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
        confirmPass: "",
        role: "",
        country: ""
    })


    const onSignUp = async (e) => {
        e.preventDefault();

        axios.post('/api/auth/signup', user).then(res => {
            console.log(res.data)
            toast.success("Signed-up Sucessfully!");
            router.push('/login')
        }).catch(err => toast.error(err.response.data.error))
    }

    return <>
        <div className="signup-main-container">
            <div className="signup-container">
                <div className="signup-card">
                    <h2>Create Account 🎉</h2>
                    <p className="subtitle">Join Foodies today</p>

                    <form>
                        <label>Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            required
                            onChange={(e) => { setUser({ ...user, username: e.target.value }) }}
                        />

                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            required
                            onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
                        />

                        <label>Role</label>
                        <select onChange={(e) => setUser({ ...user, role: e.target.value })}>
                            <option>Select Role</option>

                            {rolesList.filter(data => data.name !== 'ADMIN').map(data => <option key={data.name}>{data.name}</option>)}
                        </select>

                        <label>Country</label>
                         <select onChange={(e) => setUser({ ...user, country: e.target.value })}>
                            <option>Select Coutry</option>

                            {countriesList.map(data => <option key={data}>{data}</option>)}
                        </select>


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


                        <button onClick={onSignUp}>Sign Up</button>

                        <p className="login-link">Already have an account? <a onClick={() => router.push('/login')}>Login</a></p>
                    </form>
                </div>
            </div>
        </div>

    </>
}