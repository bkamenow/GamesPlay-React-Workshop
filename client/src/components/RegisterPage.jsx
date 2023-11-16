import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as userService from "../services/userService";

export default function RegisterPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isEmailAvailable, setIsEmailAvailable] = useState(true);

    useEffect(() => {
        const checkEmailAvailability = async () => {
            try {
                // Call a function to check email availability on the server
                const isAvailable = await userService.checkEmailAvailability(
                    email
                );
                setIsEmailAvailable(isAvailable);
            } catch (error) {
                console.error("Error checking email availability:", error);
            }
        };

        // Perform the check when the email changes
        checkEmailAvailability();
    }, [email]);

    function submitRegistration(e) {
        e.preventDefault();

        // Check if passwords match and email is available
        if (password !== confirmPassword || !isEmailAvailable) {
            console.error("Passwords do not match or email is not available");
            return;
        }

        // Call the registerUser function
        userService
            .registerUser(email, password)
            .then(() => {
                // Redirect to the login page after successful registration
                navigate("/login");
            })
            .catch((error) => {
                // Handle registration error
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

                    {!isEmailAvailable && (
                        <p style={{ color: "red" }}>
                            This email is not available. Please choose another.
                        </p>
                    )}

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
