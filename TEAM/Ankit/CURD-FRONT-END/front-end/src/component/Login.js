import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Login authentication Logic
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type='email'
                    placeholder='Enter your email address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;