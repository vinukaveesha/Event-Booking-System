import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="username" value={username} onChange={handleUsernameChange} />

                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;