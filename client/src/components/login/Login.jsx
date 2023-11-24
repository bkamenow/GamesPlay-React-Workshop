import { Link } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

const LoginFormKeys = {
    Email: "email",
    Password: "password",
};

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: "",
        [LoginFormKeys.Password]: "",
    });

    return (
        <section id='login-page' className='auth'>
            <form id='login' onSubmit={onSubmit}>
                <div className='container'>
                    <div className='brand-logo'></div>
                    <h1>Login</h1>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name={LoginFormKeys.Email}
                        placeholder='Sokka@gmail.com'
                        value={values[LoginFormKeys.Email]}
                        onChange={onChange}
                    />

                    <label htmlFor='login-pass'>Password:</label>
                    <input
                        type='password'
                        id='login-password'
                        name={LoginFormKeys.Password}
                        value={values[LoginFormKeys.Password]}
                        onChange={onChange}
                    />
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
