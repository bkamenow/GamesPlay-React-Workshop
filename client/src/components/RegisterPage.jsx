import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as userService from "../services/userService";

export default function RegisterPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function submitRegistration(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            console.error("Passwords do not match");
            return;
        }

        userService
            .registerUser(email, password)
            .then(() => {
                navigate("/login");
            })
            .catch((error) => {
                console.error("Error during registration:", error);
            });
    }

    return (
        <section id='register-page' className='content auth'>
            <form id='register' onSubmit={submitRegistration}>
                <div className='container'>
                    <div className='brand-logo'></div>
                    <h1>Register</h1>

                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='maria@email.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor='pass'>Password:</label>
                    <input
                        type='password'
                        name='password'
                        id='register-password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label htmlFor='con-pass'>Confirm Password:</label>
                    <input
                        type='password'
                        name='confirm-password'
                        id='confirm-password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <input
                        className='btn submit'
                        type='submit'
                        value='Register'
                    />

                    <p className='field'>
                        <span>
                            If you already have a profile click{" "}
                            <Link to='/login'>here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}
