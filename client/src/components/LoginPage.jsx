import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as userService from "../services/userService";

export default function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function submitLogin(e) {
        e.preventDefault();

        userService
            .loginUser(email, password)
            .then(() => {
                window.location.href = "/";
                // navigate("/");
            })
            .catch((error) => {
                setError("Invalid email or password");
                console.error("Error during login:", error);
            });
    }

    return (
        <section id='login-page' className='auth'>
            <form id='login' onSubmit={submitLogin}>
                <div className='container'>
                    <div className='brand-logo'></div>
                    <h1>Login</h1>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Sokka@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor='login-pass'>Password:</label>
                    <input
                        type='password'
                        id='login-password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <input type='submit' className='btn submit' value='Login' />
                    <p className='field'>
                        <span>
                            If you don't have a profile click{" "}
                            <Link to='/register'>here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}
