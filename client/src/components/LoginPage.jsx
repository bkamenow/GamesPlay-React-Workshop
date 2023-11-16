import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function LoginPage() {
    // const [currentUser, setCurrentUser] = useState();

    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         setCurrentUser(true);
    //     }
    // }, []);

    // function submitLogin(e) {
    //     e.preventDefault();
    //     client.post("/login", { email, password }).then(storeTokenAndSetUser);
    // }

    return (
        <section id='login-page' className='auth'>
            <form id='login'>
                <div className='container'>
                    <div className='brand-logo'></div>
                    <h1>Login</h1>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Sokka@gmail.com'
                    />

                    <label htmlFor='login-pass'>Password:</label>
                    <input
                        type='password'
                        id='login-password'
                        name='password'
                    />
                    <input
                        type='submit'
                        className='btn submit'
                        value='Login'
                        // onClick={submitLogin}
                    />
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
